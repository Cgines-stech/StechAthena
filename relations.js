/* relations.js */
// ------- Config for columns & spacing -------
const COL_X = { dept: 150, prog: 600, course: 1000 }; // x per column
const COL_GAP_Y = { dept: 80, prog: 60, course: 40 }; // vertical spacing per column
const NODE_W = 160, NODE_H = 28, NODE_RX = 8;

// ------- Helpers to build positions -------
function layoutVertical(items, columnKey) {
  const gap = COL_GAP_Y[columnKey];
  const startY = 60; // top padding
  return items.map((item, idx) => {
    const x = COL_X[columnKey] - NODE_W/2;
    const y = startY + idx * gap;
    return { ...item, x, y, w: NODE_W, h: NODE_H, type: columnKey };
  });
}

function makeLink(src, dst) {
  // Draw a smooth cubic path from right side of src to left side of dst
  const x1 = src.x + src.w, y1 = src.y + src.h/2;
  const x2 = dst.x,         y2 = dst.y + dst.h/2;
  const dx = (x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${x1+dx} ${y1}, ${x2-dx} ${y2}, ${x2} ${y2}`;
}

// ------- Data adapters (reads from global arrays) -------
function buildGraphData({ showCourses }) {
  // Expected globals provided by data/*.js:
  // DEPARTMENTS: {id, name, ...}
  // PROGRAMS: {id, department_id, name, credential}
  // COURSES: {id, program_id, code, title, credits}
  const depts = DEPARTMENTS.map(d => ({ id: `dept-${d.id}`, label: d.name, raw: d }));
  const progs = PROGRAMS.map(p => ({ id: `prog-${p.id}`, label: p.name, raw: p }));
  const courses = (showCourses ? COURSES : []).map(c => ({
    id: `course-${c.id}`,
    label: c.code || c.title,
    raw: c
  }));

  // Positions
  const Pdepts = layoutVertical(depts, 'dept');
  const Pprogs = layoutVertical(progs, 'prog');
  const Pcourses = layoutVertical(courses, 'course');

  // Maps for quick lookup
  const progById = Object.fromEntries(Pprogs.map(p => [p.raw.id, p]));
  const deptById = Object.fromEntries(Pdepts.map(d => [d.raw.id, d]));
  const courseById = Object.fromEntries(Pcourses.map(c => [c.raw.id, c]));

  // Links
  const links = [];
  // Program -> Department
  Pprogs.forEach(p => {
    const d = deptById[p.raw.department_id];
    if (d) links.push({ id: `link-${p.id}-${d.id}`, from: p, to: d, type: 'prog-dept' });
  });
  // Course -> Program
  Pcourses.forEach(c => {
    const p = progById[c.raw.program_id];
    if (p) links.push({ id: `link-${c.id}-${p.id}`, from: c, to: p, type: 'course-prog' });
  });

  return { nodes: { depts: Pdepts, progs: Pprogs, courses: Pcourses }, links };
}

// ------- Rendering -------
const svg = document.getElementById('graph');
const gLinks = document.getElementById('links');
const gDept = document.getElementById('deptNodes');
const gProg = document.getElementById('progNodes');
const gCourse = document.getElementById('courseNodes');

const searchInput = document.getElementById('searchInput');
const toggleCourses = document.getElementById('toggleCourses');
const fitBtn = document.getElementById('fitBtn');

let state = { showCourses: true, selection: null, graph: null };

function clearGroup(g) { while (g.firstChild) g.removeChild(g.firstChild); }

function render() {
  state.graph = buildGraphData({ showCourses: state.showCourses });
  const { nodes, links } = state.graph;

  // Clear
  clearGroup(gLinks); clearGroup(gDept); clearGroup(gProg); clearGroup(gCourse);

  // Links first (so nodes are on top)
  links.forEach(l => {
    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d', makeLink(l.from, l.to));
    path.setAttribute('class','link');
    path.dataset.linkId = l.id;
    path.dataset.from = l.from.id;
    path.dataset.to = l.to.id;
    gLinks.appendChild(path);
  });

  // Nodes
  function drawNode(n, group, css) {
    const g = document.createElementNS('http://www.w3.org/2000/svg','g');
    g.setAttribute('class', `node ${css}`);
    g.dataset.nodeId = n.id;
    g.dataset.type = n.type;

    const rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttribute('x', n.x);
    rect.setAttribute('y', n.y);
    rect.setAttribute('rx', NODE_RX);
    rect.setAttribute('width', n.w);
    rect.setAttribute('height', n.h);

    const text = document.createElementNS('http://www.w3.org/2000/svg','text');
    text.setAttribute('x', n.x + 10);
    text.setAttribute('y', n.y + n.h/2);
    text.setAttribute('fill', 'white');
    text.textContent = truncate(n.label, 24);

    g.appendChild(rect);
    g.appendChild(text);

    // Hover / click highlight
    g.addEventListener('mouseenter', () => highlightNeighborhood(n.id, true));
    g.addEventListener('mouseleave', () => highlightNeighborhood(n.id, false));
    g.addEventListener('click', () => selectNode(n.id));

    group.appendChild(g);
  }

  nodes.depts.forEach(n => drawNode(n, gDept, 'dept'));
  nodes.progs.forEach(n => drawNode(n, gProg, 'prog'));
  nodes.courses.forEach(n => drawNode(n, gCourse, 'course'));

  // If a node was selected before rerender, try to reselect
  if (state.selection) selectNode(state.selection, { keep: true });
}

function truncate(s, n) {
  return (s && s.length > n) ? s.slice(0, n-1) + '…' : s;
}

// ------- Highlighting & selection -------
function highlightNeighborhood(nodeId, on) {
  const links = Array.from(gLinks.querySelectorAll('.link'));
  const nodes = Array.from(svg.querySelectorAll('.node'));
  links.forEach(p => {
    if (p.dataset.from === nodeId || p.dataset.to === nodeId) {
      p.classList.toggle('highlight-link', on);
    }
  });
  nodes.forEach(n => {
    if (n.dataset.nodeId === nodeId) n.classList.toggle('highlight', on);
  });
}

function selectNode(nodeId, opts = {}) {
  state.selection = nodeId;

  // Reset classes
  svg.querySelectorAll('.highlight, .highlight-link').forEach(el => {
    el.classList.remove('highlight', 'highlight-link');
  });

  // Reapply strong highlight to neighborhood
  highlightNeighborhood(nodeId, true);

  if (!opts.keep) {
    // Soft scroll into view by panning viewBox toward node
    const n = findNodeById(nodeId);
    if (n) panTo(n);
  }
}

function findNodeById(nodeId) {
  const { nodes } = state.graph || {};
  if (!nodes) return null;
  const all = [...nodes.depts, ...nodes.progs, ...nodes.courses];
  return all.find(n => n.id === nodeId) || null;
}

// ------- Search -------
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) return; // no selection on empty
  const matches = allNodes().filter(n => {
    const label = (n.label || '').toLowerCase();
    const idnum = (n.raw?.id + '' || '').toLowerCase();
    const code = (n.raw?.code || '').toLowerCase();
    return label.includes(q) || idnum.includes(q) || code.includes(q);
  });
  if (matches[0]) selectNode(matches[0].id);
});

function allNodes() {
  const { nodes } = state.graph || {};
  return nodes ? [...nodes.depts, ...nodes.progs, ...nodes.courses] : [];
}

// ------- Fit to content (simple) -------
function fitToView() {
  const padding = 60;
  const all = allNodes();
  if (!all.length) return;
  const xs = all.map(n => n.x);
  const ys = all.map(n => n.y);
  const xe = all.map(n => n.x + n.w);
  const ye = all.map(n => n.y + n.h);

  const minX = Math.min(...xs) - padding;
  const minY = Math.min(...ys) - padding;
  const maxX = Math.max(...xe) + padding;
  const maxY = Math.max(...ye) + padding;

  svg.setAttribute('viewBox', `${minX} ${minY} ${maxX - minX} ${maxY - minY}`);
}

function panTo(n) {
  const pad = 120;
  const vb = [n.x - pad, n.y - pad, 600, 400];
  svg.setAttribute('viewBox', vb.join(' '));
}

// ------- Controls -------
toggleCourses.addEventListener('change', () => {
  state.showCourses = toggleCourses.checked;
  render();
});

fitBtn.addEventListener('click', () => fitToView());

// ------- Init -------
(function init() {
  state.showCourses = true;
  render();
  fitToView();
})();

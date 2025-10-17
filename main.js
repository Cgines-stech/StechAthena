/* main.js */
const tableSelect = document.getElementById('tableSelect');
const tableContainer = document.getElementById('tableContainer');
const showBtn = document.getElementById('showBtn');

function renderTable(rows) {
  if (!rows.length) {
    tableContainer.innerHTML = '<p>No data found.</p>';
    return;
  }
  const headers = Object.keys(rows[0]);
  const thead = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>`;
  const tbody = `<tbody>${rows.map(r => `<tr>${headers.map(h => `<td>${r[h]}</td>`).join('')}</tr>`).join('')}</tbody>`;
  tableContainer.innerHTML = `<table>${thead}${tbody}</table>`;
}

showBtn.addEventListener('click', () => {
  const selected = tableSelect.value;
  if (selected === 'departments') renderTable(DEPARTMENTS);
  if (selected === 'programs') renderTable(PROGRAMS);
  if (selected === 'courses') renderTable(COURSES);
});

// Show Departments by default
renderTable(DEPARTMENTS);

function getCategoryName(courseId) {
  const prefix = Math.floor(courseId / 1000);
  const categories = {
    10: 'English',
    11: 'Math',
    12: 'Science',
    13: 'Web Development',
    14: 'Cybersecurity',
    15: 'Nursing'
  };
  return categories[prefix] || 'Other';
}

// Example usage:
COURSES.forEach(c => {
  console.log(`${c.id} → ${getCategoryName(c.id)}`);
});

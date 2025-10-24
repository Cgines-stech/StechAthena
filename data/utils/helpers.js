// data/utils/helpers.js

/** Sum of item.price values in an array of { price } items */
export const sum = (arr) =>
  (arr || []).reduce((t, x) => t + (Number(x?.price) || 0), 0);

/** Format a number as USD currency */
export const money = (n) =>
  (n ?? 0).toLocaleString("en-US", { style: "currency", currency: "USD" });

/** Compute tuition/fees and all add-ons for a course object */
export function courseTotals(course) {
  const tuitionAndFees = (course?.courseTuition || 0) + (course?.courseFee || 0);
  const books = sum(course?.courseBooks);
  const tools = sum(course?.courseTools);
  const certs = sum(course?.courseCertifications);
  const other = sum(course?.otherAssociatedCosts);
  const grand = tuitionAndFees + books + tools + certs + other;
  return { tuitionAndFees, books, tools, certs, other, grand };
}

/** Compute tuition/fees and all add-ons for a course object */
export function courseTotalsNoOther(course) {
  const tuitionAndFees = (course?.courseTuition || 0) + (course?.courseFee || 0);
  const books = sum(course?.courseBooks);
  const tools = sum(course?.courseTools);
  const certs = sum(course?.courseCertifications);
  const grand = tuitionAndFees + books + tools + certs;
  return { tuitionAndFees, books, tools, certs, grand };
}

/** 
 * Safely extract text titles from a course's outline (ignore hours metadata).
 */
export function outlineTitlesOnly(course) {
  return (course?.courseOutline || [])
    .map(x => typeof x === "string" ? x : (x?.title || ""))
    .filter(Boolean);
}

/** 
 * Calculate total module hours from mixed outline entries.
 */
export function outlineHoursTotal(course) {
  return (course?.courseOutline || []).reduce((sum, x) => {
    const h = (typeof x === "object" && x?.hours) ? Number(x.hours) : 0;
    return sum + (isNaN(h) ? 0 : h);
  }, 0);
}

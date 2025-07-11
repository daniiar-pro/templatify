/**
 * Wraps placeholders `${n}` in a template with <span class="highlight">…</span>.
 * @param {string} template  String with `${0}`, `${1}`, … placeholders.
 * @param {string[]} keywords  Array of replacement strings.
 * @returns {string}  Template with each `${n}` replaced by its keyword.
 */
function highlightKeywords(template, keywords) {
  if (typeof template !== "string") {
    throw new TypeError("`template` must be a string");
  }
  if (
    !Array.isArray(keywords) ||
    !keywords.every((k) => typeof k === "string")
  ) {
    throw new TypeError("`keywords` must be an array of strings");
  }

  return template.replace(/\$\{(\d+)\}/g, (match, idxStr) => {
    const idx = Number(idxStr);
    if (!Number.isInteger(idx) || idx < 0 || idx >= keywords.length) {
      throw new Error(
        `Placeholder ${match} has no corresponding keyword at index ${idx}`
      );
    }
    const kw = keywords[idx];
    return `<span class="highlight">${kw}</span>`;
  });
}

const keywords = ["JavaScript", "template", "tagged"];
const template =
  "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

try {
  const highlighted = highlightKeywords(template, keywords);
  console.log(highlighted);
  // => "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
} catch (err) {
  console.error("Error highlighting keywords:", err.message);
}

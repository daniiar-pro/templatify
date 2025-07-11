/**
 * Prefixes each line of a template literal with its line number.
 * @param {TemplateStringsArray} strings  Literal parts of the template.
 * @param  {...any} values               Interpolated values.
 * @returns {string}                     Lines numbered from 1, blank edges trimmed.
 */
function multiline(strings, ...values) {
  if (!Array.isArray(strings) || typeof strings.raw === "undefined") {
    throw new TypeError("multiline must be used as a tagged template");
  }

  let fullText = "";
  for (let i = 0; i < strings.length; i++) {
    fullText += strings[i];
    if (i < values.length) {
      fullText += String(values[i]);
    }
  }

  const rawLines = fullText.split("\n");

  let start = 0;
  while (start < rawLines.length && rawLines[start].trim() === "") {
    start++;
  }
  let end = rawLines.length;
  while (end > start && rawLines[end - 1].trim() === "") {
    end--;
  }

  const trimmedLines = rawLines.slice(start, end);

  const numberedLines = trimmedLines.map((line, idx) => {
    return `${idx + 1} ${line}`;
  });

  return numberedLines.join("\n");
}

try {
  const code = multiline`
function add(a, b) {
  return a + b;
}
`;

  console.log(code);
  // 1 function add(a, b) {
  // 2   return a + b;
  // 3 }
} catch (err) {
  console.error(err.message);
}

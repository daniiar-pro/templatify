/**
 * Returns a debounced version of the given function.
 * The debounced function delays calling `func` until
 * after `delay` ms have elapsed since the last invocation.
 * @param {Function} func   Function to debounce.
 * @param {number} delay    Delay in milliseconds.
 * @returns {Function}      Debounced wrapper.
 * @throws {TypeError}      If invalid arguments are passed.
 */
function debounce(func, delay) {
  if (typeof func !== "function") {
    throw new TypeError("First argument must be a function");
  }
  if (typeof delay !== "number" || delay < 0 || Number.isNaN(delay)) {
    throw new TypeError("Second argument must be a non-negative number");
  }

  let timerId = null;

  return function debounced(...args) {
    const ctx = this;
    if (timerId !== null) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      timerId = null;
      func.apply(ctx, args);
    }, delay);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-input");
  const logEl = document.getElementById("log");

  function debouncedSearch(query) {
    const time = new Date().toLocaleTimeString();
    const msg = `[${time}] Searching for: "${query}"`;
    console.log(msg);
    logEl.textContent = msg;
  }

  const debouncedHandler = debounce(debouncedSearch, 300);

  input.addEventListener("input", (e) => {
    debouncedHandler(e.target.value);
  });
});

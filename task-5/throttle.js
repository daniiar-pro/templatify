/**
 * Returns a throttled version of `func` that, when invoked repeatedly,
 * will only actually call `func` at most once every `interval` ms.
 *
 * @param {Function} func       The function to throttle.
 * @param {number} interval     Minimum time (ms) between calls.
 * @returns {Function}          Throttled wrapper.
 * @throws {TypeError}          If invalid args are passed.
 */
function throttle(func, interval) {
  if (typeof func !== "function") {
    throw new TypeError("First argument must be a function");
  }
  if (typeof interval !== "number" || Number.isNaN(interval) || interval < 0) {
    throw new TypeError("Second argument must be a non-negative number");
  }

  let lastTime = 0;

  return function throttled(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

/**
 * Logs a message with timestamp whenever called.
 * @param {Event} e  The scroll event.
 */
function onScroll(e) {
  console.log("Scroll event at", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScroll);

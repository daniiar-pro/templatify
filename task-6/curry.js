const placeholder = Symbol('placeholder');
curry.placeholder = placeholder;

/**
 * Curries a function of known arity, with optional placeholder support.
 * @param {Function} func   Function to curry.
 * @param {number} arity    Number of parameters `func` expects.
 * @returns {Function}      Curried version of `func`.
 */
function curry(func, arity) {
  if (typeof func !== 'function') {
    throw new TypeError('First arg must be a function');
  }
  if (!Number.isInteger(arity) || arity < 0) {
    throw new TypeError('Second arg must be a non-negative integer');
  }

  function _curry(prev) {
    return function curried(...next) {
      const merged = [];
      let iNext = 0;

      for (let i = 0; i < prev.length || iNext < next.length; i++) {
        if (i < prev.length && prev[i] !== placeholder) {
          merged.push(prev[i]);
        } else if (iNext < next.length) {
          merged.push(next[iNext++]);
        } else {
          merged.push(prev[i]);
        }
      }

      const filled = merged.slice(0, arity);
      const ready = filled.every(arg => arg !== placeholder);

      return ready
        ? func.apply(this, filled)
        : _curry(merged);
    };
  }

  return _curry(Array(arity).fill(placeholder));
}


function multiply(a, b, c) {
  return a * b * c;
}
const curried = curry(multiply, 3);

console.log(curried(2)(3)(4));        // 24
console.log(curried(2, 3)(4));        // 24

const _ = curry.placeholder;
console.log(curried(_, 3)(2)(4));     // 24
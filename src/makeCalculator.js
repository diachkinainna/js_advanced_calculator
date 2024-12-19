'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (value) {
      this.result += value;

      return this;
    },
    subtract: function (value) {
      this.result -= value;

      return this;
    },
    multiply: function (value) {
      this.result *= value;

      return this;
    },
    divide: function (value) {
      this.result /= value;

      return this;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    operate: function (calculate, value) {
      calculate.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;

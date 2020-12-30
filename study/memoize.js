#!/usr/bin/rhino -strict

var fibonacci = function (n) {
  return n < 2 ? n : fibonacci(n - 2) + fibonacci(n - 1);
};

var memoize = function (func, memo) {
  memo = memo || {};
  var _func = function(arg) {
    if (typeof memo[arg] === 'undefined') {
      memo[arg] = func(arg);
    }
    return memo[arg];
  };
  return _func;
};

fibonacci = memoize(fibonacci);

for (var i = 0; i < 10; i += 1) {
  print(i + ': ' +fibonacci(i));
}

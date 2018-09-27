module.exports = function solveEquation(equation) {
  var trimmedString = equation.replace(/ /g, '');
  var match = trimmedString.match(/(-?)\d+/g);
  var a = Number(match[0]);
  var b = Number(match[2]);
  var c = Number(match[3]);

  var d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) return;

  var x1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(0);
  var x2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(0);

  var result = [x1, x2];

  return result.sort(function(a, b) {return a - b;});
};

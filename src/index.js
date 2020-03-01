
exports.min = function min (array) {
  if (Array.isArray(array) == false || array.length == 0) {
    return 0;
  }
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (Array.isArray(array) == false || array.length == 0) {
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (Array.isArray(array) == false || array.length == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (i+1 == array.length) {
      return sum / (i+1);
    }
  }
}

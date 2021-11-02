function getMinMax(str) {
  let splitted = str.split(' ');
  let nmbrs = [];
  let result = {
    min: 0,
    max: 0,
  }
  splitted.forEach(function (item) {
    if (!isNaN(item)) {
      nmbrs.push(item)
    }
  })
  nmbrs.sort((a, b) => a - b);
  result.max = +nmbrs[nmbrs.length - 1];
  result.min = +nmbrs[0];
  return result;
}

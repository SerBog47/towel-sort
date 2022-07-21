
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  let result = [];
  matrix.forEach((element, index) => {
    if (index%2 === 0) {
      result.push(...element)
    } else {
      result.push(...element.reverse())
    }
  });
  return result;
}

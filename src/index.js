module.exports = function reverse (n) {
  let arr = n.toString().split('');
  if (arr[0] === "-") {
      return Number(arr.splice(1).reverse().join(''));
  } 
  return Number(arr.reverse().join(''));
}

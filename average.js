function average(numbers) {
  numbers = numbers.filter(function(val) {
    val = parseFloat(val).toFixed(2);
    return !isNaN(val) && val <= 100 && val >= -100 ;
    
  });
  return parseFloat(numbers.reduce((p, c)=>   p + c, 0)) / numbers.length;
}

module.exports = {average};

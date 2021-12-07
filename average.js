function average(numbers) {
  let countOfInvalidReading = 0;
  return parseFloat(numbers.reduce((p, c)=> {
    if (isNaN(c)){
      countOfInvalidReading++;
      return p + 0;  
    } else {
      return p + c;
    }
  }, 0)) / (numbers.length - countOfInvalidReading);
}

module.exports = {average};

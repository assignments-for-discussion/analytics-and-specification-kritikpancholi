function average(numbers) {
  let countOfValidReading = 0;
  return parseFloat(numbers.reduce((p, c)=> {
    if (isNaN(c)){
      countOfValidReading++;
      return p + 0;  
    } else {
      return p + c;
    }
  }, 0)) / (numbers.length - countOfValidReading);
}

module.exports = {average};

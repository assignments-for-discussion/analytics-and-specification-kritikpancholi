function average(numbers) {
  let count = 0;
  return parseFloat(numbers.reduce((p, c)=> {
    if (isNaN(c)){
      count++;
      return p + 0;  
    } else {
      return p + c;
    }
  }, 0)) / (numbers.length - count);
}

module.exports = {average};

const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5,0.01);
  
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', ()=> {
  expect(average([1, NaN, 2])).to.be.approximately(1.5,0.01);
});

it('reports the average as NaN on list of NaNs', ()=> {
  expect(average( [NaN,NaN,NaN])).to.be.NaN;
});

it('computing average of list ignores readings greater than 100 and less than -100', ()=> {
  expect(average( [50,120,-102,20])).to.be.approximately(35,0.01);
});

it('round up reading upto 2 decimal places ', ()=> {
  expect(average( [10.89901,0.92,20.00001])).to.be.approximately(10.60,0.01);
});


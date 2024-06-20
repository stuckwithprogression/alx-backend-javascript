const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of rounded numbers', function () {
      expect(calculateNumber('SUM', 2.3, 2.5)).to.equal(5);
      expect(calculateNumber('SUM', 3.4, 5.4)).to.equal(8);
      expect(calculateNumber('SUM', -2.2, -4.5)).to.equal(-6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 2.3, 2.5)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 3.4, 5.4)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', -2.2, -4.5)).to.equal(2);
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 1.3, 3.5)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 3.4, 5.4)).to.equal(0.6);
    });

    it('should return Error when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 2.3, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 3.4, 0.2)).to.equal('Error');
    });
  });
});

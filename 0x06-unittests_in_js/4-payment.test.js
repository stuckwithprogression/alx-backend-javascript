// 4-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let stubCalculateNumber;
  let consoleSpy;

  beforeEach(function () {
    stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    stubCalculateNumber.restore();
    consoleSpy.restore();
  });

  it('should stub Utils.calculateNumber and log correct message', function () {
    sendPaymentRequestToApi(100, 20);

    expect(stubCalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});

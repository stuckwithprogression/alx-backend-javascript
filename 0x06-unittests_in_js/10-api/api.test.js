const request = require('request');
const chai = require('chai');
const expect = chai.expect;

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request(baseUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request(`${baseUrl}/cart/123`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Correct status code when :id is NOT a number?', (done) => {
    request(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments page', () => {
  it('Correct status code?', (done) => {
    request(`${baseUrl}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request(`${baseUrl}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  it('Correct response with username?', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'Betty' },
      headers: {
        'Content-Type': 'application/json'
      }
    };

    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('Correct response with no username?', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: true,
      body: {},
      headers: {
        'Content-Type': 'application/json'
      }
    };

    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });
});

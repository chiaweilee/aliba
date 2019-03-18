const { expect } = require('chai');
const isNotArrayObject = require('./isNotArrayObject').default;

describe('isNotArrayObject', () => {
  it('isNotArrayObject detect array correctly', () => {
    expect(isNotArrayObject([])).to.equal(false);
  });

  it('isNotArrayObject detect object correctly', () => {
    expect(isNotArrayObject({})).to.equal(true);
  });

  it('isNotArrayObject detect null correctly', () => {
    expect(isNotArrayObject(null)).to.equal(false);
  });

  it('isNotArrayObject detect undefined correctly', () => {
    expect(isNotArrayObject(undefined)).to.equal(false);
  });
});

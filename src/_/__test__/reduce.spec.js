const { expect } = require('chai');
const reduce = require('../reduce').default;

describe('_reduce', () => {
  it('reduce array to number correctly', () => {
    const t = [1, 2, 3];

    const r = 6;

    const f = reduce(t, (total, value) => value * 2);

    expect(f).to.deep.equal(r);
  });

  it('reduce array to object correctly', () => {
    const t = [1, 2, 3];

    const r = { 0: 1, 1: 2, 2: 3 };

    const f = reduce(
      t,
      (total, value, key) => {
        return Object.assign({}, total, { [key]: value });
      },
      {}
    );

    expect(f).to.deep.equal(r);
  });

  it('reduce object to concat string correctly', () => {
    const t = { a: 1, b: 2, c: 3 };

    const r = 'a=1&b=2&c=3';

    const keys = Object.keys(t);
    const lastKey = keys[keys.length - 1];

    const f = reduce(
      t,
      (total, value, key) => {
        return total.concat(`${key}=${value}`, key !== lastKey ? '&' : '');
      },
      ''
    );

    expect(f).to.deep.equal(r);
  });

  it('reduce null correctly', () => {
    const t = null;

    const r = null;

    const f = reduce(t, (_t, _v) => _t);

    expect(f).to.deep.equal(r);
  });
});

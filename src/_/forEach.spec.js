const { expect } = require('chai');
const forEach = require('./forEach').default;

describe('forEach', () => {
  it('forEach array correctly', () => {
    const t = [1, 2, 3];

    const e = [];

    forEach(t, _t => {
      e.push(_t);
    });

    expect(e).to.deep.equal(t);
  });

  it('forEach object correctly', () => {
    const t = { a: 1, b: 2, c: 3 };

    const r = [1, 2, 3];

    const e = [];

    forEach(t, _t => {
      e.push(_t);
    });

    expect(e).to.deep.equal(r);
  });

  it('forEach null correctly', () => {
    const t = null;

    const r = undefined;

    let e;

    forEach(t, () => {
      e = true;
    });

    expect(e).to.deep.equal(r);
  });
});

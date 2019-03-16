const { expect } = require('chai');
const map = require('./map').default;

describe('_map', () => {
  it('map array correctly', () => {
    const t = [1, 2, 3];

    const r = [2, 3, 4];

    const f = map(t, _t => _t + 1);

    expect(f).to.deep.equal(r);
  });

  it('map object correctly', () => {
    const t = { a: 1, b: 2, c: 3 };

    const r = [1, 2, 3];

    const f = map(t, _t => _t);

    expect(f).to.deep.equal(r);
  });
});

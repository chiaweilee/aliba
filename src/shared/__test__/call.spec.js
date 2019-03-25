const { expect } = require('chai');
const call = require('../call').default;

let e;

const t = (...argv) => {
  e = true;
  return argv;
};

describe('call', () => {
  it('call with params work correctly', () => {
    const r = [1, 2, 3];

    const f = call.apply(null, [t, ...r]);

    expect(e).to.equal(true);
    expect(f).to.deep.equal(r);
  });
});

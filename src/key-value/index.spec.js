const { expect } = require('chai');
const unpair = require('./unpair').default;
const pair = require('./pair').default;

describe('key-value', () => {
  it('un-pair key-value string correctly', () => {
    const t = '  a= 1; b = 2 ';

    const r = { a: '1', b: '2' };

    const f = unpair(t);

    expect(f).to.deep.equal(r);
  });

  it('pair key-value object correctly', () => {
    const t = { a: '1', b: '2' };

    const r = 'a=1;b=2';

    const f = pair(t);

    expect(f).to.equal(r);
  });

  it('un-pair query string correctly', () => {
    const t = 'a=1&b=2 ';

    const r = { a: '1', b: '2' };

    const f = unpair(t, '&');

    expect(f).to.deep.equal(r);
  });

  it('pair query object correctly', () => {
    const t = { a: '1', b: '2' };

    const r = 'a=1&b=2';

    const f = pair(t, '&');

    expect(f).to.equal(r);
  });
});

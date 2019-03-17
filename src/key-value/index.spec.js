const { expect } = require('chai');
const unpair = require('./unpair').default;
const pair = require('./pair').default;

const x = encodeURIComponent('?x=шеллы');

describe('key-value', () => {
  it('un-pair key-value string correctly', () => {
    const t = `  a= 1; b = ${x} `;

    const r = { a: '1', b: '?x=шеллы' };

    const f = unpair(t);

    expect(f).to.deep.equal(r);
  });

  it('pair key-value object correctly', () => {
    const t = { a: '1', b: '?x=шеллы' };

    const r = `a=1;b=${x}`;

    const f = pair(t);

    expect(f).to.equal(r);
  });

  it('un-pair query string correctly', () => {
    const t = `a=1&b=${x} `;

    const r = { a: '1', b: '?x=шеллы' };

    const f = unpair(t, '&');

    expect(f).to.deep.equal(r);
  });

  it('pair query object correctly', () => {
    const t = { a: '1', b: '?x=шеллы' };

    const r = `a=1&b=${x}`;

    const f = pair(t, '&');

    expect(f).to.equal(r);
  });
});

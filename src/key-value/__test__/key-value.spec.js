const { expect } = require('chai');
const unpair = require('../unpair').default;
const pair = require('../pair').default;

describe('key-value', () => {
  it('un-pair empty string correctly', () => {
    const t = '';

    const r = {};

    const f = unpair(t);

    expect(f).to.deep.equal(r);
  });

  it('un-pair null correctly', () => {
    const t = null;

    const r = {};

    const f = unpair(t);

    expect(f).to.deep.equal(r);
  });

  it('un-pair non-string correctly', () => {
    const t = { a: 1 };

    const r = {};

    const f = unpair(t);

    expect(f).to.deep.equal(r);
  });

  it('un-pair non-key-value string correctly', () => {
    const t = 'a1';

    const r = {};

    const f = unpair(t);

    expect(f).to.deep.equal(r);
  });

  it('un-pair single key-value string correctly', () => {
    const t = 'a=1';

    const r = { a: '1' };

    const f = unpair(t);

    expect(f).to.deep.equal(r);
  });

  it('un-pair empty value correctly', () => {
    const t = 'a=;b=;c=';

    const r = { a: '', b: '', c: '' };

    const f = unpair(t);

    expect(f).to.deep.equal(r);
  });

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

  it('pair null correctly', () => {
    const r = '';

    const f = pair(null);

    expect(f).to.equal(r);
  });

  it('un-pair query string with spaces correctly', () => {
    const t = 'a   =   1 &   b  =  2 ';

    const r = { a: '1', b: '2' };

    const f = unpair(t, '&');

    expect(f).to.deep.equal(r);
  });
});

const { expect } = require('chai');
const hyphenateCss = require('./');

describe('hyphenate-css', () => {
  it('hyphenate style object correctly', () => {
    const t = {
      fontSize: '12px',
      backgroundColor: '#fff',
    };
    const r = 'font-size:12px;background-color:#fff;';

    expect(hyphenateCss(t)).to.equal(r);
  });
});

const { expect } = require('chai');
const hyphenateCss = require('../index').default;

describe('hyphenate-css', () => {
  it('hyphenate style object correctly', () => {
    const t = {
      fontSize: '12px',
      backgroundColor: '#fff',
    };

    const r = 'font-size:12px;background-color:#fff;';

    const f = hyphenateCss(t);

    expect(f).to.equal(r);
  });
});

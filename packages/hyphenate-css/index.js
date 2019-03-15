const hyphenateStyleName = require('../shared/hyphenateStyleName');

module.exports = (styleObject) => Object.keys(styleObject).map(styleName => `${hyphenateStyleName(styleName)}:${styleObject[styleName]};`).join('');

const fs = require('fs');
const path = require('path');
const { compile } = require('sass');

export const loadComponentStyles = (fileUrl: string) => {
  const filePath = path.resolve(fileUrl);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Can't find scss file at ${filePath} (From)`);
  }

  const scss = compile(filePath, { 'load-path': 'node_modules/@lmc-eu/spirit-design-tokens/scss' }).css.toString();

  return scss;
};

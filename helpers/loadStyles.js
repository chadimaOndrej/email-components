const fs = require('fs');
const path = require('path');
const { compile } = require('sass');

export const loadStyles = (fileUrl) => {
  const filePath = path.resolve(fileUrl);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Can't find scss file at ${filePath} (From)`);
  }

  const scss = compile(filePath).css.toString();

  return scss;
}
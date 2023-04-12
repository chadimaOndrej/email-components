import { HeadComponent } from 'mjml-core';
import fs from 'fs';
import path from 'path';
import { compile } from 'sass';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-head': ['mjc-scss'],
  'mjc-scss': [],
});

interface Props {
  fileUrl: string;
  inline?: string;
}

export default class Sass extends HeadComponent {
  static componentName = 'mjc-scss';
  static endingTag = true;
  static dependencies = {
    'mj-head': ['mjc-scss'],
    'mjc-scss': [],
  };
  static allowedAttributes: Props = {
    fileUrl: 'string',
    inline: 'string',
  };

  handler() {
    const { add } = this.context;
    const filePath = path.resolve(`${this.getAttribute('fileUrl')}`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Can't find scss file at ${filePath} (From)`);
    }

    const scss = compile(filePath, { 'loadPaths': ['node_modules/@lmc-eu/spirit-design-tokens/scss'] }).css.toString();

    add(this.getAttribute('inline') === 'inline' ? 'inlineStyle' : 'style', scss);
  }
}

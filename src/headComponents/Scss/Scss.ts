import { HeadComponent } from 'mjml-core';
import fs from 'fs';
import path from 'path';
import { compile } from 'sass';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-head': ['mjc-style-scss'],
  'mjc-style-scss': [],
});

interface Props {
  fileUrl: string;
  inline?: string;
}

export default class Scss extends HeadComponent {
  static componentName = 'mjc-style-scss';
  static endingTag = true;
  static dependencies = {
    'mj-head': ['mjc-style-scss'],
    'mjc-style-scss': [],
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

    const css = compile(filePath, { loadPaths: ['node_modules/@lmc-eu/jobs-design-tokens/scss'] }).css.toString();
    
    add(this.getAttribute('inline') === 'inline' ? 'inlineStyle' : 'style', css);
  }
}

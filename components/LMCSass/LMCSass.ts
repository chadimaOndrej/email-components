import { HeadComponent } from 'mjml-core';
import fs from 'fs';
import path from 'path';
import { compile } from 'sass';

interface Props {
  src: string;
  inline?: string;
};

export default class LMCSass extends HeadComponent {
  static componentName = 'lmc-scss';
  static endingTag = false;
  static dependencies = {
    'mj-head': ['lmc-scss'],
  };
  static allowedAttributes: Props = {
    src: 'string',
    inline: 'string',
  };

  handler() {
    const { add } = this.context;
    // Get directory of file, if the path is a file.
    const callerPath = `${__dirname}/../../scss`;
    const filePath = path.resolve(callerPath, this.getAttribute('src'));
    if (!fs.existsSync(filePath)) {
      throw new Error(`Can't find scss file at ${filePath} (From)`);
    }

    const scss = compile(filePath)
      .css.toString();

    add(this.getAttribute('inline') === 'inline' ? 'inlineStyle' : 'style', scss);
  }
}

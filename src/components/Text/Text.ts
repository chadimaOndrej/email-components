import { BodyComponent } from 'mjml-core';
import { loadStyles } from '../../helpers/loadStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-column': ['mjc-text'],
  'mjc-content': ['mjc-text'],
  'mjc-text': [],
});

export default class MjcText extends BodyComponent {
  private readonly color: string;
  private readonly size: string;

  constructor(initialDatas = {}) {
    super(initialDatas);

    this.color = this.getAttribute('color');
    this.size = this.getAttribute('size');
  }
  static componentName = 'mjc-text';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-text'],
    'mjc-text': [],
  };

  static allowedAttributes = {
    color: 'enum(primary,secondary,inverted)',
    size: 'enum(small,medium)',
  };

  static defaultAttributes = {
    color: 'primary',
    size: 'medium',
  };

  headStyle = () => loadStyles(`${__dirname}/Text.css`);

  render() {
    const className = `Text Text--${this.size} Text--${this.color}}`;

    return `
      <div class="${className}">
        ${this.getContent()}
      </div>
    `
  }
}

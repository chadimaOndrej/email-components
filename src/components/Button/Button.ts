import { BodyComponent } from 'mjml-core';
import { loadStyles } from '../../helpers/loadStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-column': ['mjc-button'],
  'mjc-content': ['mjc-button'],
  'mjc-button': [],
});

export default class Button extends BodyComponent {
  private readonly color: string;

  constructor(initialDatas = {}) {
    super(initialDatas);

    this.color = this.getAttribute('color');
  }

  static componentName = 'mjc-button';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-button'],
    'mjc-button': [],
  };

  static allowedAttributes = {
    align: 'enum(left,center,right)',
    color: 'enum(primary,secondary)',
    href: 'string',
    'padding-bottom': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    rel: 'string',
    target: 'string',
    'vertical-align': 'enum(top,bottom,middle)',
  };

  static defaultAttributes = {
    align: 'left',
    color: 'primary',
    'padding-bottom': '32px',
    'padding-left': '0',
    'padding-right': '0',
    'padding-top': '32px',
    target: '_blank',
    'vertical-align': 'middle',
  };

  headStyle = () => loadStyles(`${__dirname}/Button.css`);

  render() {
    const tag = this.getAttribute('href') ? 'a' : 'p';
    const className = `Button__button Button--${this.color}`;
    const classNameTd = `Button__cell Button--${this.color}`;

    return `
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        class="Button"
      >
        <tbody>
          <tr>
            <td
              role="presentation"
              ${this.htmlAttributes({
                align: this.getAttribute('align'),
                valign: this.getAttribute('vertical-align'),
                class: classNameTd,
              })}
            >
              <${tag}
                ${this.htmlAttributes({
                  class: className,
                  href: this.getAttribute('href'),
                  rel: this.getAttribute('rel'),
                  name: this.getAttribute('name'),
                  target: tag === 'a' ? this.getAttribute('target') : undefined,
                  'data-msys-linkname': tag === 'a' ? this.getAttribute('data-msys-linkname') : undefined,
                })}
              >
                ${this.getContent()}
              </${tag}>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }
}

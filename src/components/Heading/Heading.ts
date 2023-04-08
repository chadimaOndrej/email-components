import { BodyComponent } from 'mjml-core';
import { loadStyles } from '../../helpers/loadStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-column': ['mjc-heading'],
  'mjc-content': ['mjc-heading'],
  'mjc-heading': [],
});

export default class Heading extends BodyComponent {
  private readonly align: string;
  private readonly elementType: string;
  private readonly hasSpacing: boolean;
  private readonly size: string;
  private readonly title: string;

  constructor(initialDatas = {}) {
    super(initialDatas);

    this.align = this.getAttribute('align');
    this.elementType = this.getAttribute('elementType');
    this.hasSpacing = this.getAttribute('hasSpacing');
    this.size = this.getAttribute('size');
    this.title = this.getAttribute('title');
  }
  static componentName = 'mjc-heading';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-heading'],
    'mjc-heading': [],
  };

  static allowedAttributes = {
    align: 'enum(left,right,center)',
    hasSpacing: 'boolean',
    elementType: 'enum(div,h1,h2,h3,h4,p,span)',
    size: 'enum(small,medium,large)',
    title: 'string',
  };

  static defaultAttributes = {
    align: 'left',
    hasSpacing: 'false',
    elementType: 'div',
    size: 'medium',
    title: '',
  };

  headStyle = () => loadStyles(`${__dirname}/Heading.css`);

  render() {
    const className = `Heading Heading--${this.size}${this.hasSpacing && ' Heading--space'}`;

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
              role="presentation">
                <${this.elementType} class='${className}'>${this.title}</${this.elementType}>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }
}

import { BodyComponent } from 'mjml-core'
import { loadStyles } from '../../helpers/loadStyles';

export default class LMCHeading extends BodyComponent {
  private readonly align: string;
  private readonly elementType: string;
  private readonly hasSpacing: boolean;
  private readonly size: string;
  private readonly title: string;

  constructor(initialDatas = {}) {
    super(initialDatas)

    this.align = this.getAttribute('align');
    this.elementType = this.getAttribute('elementType');
    this.hasSpacing = this.getAttribute('hasSpacing');
    this.size = this.getAttribute('size');
    this.title = this.getAttribute('title');
  }

  static componentName = 'lmc-heading'
  
  static allowedAttributes = {
    'align': 'enum(left,right,center)',
    'hasSpacing': 'boolean',
    'elementType': 'enum(div,h1,h2,h3,h4,p,span)',
    'size': 'enum(small,medium,large)',
    'title': 'string',
  }

  static defaultAttributes = {
    align: 'left',
    hasSpacing: 'false',
    elementType: 'div',
    size: 'medium',
    title: '',
  }

  headStyle = () => loadStyles(`${__dirname}/../../components/Heading/Heading.scss`);

  render() {
    const className = `Heading Heading-${this.size}${this.hasSpacing && ' Heading-space'}`;

    return this.renderMJML(`
      <mj-text font-family="Arial" align="${this.align}">
        <${this.elementType} class='${className}'>${this.title}</${this.elementType}>
      </mj-text>
    `)
  }
}

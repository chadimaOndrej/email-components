import { BodyComponent } from 'mjml-core'
import { loadStyles } from '../../helpers/loadStyles';

interface Props {
  src: string;
  imageAlt?: string;
  href?: string
};

export default class LMCHeader extends BodyComponent {
  private readonly src: string;
  private readonly imageAlt: string;
  private readonly href: string;

  constructor(initialDatas = {}) {
    super(initialDatas)

    this.src = this.getAttribute('src');
    this.imageAlt = this.getAttribute('imageAlt');
    this.href = this.getAttribute('href');
  }

  static componentName = 'lmc-header'

  static dependencies = {
   // Now tell the validator which tags are allowed as our component's parent
    'mj-body': ['lmc-header'],
    'mj-wraper': ['lmc-header'],
    'mj-section': ['lmc-header'],
    'mj-column': ['lmc-header']
  }

  static allowedAttributes: Props = {
    src: 'string',
    imageAlt: 'string',
    href: 'string'
  };

  static defaultAttributes = {
    src: '',
    imageAlt: '',
    href: ''
  }

  headStyle = () => loadStyles(`${__dirname}/../../components/LMCHeader/LMCHeader.scss`);

  render() {
    return this.renderMJML(`
      <mj-section css-class="Header" padding="0">
        <mj-column css-class="Header__column" padding="21px">
          <mj-image
            alt="${this.imageAlt}"
            css-class="Header__image"
            src="${this.src}"
            width="60px"
            height="24px"
            align="center"
            href="${this.href}"
          />
        </mj-column>
      </mj-section>
    `)
  }
}

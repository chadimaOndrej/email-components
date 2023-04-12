import { BodyComponent } from 'mjml-core';
import { loadStyles } from '../../helpers/loadStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-body': ['mjc-header'],
  'mj-wraper': ['mjc-header'],
  'mj-section': ['mjc-header'],
  'mj-column': ['mjc-header'],
  'mjc-header': [''],
});

interface Props {
  src: string;
  imageAlt?: string;
  href?: string;
}

export default class Header extends BodyComponent {
  private readonly src: string;
  private readonly imageAlt: string;
  private readonly href: string;

  constructor(initialData = {}) {
    super(initialData);

    this.src = this.getAttribute('src');
    this.imageAlt = this.getAttribute('imageAlt');
    this.href = this.getAttribute('href');
  }

  static componentName = 'mjc-header';

  static dependencies = {
    'mj-body': ['mjc-header'],
    'mj-column': ['mjc-header'],
    'mj-section': ['mjc-header'],
    'mj-wraper': ['mjc-header'],
  };

  static allowedAttributes: Props = {
    src: 'string',
    imageAlt: 'string',
    href: 'string',
  };

  static defaultAttributes = {
    src: '',
    imageAlt: '',
    href: '',
  };

  headStyle = () => loadStyles(`${__dirname}/Header.css`);

  render() {
    return this.renderMJML(`
      <mj-section css-class="Header" padding="0">
        <mj-column css-class="Header__column" padding="22px">
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
    `);
  }
}

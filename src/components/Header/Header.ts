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

export default class Header extends BodyComponent {
  private readonly align: string;
  private readonly externalLink: string;
  private readonly height: string;
  private readonly imageAlt: string;
  private readonly imageUrl: string;
  private readonly width: string;

  constructor(initialData = {}) {
    super(initialData);

    this.align = this.getAttribute('align');
    this.externalLink = this.getAttribute('externalLink');
    this.height = this.getAttribute('height');
    this.imageAlt = this.getAttribute('imageAlt');
    this.imageUrl = this.getAttribute('imageUrl');
    this.width = this.getAttribute('width');
  }

  static componentName = 'mjc-header';

  static dependencies = {
    'mj-body': ['mjc-header'],
    'mj-column': ['mjc-header'],
    'mj-section': ['mjc-header'],
    'mj-wraper': ['mjc-header'],
  };

  static allowedAttributes = {
    alight: 'enum(left,right,center)',
    height: 'unit(px,%)',
    externalLink: 'string',
    imageAlt: 'string',
    imageUrl: 'string',
    width: 'unit(px,%)',
  };

  static defaultAttributes = {
    align: 'center',
    height: '24px',
    externalLink: '',
    imageAlt: '',
    imageUrl: '',
    width: '60px',
  };

  headStyle = () => loadStyles(`${__dirname}/Header.css`);

  render() {
    return this.renderMJML(`
      <mj-section css-class="Header" padding="0">
        <mj-column css-class="Header__column" padding="22px">
          <mj-image
            align="${this.align}"
            alt="${this.imageAlt}"
            css-class="Header__image"
            height="${this.height}"
            href="${this.externalLink}"
            imageUrl="${this.imageUrl}"
            width="${this.width}"
          />
        </mj-column>
      </mj-section>
    `);
  }
}

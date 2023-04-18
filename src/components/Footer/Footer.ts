import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-body': ['mjc-footer'],
  'mj-wraper': ['mjc-footer'],
  'mjc-footer': [''],
});

export default class Footer extends BodyComponent {
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

  static componentName = 'mjc-footer';

  static dependencies = {
    'mj-body': ['mjc-footer'],
    'mj-column': ['mjc-footer'],
    'mj-section': ['mjc-footer'],
    'mj-wraper': ['mjc-footer'],
  };

  static allowedAttributes = {
    alight: 'enum(left,right,center)',
    height: 'unit(px,%)',
    externalLink: 'array[string]',
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

  headStyle = () => loadComponentStyles(`${__dirname}/Footer.css`);

  render() {
    return this.renderMJML(`
    <mj-section background-color="transparent" padding="0" padding-bottom="24px">
        <mj-column background-color="transparent">
        <mj-image alt="Jobs.cz" src="https://ijobs.cz/static/images/email/logo-jobs.png?1" padding="0" width="88px" height="35px" align="center" href="https://www.jobs.cz/?utm_source=jobs.cz&amp;utm_medium=email&amp;utm_content=agent_footer&amp;utm_campaign=system{{if userIdHash}}&amp;userIdHash={{userIdHash}}{{end}}" />
        </mj-column>
    </mj-section>

  <mj-section background-color="transparent" padding="0">
    <mj-column width="28%" background-color="transparent">
      <mjc-link align="center" color="inverted" size="small" href="https://www.jobs.cz/prace/?utm_source=jobs.cz&amp;utm_medium=email&amp;utm_content=agent_footer&amp;utm_campaign=system{{if userIdHash}}&amp;userIdHash={{userIdHash}}{{end}}" data-msys-linkname="footer">
        Nabídky práce
      </mjc-link>
    </mj-column>

    <mj-column width="18%" background-color="transparent">
      <mjc-link align="center" color="inverted" size="small" href="https://www.jobs.cz/brigady/?utm_source=jobs.cz&amp;utm_medium=email&amp;utm_content=agent_footer&amp;utm_campaign=system{{if userIdHash}}&amp;userIdHash={{userIdHash}}{{end}}" data-msys-linkname="footer">
        Brigády
      </mjc-link>
    </mj-column>

    <mj-column width="18%" background-color="transparent">
      <mjc-link align="center" color="inverted" size="small" href="https://www.jobs.cz/poradna/?utm_source=jobs.cz&amp;utm_medium=email&amp;utm_content=agent_footer&amp;utm_campaign=system{{if userIdHash}}&amp;userIdHash={{userIdHash}}{{end}}" data-msys-linkname="footer">
        Inspirace
      </mjc-link>
    </mj-column>

    <mj-column width="28%" background-color="transparent">
      <mjc-link align="center" color="inverted" size="small" href="https://www.lmc.eu/cs/zasady-ochrany-soukromi/?utm_source=jobs.cz&amp;utm_medium=email&amp;utm_term=footer_soukromi&amp;utm_content=agent_footer&amp;utm_campaign=system" data-msys-linkname="footer">
        Ochrana soukromí
      </mjc-link>
    </mj-column>
  </mj-section>

      <mj-section css-class="Footer" padding="0">
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

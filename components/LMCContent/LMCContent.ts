import { BodyComponent } from 'mjml-core'
import { loadStyles } from '../../helpers/loadStyles';

interface Props {};

export default class LMCContent extends BodyComponent {
  static componentName = 'lmc-content'
  static dependencies = {
    // Tell the validator which tags are allowed as our component's children
    'lmc-content': [
      'mj-accordion',
      'mj-column',   
    ],
    // Now tell the validator which tags are allowed as our component's parent
    'mj-wrapper': ['lmc-content'],
    'mj-body': ['lmc-content'],
  }

  static allowedAttributes: Props = {};
  static defaultAttributes = {}

  headStyle = () => loadStyles(`${__dirname}/../../components/LMCContent/LMCContent.scss`);

  render() {
    return `
      <div class="Content">  
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td class="Content-cell" style="direction:ltr;font-size:0px;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:680px;" ><![endif]-->
                ${this.renderChildren( this.props.children, { rawXML: false } )}
              <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

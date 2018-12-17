import React, {Component} from 'react';

class BreakdownContainer extends Component {

    render() {
        return(
        <div class="breakdown-container">
          <div class="block">
              <div class="breakdown-table-title">GENERATION - FUEL TYPE					            
              </div>
          <table class="energy-source-breakdown-table">
          <tbody>
              <tr energytype="COAL" class="energy-source-breakdown-standard-cell">
              <td class="energy-source-icon">
                  <img
                  src="/docs/coal.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
              />
              </td>
              <td class="energy-source-title">coal</td>
              <td class="energy-source-values">
                  <div class="bar-background">
                  <div class="bar" id="coal-bar"></div>
              </div>
              <div style="float: left">
                  <span bind="coalPercentage">0</span>%
              </div>
              <div style="float: right">
                  <span bind="coalOutput">0</span> MW
              </div>
              </td>
              <td class="energy-source-disclosure">
              <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
              />
              </td>
          </tr>
            <tr energytype="HYDRO" class="energy-source-breakdown-standard-cell">
              <td class="energy-source-icon">
                <img
                  src="/docs/hydro.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
              <td class="energy-source-title">hydro</td>
              <td class="energy-source-values">
                <div class="bar-background">
                  <div class="bar" id="hydro-bar"></div>
                </div>
                <div style="float: left">
                  <span bind="hydroPercentage">0</span>%
                </div>
                <div style="float: right">
                  <span bind="hydroOutput">0</span> MW
                </div>
              </td>
              <td class="energy-source-disclosure">
                <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
            </tr>
            <tr energytype="GAS" class="energy-source-breakdown-standard-cell">
              <td class="energy-source-icon">
                <img
                  src="/docs/gas.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
              <td class="energy-source-title">gas</td>
              <td class="energy-source-values">
                <div class="bar-background">
                  <div class="bar" id="gas-bar"></div>
                </div>
                <div style="float: left">
                  <span bind="gasPercentage">0</span>%
                </div>
                <div style="float: right"><span bind="gasOutput">0</span> MW</div>
              </td>
              <td class="energy-source-disclosure">
                <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
            </tr>
            <tr energytype="WIND" class="energy-source-breakdown-standard-cell">
              <td class="energy-source-icon">
                <img
                  src="/docs/wind.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
              <td class="energy-source-title">wind</td>
              <td class="energy-source-values">
                <div class="bar-background">
                  <div class="bar" id="wind-bar"></div>
                </div>
                <div style="float: left">
                  <span bind="windPercentage">0</span>%
                </div>
                <div style="float: right">
                  <span bind="windOutput">0</span> MW
                </div>
              </td>
              <td class="energy-source-disclosure">
                <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
            </tr>
            
            <tr
              energytype="BIOFUEL"
              class="energy-source-breakdown-standard-cell"
            >
              <td class="energy-source-icon">
                <img
                  src="/docs/bio.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
              <td class="energy-source-title">biofuel</td>
              <td class="energy-source-values">
                <div class="bar-background">
                  <div class="bar" id="biofuel-bar"></div>
                </div>
                <div style="float: left">
                  <span bind="biofuelPercentage">0</span>%
                </div>
                <div style="float: right">
                  <span bind="biofuelOutput">0</span> MW
                </div>
              </td>
              <td class="energy-source-disclosure">
                <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
            </tr>
            <tr class="energy-source-breakdown-import-export-cell">
              <td colspan="2">
                <img
                  class="import-export-icon"
                  src=/docs/albertamap.png
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                  style="height: 70px; width: 70px; margin-top: 3px; margin-bottom: 2px; margin-left: auto; margin-right: auto; display: block;"
                />
              </td>
              <td>
                <div style="display: inline">import</div>
                <div class="imports"><span bind="imports">0</span> MW</div>
                <br />
                <div style="display: inline">export</div>
                <div class="exports"><span bind="exports">0</span> MW</div>
                <br />
                <div style="display: inline">net</div>
                <div class="netImportExports">
                  <span bind="netImportExports">0</span> MW
                </div>
              </td>
              <td class="energy-source-disclosure">
                <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Import Export"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}


export default BreakdownContainer;

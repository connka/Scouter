import React, {Component} from 'react';

class BreakdownContainer extends Component {

    render() {
        return(
        <div className="breakdown-container">
          <div className="block">
              <div className="breakdown-table-title">GENERATION - FUEL TYPE					            
              </div>
          <table className="energy-source-breakdown-table">
          <tbody>
              <tr energytype="COAL" className="energy-source-breakdown-standard-cell">
              <td className="energy-source-icon">
                  <img
                  src="/docs/coal.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
              />
              </td>
              <td className="energy-source-title">coal</td>
              <td className="energy-source-values">
                  <div className="bar-background">
                  <div className="bar" id="coal-bar"></div>
              </div>
              <div>
                  <span bind="coalPercentage">0</span>%
              </div>
              <div className="percentage">
                  <span bind="coalOutput">0</span> MW
              </div>
              </td>
              <td className="energy-source-disclosure">
              <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
              />
              </td>
          </tr>
            <tr energytype="HYDRO" className="energy-source-breakdown-standard-cell">
              <td className="energy-source-icon">
                <img
                  src="/docs/hydro.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
              <td className="energy-source-title">hydro</td>
              <td className="energy-source-values">
                <div className="bar-background">
                  <div className="bar" id="hydro-bar"></div>
                </div>
                <div>
                  <span bind="hydroPercentage">0</span>%
                </div>
                <div className="percentage">
                  <span bind="hydroOutput">0</span> MW
                </div>
              </td>
              <td className="energy-source-disclosure">
                <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
            </tr>
            <tr energytype="GAS" className="energy-source-breakdown-standard-cell">
              <td className="energy-source-icon">
                <img
                  src="/docs/gas.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
              <td className="energy-source-title">gas</td>
              <td className="energy-source-values">
                <div className="bar-background">
                  <div className="bar" id="gas-bar"></div>
                </div>
                <div>
                  <span bind="gasPercentage">0</span>%
                </div>
                <div className="percentage">
                <span bind="gasOutput">0</span> MW</div>
              </td>
              <td className="energy-source-disclosure">
                <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
            </tr>
            <tr energytype="WIND" className="energy-source-breakdown-standard-cell">
              <td className="energy-source-icon">
                <img
                  src="/docs/wind.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
              <td className="energy-source-title">wind</td>
              <td className="energy-source-values">
                <div className="bar-background">
                  <div className="bar" id="wind-bar"></div>
                </div>
                <div>
                  <span bind="windPercentage">0</span>%
                </div>
                <div className="percentage">
                  <span bind="windOutput">0</span> MW
                </div>
              </td>
              <td className="energy-source-disclosure">
                <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
            </tr>
            
            <tr
              energytype="BIOFUEL"
              className="energy-source-breakdown-standard-cell"
            >
              <td className="energy-source-icon">
                <img
                  src="/docs/bio.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
              <td className="energy-source-title">biofuel</td>
              <td className="energy-source-values">
                <div className="bar-background">
                  <div className="bar" id="biofuel-bar"></div>
                </div>
                <div>
                  <span bind="biofuelPercentage">0</span>%
                </div>
                <div className="percentage">
                  <span bind="biofuelOutput">0</span> MW
                </div>
              </td>
              <td className="energy-source-disclosure">
                <img
                  src="/docs/arrow.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
            </tr>
            <tr className="energy-source-breakdown-import-export-cell">
              <td colspan="2">
                <img
                  className="import-export-icon"
                  src="/docs/albertamap.png"
                  data-rjs="3"
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                />
              </td>
              <td>
                <div>import</div>
                <div className="imports"><span bind="imports">0</span> MW</div>
                <br />
                <div>export</div>
                <div className="exports"><span bind="exports">0</span> MW</div>
                <br />
                <div>net</div>
                <div className="netImportExports">
                  <span bind="netImportExports">0</span> MW
                </div>
              </td>
              <td className="energy-source-disclosure">
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

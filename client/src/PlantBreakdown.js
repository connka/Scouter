import React, {Component} from 'react';

class PlantBreakdown extends Component {

    render() {
        return(
        <div class="plant-container">
            <div class="block">
            <div class="power-plant-breakdown-table-header">
                <div class="breakdown-table-title">GENERATION - PLANT									         
                </div>
                <div class="power-plant-breakdown-summary">
                        <div class="power-plant-breakdown-summary-title">coal</div>
                <div class="power-plant-breakdown-summary-bar-background">
                            <div class="power-plant-breakdown-summary-bar"></div>
                        </div>
                        <div class="power-plant-breakdown-summary-values">
                            <div style="display: inline-block; float: left; line-height: 40px; text-shadow:none;">
                                <span class="power-plant-breakdown-summary-percentage">-- </span>% (of total grid)</div>
                                <div style="display: inline-block; float: right; line-height: 40px; text-shadow:none;">
                                    <span class="power-plant-breakdown-summary-total">-- </span> MW
                                </div>
                            </div>
                        </div>
                        <div class="power-plant-column-header" style="margin-right: 15px;">
                            <table style="table-layout:fixed;">
                                <tr>
                                    <td class="power-plant-name-data">
                                        POWER PLANT
                                    </td>
                                    <td class="power-plant-output-data">
                                        output   
                                    </td>
                                    <td class="power-plant-capability-data">
                                        capability
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div> 
                </div>
            </div> 
        )
    }
}

export default PlantBreakdown;
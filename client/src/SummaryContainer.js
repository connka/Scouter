import React, {Component} from 'react';

class SummaryContainer extends Component {

    render() {
        return(
        <div class="summary-container" id="summary-container">
            <div class="summary-box">
                <div class="title">POWER GENERATED</div>
                <div class="value"><span bind="powerGenerated">0</span> MW</div>
                <div class="value-level"><span id="powerGeneratedLow" class="levelRange">LOW </span><span id="powerGeneratedAvg" class="levelRange">AVG </span><span id="powerGeneratedHigh" class="levelRange">HIGH </span></div>
            </div>
            <div class="summary-box">
                <div class="title">ALBERTA'S DEMAND</div>
                <div class="value"><span bind="albertaDemand">0</span> MW</div>
                <div class="value-level"><span id="albertaDemandLow" class="levelRange">LOW </span> <span id="albertaDemandAvg" class="levelRange">AVG </span> <span id="albertaDemandHigh" class="levelRange">HIGH</span></div>
            </div>
            <div class="summary-box">
                <div class="title">TOTAL EMISSIONS</div>
                <div class="value"><span bind="totalCo2e">0</span> tonnes</div>
                <div class="value-level"><span id="totalCo2eLow" class="levelRange">LOW </span><span id="totalCo2eAvg" class="levelRange">AVG </span><span id="totalCo2eHigh" class="levelRange">HIGH</span></div>
            </div>
            <div class="summary-box">
                <div class="title">CO2e INTENSITY</div>
                <div class="value"><span bind="co2eIntensity">0</span> g/kWh</div>
                <div class="value-level"><span id="co2eIntensityLow" class="levelRange">LOW </span> <span id="co2eIntensityAvg" class="levelRange">AVG </span> <span id="co2eIntensityHigh" class="levelRange">HIGH</span></div>
            </div>
        </div>
        )
    }
}

export default SummaryContainer;
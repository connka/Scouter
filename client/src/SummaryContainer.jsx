import React, {Component} from 'react';

class SummaryContainer extends Component {

    render() {
        return(
        <div className="summary-container" id="summary-container">
            <div className="summary-box">
                <div className="title">POWER GENERATED</div>
                <div className="value"><span bind="powerGenerated">0</span> MW</div>
                <div className="value-level"><span id="powerGeneratedLow" className="levelRange">LOW </span><span id="powerGeneratedAvg" className="levelRange">AVG </span><span id="powerGeneratedHigh" className="levelRange">HIGH </span></div>
            </div>
            <div className="summary-box">
                <div className="title">ALBERTA'S DEMAND</div>
                <div className="value"><span bind="albertaDemand">0</span> MW</div>
                <div className="value-level"><span id="albertaDemandLow" className="levelRange">LOW </span> <span id="albertaDemandAvg" className="levelRange">AVG </span> <span id="albertaDemandHigh" className="levelRange">HIGH</span></div>
            </div>
            <div className="summary-box">
                <div className="title">TOTAL EMISSIONS</div>
                <div className="value"><span bind="totalCo2e">0</span> tonnes</div>
                <div className="value-level"><span id="totalCo2eLow" className="levelRange">LOW </span><span id="totalCo2eAvg" className="levelRange">AVG </span><span id="totalCo2eHigh" className="levelRange">HIGH</span></div>
            </div>
            <div className="summary-box">
                <div className="title">CO2e INTENSITY</div>
                <div className="value"><span bind="co2eIntensity">0</span> g/kWh</div>
                <div className="value-level"><span id="co2eIntensityLow" className="levelRange">LOW </span> <span id="co2eIntensityAvg" className="levelRange">AVG </span> <span id="co2eIntensityHigh" className="levelRange">HIGH</span></div>
            </div>
        </div>
        )
    }
}

export default SummaryContainer;

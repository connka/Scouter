import React, {Component} from 'react';

class SummaryContainer extends Component {

    render() {
        return(
        <div className="content-wrapper">
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
        </div>
        </div>
        )
    }
}

export default SummaryContainer;

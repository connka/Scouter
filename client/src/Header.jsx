import React, {Component} from 'react';

class Header extends Component {

    render() {
        return(
        <div className="header">
            <p id="date">THIS IS WHERE THE DATE WILL BE</p>
            <button value="Refresh Page" className="refresh" onClick={() => {window.location.reload()}}>
            <img src={ require('./docs/refresh.png') } alt="refresh"/>
            </button>
        </div>
        )
    }
}

export default Header
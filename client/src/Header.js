import React, {Component} from 'react';

class Header extends Component {

    render() {
        return(
        <div class="header">
            <p id="date"></p>
            <button value="Refresh Page" class="refresh" onClick="window.location.reload()">
            <img src="/docs/refresh.png" alt="refresh"/>
            </button>
        </div>
        )
    }
}

export default Header
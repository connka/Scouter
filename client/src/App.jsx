import React, { Component } from 'react';
import './App.css';
import BreakdownContainer from './BreakDownContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {response: 'Loading'};  
  }
  // When component mounts call the Api and send response to the client
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  // Fetch data from the backend served at localhost:5000 
  async callApi () {
    const response = await fetch('http://localhost:5000/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <>
      <p>{this.state.response}</p>
      <BreakdownContainer coalData={this.state.response} />
      </>
    );
  }
}

export default App;
// <p>{this.state.response}</p>
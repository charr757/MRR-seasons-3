import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // Special function, not required by ReactDOM, first function that will be called everytime there is an instance of this class
  // Good time to initialize state
  constructor(props) {
    super(props); // reference to the parents constructor function

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render!! Otherwise, it'll get angry
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div><b>Error:</b> {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div><b>Latitude:</b> {this.state.lat}</div>
    }

    return <div><b>Loading...</b></div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

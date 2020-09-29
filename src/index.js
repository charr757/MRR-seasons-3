import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // Special function, not required by ReactDOM, first function that will be called everytime there is an instance of this class
  // Good time to initialize state
  constructor(props) {
    super(props); // reference to the parents constructor function

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ lat: 'There was an error, please try again.' });
      }
    );
  }

  // React says we have to define render!! Otherwise, it'll get angry
  render() {
    return <div><b>Latitude:</b> {this.state.lat}</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

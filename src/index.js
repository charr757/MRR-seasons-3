import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // Special function, not required by ReactDOM, first function that will be called everytime there is an instance of this class
  // Good time to initialize state
  constructor(props) {
    super(props); // reference to the parents constructor function

    this.state = { lat: null };
  }

  // React says we have to define render!! Otherwise, it'll get angry
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

import React from 'react';
import '../css/style.css';

class FirstPanel extends React.Component {
  render() {
    return (
      <div className="panel-container">
        <img
          className="bg-image"
          src="https://data1.origin.com/content/dam/originx/web/app/programs/About/aboutorigin_3840x2160_SWB.jpg"
          alt=""
        />
        <h1>
          Play great PC games and connect with your friends, all in one place.
        </h1>
      </div>
    );
  }
}

export default FirstPanel;

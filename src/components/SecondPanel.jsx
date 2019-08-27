import React from 'react';
import '../css/style.css';

class SecondPanel extends React.Component {
  render() {
    return (
      <div className="panel-container">
        <h1>Great PC games</h1>
        <h3>
          Epic RPGs, action-packed shooters, simulation hits - no matter your
          tastes, Origin's got you covered.
        </h3>
        <img
          className="bg-image"
          src="https://data2.origin.com/content/dam/originx/web/app/programs/About/aboutorigin_3840x2160_battlefield1.jpg"
          alt="Battlefield 1"
        />
      </div>
    );
  }
}

export default SecondPanel;

import React from 'react';
import '../css/style.css';

class ThirdPanel extends React.Component {
  render() {
    return (
      <div className="panel-container">
        <img
          className="bg-image"
          src="https://data1.origin.com/content/dam/originx/web/app/games/titanfall/titanfall/titanfall-deluxe-edition_pdp_3840x2160_en_WW.jpg"
          alt="Titanfall 2"
        />
        <h2>What are you waiting for?</h2>
        <h3>
          Download the Origin client, grab a soda (or tea, if that's your
          thing), and dig into that game you've been obsessing over. Sounds like
          a perfect day to us.
        </h3>
      </div>
    );
  }
}

export default ThirdPanel;

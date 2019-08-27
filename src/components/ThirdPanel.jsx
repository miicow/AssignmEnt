import React from 'react';
import data from '../../data.js';
import '../css/style.css';

class ThirdPanel extends React.Component {
  render() {
    const { anchorId } = data.anchorNavigationData.downloadNow;
    const { gameLabel, gameIcon, originLink } = data.titanfall;
    return (
      <div className="panel-container">
        <div className="icon-container-3">
          <span className="icon-text">
            <a href={originLink}>{gameLabel}</a>
          </span>

          <a href={originLink}>
            <img src={gameIcon} alt={gameLabel} className="icon-image" />
          </a>
        </div>
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
        <h5>
          <a href="https://www.origin.com/usa/en-us/store/download">
            Download Origin
          </a>
        </h5>
        <a id={anchorId} />
      </div>
    );
  }
}

export default ThirdPanel;

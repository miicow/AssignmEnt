import React from 'react';
import MediaCarousel from './carousel/MediaCarousel.jsx';
import data from '../../data.js';
import '../css/style.css';

class SecondPanel extends React.Component {
  render() {
    const { anchorId } = data.anchorNavigationData.greatPCGames;
    const { gameLabel, gameIcon, originLink } = data.battlefield;
    return (
      <div className="panel-container">
        <div className="icon-container-2">
          <span className="icon-text">
            <a href={originLink}>{gameLabel}</a>
          </span>

          <a href={originLink}>
            <img src={gameIcon} alt={gameLabel} className="icon-image" />
          </a>
        </div>
        <img
          className="bg-image"
          src="https://data2.origin.com/content/dam/originx/web/app/programs/About/aboutorigin_3840x2160_battlefield1.jpg"
          alt="Battlefield 1"
        />
        <h2>Great PC games</h2>
        <h3>
          Epic RPGs, action-packed shooters, simulation hits - no matter your
          tastes, Origin's got you covered.
        </h3>
        <MediaCarousel gameData={this.props.data} />
        <a id={anchorId} />
      </div>
    );
  }
}

export default SecondPanel;

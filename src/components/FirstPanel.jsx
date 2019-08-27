import React from 'react';
import '../css/style.css';

class FirstPanel extends React.Component {
  render() {
    const { anchorNavigationData, starwars } = this.props.data;
    return (
      <div className="panel-container">
        <div className="icon-container">
          <span className="icon-text">
            <a href={starwars.originLink}>{starwars.gameLabel}</a>
          </span>

          <a href={starwars.originLink}>
            <img
              src={starwars.gameIcon}
              alt={starwars.gameLabel}
              className="icon-image"
            />
          </a>
        </div>
        <img
          className="bg-image"
          src="https://data1.origin.com/content/dam/originx/web/app/programs/About/aboutorigin_3840x2160_SWB.jpg"
          data-src-600px="image-600px.jpg"
          data-src-800px="image-800px.jpg"
          alt=""
        />
        <h1>
          Play great PC games and connect with your friends, all in one place.
        </h1>
        <ul className="anchor-navigation">
          {Object.keys(anchorNavigationData).map(key => {
            return (
              <li key={key}>
                <a href={`#${anchorNavigationData[key].anchorId}`}>
                  {anchorNavigationData[key].displayText}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FirstPanel;

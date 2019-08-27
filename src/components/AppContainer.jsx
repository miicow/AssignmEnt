import React from 'react';
import FirstPanel from './FirstPanel.jsx';
import SecondPanel from './SecondPanel.jsx';
import ThirdPanel from './ThirdPanel.jsx';
import '../css/style.css';
import MediaCaruosel from './carousel/MediaCarousel.jsx';

class AppContainer extends React.Component {
  render() {
    return (
      <div className="app-container">
        {/* <FirstPanel />
        <SecondPanel />
        <ThirdPanel /> */}
        <MediaCaruosel />
      </div>
    );
  }
}

export default AppContainer;

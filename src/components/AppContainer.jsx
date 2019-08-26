import React from 'react';
import FirstPanel from './FirstPanel.jsx';

class AppContainer extends React.Component {
  render() {
    return (
      <div className="app-container">
        <FirstPanel />
        <SecondPanel />
        <ThirdPanel />
      </div>
    );
  }
}

export default AppContainer;

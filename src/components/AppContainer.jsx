import React from 'react';
import FirstPanel from './FirstPanel.jsx';
import SecondPanel from './SecondPanel.jsx';
import ThirdPanel from './ThirdPanel.jsx';
import data from '../../data.js';
import '../css/style.css';

class AppContainer extends React.Component {
  render() {
    return (
      <div className="app-container">
        <FirstPanel data={data} />
        <SecondPanel data={data} />
        <ThirdPanel />
      </div>
    );
  }
}

export default AppContainer;

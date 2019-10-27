import React from 'react';
import '../css/resultbox.css';
import Teambox from '../component/Teambox';
import User from '../component/User';

function Resultbox() {
  return (
    <div className="Resultbox">
      <div className="match-set">
        <div className="match-time">
          <div className="start">
            <span className="start-date">10/15</span> 
            <span className="start-time">01:12</span>
          </div>
          <div className="play-time">
            <span className="play-minute">43</span>분 <span className="play-second">28</span>초
          </div>
        </div>
        <div className="blue-side">
          <div className="game-result">
            <div className="game-result-win">승리</div>
            <div className="result-detail">
              <Teambox></Teambox>
              <User></User>
            </div>
          </div>
        </div>
        <div className="purple-side">
          <div className="game-result">
            <div className="game-result-lose">패배</div>
            <div className="result-detail">
              <Teambox></Teambox>
              <User></User>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resultbox;

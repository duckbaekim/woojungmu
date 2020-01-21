import React, {Component} from 'react';
import '../css/resultbox.css';
import Teambox from '../component/Teambox';
import User from '../component/User';
import * as service from '../component/service';


const Resultbox = ({
	gameNo,
	win,
	firstBlood,
	firstDragon,
	firstBaron,
	firstTower,
	towerKill100,
	towerKill200,
	createDate,
	gameDuration

}) =>{
	let splitCreateDate = createDate.split(' ');
	
	return (
		<div className="Resultbox">
			  <div className="match-set">
				<div className="match-time">
				  <div className="start">
					
					<span className="start-date">{splitCreateDate[0]}</span> 
					<span className="start-time">{splitCreateDate[1]}</span>
				  </div>
				  <div className="play-time">
					<span className="play-minute">{parseInt(gameDuration/60)}</span>분 <span className="play-second">{parseInt(gameDuration%60)}</span>초
				  </div>
				</div>
				<div className="purple-side">
				  <div className="game-result">
				  	  {win==200? 
					<div className="game-result-lose">패배</div> : 
					<div className="game-result-win">승리</div> 
				  }
					<div className="result-detail">
					  <Teambox teamId={200}
								gameNo={gameNo}
								towerKill={towerKill200}
					  >
					  </Teambox>
					  <User gameNo={gameNo}
							teamId={200}
					  ></User>
					</div>
				  </div>
				</div>
				<div className="blue-side">
				  <div className="game-result">
					 {win==100? 
					<div className="game-result-lose">패배</div> : 
					<div className="game-result-win">승리</div>
				  }
					<div className="result-detail">
					  <Teambox teamId={100}
								gameNo={gameNo}
								towerKill={towerKill100}
					  ></Teambox>
					  <User gameNo={gameNo}
							teamId={100}
					  ></User>
					</div>
				  </div>
				</div>
			  </div>
			</div>
	);
	
};



export default Resultbox;

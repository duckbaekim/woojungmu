import React, {Component} from 'react';
import '../css/teambox.css';
import * as service from './service';

class Teambox extends Component{
	
	constructor(props){
		super();
	
		this.state={
			teamId: props.teamId,
			gameNo: props.gameNo,
			towerKill: props.towerKill,
			dragon: [],
			naesher:'',
			totalKill:0,
			goldEarned:0
			
		};
		
	}
			//startDate={startData}
			//startTime={startTime}
			//playMinute={playMinute}
			//playSecond={playSecond}



    fetchTeamInfo = async (teamId, gameNo) => {
		
        const teamInfo = await service.teamInfo(teamId,gameNo);
        //console.log(teamInfo);
		let dragon =[];
		if(teamInfo.data.dragon){
			dragon = teamInfo.data.dragon.split(',');
		}
		
		
		this.setState({
			totalKill: teamInfo.data.kills,
			dragon: dragon,
			naesher: teamInfo.data.firstBaron,
			goldEarned: teamInfo.data.goldEarned
		});
	
		
    }
	
	teamArea = (teamNo) =>{
		if(teamNo == 100){
			return <div className="team-camp"><img src="/images/BlueCamp.png" alt='BlueCamp'></img><div className="label-camp">블루 진영</div></div>
		}else{
			return <div className="team-camp"><img src="/images/PurpleCamp.png" alt='PurpleCamp'></img><div className="label-camp">레드 진영</div></div>
		}
	}
	
	
	dragonList = (dragon) => {
		const dragonArr = dragon.split(',');
		let drx=[];
		for(let i; i<dragonArr.length; i++){
			if(dragonArr[i]=='EARTH_DRAGON'){
				drx.push(<img src="/images/Mountain_Drake.png"></img>)
			}else if(dragonArr[i]=='WATER_DRAGON'){
				drx.push(<img src="/images/Ocean_Drake.png"></img>)
			}else if(dragonArr[i]=='FIRE_DRAGON'){
				drx.push(<img src="/images/Infernal_Drake.png"></img>)
			}else if(dragonArr[i]=='AIR_DRAGON'){
				drx.push(<img src="/images/Cloud_Drake.png"></img>)
			}
		}
		return (
			<div className="drakes">
			{drx}
			</div>
			)
		
		
		
	}

	componentDidMount() {
		const {teamId, gameNo} = this.state;
        this.fetchTeamInfo(teamId, gameNo);
		
		
    }
	

		//? (<img src="/images/BlueCamp.png" alt='BlueCamp'></img><div className="label-camp">블루 진영</div>)
			 //: (<img src="/images/PurpleCamp.png" alt='PurpleCamp'></img><div className="label-camp">레드 진영</div>)

render(){
	
	const {teamId, gameNo, towerKill, dragon, naesher, totalKill, goldEarned } = this.state;
  return (
    <div className="teambox">
	  {this.teamArea(teamId)}
	{teamId}
      <div className="kill-gold">
        <div className="total-kills">
          <div className="label">Kill</div>
          <div className="kill-score">{totalKill}</div>
        </div>
        <div className="total-gold">
          <div className="label">GOLD</div>
          <div className="gold-score">{goldEarned}</div>
        </div>
      </div>
      <div className="total-dragons">
        <div className="label">드래곤</div>
        //<div className="drakes">
        //  <img src="/images/Mountain_Drake.png"></img>
        //  <img src="/images/Infernal_Drake.png"></img>
        //  <img src="/images/Infernal_Drake.png"></img>
        //  <img src="/images/Infernal_Drake.png"></img>
        //  <img src="/images/Cloud_Drake.png"></img>
        //</div>
		
		{this.dragonList(dragon)}
        <div className="elders">
          <img src="/images/Elder_Dragon.png"></img>
          <img src="/images/Elder_Dragon.png"></img>
        </div>
      </div>
      <div className="total-barons">
        <div className="label">내셔 남작</div>
        <img src="/images/Baron_Nashor.png"></img>
        <img src="/images/Baron_Nashor.png"></img>
      </div>
      <div className="total-turrets">
        <div className="label">파괴한 포탑</div>
        <div className="turret-score">{towerKill}</div>
      </div>
    </div>
  );
}
}

export default Teambox;

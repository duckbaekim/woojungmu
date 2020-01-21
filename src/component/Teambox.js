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
			dragon: '',
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
	
	
	dragonList = (dragon:string) => {
			let drx=[];
			let elders=[];
			for(let i=0; i<dragon.length; i++){
				if(dragon[i]=='EARTH_DRAGON'){
					drx.push(<img src="/images/Mountain_Drake.png"></img>)
				}else if(dragon[i]=='WATER_DRAGON'){
					drx.push(<img src="/images/Ocean_Drake.png"></img>)
				}else if(dragon[i]=='FIRE_DRAGON'){
					drx.push(<img src="/images/Infernal_Drake.png"></img>)
				}else if(dragon[i]=='AIR_DRAGON'){
					drx.push(<img src="/images/Cloud_Drake.png"></img>)
				}
				if(dragon[i]=='ELDER_DRAGON'){
					elders.push(<img src="/images/Elder_Dragon.png"></img>)
				}
			}
			
			if(drx.length==0 && elders.length==0){
				drx.push(<img src="/images/noData.png"></img>)
			}
			      
			return (
				<div className="total-dragons"> 
					<div className="label">드래곤</div>
					<div className="drakes">
						{drx}
					</div>
					<div className="elders">
						{elders}
					</div>
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
			{this.dragonList(dragon)}
      <div className="total-barons">
        <div className="label">내셔 남작</div>
		{
			teamId == naesher ?
			<img src="/images/Baron_Nashor.png"></img>
			: <img src="/images/noData.png"></img>
		}
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

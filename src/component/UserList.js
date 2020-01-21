import React,{Component} from 'react';
import '../css/user.css';
import * as service from './service';


//class ResultboxList extends Component{
//	
//	getInfo = async (id) =>{
//		const result = await service.getId(id);
//		console.log(result);
//	}
//
//	render() {
//		  return (
//			<div className="resultboxList">
//				<Resultbox />
//				<Resultbox />
//				<Resultbox />
//				<Resultbox />
//				<Resultbox />
//			</div>
//		  );
//	}
//
//}

const ResultboxList = ({totalList}) => {
	const resultboxList = totalList.map(
		(list, i)=>(
				<Resultbox 
					gameNo={list.gameNo} 
					win={list.win}
					firstBlood={list.firstBlood}
					firstDragon={list.firstDragon}
					firstBaron={list.firstBaron}
					firstTower={list.firstTower} 
					towerKill100={list.towerKill100}
					towerKill200={list.towerKill200} 
					createDate={list.createDate}
					gameDuration={list.gameDuration}
					key={i}
				/>
			)
	);
	
	return (
		<div className="resultboxList">
			{resultboxList}
		</div>
	);
};



export default ResultboxList;

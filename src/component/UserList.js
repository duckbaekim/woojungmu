import React,{Component} from 'react';
import '../css/user.css';
import User from '../component/User';
import * as service from './service';

class UserList extends Component{

    constructor(props){
	    super();
		
		this.state={
			gameNo: props.gameNo,
			teamId : props.teamId,
			user: []
		}
	}
	
	fetchUserInfo = async (teamId, gameNo) => {
		const userInfo = await service.userInfo(teamId, gameNo);
		console.log(userInfo);
		
		for(let i=0; i< userInfo.length; i ++){
			
		}
		this.setState({
			user : userInfo
		});
	}		
	
	componentDidMount(){
		const {teamId, gameNo} = this.state;
		this.fetchUserInfo(teamId, gameNo);
	}
	
	
render(){
	

	return (
		<div className="userList">
			
		</div>
	);
};

}

export default UserList;

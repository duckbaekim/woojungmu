import axios from 'axios';
const baseUrl = 'https://dbkim.cf/riot/';


export function getId(id){
	return axios.get(baseUrl+"totalCnt/"+id);
}


export function totalList(){
	return axios.get(baseUrl+"totalList");
}



export function teamInfo(teamId, gameNo){
	return axios.get(baseUrl+"teamInfo?teamId="+teamId+"&gameNo="+gameNo);
}


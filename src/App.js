import React, {Component} from 'react';
import Wheader from './component/Wheader.js';
import Search from './component/Search.js'
import ResultboxList from './component/ResultboxList.js'
import Addview from './component/Addview.js'
import * as service from './component/service';

import './App.css';

class App extends Component{
	
	constructor(props){
		super();
		this.state={
			totalList: [],
			fetching: false,
			searchVal:null
		};
	}
			//startDate={startData}
			//startTime={startTime}
			//playMinute={playMinute}
			//playSecond={playSecond}



    fetchPostInfo = async (num) => {
		this.setState({fetching: true});
        const totalResults = await service.totalList();

		this.setState({
			totalList: totalResults.data,
			fetching: false
		});
		
    }

	componentDidMount() {
        this.fetchPostInfo(1);
		
		
    }
	
	componentWillUnmount(){
		
	}
	


    

render() {

	const {fetching, searchVal, totalList} = this.state;
  return (

    <div className="App">
        <Wheader/>
        <Search
			searchVal= {searchVal}
			disabled={fetching}
		/>
        <ResultboxList
			totalList={totalList}
		/>
        <Addview/>
      
    </div>
  );
}

}

export default App;

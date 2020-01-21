import React,{Component} from 'react';
import '../css/user.css';
import * as service from './service';


class User extends Component{
	constructor(props){
		super();

		this.state={
			gameNo : props.gameNo,
			teamId : props.teamId,
			level : 0,
			spell : [],
			rune : [],
			nickname : "",
			kill : 0,
			death : 0,
			assistant : 0,
			mvp : 0,
			tier : "",
			cs : 0,
			damage : 0,
			itemList : [],
			champion : 0
		};
	
	}
	
		fetchUserInfo = async (teamId, gameNo) => {
		
        const userInfo = await service.userInfo(teamId,gameNo);
		if(gameNo==99){
			console.log(userInfo);
		}
	
		
    }
	
		componentDidMount() {
		const {teamId, gameNo} = this.state;
        this.fetchUserInfo(teamId, gameNo);
		
		
    }
	

render(){
  return (
    <div className="user">
      <div className="user-detail">
        <div className="champion">
          <img src="/images/Fiora.png"></img>
          <div className="level">18</div>
        </div>
        <div className="spell-rune">
          <div className="spell">
            <img src="/images/heal.png"></img>
            <img src="/images/flash.png"></img>
          </div>
          <div className="rune">
            <img className="rune-keystone" src="/images/dark_harvest.png"></img>
            <img className="rune-secondary" src="/images/precision.png"></img>
          </div>
        </div>
        <div className="nickname-kda">
          <div className="nickname">소환사이름소환사</div>
          <div className="kda">20/12/9</div>
          <div className="mvp">MVP</div>
        </div>
        <div className="tier">P4</div>
        <div className="cs-damage">
          <div className="cs">CS 142 (3.8)</div>
          <div className="damage">
            <div className="value">피해량 99,999</div>
            <div className="graph">
              <div className="graph-bar"></div>
            </div>
          </div>
        </div>
        <div className="items-trinket">
          <div className="items">
            <div className="top-row">
              <div className="item item-1">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-2">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-3">
                <img src="/images/flash.png"></img>
              </div>
            </div>
            <div className="bottom-row">
              <div className="item item-4">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-5">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-6">
                <img src="/images/flash.png"></img>
              </div>
            </div>
          </div>
          <div className="trinket">
            <img src="/images/heal.png"></img>
          </div>
        </div>
      </div>

      <div className="user-detail">
        <div className="champion">
          <img src="/images/Fiora.png"></img>
          <div className="level">18</div>
        </div>
        <div className="spell-rune">
          <div className="spell">
            <img src="/images/heal.png"></img>
            <img src="/images/flash.png"></img>
          </div>
          <div className="rune">
            <img className="rune-keystone" src="/images/dark_harvest.png"></img>
            <img className="rune-secondary" src="/images/precision.png"></img>
          </div>
        </div>
        <div className="nickname-kda">
          <div className="nickname">소환사이름소환사</div>
          <div className="kda">20/12/9</div>
          <div className="mvp">MVP</div>
        </div>
        <div className="tier">P4</div>
        <div className="cs-damage">
          <div className="cs">CS 142 (3.8)</div>
          <div className="damage">
            <div className="value">피해량 99,999</div>
            <div className="graph">
              <div className="graph-bar"></div>
            </div>
          </div>
        </div>
        <div className="items-trinket">
          <div className="items">
            <div className="top-row">
              <div className="item item-1">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-2">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-3">
                <img src="/images/flash.png"></img>
              </div>
            </div>
            <div className="bottom-row">
              <div className="item item-4">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-5">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-6">
                <img src="/images/flash.png"></img>
              </div>
            </div>
          </div>
          <div className="trinket">
            <img src="/images/heal.png"></img>
          </div>
        </div>
      </div>

      <div className="user-detail">
        <div className="champion">
          <img src="/images/Fiora.png"></img>
          <div className="level">18</div>
        </div>
        <div className="spell-rune">
          <div className="spell">
            <img src="/images/heal.png"></img>
            <img src="/images/flash.png"></img>
          </div>
          <div className="rune">
            <img className="rune-keystone" src="/images/dark_harvest.png"></img>
            <img className="rune-secondary" src="/images/precision.png"></img>
          </div>
        </div>
        <div className="nickname-kda">
          <div className="nickname">소환사이름소환사</div>
          <div className="kda">20/12/9</div>
          <div className="mvp">MVP</div>
        </div>
        <div className="tier">P4</div>
        <div className="cs-damage">
          <div className="cs">CS 142 (3.8)</div>
          <div className="damage">
            <div className="value">피해량 99,999</div>
            <div className="graph">
              <div className="graph-bar"></div>
            </div>
          </div>
        </div>
        <div className="items-trinket">
          <div className="items">
            <div className="top-row">
              <div className="item item-1">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-2">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-3">
                <img src="/images/flash.png"></img>
              </div>
            </div>
            <div className="bottom-row">
              <div className="item item-4">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-5">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-6">
                <img src="/images/flash.png"></img>
              </div>
            </div>
          </div>
          <div className="trinket">
            <img src="/images/heal.png"></img>
          </div>
        </div>
      </div>

      <div className="user-detail">
        <div className="champion">
          <img src="/images/Fiora.png"></img>
          <div className="level">18</div>
        </div>
        <div className="spell-rune">
          <div className="spell">
            <img src="/images/heal.png"></img>
            <img src="/images/flash.png"></img>
          </div>
          <div className="rune">
            <img className="rune-keystone" src="/images/dark_harvest.png"></img>
            <img className="rune-secondary" src="/images/precision.png"></img>
          </div>
        </div>
        <div className="nickname-kda">
          <div className="nickname">소환사이름소환사</div>
          <div className="kda">20/12/9</div>
          <div className="mvp">MVP</div>
        </div>
        <div className="tier">P4</div>
        <div className="cs-damage">
          <div className="cs">CS 142 (3.8)</div>
          <div className="damage">
            <div className="value">피해량 99,999</div>
            <div className="graph">
              <div className="graph-bar"></div>
            </div>
          </div>
        </div>
        <div className="items-trinket">
          <div className="items">
            <div className="top-row">
              <div className="item item-1">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-2">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-3">
                <img src="/images/flash.png"></img>
              </div>
            </div>
            <div className="bottom-row">
              <div className="item item-4">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-5">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-6">
                <img src="/images/flash.png"></img>
              </div>
            </div>
          </div>
          <div className="trinket">
            <img src="/images/heal.png"></img>
          </div>
        </div>
      </div>

      <div className="user-detail">
        <div className="champion">
          <img src="/images/Fiora.png"></img>
          <div className="level">18</div>
        </div>
        <div className="spell-rune">
          <div className="spell">
            <img src="/images/heal.png"></img>
            <img src="/images/flash.png"></img>
          </div>
          <div className="rune">
            <img className="rune-keystone" src="/images/dark_harvest.png"></img>
            <img className="rune-secondary" src="/images/precision.png"></img>
          </div>
        </div>
        <div className="nickname-kda">
          <div className="nickname">소환사이름소환사</div>
          <div className="kda">20/12/9</div>
          <div className="mvp">MVP</div>
        </div>
        <div className="tier">P4</div>
        <div className="cs-damage">
          <div className="cs">CS 142 (3.8)</div>
          <div className="damage">
            <div className="value">피해량 99,999</div>
            <div className="graph">
              <div className="graph-bar"></div>
            </div>
          </div>
        </div>
        <div className="items-trinket">
          <div className="items">
            <div className="top-row">
              <div className="item item-1">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-2">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-3">
                <img src="/images/flash.png"></img>
              </div>
            </div>
            <div className="bottom-row">
              <div className="item item-4">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-5">
                <img src="/images/flash.png"></img>
              </div>
              <div className="item item-6">
                <img src="/images/flash.png"></img>
              </div>
            </div>
          </div>
          <div className="trinket">
            <img src="/images/heal.png"></img>
          </div>
        </div>
      </div>
     
    </div>
  );
}
}


export default User;

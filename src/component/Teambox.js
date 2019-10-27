import React from 'react';
import '../css/teambox.css';

function Teambox() {
  return (
    <div className="teambox">
      <div className="team-camp">
        <img src="/images/BlueCamp.png"></img>
        <div className="label-camp">블루 진영</div>
      </div>
      <div className="kill-gold">
        <div className="total-kills">
          <div className="label">Kill</div>
          <div className="kill-score">57</div>
        </div>
        <div className="total-gold">
          <div className="label">GOLD</div>
          <div className="gold-score">90879</div>
        </div>
      </div>
      <div className="total-dragons">
        <div className="label">드래곤</div>
        <div className="drakes">
          <img src="/images/Mountain_Drake.png"></img>
          <img src="/images/Infernal_Drake.png"></img>
          <img src="/images/Infernal_Drake.png"></img>
          <img src="/images/Infernal_Drake.png"></img>
          <img src="/images/Cloud_Drake.png"></img>
        </div>
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
        <div className="turret-score">9</div>
      </div>
    </div>
  );
}

export default Teambox;

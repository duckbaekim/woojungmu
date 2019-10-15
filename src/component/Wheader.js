import React from 'react';
import '../css/wheader.css';
// import main_logo from '../images/main_logo.png'

function Wheader() {
  return (
    <div className="wheader">
      <div className="nav-bar">
        <div className="nav-leftblank"></div>
        <div className="nav-title">
          <p>우리들의 내전 이야기</p>
          <div className="logo"><img src="/images/main_logo.png" /></div>
        </div>
        <div className="members">
          <p href="" className="sign-up">회원가입</p>
          <p href="" className="sign-in">로그인</p>
        </div>
      </div>
    </div>
  );
}

export default Wheader;

import React from 'react';
import './Leaderboard.css';
function Leaderboard() {
  return (
<>
  <div className="cb-logo-container">
    {/* <img src="ASSETS\CB_LOGO_BW 1.svg" alt="">
      <p>CELESTIAL BISCUIT IGDTUW</p>     */}{" "}
    <img src="ASSETS\Frame 21.svg" className="cb-logo-container-img" alt="" />
  </div>
  <div className="nav-items-container">
    <ul>
      <li>
        <a href="#" className="ayd active">
          Leaderboard
        </a>
      </li>
      <li>
        <a href="doubts.html" className="leaderboard">
          Ask Your Doubts
        </a>
      </li>
      <li>
        <a href="#" className="about">
          About
        </a>
      </li>
      <li>
        <a href="quiz.html" className="quiz">
          Quiz
        </a>
      </li>
    </ul>
  </div>
  <div className="student-name-and-arrow-container">
    <p>Student Name</p>
    <a href="#">
      <img src="ASSETS\Keyboard arrow down.svg" alt="" />
    </a>
    {/* <img src="ASSETS\Navbar_Down_Arrow.svg" alt="">  */}
    <img className="profile-photo" src="ASSETS\10.svg" alt="" />
  </div>
  <p className="header">Leaderboard</p>
  <div className="top">
    <div className="first">
      <div className="first-items">
        <img src="ASSETS\Leaderboard\10.jpg" className="leader-pic" alt="" />
        <div className="details">
          <p className="name">#1 Student Name</p>
          <p className="info">ECE, 2024</p>
        </div>
        <div className="total_answered">
          <div className="total_answered_text">
            <p className="ta">Total Answered</p>
            <p className="ta_num">12</p>
          </div>
        </div>
        <div className="total_questions">
          <div className="total_question_text">
            <p className="tq">Total Questions</p>
            <p className="tq_num">12</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="ranking">
    <div className="grey">
      <div className="one">
        <div className="one-contents">
          <div className="one-items">
            <div className="name-pos">
              <div className="pos">
                <p className="posnum">1</p>
              </div>
              <p className="one-name">Student Name</p>
            </div>
            <div className="info">
              <p className="branch">ECE</p>
              <p className="year">2024</p>
            </div>
            <div className="points">
              <p>53462</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rem">
        <div className="rem-contents">
          <div className="rem-items">
            <div className="name-pos">
              <div className="pos">
                <p className="posnum">2</p>
              </div>
              <p className="rem-name">Student Name</p>
            </div>
            <div className="info">
              <p className="branch">ECE</p>
              <p className="year">2024</p>
            </div>
            <div className="points">
              <p>53462</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rem">
        <div className="rem-contents">
          <div className="rem-items">
            <div className="name-pos">
              <div className="pos">
                <p className="posnum">3</p>
              </div>
              <p className="rem-name">Student Name</p>
            </div>
            <div className="info">
              <p className="branch">ECE</p>
              <p className="year">2024</p>
            </div>
            <div className="points">
              <p>53462</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rem">
        <div className="rem-contents">
          <div className="rem-items">
            <div className="name-pos">
              <div className="pos">
                <p className="posnum">4</p>
              </div>
              <p className="rem-name">Student Name</p>
            </div>
            <div className="info">
              <p className="branch">ECE</p>
              <p className="year">2024</p>
            </div>
            <div className="points">
              <p>53462</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rem">
        <div className="rem-contents">
          <div className="rem-items">
            <div className="name-pos">
              <div className="pos">
                <p className="posnum">5</p>
              </div>
              <p className="rem-name">Student Name</p>
            </div>
            <div className="info">
              <p className="branch">ECE</p>
              <p className="year">2024</p>
            </div>
            <div className="points">
              <p>53462</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
}

export default Leaderboard

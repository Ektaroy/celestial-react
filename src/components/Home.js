import React from 'react';
import './Home.css';
function Home() {
  return (
    <>
  <header className="header">
    <div className="left">
      <img src="Frame 21.png" alt="" />
      <ul className="navbar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="doubts.html">Ask your doubts</a>
        </li>
        <li>
          <a href="Leaderboard.html">LeaderBoard</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="quiz.html">Quiz</a>
        </li>
      </ul>
      <a href="signup.html">
        <button className="btn">Sign up</button>
      </a>
      <a href="sign-in.html">
        <button className="btn">Sign in</button>
      </a>
    </div>
  </header>
  {/* <div class="leftframe"> */}
  <div className="container1">
    <img src="leftframe.jpg" alt="" />
  </div>
  <div className="container">
    <h1>Welcome to Ask Your Seniors</h1>
    <h3>One place for all your queries</h3>
  </div>
  <div className="container2">
    <img src="a1.jpg" alt="" />
  </div>
  {/* <div>
  <img src="C:\Users\pahwa\OneDrive\Desktop\b.jpeg" alt="">
    </div>
   */}
</>

  );
}

export default Home

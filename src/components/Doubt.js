import React from 'react'

function Doubt() {
  return (
<>
<div className="complete">
  <div className="left-border">
    {/* <img class="border-img" src="assets\Frame 4.svg" alt=""> */}
  </div>
  <div className="right-area">
    <div className="nav-container">
      <div className="cb-logo-container">
        {/* <img src="assets\CB_LOGO_BW 1.svg" alt="">
        <p>CELESTIAL BISCUIT IGDTUW</p> */}
        <img
          src="src\assets\Frame 21.svg"
          className="cb-logo-container-img"
          alt=""
        />
      </div>
      <div className="nav-items-container">
        <ul>
          <li>
           <a href="#" className="ayd">
              Ask Your Doubts
              </a>
          </li>
          <li>
           <a href="Leaderboard.html" className="leaderboard">
              Leaderboard
              </a>
          </li>
          <li>
            <a href="" className="about">
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
      <div className="profile-container">
        <div className="student-name-and-arrow-container">
          <p>Student Name</p>
          <img src="src\assets\Keyboard arrow down.svg" alt="" />
          {/* <img src="assets\Navbar_Down_Arrow.svg" alt=""> */}
        </div>
        <img src="src\assets\10.svg" alt="" />
      </div>
    </div>
    <form action="">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Category"
          className="search-bar"
        />
        {/* <span class="icon-position">
      <img src="assets\Vector.svg">
    </span> */}
        <button className="search-category-button">
          <p>Category</p>
          <img src="src\assets\Category_Button_Arrow_Vector.svg" alt="" />
        </button>
      </div>
    </form>
    <div className="post-doubt-container">
      <input
        type="text"
        className="post-doubt-input-box"
        placeholder="Ask Your Doubt"
      />
      <div className="post-doubt-button-container">
        <button className="post-doubt-category-button">
          <p>Category</p>
          <img src="src\assets\Category_Button_Arrow_Vector.svg" alt="" />
        </button>
        <button className="post-doubt-post-button">
          <p>Post</p>
        </button>
      </div>
    </div>
    <div className="main-container">
      <div className="buttons-container">
        <button className="question-section-button">
          <p>All Questions</p>
        </button>
        <button className="question-section-button">
          <p>Your Questions</p>
        </button>
        <button className="question-section-button">
          <p>Your Answers</p>
        </button>
      </div>
      {/* <div class="left-margin"> */}
      <div className="question-grey-container">
        <div className="question-main-container">
          <div className="info-container">
            <div className="student-info-container">
              <img src="src\assets\10.svg" alt="" />
              <div className="student-info">
                <p className="name">Student Name</p>
                <p className="branch-year">ECE, 2024</p>
              </div>
            </div>
            <div className="category-like-container">
              <div className="category">
                <p>Programming</p>
              </div>
              <img src="src\assets\Favorite.svg" alt="" />
            </div>
          </div>
          <div className="question">
            <p>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis vel tristique
              orci. Nam neque leo, rutrum et nulla quis, ullamcorper varius
              nisl. Aliquam elementum tortor a nibh maximus, id porta est
              accumsan.
            </p>

            <div className="container question ">
                <p className="myfirst "></p>
              </div>

          </div>
          {/* <a href=""> */}
            <div className="answer-container">
              <img src="src\assets\Message.svg" alt="" />
              <button className="post-doubt-post-button"  id="answerC" onClick={popUp}>
          <p>Answer</p>
          </button>
              <p>Other Answers</p>
            </div>
          {/* </a> */}
        </div>
      </div>
      {/* <div class="left-margin"> */}
      <div className="question-grey-container">
        <div className="question-main-container">
          <div className="info-container">
            <div className="student-info-container">
              <img src="src\assets\10.svg" alt="" />
              <div className="student-info">
                <p className="name">Student Name</p>
                <p className="branch-year">ECE, 2024</p>
              </div>
            </div>
            <div className="category-like-container">
              <div className="category">
                <p>Programming</p>
              </div>
              <img src="src\assets\Favorite.svg" alt="" />
            </div>
          </div>
          <div className="question">
            <p>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis vel tristique
              orci. Nam neque leo, rutrum et nulla quis, ullamcorper varius
              nisl. Aliquam elementum tortor a nibh maximus, id porta est
              accumsan.
            </p>
          </div>
          <a href="">
            <div className="answer-container">
              <img src="src\assets\Message.svg" alt="" />
              <p>Answers</p>
            </div>
          </a>
        </div>
      </div>
      {/* <div class="left-margin"> */}
      <div className="question-grey-container">
        <div className="question-main-container">
          <div className="info-container">
            <div className="student-info-container">
              <img src="src\assets\10.svg" alt="" />
              <div className="student-info">
                <p className="name">Student Name</p>
                <p className="branch-year">ECE, 2024</p>
              </div>
            </div>
            <div className="category-like-container">
              <div className="category">
                <p>Programming</p>
              </div>
              <img src="src\assets\Favorite.svg" alt="" />
            </div>
          </div>
          <div className="question">
            <p>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis vel tristique
              orci. Nam neque leo, rutrum et nulla quis, ullamcorper varius
              nisl. Aliquam elementum tortor a nibh maximus, id porta est
              accumsan.
            </p>
          </div>
          <a href="">
            <div className="answer-container">
              <img src="src\assets\Message.svg" alt="" />
              <p>Answers</p>
            </div>
          </a>
        </div>
      </div>
      {/* <div class="left-margin"> */}
      <div className="question-grey-container">
        <div className="question-main-container">
          <div className="info-container">
            <div className="student-info-container">
              <img src="src\assets\10.svg" alt="" />
              <div className="student-info">
                <p className="name">Student Name</p>
                <p className="branch-year">ECE, 2024</p>
              </div>
            </div>
            <div className="category-like-container">
              <div className="category">
                <p>Programming</p>
              </div>
              <img src="src\assets\Favorite.svg" alt="" />
            </div>
          </div>
          <div className="question">
            <p>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis vel tristique
              orci. Nam neque leo, rutrum et nulla quis, ullamcorper varius
              nisl. Aliquam elementum tortor a nibh maximus, id porta est
              accumsan.
            </p>
          </div>
          <a href="">
            <div className="answer-container">
              <img src="src\assets\Message.svg" alt="" />
              <p>Answers</p>
            </div>
          </a>
        </div>
      </div>
      <div className="chatbot-container">
        <img src="src\assets\Message_chatbot.svg" alt="" />
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default Doubt
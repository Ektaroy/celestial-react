/* eslint-disable */
import React, { useState } from "react";
import Answer from "./Answer";


function Question(props) {
  const [isViewAnswersButtonActive, setIsViewAnswersButton] = useState(false);

  function handleViewAnswersButtonClick(event) {
    // alert("Answer button clicked!");
    setIsViewAnswersButton(!isViewAnswersButtonActive);
    // console.log(isViewAnswersButtonActive);
    event.preventDefault();
  }

  const [isAnsweringActive, setIsAnsweringActive] = useState(false);

  const [answer, setAnswer] = useState({
    fName: "", lName: "", branch: "", year: "", category: "", content: ""
  });

  const [displayAnswer, setDisplayAnswer] = useState({
    fName: "", lName: "", branch: "", year: "", category: "", content: ""
  });

  function handleAnswersButtonClick(event) {
    setIsAnsweringActive(!isAnsweringActive);
    // alert("Answer button clicked");
    event.preventDefault();
  }

  function handleAnswersButtonClickAndSubmitAnswer(event) {
    setDisplayAnswer(answer);
    setIsViewAnswersButton(true);
    // props.onAdd(answer);
    setAnswer({
      fName: "", lName: "", branch: "", year: "", category: "", content: ""
    });
    // console.log(isActive);
    setIsAnsweringActive(!isAnsweringActive);
    
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setAnswer(prevAnswer => {
      return {
        ...prevAnswer,
        [name]: value
      };
    });
  }


  return (
    <div className="question-grey-container">
      <div className="question-main-container">

        <div className="info-container">
          <div className="student-info-container">
            <img src="../ASSETS/10.svg" alt="" />
            <div className="student-info">
              <p className="name">{props.fName} {props.lName}</p>
              <p className="branch-year">{props.branch}, {props.year}</p>
            </div>
          </div>
          <div className="category-like-container">
            <div className="category">
              <p>{props.category}</p>
            </div>
            <img src="../ASSETS/Favorite.svg" alt="" />
          </div>
        </div>

        <div className="question">
          <p>{props.content}</p>
        </div>

        <a href="" onClick={handleAnswersButtonClick}>
          <div className="answer-container">
            <img src="../ASSETS/Message.svg" alt="" />
            <p>Answers</p>
          </div>
        </a>

        <a href="" onClick={handleViewAnswersButtonClick}>
          <div className="answer-container">
            <img src="../ASSETS/Message.svg" alt="" />
            <p>View Answers</p>
          </div>
        </a>

        {isAnsweringActive ?
          <div className="form-for-answer">
            <form action="">
              <label for="">First Name</label> <br />
              <input type="text" onChange={handleChange} value={answer.fName} name="fName" /> <br />

              <label for="">Last Name</label> <br />
              <input type="text" onChange={handleChange} value={answer.lName} name="lName" /> <br />

              <label for="">Branch</label><br />
              <input type="text" onChange={handleChange} value={answer.branch} name="branch" /> <br />

              <label for="">Year</label><br />
              <input type="text" onChange={handleChange} value={answer.year} name="year" /> <br />

              <label for="">Category</label><br />
              <input type="text" onChange={handleChange} value={answer.category} name="category" /> <br />

              <label for="">Your Answer</label><br />
              <textarea name="content" onChange={handleChange} value={answer.content} cols="30" rows="2"></textarea> <br />

              <button onClick={handleAnswersButtonClickAndSubmitAnswer}>Submit</button>
            </form>
          </div>

          : null
        }

      </div>

      <br />        {/*this is giving extra padding to grey container at bottom*/}
      {isViewAnswersButtonActive ? <Answer 
        fName = {displayAnswer.fName}
        lName = {displayAnswer.lName}
        branch = {displayAnswer.branch}
        year = {displayAnswer.year}
        category = {displayAnswer.category}
        content = {displayAnswer.content}
      /> : null}
      {/* {isAnswersButtonActive? <div><Answer /><Answer /></div> : null} */}
      {/* <Answer />
            <Answer /> */}
    </div>
  );
}

export default Question;

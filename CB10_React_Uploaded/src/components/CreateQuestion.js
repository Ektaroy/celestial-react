/* eslint-disable */
import React, { useState } from "react";

function CreateQuestion(props) {
    const [isActive, setIsActive] = useState(false);

    const [question, setQuestion] = useState({
        fName: "", lName: "", branch: "", year: "", category: "", content: ""
    });

    function handlePopUpClickAndSubmitQuestion(event) {
        props.onAdd(question);
        setQuestion({
            fName: "", lName: "", branch: "", year: "", category: "", content: ""
        });
        console.log(isActive);
        setIsActive(!isActive);
        event.preventDefault();
    }

    function handlePopUpClick(event) {
        console.log(isActive);
        setIsActive(!isActive);  
    }



    function handleChange(event) {
        const { name, value } = event.target;

        setQuestion(prevQuestion => {
            return {
                ...prevQuestion,
                [name]: value
            };
        });
    }



    return (
        <div>
            <div className={"pop-up-container" + (isActive ? "open-popup" : "")} id="popup">
                <form action="">
                    <label for="">First Name</label> <br />
                    <input type="text" onChange={handleChange} value={question.fName} name="fName" /> <br />

                    <label for="">Last Name</label> <br />
                    <input type="text" onChange={handleChange} value={question.lName} name="lName" /> <br />

                    <label for="">Branch</label><br />
                    <input type="text" onChange={handleChange} value={question.branch} name="branch" /> <br />

                    <label for="">Year</label><br />
                    <input type="text" onChange={handleChange} value={question.year} name="year" /> <br />

                    <label for="">Category</label><br />
                    <input type="text" onChange={handleChange} value={question.category} name="category" /> <br />

                    <label for="">Doubt</label><br />
                    <textarea name="content" onChange={handleChange} value={question.content} cols="30" rows="2"></textarea> <br />

                    <button onClick={handlePopUpClickAndSubmitQuestion}>Submit</button>
                </form>
            </div>


            <div className="post-doubt-container">
                <input type="text" className="post-doubt-input-box" placeholder="Ask Your Doubt" />

                <div className="post-doubt-button-container">
                    <button className="post-doubt-category-button">
                        <p>Category</p><img src="../ASSETS/Category_Button_Arrow_Vector.svg" alt="" />
                    </button>

                    <button className="post-doubt-post-button" onClick={handlePopUpClick}>
                        <p>Post</p>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default CreateQuestion;
import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';
function Quiz() {
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const[score,setScore]=useState(0);
    const[clickOption,setClickOption]=useState(0);
    const[showResult,setShowResult]=useState(false);
    const changeQuestion=()=>{
        updateScore();
        if(currentQuestion < QuizData.length-1){
        setCurrentQuestion(currentQuestion+1);
        setClickOption(0);
        }else{

            setShowResult(true);
        }
    }
    const updateScore=()=>{
        if(clickOption===QuizData[currentQuestion].answer)
        {
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickOption(0);
        setScore(0);
    }
  return (
    <div>
      <p className='heading-txt'>Quiz APP</p>
      <div className='container'>
        {showResult?(
            <QuizResult score={score} TotalScore={QuizData.length} tryAgain={resetAll}/>

        ):(
            <>
        <div className='question'>
           {/* <span id='question-number'>{currentQuestion+1}</span> */}
           <span id='question-text'>{QuizData[currentQuestion].question}</span>

           
        </div>
        <div className='option-container'>
          {QuizData[currentQuestion].options.map((Option,i)=>{
            return(
                <button className={`option-btn ${
                    clickOption=== i+1?"checked":null
                }`}
                key={i}
                onClick={()=>setClickOption(i+1)}>
                   {Option}
                </button>
            )
          })}
        </div>
        <input type='button' value='next' id='next-button' onClick={changeQuestion}/>
        </>)}
      </div>
    </div>
  )
}

export default Quiz

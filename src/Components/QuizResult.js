import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
      your Score:{props.score}<br/>
      Total Score:{props.TotalScore}
    </div>
    <button id='next-button' onClick={props.tryAgain}>tryAgain</button>
    </>
  )
}

export default QuizResult

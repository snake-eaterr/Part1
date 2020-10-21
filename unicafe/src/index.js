import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handlerFunction, text}) => <button onClick={handlerFunction}>{text}</button>



const Statistic = ({text, value}) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </>
  )
}



const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return (
      <div> No feedback given</div>
    )
  }

  return (
    <div>
      <table>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={((good) + (bad * -1)) / total} />
        <Statistic text="positive" value={good / total * 100} />
      </table>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handlerFunction={handleGood} text='good' />
      <Button handlerFunction={handleNeutral} text='neutral' />
      <Button handlerFunction={handleBad} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
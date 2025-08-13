import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const StatisticLine = ({ text, number }) => <tr><td>{text}</td><td>{number}</td></tr>

const Button = ({ onClick, text }) => 
  <button onClick={() => onClick(prev => prev + 1)}>
    {text}
  </button>

const Statistics = (props) => {
  if (props.valuesSummed < 1) {
    return <p>No feedback given</p>
  }
  const percentage = (props.good / props.valuesSummed * 100).toFixed(1);
  const average = ((props.good - props.bad) / props.valuesSummed).toFixed(1)

  return (
  <div>
  <StatisticLine text='good' number={props.good}></StatisticLine>
  <StatisticLine text='neutral' number={props.neutral}></StatisticLine>
  <StatisticLine text='bad' number={props.bad}></StatisticLine>
  <StatisticLine text='all' number={props.valuesSummed}></StatisticLine>
  <StatisticLine text='average' number={average}></StatisticLine>
  <StatisticLine text='positive' number={percentage}></StatisticLine>
  </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const valuesSummed = good + neutral + bad;

  return (
    <div>
      <Header text = 'give feedback'/>
      <Button onClick={setGood} text="good" />
      <Button onClick={setNeutral} text="neutral" />
      <Button onClick={setBad} text="bad" />
      <Header text='statistics'></Header>
      <Statistics good={good} bad={bad} neutral={neutral} valuesSummed={valuesSummed}></Statistics>
    </div>
  )
}

export default App
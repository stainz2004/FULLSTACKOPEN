const Header = (course) => {
  console.log(course.text)
  return (
    <h1>{course.text}</h1>
  )
}

const Content = (content) => {

  return (
    <div>
      <Part text = {content.text1} number = {content.number1}></Part>
      <Part text = {content.text2} number = {content.number2}></Part>
      <Part text = {content.text3} number = {content.number3}></Part>
    </div>
  )
}

const Total = (numbers) => {
  console.log(numbers)

  return (
    <p>Number of exercises {numbers.first + numbers.second + numbers.third}</p>
  )
}

const Part = (info) => {

  return (
    <p>{info.text} {info.number}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header text = {course}/>
      <Content text1 = {part1} number1 = {exercises1} text2 = {part2} number2 = {exercises2}
      text3 = {part3} number3 = {exercises3}/>
      <Total first = {exercises1} second = {exercises2} third = {exercises3}></Total>
    </div>
  )
}

export default App
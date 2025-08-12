const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (content) => {
  console.log(content.parts.parts[0].name)

  return (
    <div>
      <Part text = {content.parts.parts[0].name} number = {content.parts.parts[0].exercises}></Part>
      <Part text = {content.parts.parts[1].name} number = {content.parts.parts[1].exercises}></Part>
      <Part text = {content.parts.parts[2].name} number = {content.parts.parts[2].exercises}></Part>
    </div>
  )
}

const Total = (numbers) => {

  return (
    <p>Number of exercises {numbers.parts.parts[0].exercises + numbers.parts.parts[1].exercises + numbers.parts.parts[2].exercises}</p>
  )
}

const Part = (info) => {

  return (
    <p>{info.text} {info.number}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {course}/>
      <Total parts = {course}/>
    </div>
  )
}

export default App
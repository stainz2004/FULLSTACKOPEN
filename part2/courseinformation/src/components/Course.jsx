const Header = (props) => <h2>{props.course}</h2>

const Content = ( {parts} ) => (
  <div>
      {parts.map(part => 
        <Part key={part.id} part={part}></Part>
      )}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ( {parts} ) => {
  return (
  <b>total of {parts.reduce((sum, p) => sum + p.exercises, 0)} exercises</b>
  )
  }

const Course = ( {courses} ) => {
    console.log(courses)
    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => (
                <div key={course.id}>
                    <Header course={course.name}></Header>
                    <Content parts={course.parts}></Content>
                    <Total parts={course.parts}></Total>
                </div>
            ))}
        </div>
    )
}

export default Course
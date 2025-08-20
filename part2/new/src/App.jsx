import { useState } from 'react'

const Filter = ({ value, setNewNameSearch}) => {
  const handleNameSearchChange = (event) => {
    console.log(event.target.value)
    setNewNameSearch(event.target.value)
  }

  return (
    <div>filter shown with <input onChange={handleNameSearchChange} value={value} type="search" /></div>
  )
  
}

const Forms = ({setNewName, setNewNumber, onSubmit, nameValue, numberValue}) => {

  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
        <div>name: <input value={nameValue} onChange={handleNameChange}/></div>
        <div>number: <input value={numberValue} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
  )
}

const Persons = ({persons, newNameSearch}) => {
  return (
    persons.map(person => person.name.toLowerCase().includes(newNameSearch.toLowerCase()) &&
       <p key={person.name}>{person.name} {person.number} {person.id}</p>)
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [id, setNewId] = useState(persons.length + 1)
  const [newNameSearch, setNewNameSearch] = useState('')

  const submitDetails = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name);
    console.log(names)
    if (names.includes(newName)) {
      alert(newName + ' is already added to phonebook')
      return
    }
    const nameObject = {
      name : newName,
      number : newNumber,
      id : id
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    setNewId(id + 1)
  }

  

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewNameSearch={setNewNameSearch} value={newNameSearch}></Filter>
      <h2>add a new</h2>
      <Forms onSubmit={submitDetails} setNewName={setNewName} setNewNumber={setNewNumber}
      nameValue={newName} numberValue={newNumber}></Forms>
      <h2>Numbers</h2>
      <Persons persons={persons} newNameSearch={newNameSearch}></Persons>
    </div>
  )
}

export default App
import { useEffect, useState } from 'react'
import notes from './services/notes'

const Filter = ({ value, setNewNameSearch}) => {
  const handleNameSearchChange = (event) => {
    setNewNameSearch(event.target.value)
  }

  return (
    <div>filter shown with <input onChange={handleNameSearchChange} value={value} type="search" /></div>
  )
  
}

const Forms = ({setNewName, setNewNumber, onSubmit, nameValue, numberValue}) => {

  const handleNameChange = (event) => {
      setNewName(event.target.value)
    }

  const handleNumberChange = (event) => {
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

const Persons = ({persons, newNameSearch, deleteName}) => {
  return (
    persons.map(person => person.name.toLowerCase().includes(newNameSearch.toLowerCase()) &&
       <p key={person.name}>
        {person.name} {person.number}
        <button onClick={() => deleteName(person.id)}> Delete</button>
        </p>)
  )
}


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameSearch, setNewNameSearch] = useState('')

  const submitDetails = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name);
    if (names.includes(newName)) {
      const object = persons.find(person => person.name === newName)
      changeDetails(object.id)
      return
    }
    const nameObject = {
      name : newName,
      number : newNumber,
    }

    notes.create(nameObject)
    .then(response => {
      setPersons(persons.concat(response))
      setNewName('')
      setNewNumber('')
    }
    )
  }

  const deleteName = (id) => {
    if (window.confirm('DO YOU WANT TO DELETE THIS?')) {
        notes.deleteId(id)
        .then(response => {
        setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          alert('Failed to delete the person')
        })
    }
  }

  const changeDetails = (id) => {
    const newObject = {
      name : newName,
      number : newNumber,
    }
    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      notes.update(id, newObject)
      .then(response => {
        console.log(response)
        setPersons(persons.map(person => person.id === id ? response : person))
        setNewName('')
        setNewNumber('')
      })
    }
  }



  useEffect(() => {
    notes.getAll()
    .then(response => {
      setPersons(response)
    })
  }, [])

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewNameSearch={setNewNameSearch} value={newNameSearch}></Filter>
      <h2>add a new</h2>
      <Forms onSubmit={submitDetails} setNewName={setNewName} setNewNumber={setNewNumber}
      nameValue={newName} numberValue={newNumber}></Forms>
      <h2>Numbers</h2>
      <Persons persons={persons} newNameSearch={newNameSearch} deleteName={deleteName}></Persons>
    </div>
  )
}

export default App
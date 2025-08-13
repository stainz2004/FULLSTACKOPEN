import { useState } from 'react'

const NextJokeButton = ({ setSelected, anecdotesLenght}) => {
  return <div>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotesLenght))}> next joke</button>
    </div>
}

const VoteButton = ({ onClick }) => (
  <button onClick={onClick}>Vote</button>
);

const Header = ({ text }) => <h1>{text}</h1>;

const DisplayVotes = ({ votes }) => <div>has {votes} votes</div>

const DisplayMostVoted = ({ votes, anecdotes }) => <div>{anecdotes[votes.indexOf(Math.max(...votes))]}</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const changeVotes = () => {
  const copy = [ ...votes];
  copy[selected] += 1;
  setVotes(copy);

};


  console.log(Math.max(...votes))
  console.log(votes)

  return (
    <div>
      <div>
        <Header text={'Anecdote of the day'}></Header>
        {anecdotes[selected]}
        <DisplayVotes votes={votes[selected]}></DisplayVotes>
      </div>
      <div>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}> next joke</button>
      </div>
      <VoteButton onClick={() => changeVotes()}></VoteButton>
      <Header text={'Anecdote with the most votes'}></Header>
      <DisplayMostVoted votes={votes} anecdotes={anecdotes}></DisplayMostVoted>
      <DisplayVotes votes={Math.max(...votes)}></DisplayVotes>
    </div>
  )
}

export default App
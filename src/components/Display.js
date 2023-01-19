import Joke from './Joke'
const display = ({joke}) => {
  return (
    <div className = 'display'> 
        <Joke joke = {joke}></Joke>
    </div>
  )
}

export default display
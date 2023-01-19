import Display from './components/Display'
import Header from './components/Header'
import React, { useState } from 'react';
function App() {
  const[favoriteJokes, addJoke] = useState('');
  const [joke, setJoke] = useState("Click the button to generate a random joke!");
  const newJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: "application/json",
        },
      })
    .then(response => {
        let data = response.json();
        console.log(data);
        return data;
    })
    .then(data => {
        setJoke(data.joke);
    })
    .catch(error => {
        console.log(error);
    });
  }
  const copy = () => {
    navigator.clipboard.writeText(joke)
  }

  return (
    <div className="container">
        <Header/>
        <Display joke = {joke}/>      
        <div className = 'btnDiv'>
          <button className = 'btn' onClick = {newJoke}> 
            New Joke
          </button>
          <button className = 'copyBtn' onClick={copy}>
            Copy to clipboard
          </button>
        </div>
    </div>
  );
}

export default App;

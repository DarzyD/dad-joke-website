import Display from './components/Display'
import Header from './components/Header'
import React, { useState } from 'react';
function App() {
  const [joke, setJoke] = useState("Click the button to generate a random joke!");
  const newJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: "application/json",
      },
    })
    .then(response => {
        let data;
        if (!response.ok) {
            if (response.status === 429) {
              data = {joke: "Too many requests! Please try again later."}
            }
            else {
              data = {joke: `Status code ${response.status} has occured, please try again!`}
            }
        }
        else{
          data = response.json();
        }
        console.log(data);
        return data;
    })
    .then(data => {
        setJoke(data.joke);
    })
    .catch(error => {
        setJoke(`An error has occured, please try again!`);
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
          <button onClick = {newJoke}> 
            New Joke
          </button>
          <button onClick={copy}>
            Copy to clipboard
          </button>
        </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke,setJoke] = useState();
  const [loading,setLoading] = useState();
  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
  useEffect(() =>{
    fetchJoke();
  }, []);
  // Step 3: Define a function that fetches a programming joke from an API
  // - Start by setting `loading` to true
  // - Fetch a joke from "https://v2.jokeapi.dev/joke/Programming?type=single"
  // - Update the `joke` state with the fetched joke
  // - Set `loading` to false once the joke is loaded
  // - Handle any errors in the `.catch` block
  function fetchJoke(){
    setLoading(true);
    
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((response)=>{
      if (!response.ok){
        console.log("could not fetch joke");
      }
      return response.json();
    })
    .then((data) => {
      const theJoke= data.joke;
      console.log("theJoke: ", theJoke);
      setJoke(theJoke);
      setLoading(false);
    })
    .catch((error)=>{
      console.log("could not fetch joke, error is ", error);
      setLoading(false);
    })
  }
 
  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading}/>
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke}/>
    </div>
  )
}

export default App

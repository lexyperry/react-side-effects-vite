// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* Step 2: If `loading` is true, display "Loading..." */}
      {loading && (
        <h3>Loading...</h3>
      )}
      {/* Step 3: Otherwise, display the joke */}
      {!loading && (
        <p>{joke}</p>
      )
      }
    </div>
  )
}

export default JokeDisplay

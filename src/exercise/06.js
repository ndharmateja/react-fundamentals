// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [value, setValue] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={({target: {value}}) => setValue(value.toLowerCase())}
          type="text"
          name="username"
          id="username"
          value={value}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

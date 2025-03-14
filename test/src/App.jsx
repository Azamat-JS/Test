import React, {useState} from 'react'

const StateManagement = () => {
  const [name, setName] = useState('John')
  const [buttonClicked, setButtonClicked] = useState(false);
  
const updateName = () => {
  setName('John Doe');
  setButtonClicked(true)
}
  return (
    <>
    <h1>State Manegement using useState</h1>
    <p>the name is {name} </p>
    <button onClick={updateName} disabled={buttonClicked}>Click to update name</button>
    </>
  )
}

export default StateManagement
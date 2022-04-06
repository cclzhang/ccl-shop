import React, { useState} from 'react'

const POST = (path, data) => {
  return fetch(`http://localhost:5000${path}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
}

const Test = () => {
  const [text, setText] = useState('Input your name here');
  const [name, setName] = useState('');

  const onChange = e => {
    setText(e.target.value)
  }

  const onClick = e => {
    e.preventDefault();
    POST('/test', { name: text }).then(
      async (resp) => {
        const json = await resp.json()
        console.log(json.name)
        setName(json.name)
      }
    )
  }


  return (
    <div>
      <form action="">
        <input value={text} onChange={onChange} />
        <button type="submit" value="Submit" onClick={onClick}>submit</button>
      </form>
      <p>Your name is: <b>{name}</b></p>
    </div>
  )
}

export default Test
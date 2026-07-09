import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [name, setName] = useState("John")

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Hi. My name is ${name}.`);
  }

  return (
    <>
      <section className="container my-2">
        <form onSubmit={handleSubmit}>
          <label>Enter your name</label>
          <input value={name} onChange={handleChange} className="form-control mb-2"/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <hr/>

        <p>Current value: {name}</p>
      </section>
    </>
  )
}

export default App

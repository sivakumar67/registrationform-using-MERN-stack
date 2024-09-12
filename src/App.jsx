import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function App() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/user', { name, email, password })
      .then(res => console.log(res))
      .catch(res => console.log(res))
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">

      <div className='bg-white p-3 rounded w-30'>

        <h2>Register </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email">Name</label>
            <input type="text"
              placeholder='Name'
              autoComplete='off' name='email' className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email"
              placeholder='Email'
              autoComplete='off'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Password</label>
            <input type="password"
              placeholder='Password'
              autoComplete='off'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
          <p>Already have an account</p>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
        </form>
      </div>

    </div>
  )
}

export default App

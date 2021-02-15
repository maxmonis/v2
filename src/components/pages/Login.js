import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const reset = () =>
    setUser({
      email: '',
      password: '',
    });
  const { email, password } = user;
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form noValidate onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className='floating-label-input'>
        <input
          className='input'
          name='email'
          required
          type='email'
          value={email}
          onChange={handleChange}
        />
        <span className='floating-label'>Email</span>
      </div>
      <div className='floating-label-input'>
        <input
          className='input'
          name='password'
          required
          type='password'
          value={password}
          onChange={handleChange}
        />
        <span className='floating-label'>Password</span>
      </div>
      <button className='btn two' onClick={reset}>
        Cancel
      </button>
      <input className='btn one' type='submit' value='Submit' />
    </form>
  );
};

export default Login;

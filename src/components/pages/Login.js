import useValidate from '../../hooks/useValidate';
import validateLogin from '../../validation/validateLogin';
import { Link } from 'react-router-dom';
import { Input } from '../UI';

const Login = () => {
  const INITIAL_STATE = {
    email: '',
    password: '',
  };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidate(INITIAL_STATE, validateLogin, logUserIn);
  const { email, password } = values;
  function logUserIn() {
    console.info('email:', email, 'password:', password);
  }
  return (
    <div className='page'>
      <form noValidate onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input
          name='email'
          value={email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label='Email'
          error={errors.email}
        />
        <Input
          name='password'
          value={password}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type='password'
          label='Password'
          error={errors.password}
        />
        <button className='btn one' type='submit'>
          Access Account
        </button>
      </form>
      <h3>Need an account?</h3>
      <Link className='link' to='register'>
        <button className='btn two'>Get started</button>
      </Link>
    </div>
  );
};

export default Login;

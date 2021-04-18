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
    <div className='page auth'>
      <h1>Welcome Back!</h1>
      <h4>Please enter your credentials</h4>
      <form noValidate onSubmit={handleSubmit}>
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
      <h6>Need an account?</h6>
      <Link to='register'>
        <button className='btn two'>Get started</button>
      </Link>
    </div>
  );
};

export default Login;

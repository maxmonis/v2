import useValidate from '../../hooks/useValidate';
import validateAccount from '../../validation/validateRegister';
import { Link } from 'react-router-dom';
import { Input } from '../UI';

const Register = () => {
  const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidate(INITIAL_STATE, validateAccount, createAccount);
  const { username, email, password, password2 } = values;
  function createAccount() {
    console.info(
      'username:',
      username,
      'email:',
      email,
      'password:',
      password,
      'password2',
      password2
    );
  }
  return (
    <div className='page'>
      <form noValidate onSubmit={handleSubmit}>
        <h1>Register</h1>
        <Input
          name='username'
          value={username}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label='Username'
          error={errors.username}
        />
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
        <Input
          name='password2'
          value={password2}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type='password'
          label='Confirm Password'
          error={errors.password2}
        />
        <button className='btn one' type='submit'>
          Create Account
        </button>
      </form>
      <h3>Already a member?</h3>
      <Link className='link' to='login'>
        <button className='btn two'>Sign in</button>
      </Link>
    </div>
  );
};

export default Register;

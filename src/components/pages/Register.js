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
    <div className='page auth'>
      <h1>Welcome!</h1>
      <h4>Create your free account</h4>
      <form noValidate onSubmit={handleSubmit}>
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
      <h6>Already a member?</h6>
      <Link to='login'>
        <button className='btn two'>Sign in</button>
      </Link>
    </div>
  );
};

export default Register;

import useValidate from '../../hooks/useValidate';
import validateAccount from '../../validation/validateRegister';
import { Link } from 'react-router-dom';

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
        <div className='floating-label-input'>
          <input
            className='input'
            name='username'
            required
            type='text'
            value={username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className='floating-label'>Username</span>
          {errors.username && <p className='input-error'>{errors.username}</p>}
        </div>
        <div className='floating-label-input'>
          <input
            className='input'
            name='email'
            required
            type='text'
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className='floating-label'>Email</span>
          {errors.email && <p className='input-error'>{errors.email}</p>}
        </div>
        <div className='floating-label-input'>
          <input
            className='input'
            name='password'
            required
            type='password'
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className='floating-label'>Password</span>
          {errors.password && <p className='input-error'>{errors.password}</p>}
        </div>
        <div className='floating-label-input'>
          <input
            className='input'
            name='password2'
            required
            type='password'
            value={password2}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className='floating-label'>Confirm Password</span>
          {errors.password2 && (
            <p className='input-error'>{errors.password2}</p>
          )}
        </div>
        <input className='btn one' type='submit' value='Submit' />
      </form>
      <h3>Already a member?</h3>
      <Link className='link' to='login'>
        <button className='btn two'>Sign in</button>
      </Link>
    </div>
  );
};

export default Register;

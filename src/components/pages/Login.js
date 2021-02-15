import useValidate from '../../hooks/useValidate';
import validateLogin from '../../validation/validateLogin';

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
    <form noValidate onSubmit={handleSubmit}>
      <h1>Login</h1>
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
      <input className='btn one' type='submit' value='Access Account' />
    </form>
  );
};

export default Login;

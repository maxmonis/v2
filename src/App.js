import { useState } from 'react';
import './styles/App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => setLoading(!loading);
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark(!dark);
  return (
    <div className={`App ${dark && 'dark'}`}>
      <header>
        <p
          className='link tooltip bottom'
          tooltip-content={`Set loading to ${!loading}`}
          onClick={toggleLoading}>
          Toggle Loading
        </p>
        <label
          className='switch tooltip bottom'
          tooltip-content={`Set theme to ${dark ? 'light' : 'dark'}`}>
          <input type='checkbox' checked={dark} onChange={toggleDark} />
          <span className='slider'></span>
        </label>
      </header>
      <Login />
      <Register />
      {loading && <Spinner />}
    </div>
  );
}

export default App;

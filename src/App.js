import { useState } from 'react';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => setLoading(!loading);
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark(!dark);
  const [lift, setLift] = useState('Bench');
  const selectLift = e => setLift(e.target.value);
  const [workoutName, setWorkoutName] = useState('');
  const reset = () => {
    setLift('Bench');
    setWorkoutName('');
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
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
      <form noValidate onSubmit={handleSubmit}>
        <div className='input-container'>
          <input
            className='input'
            required
            type='workoutName'
            value={workoutName}
            onChange={e => setWorkoutName(e.target.value)}
          />
          <span class='floating-label'>Workout Name</span>
        </div>
        <select className='select' onChange={selectLift} value={lift}>
          {['Bench', 'Squat', 'Deadlift'].map(option => (
            <option className='option' value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <button className='btn two' onClick={reset} disabled={!workoutName}>
          Clear
        </button>
        <input className='btn one' type='submit' value='Submit' />
      </form>
      {loading && <h1>Loading...</h1>}
    </div>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <Router>
        <header>
          <Link to='/login' className='link'>
            Login
          </Link>
          <Link to='/register' className='link'>
            Register
          </Link>
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
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames='slide'
                timeout={350}>
                <Switch location={location}>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route path='/' component={Login} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
      {loading && <Spinner />}
    </div>
  );
}

export default App;

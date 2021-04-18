import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles/App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark(!dark);
  return (
    <div className={`App ${dark && 'dark'}`}>
      <Router>
        <Header dark={dark} toggleDark={toggleDark} />
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;

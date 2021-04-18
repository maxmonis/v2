import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useToggle from '../../hooks/useToggle';

const About = () => {
  const [isDisplayed, toggle] = useToggle(false);
  const CONTACT_EMAIL = 'maxwellnesscontact@gmail.com';
  return (
    <div className='about'>
      <TransitionGroup>
        {!isDisplayed ? (
          <CSSTransition key={1} timeout={500} classNames='fade'>
            <button onClick={toggle}>
              More Info &#x25BC;
            </button>
          </CSSTransition>
        ) : (
          <CSSTransition key={2} timeout={500} classNames='fade'>
            <div>
              <p>Thank you for visiting maxWellness</p>
              ***
              <p>
                Track your workouts and personal bests along with those of up to
                twenty clients
              </p>
              ***
              <p>
                Access your account from anywhere in the world using a securely
                encrypted password
              </p>
              ***
              <p>
                Free of charge, ad-free and we will never share your data with
                any third party
              </p>
              ***
              <p>Please direct questions, comments or concerns to</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className='link'>
                {CONTACT_EMAIL}
              </a>
              <br />
              <button onClick={toggle}>
                Hide Greeting &#x25B2;
              </button>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default About;

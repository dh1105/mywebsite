import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Main from './MainComponent'
import { history } from './_helpers';

// function initializeReactGA() {
  
//   ReactGA.pageview('/home');
// }

function App() {
  ReactGA.initialize('UA-149467735-1');
  history.listen(location => ReactGA.pageview(location.pathname));
  return (
      <div>
        <Main />
      </div>
  );
}

export default App;

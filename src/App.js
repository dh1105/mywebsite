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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <div>
        <Main />
      </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="background"></div>
        <div className="mood_main">
            <div className="mood_col-main">
                <div className="mood_container">
                  <Header />
                  <Main />
                </div>
            </div> 
        </div>  
      </div>     
    );
  }
}

export default App;

import React, {Component} from 'react';
import './app.css';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <div className='App-title'>Countdown to December 25, 2018</div>
        <div className='clock'>
          <div className='clock-timer'>14 Days</div>
          <div className='clock-timer'>30 Hours</div>
          <div className='clock-timer'>15 Minutes</div>
          <div className='clock-timer'>20 Seconds</div>
        </div>
          <div>
            <input placeholder='New Date'/>
            <button>Submit</button>
          </div>
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react';
import './app.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018'
    }
  }

  changeDeadline(){
    this.setState({deadline: 'November 25. 2018'})
  }

  render(){
    return(
      <div className='App'>
        <div className='App-title'>Countdown to {this.state.deadline}</div>
        <div className='clock'>
          <div className='clock-timer'>14 Days</div>
          <div className='clock-timer'>30 Hours</div>
          <div className='clock-timer'>15 Minutes</div>
          <div className='clock-timer'>20 Seconds</div>
        </div>
          <div>
            <input placeholder='New Date'/>
            <button onClick={() => this.changeDeadline()}>Submit</button>
          </div>
      </div>
    )
  }
}

export default App;

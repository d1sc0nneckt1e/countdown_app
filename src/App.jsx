import React, {Component} from 'react';
import './app.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline(){
    // console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline});
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
            <input placeholder='New Date' onChange={event => this.setState({newDeadline: event.target.value})}/>
            <button onClick={() => this.changeDeadline()}>Submit</button>
          </div>
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react';
import Clock from './clock';
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
        <Clock
          deadline={this.state.deadline}
        />
          <div>
            <input placeholder='New Date' onChange={event => this.setState({newDeadline: event.target.value})}/>
            <button onClick={() => this.changeDeadline()}>Submit</button>
          </div>
      </div>
    )
  }
}

export default App;

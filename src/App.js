import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';


class App extends Component {
  state = {
    users: [
      { user: 'Zippy' },
      { user: 'Zappy'}
    ],
    otherState: 'other value'
  }

  eventChangeHandler = (event) => {
    this.setState({
      users: [
        { user: event.target.value },
        {user: 'Zappy'}
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'beige',
      cursor: 'pointer',
      padding: '4px'
    }

    return (
      <div className="App">

        <UserInput
          style={style}
          changed={this.eventChangeHandler}
        />

        <UserOutput
          user1={this.state.users[0].user}
          user2={this.state.users[1].user}
        />
        
      </div>
    );
  }
}

export default App;

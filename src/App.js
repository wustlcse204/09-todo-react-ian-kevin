import React, { Component } from 'react';
import './App.css';
import ToDo from './ToDo.js';

class App extends Component {
  render() {
    return(
        <div>
        <form>
            <label id="todoForm">Input To-Do:</label>
            <input id = "txtbox" type="text" name="todoForm"/>
            <input id = "enter_button" type="submit" value="ENTER" onclick="post()"/>

        </form>
        </div>
    );
  }
}

export default App;

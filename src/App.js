import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <button type="button" className="btn btn-primary">Primary</button><br/><br/>
          <button type="button" className="btn btn-warning rounded-0">Warning</button><br/><br/>
          <button type="button" className="btn btn-success">Success</button><br/><br/>
          <button type="button" className="btn btn-outline-primary">Outlined Primary</button>
        </header>
      </div>
    );
  }
}

export default App;

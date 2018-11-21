import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      context: '2134',
      item: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    
    this.addItem = this.addItem.bind(this);
    this.chat = this.chat.bind(this);
  }

  addItem(e) {
    
  }

  
  chat(e) {
    return (
      <li>this.state.context</li>
    );
  }

  handleChange(event) {
  }

  handleSubmit(event) {
    event.preventDeafult();
  }

  Todolist() {
    return (
      <div className="todolistMain">
        <div >
          <form>
            <input placeholder="enter tast">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }

  
  render() {
    return (

      <div>
      
      {/* <li className="text" onClick={this.handleChange}> */}
        
      {/* </li> */}
      
      {/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form> */}

        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter - 1,
            });
          }}
        >
          -
        </button>

        <span>Counter: {this.state.counter}</span>
        {/* <input>
        </input>
        <button
          onClick={() => {
            this.setState({

            });
          }}
        >
        add
        </button> */}

        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          +
        </button>
        <button
          onClick={(handleChange) => {
              this.setState({
              });
          }}
        >
        a
        </button>
      </div>
    );
  }
}

export default App;


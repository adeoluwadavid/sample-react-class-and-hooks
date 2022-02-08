import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
  state = {
    input: { name: '', completed: false },
    todos: []
  }
  handleChange = (e) => {
    this.setState({
      input: { name: e.target.value, completed: false }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let newTodos = [...this.state.todos, this.state.input]
    this.setState({
      todos: newTodos,
      input:{name:''}
    })
  }
  toggleTodo = (value) => {
    let newTodos = this.state.todos.map(e => {
      if (e.name === value.name) {
        e.completed = !value.completed
      }
      return e;
    })
    this.setState({
      todos: newTodos
    })


  }
  render() {
    let completedTodos = this.state.todos.filter(e => e.completed !== true).length

    return (
      <div className="App">
        <h2>Todo List
        </h2>
        <input type="text" onChange={this.handleChange} value={this.state.input.name} />
        <button onClick={this.handleSubmit}>Add</button>
        <ul>{this.state.todos.map((e, i) => {
          return <li key={i}
            onClick={() => this.toggleTodo(e)} className={e.completed === true ? "toggle" : ''}>{e.name}</li>
        })}</ul>
       {this.state.todos.length > 0 && (<div>{completedTodos} task remaining out of {this.state.todos.length}<span>{this.state.todos.length > 1?' tasks':' task'}</span> </div>)} 
      </div>
    )
  }
}

export default App;

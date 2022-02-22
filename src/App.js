import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseEffectCleanUp from './UseEffectCleanUp';
import UseContext from './UseContext';
import UseRef from './UseRef';
import UseReducer from './UseReducer';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
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
      <div >
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
      <UseState />
      <UseEffect />
      <UseEffectCleanUp />
      <UseContext />
      <UseRef />
      <UseReducer />
      <UseCallback />
      <UseMemo />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import  Header  from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import About  from "./components/pages/About";
// import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Axios from 'axios';
class App extends Component {
  state = {
    todos: [
        // {
        //     id:uuid.v4(),
        //     title:"Learn ReactJS",
        //     completed: true
        // },
        // {
        //     id:uuid.v4(),
        //     title: "Complete Tutorials ReactJS",
        //     completed: false
        // },
        // {
        //     id:uuid.v4(),
        //     title:"Keep On Learning",
        //     completed: false
        // }
    ]
}
// Lifecycle methods
componentDidMount() {
  Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => {
    console.log("Res", res);
    this.setState({todos:res.data});
  })
}
// Togle Complete
markComplete = (id) => {
  // console.log("App component markComplete", id)
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  })})
} 
// delete Todo
delTodo = (id) => {
  // console.log("id", id)
  // this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => {
     console.log("Delete Response", res);
     this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})  
  })
}
// Add Todo
addTodo =(title)=>{
  // const newTodo = {
  //   id: uuid.v4(),
  //   title,
  //   completed : false
  // }
  // this.setState({todos: [...this.state.todos, newTodo]});
  Axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
  .then(res =>  {
    console.log("Post response", res);
    this.setState({todos: [...this.state.todos, res.data ]})
  })
}
  render() {
    console.log("App Component State",this.state)
    return (
    <Router>
      <div className="App">
      <div className="container">        
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}></AddTodo>
            <Todos todos={this.state.todos}  markComplete={this.markComplete} delTodo={this.delTodo}> </Todos>
          </React.Fragment>
        )} />
        <Route path='/about' component={About}></Route>
        </div>
      </div>     
    </Router>
    );
  }
}


export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle  = () => {
        // if (this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }            
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
        // console.log("this", this.props)
        return {
            background:'#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',

        }
    }
    /* es5 function syntax */
    // markComplete(e) {
    //   console.log("e", this.props)
    // }
    /* es6 arrow function syntax */
    // markComplete = (e) => {
    //   console.log("e", this.props)
    // }
  render() {
    // Destructuring
    const {id, title} = this.props.todo;
    return (
        // Inline styling
    //   <div style={{backgroundColor: '#f4f4f4'}}>        
    //   <div style={itemStyle}>  
    <div style={this.getStyle()}> 
        <p>
          {/* es5 function syntax */}
            {/* <input type="checkbox" onChange={this.markComplete.bind()} />{ ' '} */}
          {/* es6 function syntax */}
            {/* <input type="checkbox" onChange={this.markComplete} />{ ' '} */}
            {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />{ ' '} */}
            {<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />}{' '}
        {/* {this.props.todo.title} */}
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}></button>
        </p>
      </div>
    )
  }
}
// PropTypes
TodoItem.proptype = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired 
}
// const itemStyle = {
//     backgroundColor: '#f4f4f4'    
// }
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '8px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem

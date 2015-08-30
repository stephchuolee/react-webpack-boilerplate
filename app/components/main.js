var React = require('react'); 
var TodoList = require ('./todo_list')
var TextField = require('./textfield')
var Button = require('./button')
var Row = require('./row')
var Col = require('./col')

var deleteArray = function(arr,arrIndex){
    return arr.slice(0,arrIndex).concat(arr.slice(arrIndex + 1));
}

module.exports = React.createClass({
  getInitialState: function(){
    return {
      // todos: ['buy hummus', 'eat hummus', 'eat more hummus'],
      todos: [],
      todoInput: ''
    }
  },

  handleAddItem: function (){
    var newItem = {
      name: this.state.todoInput, 
      completed: false
    }
    this.setState({
      todos: this.state.todos.concat(newItem)
    })
  },

  handleTodoInput: function(value){
    //  change value from empty string to value
    this.setState({
      todoInput: value
    })
  },

  handleCompletedItem: function(id) {
   var newList = this.state.todos
   newList[id].completed = true
   this.setState ({
     todos: newList
   })
  },

  handleDeletedItem: function(id){
    var newList = deleteArray(this.state.todos, id)
    this.setState({
      todos: newList      
    })
  },

  render: function(){
    // 'this' refers to the javascript object
    var name = this.props.name;
    // var todos = ['buy hummus', 'eat hummus', 'eat more hummus']; 
    var todos = this.state.todos;

    return (
      <div className="container">
        <h1>{name + "'s"} Todo List</h1>
        <Row>
          <Col size={10}>
            <TextField placeholder={"New task"} value={this.state.todoInput} onTextChange={this.handleTodoInput}/>
          </Col>
          <Col size={1}>
            <Button buttontext = {"Add"} onButtonClick={this.handleAddItem}/>
          </Col>
        </Row> 

        <Row>
          <Col size={12}>
            <TodoList todos={todos} onItemComplete={this.handleCompletedItem} onItemDelete={this.handleDeletedItem}/>
          </Col>
        </Row>

      </div>
    );

    // Can only return a single top-level node 
    // return React.createElement('h1',{},'Hello World!')

    // return React.createElement('ul',{}, [
    //   React.createElement('li', {}, 'buy hummus'),
    //   React.createElement('li', {}, 'eat hummus'),
    //   React.createElement('li', {}, 'eat more hummus')
    // ])
  }
})
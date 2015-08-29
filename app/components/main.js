var React = require('react'); 
var TodoList = require ('./todo_list')
var TextField = require('./textfield')
var Button = require('./button')
var Row = require('./row')
var Col = require('./col')

module.exports = React.createClass({
  getInitialState: function(){
    return {
      // todos: ['buy hummus', 'eat hummus', 'eat more hummus'],
      todos: [],
      todoInput: ''
    }
  },

  handleAddItem: function (){
    this.setState({
      todos: this.state.todos.concat(this.state.todoInput)
    })
  },

  handleTodoInput: function(value){
    //  change value from empty string to value
    this.setState({
      todoInput: value
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
            <TextField placeholder={"Probably hummus related"} value={this.state.todoInput} onTextChange={this.handleTodoInput}/>
          </Col>
          <Col size={1}>
            <Button buttontext = {"Add"} onButtonClick={this.handleAddItem}/>
          </Col>
        </Row> 

        <Row>
          <Col size={12}>
            <TodoList todos={todos} />
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
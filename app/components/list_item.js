var React = require('react'); 

module.exports = React.createClass({

  handleClick: function(event){
    // console.log('checked')
    this.props.onChecked(this.props.id)
  },

  handleDelete: function(event){
    this.props.onDeleted(this.props.id)
  }, 

  getInitialState: function(){
    return {
      
    }
  },


  setEditable: function(event){
     
  }, 

  render: function(){
    var item = this.props.item
    console.log(item)
    return(
      <li className="list-group-item">
        <span contentEditable="true" onClick={this.setEditable}>{item.name}</span>
        <input type="checkbox" className="checkbox" onClick={this.handleClick}/>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }
  
})

//Completed: {item.completed.toString()}
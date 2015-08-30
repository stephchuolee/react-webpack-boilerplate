var React = require('react'); 
var ListItem = require('./list_item')

module.exports = React.createClass({

  handleItem: function(id){
    // console.log(id)
    this.props.onItemComplete(id)
  },

  handleDelete: function(id){
    this.props.onItemDelete(id)
  },

  handleUpdate: function(id){
    console.log(id)
  },

  render: function(){
    var list = this.props.todos;

    // var listLength = list.length
    // var output = []

    // for (var i=0; i<listLength; i++){
    //   output.push(<li>{list[i]}</li>);
    // }

    // return({output})
    

    return (
      <ul className="list-group"> 
      { 
        list.map(function(item,index){
          return <ListItem item={item} 
                           key={index} 
                           id={index} 
                           onChecked={this.handleItem} 
                           onDeleted={this.handleDelete}
                           onUpdate={this.handleUpdate}/> 

        }.bind(this))
      }
      </ul>
    )
  }
  
})

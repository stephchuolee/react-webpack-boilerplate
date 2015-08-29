var React = require('react'); 

module.exports = React.createClass({
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
          return <li className="list-group-item" key={index}>{item}</li>
        })
      }
      </ul>
    )
  }
})

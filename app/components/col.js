var React = require('react');

module.exports = React.createClass({
  render: function(){
  var size = this.props.size;

    return (

      <div className={"col-md-" + size}>
        {this.props.children}
      </div>
    )


  } 
})

var React = require('react');

module.exports = React.createClass({
  // calling parent component's function: 
  handleClick: function(event){
    this.props.onButtonClick()
  },

  render: function(){
  var buttontext = this.props.buttontext

    return (

      <button className="btn btn-default" onClick={this.handleClick}>{buttontext}</button>
    )


  } 
})

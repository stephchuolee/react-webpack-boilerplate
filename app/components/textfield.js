var React = require('react');

module.exports = React.createClass({

  handleChange: function(event){
    this.props.onTextChange(event.target.value)
    // console.log(event.target.value)
  },

  render: function(){
  var placeholder = this.props.placeholder

    return (
      <div className="form-group">
        <input type="text" 
               className="form-control"
               placeholder={placeholder} 
               value={this.props.value} 
               onChange={this.handleChange}/>
      </div>
    )
  }

})


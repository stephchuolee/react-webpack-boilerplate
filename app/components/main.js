var React = require('react'); 

module.exports = React.createClass({
  render: function(){
    
    return (
      <ul> 
        <li>buy hummus</li>
        <li>eat hummus</li>
        <li>eat more hummus</li>
      </ul>
    )

    // return React.createElement('h1',{},'Hello World!')

    // return React.createElement('ul',{}, [
    //   React.createElement('li', {}, 'buy hummus'),
    //   React.createElement('li', {}, 'eat hummus'),
    //   React.createElement('li', {}, 'eat more hummus')
    // ])
  }
})
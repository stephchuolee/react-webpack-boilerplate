import React from "react";
require('./css/bootstrap.css')
var Main = require('./components/main')

React.render(
  // inside of the main.js component, we now have access to name attribute via 'props'
  // attributes can be added to any component
  <Main name={'Steph'}/>,
  document.getElementById('main')
);
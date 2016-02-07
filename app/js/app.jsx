/** @jsx React.DOM */

var React = require('react');

// var Main = React.createClass({
//   render: function() {
//     return <div>I am main {this.props.name}</div>
//   }
// });



var Main = React.createClass({
  render(){
    return <div id="Main">
    <Menu />
    <Content />
    </div>;
  }
});

var Menu = React.createClass({
  render(){
    return <div id="Menu">
    <MenuItem />
    <MenuItem />
    <AddItem />
    </div>;
  }
})

var MenuItem = React.createClass({
  render(){
    return <div id="MenuItem">
    <h6>I am menu item</h6>
    </div>;
  }
})

var AddItem = React.createClass({
  render(){
    return <div id="AddItem">
    <input placeholder="input"></input>
    <button>+</button>
    </div>;
  }
})


var Content = React.createClass({
  render(){
    return <div id="content">
    I am content
    </div>;
  }
})

React.render(
  <Main/>,
  document.body
);

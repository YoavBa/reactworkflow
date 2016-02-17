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
    <h6></h6>
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
    <h1>I am content h1</h1>
    <h2>I am content h2</h2>
    <h3>I am content h3</h3>
    <h4>I am content h4</h4>
    <h5>I am content h5</h5>
    <h6>I am content h6</h6>
    <p>I am content p</p>
    </div>;
  }
})

// React.render(
//   <Main/>,
//   document.body
// );

/** @jsx React.DOM */

var React = require('react');

var MainList = React.createClass({
  render: function() {
    return (
      <ul id="mainlist">
        <li id="catagory">catagory
          <li id="project">project1</li>
        </li>
        <li id="catagory">catagory
          <li id="project">project</li>
        </li>
        <li id="catagory">catagory
          <li id="project">project</li>
        </li>
      </ul>
    )
  }
});


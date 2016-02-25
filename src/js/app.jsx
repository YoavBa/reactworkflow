/** @jsx React.DOM */

var React = require('react');
var ReactDOM = require('react-dom')


var divStyle = {
  width:'100vw',
  height:'100vh',
  position: 'absolute',
  left: '0',
  top: '0'
};

var inputStyle = {
  position: 'absolute',
  left: '0',
  top: '0',
  background: 'lightgrey',
  padding: '10px',
  zIndex: '100'
}

var Inputer = React.createClass({
  getInitialState: function() {
    return {
      text: "24"
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
  },
  render(){
    return <div>
      <input onChange={this.handleChange} type="number" min="5" max="200" value={this.state.text} style={inputStyle}></input>
      <svg id="bounding" style={divStyle}>
        <defs>
          <pattern id="Pattern" x="0" y="0" width={this.state.text} height={this.state.text} patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width={this.state.text} height={this.state.text}  stroke="grey" fillOpacity="0.0" strokeWidth="1" strokeDasharray="1,1"/>
            
          </pattern>
        </defs>
          <rect id="Rectangle-1" x="0" y="0" width="100%" height="100%" fill="url(#Pattern)" ></rect>
      </svg> 
    </div>
  }
});

ReactDOM.render(
  <Inputer/>,
  document.getElementById("container")
);

 

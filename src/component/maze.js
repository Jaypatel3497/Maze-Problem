import React, { Component } from 'react';
import './maze.css';
import Header from './header'
import Mazecontainer from './mazecontainer'
class Maze extends Component {
  constructor(props)
  {
    super(props);
    this.state={height: "",width: "",map: ""}
  }
  
  render() {
    return (
      <div className="">
        <Header />
        
        <Mazecontainer /> 
      </div>
    );
  }
}

export default Maze;

import logo from './logo.svg';
import './App.css';
import Lane from './Components/Lane';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backlog: ["backlog task"],
      toDo: ["to do task"],
      inProgress: ["in progress task"],
      done: ["done task"]
    }

    this.moveTask = this.moveTask.bind(this)
  }
  moveTask(srcLane, srcIndex, destLane) {
    console.log("srcLane: " , srcLane)
    console.log("srcIndex: ", srcIndex)
    console.log("destLane: ", destLane)
    let tempTask = this.state[srcLane][srcIndex]
    console.log("tempTask: ", tempTask)
    let destCopy = this.state[destLane]
    let srcCopy = this.state[srcLane]
    srcCopy.splice(srcIndex,1)
    this.setState({
      [destLane]: [...destCopy,tempTask],
      [srcLane]: srcCopy
    })
  }
  render() {
    return (
      <div className="App">
        <Lane title="Backlog" color="red" name="backlog" next="toDo" prev="" tasks={this.state.backlog} move={this.moveTask}></Lane>
        <Lane title="To Do" color="yellow" name="toDo" next="inProgress" prev="backlog" tasks={this.state.toDo} move={this.moveTask}></Lane>
        <Lane title="In Progress" color="green" name="inProgress" next="done" prev="toDo" tasks={this.state.inProgress} move={this.moveTask}></Lane>
        <Lane title="Done" color="blue" name="done" next="" prev="inProgress" tasks={this.state.done} move={this.moveTask}></Lane>
      </div>
    )
  }
}

export default App;

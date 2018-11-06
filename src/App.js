import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro.js';
import ChapterOne from './components/ChapterOne.js';
import posed, { PoseGroup } from 'react-pose';
import uniqid from 'uniqid';

const Box = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      isVisible: false
    }
  }

  handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }))
  }

  componentDidMount() {
    this.setState({ isVisible: !this.state.isVisible });
    document.getElementById("App").addEventListener("click", this.nextPage.bind(this));
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  render() {
    if (this.state.page === 1) {
      const { isVisible } = this.state;
      return (
        <div className="App" id="App">
        <PoseGroup>
          {this.state.isVisible && [
            <Intro key={uniqid()} className="story-paragraph">
              Tom sat on a metal stool, in a room with walls that looked like black and purple obsidian; Walls that appeared to be, somehow, breathing. Not in the same way air enters and exits a lung. The motion was cold, like a machine trying to pass as living.
            </Intro>
          ]}
        </PoseGroup>
        </div >
      );
    } else {
      const { isVisible } = this.state;
      return (
        <div className="App" id="App">
        <PoseGroup>
          {this.state.isVisible && [
            <Box key={uniqid()} className="box"/>
          ]}
        </PoseGroup>
        </div >
      );
    }
  }
}

export default App;

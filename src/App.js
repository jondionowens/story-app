import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro.js';
import posed from 'react-pose';

const Box = posed.div({
  visible: {
    opacity: 1,
    transition: { duration: 5000 }
  },
  hidden: { opacity: 0 }
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

  componentDidMount () {
      this.setState({ isVisible: !this.state.isVisible });

    document.getElementById("App").addEventListener("click", this.nextPage.bind(this));
  }

  nextPage() {
    this.setState({page: this.state.page + 1});
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="App" id="App">
        <Box className="box" pose={isVisible ? 'visible' : 'hidden'} >
          <Intro />
        </Box>
      </div>
    );
  }
}

export default App;

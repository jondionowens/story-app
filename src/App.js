import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro.js';
import posed from 'react-pose';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      isVisible: true
    }
  }

    handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }))
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
    document.getElementById("App").addEventListener("click", this.nextPage.bind(this));
  }

  nextPage() {
    this.setState({page: this.state.page + 1});
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="App" id="App">
        <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />
      </div>
    );
  }
}

export default App;

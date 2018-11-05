import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro.js';
import ChapterOne from './components/ChapterOne.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'intro'
    }
  }

  componentDidMount () {
    console.log(this);
    document.getElementById("App").addEventListener("click", this.nextPage.bind(this));
  }

  nextPage() {
    this.setState({page: 'chapterone'});
  }

  render() {
    if (this.state.page === 'intro') {
      return (
        <div className="App" id="App">
          <Intro />
        </div>
      );
    }

    if (this.state.page === 'chapterone') {
      return (
        <div className="App">
          <ChapterOne />
        </div>
      );
    }
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Thread from './Thread';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      likes: 0
    };
  }

  upvote () {
    this.setState(() => {
      let newLikes = this.state.likes + 1; 
      return {
        likes: newLikes
      }
    })
  }

  downvote () {
    this.setState(() => {
      let newLikes = this.state.likes - 1; 
      return {
        likes: newLikes
      }
    })
  }

  render() {
    let title = "EG got TI5'ed";
    let author = "b2py";
    let likes = this.state.likes;
    let publishedDate = "7-6-2017";
    let link = "https://b.thumbs.redditmedia.com/GmiaHqV8AjzHurnccUXiZ0cIQt53hCKup5An2dv0rzI.png";
    let comments = [
      {
        content: "Get fat soon sheever"
      },
      {
        content: "Get fed soon sheever"
      }
    ];

    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Thread 
          title={title}
          author={author}
          likes={likes}
          publishedDate={publishedDate}
          comments={comments}
          link={link} />
      </div>
    );
  }
}

export default App;

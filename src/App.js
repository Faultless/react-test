import React, { Component } from 'react';
import './App.css';
import Thread from './Thread';
import threads from './threads.json';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      likes: 0
    };

    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote () {
    this.setState(() => {
      let newLikes = this.state.likes + 1; 
      return {
        likes: newLikes
      }
    })
  }

  handleDownvote () {
    this.setState(() => {
      let newLikes = this.state.likes - 1; 
      return {
        likes: newLikes
      }
    })
  }

  render() {
    console.log(threads);
    let title = threads[0].title;
    let author = threads[0].author;
    let likes = this.state.likes;
    let publishedDate = threads[0].publishedDate;
    let imageLink = threads[0].imageLink;
    let comments = threads[0].comments;

    
    return (
      <div className="App">
        <Thread
          title={title}
          author={author}
          likes={likes}
          publishedDate={publishedDate}
          comments={comments}
          imageLink={imageLink}
          upvote={this.handleUpvote}
          downvote={this.handleDownvote} />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Vote from './Vote';

const ThreadInfo = (props) => {
    return (
        <div className="column">
            <h3>{props.title}</h3>
            <div>
                submitted on {props.publishedDate} by <a href="">{props.author}</a>
            </div>
            <div className="smallContent">
                {props.comments.length} Comments
            </div>
        </div>
    )
}

class Thread extends Component {
    constructor(props) {
        super(props);
        this.handleDownvote = this.handleDownvote.bind(this);
        this.handleUpvote = this.handleUpvote.bind(this);
    }
    handleUpvote (event) {
        event.preventDefault();

        this.props.upvote(this.props.title);
    }

    handleDownvote (event) {
        event.preventDefault();
        
        this.props.downvote(this.props.title);
    }
    render () {
        return (
            <div className="row thread">
                <Vote 
                    likes={this.props.likes}
                    handleDownvote={this.handleDownvote}
                    handleUpvote={this.handleUpvote} />
                <div className="column">
                    <img src={this.props.imageLink} alt={this.props.title} />
                </div>
                <ThreadInfo 
                    title="EG"
                    publishedDate="7-1-2017"
                    author="serge"
                    comments={this.props.comments} />   
            </div>
        )
    }
}

Thread.propTypes = {
    upvote: PropTypes.func.isRequired,
    downvote: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    publishedDate: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
}

export default Thread;

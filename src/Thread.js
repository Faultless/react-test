import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Thread extends Component {
    constructor(props) {
        super(props);
    }
    handleUpvote (event) {
        event.preventDefault();

        this.props.upvote(this.props.title)
    }

    handleDownvote (event) {
        event.preventDefault();
        
        this.props.downvote(this.props.title)
    }
    render () {
        return (
            <div className="row thread">
                <div className="column">
                    <button className="upvoteBtn" onClick={this.handleUpvote}></button>
                    <h3>{this.props.likes}</h3>
                    <button className="downvoteBtn" onClick={this.handleDownvote}></button>
                </div>
                <div className="column">
                    <img src={this.props.link} />
                </div>
                <div className="column">
                    <h3>{this.props.title}</h3>
                    <div>
                        submitted on {this.props.publishedDate} by <a href="javascript:;">{this.props.author}</a>
                    </div>
                    <div className="smallContent">
                        {this.props.comments.length} Comments
                    </div>
                </div>
                
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

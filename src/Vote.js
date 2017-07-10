import React from 'react';

export default function Vote (props) {
    return (
        <div className="column">
            <button className="upvoteBtn" onClick={props.handleUpvote}></button>
            <h3 className="likeText">{props.likes}</h3>
            <button className="downvoteBtn" onClick={props.handleDownvote}></button>
        </div>
    )
}
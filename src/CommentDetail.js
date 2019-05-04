// this is a component
import React from 'react';

// props to access the props (properties in index.js)
const CommentDetail = props => {

    // logs props, in this case author name
    // console.log(props);

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {props.timeAgo}
                    </span>
                </div>
                <div className="text">
                    {props.commentBody}
                </div>
            </div>
        </div>
    );
};

// exports component to make ti available
export default CommentDetail;







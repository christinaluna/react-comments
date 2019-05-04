// this is a component
import React from 'react';

// props to access the props (properties in index.js)
const Segment = props => {
    return (
        <div className="ui placeholder segment">{props.children}</div>
    )
};

export default Segment;
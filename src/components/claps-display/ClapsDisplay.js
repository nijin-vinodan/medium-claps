import React from 'react';
import './ClapsDisplay.scss';

const ClapsDisplay = ({ count = 5 }) => {
    return (
        <div className="display" id="clapDisplay">
            {count}
        </div>
    )
}

export default ClapsDisplay;

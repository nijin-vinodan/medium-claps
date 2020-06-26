import React from 'react';
import './ClapCount.scss';

const ClapCount = ({ count }) => {
    return (
        <div className="count" id="clapCount">
            + {count}
        </div>
    )
}

export default ClapCount;

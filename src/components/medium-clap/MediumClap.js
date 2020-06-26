import React, { useState } from 'react';
import './MediumClap.scss';
import withClapAnimation from './../../hoc/withClapAnimation';
import ClapIcon from './../clap-icon/ClapIcon';
import ClapsDisplay from './../claps-display/ClapsDisplay';
import ClapCount from './../clap-count/ClapCount';

const MAX_USER_CLAP = 10;
const initialState = {
    count: 0,
    countTotal: 250,
    isClicked: false
}

const MediumClap = ({ animationTimeline }) => {

    const [claps, setClaps] = useState(initialState);

    const { count, countTotal, isClicked } = claps;

    const handleClapClick = () => {
        animationTimeline.replay();
        setClaps(prevState => ({
            isClicked: true,
            count: Math.min(prevState.count + 1, MAX_USER_CLAP),
            countTotal: count < MAX_USER_CLAP ? prevState.countTotal + 1 : prevState.countTotal
        }));
    }

    return (
        <button id="clap" className="clap" onClick={handleClapClick}>
            <ClapIcon isClicked={isClicked} />
            <ClapCount count={count} />
            <ClapsDisplay count={countTotal} />
        </button>
    )
}

export default withClapAnimation(MediumClap);

import React, { useEffect, useRef, useState } from "react";
import Bull from "./Bull";

interface ArenaWithBullProps {
    matador: React.ReactElement;
}

const ArenaWithBull = ({ matador }: ArenaWithBullProps) => {
    const [applause, setApplause] = useState(0);
    const [screemJoy, setScreamJoy] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // ignore props until 3
        const applauseInterval = setInterval(() => {
            setApplause(Math.floor(Math.random() * 4))
        }, 1000);

        // purpose Parent rerender 
        const screamInterval = setInterval(() => {
            setScreamJoy(Math.random())
        }, 800);
        // respond to custom Events
        const dispatchRunInterval = setInterval(() => {
            const BullRun = new CustomEvent('bullRun')
            document.dispatchEvent(BullRun);
        }, 3000);
        // remove event listener on unmount
        const visibilityInterval = setInterval(() => {
            setIsVisible((oldIsVisible) => !oldIsVisible);
            /// ??? where is error
            const BullRun = new CustomEvent('bullRun')
            document.dispatchEvent(BullRun);
        }, 10000);

        return () => {
            clearInterval(screamInterval);
            clearInterval(applauseInterval);
            clearInterval(dispatchRunInterval);
            clearInterval(visibilityInterval);
        }
    }, []);
    return <div>
        <h1>Bullfighing Arena</h1>
        <div className={'duel'}>
            <div className='matador'>{isVisible ? React.cloneElement(matador, { applause }) : null}</div>
            <Bull />
        </div>
    </div>
}

export default ArenaWithBull;


//  бык бежал, матарод уворачивался 
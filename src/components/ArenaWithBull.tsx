import React, { useEffect, useRef, useState } from "react";

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

        const dispatchRunInterval = setInterval(() => {
            const BullRun = new CustomEvent('bullRun')
            document.dispatchEvent(BullRun);
        }, 3000);
        const visibilityInterval = setInterval(() => {
            setIsVisible((oldIsVisible) => !oldIsVisible);
            const BullRun = new CustomEvent('bullRun')
            document.dispatchEvent(BullRun);
        }, 5000);

        return () => {
            clearInterval(screamInterval);
            clearInterval(applauseInterval);
            clearInterval(dispatchRunInterval);
            clearInterval(visibilityInterval);
        }
    }, []);
    return <div>
        <div>
            <div>Bull  {applause}</div>
            <div>{isVisible ? React.cloneElement(matador, { applause }) : null}</div>
        </div>
    </div>
}

export default ArenaWithBull;
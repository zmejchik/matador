import React, { useEffect, useRef, useState } from "react";
import Bull from "./Bull";

interface ArenaWithBullProps {
    matador: React.ReactElement;
}

const ArenaWithBull = ({ matador }: ArenaWithBullProps) => {
    const [applause, setApplause] = useState(0);
    const [screemJoy, setScreamJoy] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [matadorPosition, setMatarodPosition] = useState(4);
    const [bullPosition, setBullPosition] = useState(8);

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
            const position = Math.floor(Math.random() * 8)
            const BullRun = new CustomEvent('bullRun', {
                detail: {
                    position
                }
            })
            setTimeout(() => {
                setBullPosition(position)
            }, 1000)
            document.dispatchEvent(BullRun);
        }, 1500);
        // remove event listener on unmount
        const visibilityInterval = setInterval(() => {
            setIsVisible((oldIsVisible) => !oldIsVisible);
        }, 20000);

        return () => {
            clearInterval(screamInterval);
            clearInterval(applauseInterval);
            clearInterval(dispatchRunInterval);
            clearInterval(visibilityInterval);
        }
    }, []);
    const currentMatador = isVisible ? <div className='matador'>{React.cloneElement(matador, { applause, setMatarodPosition, matadorPosition })}</div> : null;
    const currentBull = <Bull />;
    return <div className='duelWrapper'>
        <h1>Bullfighing Arena</h1>
        <div className='arena'>
            <div className={"duel"}>
                <div className="cell">
                    {matadorPosition === 0 && currentMatador}
                    {bullPosition === 0 && currentBull}
                </div>
                <div className="cell">
                    {matadorPosition === 1 && currentMatador}
                    {bullPosition === 1 && currentBull}
                </div>
                <div className="cell">
                    {matadorPosition === 2 && currentMatador}
                    {bullPosition === 2 && currentBull}
                </div>
                <div className="cell">
                    {matadorPosition === 3 && currentMatador}
                    {bullPosition === 3 && currentBull}
                </div>
                <div className="cell">
                    {matadorPosition === 4 && currentMatador}
                    {bullPosition === 4 && currentBull}
                </div>
                <div className="cell">
                    {matadorPosition === 5 && currentMatador}
                    {bullPosition === 5 && currentBull}
                </div>
                <div className="cell">
                    {matadorPosition === 6 && currentMatador}
                    {bullPosition === 6 && currentBull}
                </div>
                <div className="cell">
                    {matadorPosition === 7 && currentMatador}
                    {bullPosition === 7 && currentBull}
                </div>
                <div className="cell">
                    {matadorPosition === 8 && currentMatador}
                    {bullPosition === 8 && currentBull}
                </div>
            </div>
        </div>
    </div >
}

export default ArenaWithBull;


//  бык бежал, матарод уворачивался 
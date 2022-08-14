import React, { useEffect, useState } from "react";

interface ArenaWithBullProps {
    matador: React.ReactElement;
}

const ArenaWithBull = ({ matador }: ArenaWithBullProps) => {
    const [applause, setApplause] = useState(0);
    const [screemJoy, setScreamJoy] = useState(0);

    useEffect(() => {
        // ignore props until 3
        const applauseInterval = setInterval(() => {
            setApplause(Math.floor(Math.random() * 4))
        }, 1000);

         // purpose Parent rerender
        const screamInterval = setInterval(() => {
            setScreamJoy(Math.random())
        }, 800);

        return () => {
            clearInterval(screamInterval);
            clearInterval(applauseInterval);
        }
    }, []);
    return <div>
        <div>
            <div>Bull  {applause}</div>
            <div>{React.cloneElement(matador, { applause })}</div>
        </div>
    </div>
}

export default ArenaWithBull;
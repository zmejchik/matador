import React, { useEffect, useState } from "react";

interface ArenaWithBullProps {
    matador: React.ReactElement;
}

const ArenaWithBull = ({ matador }: ArenaWithBullProps) => {
    const [applause, setApplause] = useState(0);
    const [screemJoy, setScreamJoy] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setApplause(Math.random())
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setScreamJoy(Math.random())
        }, 800)
        return () => {
            clearInterval(interval);
        }
    }, []);

    return <div>
        <div>
            <div>Bull </div>
            <div>{React.cloneElement(matador, { screemJoy })}</div>
        </div>
    </div>
}

export default ArenaWithBull;
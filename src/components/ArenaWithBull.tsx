import React, { useEffect, useState } from "react";

interface ArenaWithBullProps {
    matador: React.ReactElement;
}

const ArenaWithBull = ({ matador }: ArenaWithBullProps) => {
    const [applause, setApplause] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {    
            setApplause(Math.random())
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, []);

    return <div>
        <div>
            <div>Bull </div>
            <div>{React.cloneElement(matador)}</div>
        </div>
    </div>
}

export default ArenaWithBull;
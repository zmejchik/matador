import { memo, useEffect, useState } from "react";

export interface TestMatadorProps {
    applause?: number;
    setMatarodPosition?: (position: number) => void; 
    matadorPosition?: number;
}

const TestMatador = ({ applause, matadorPosition, setMatarodPosition }: TestMatadorProps) => {
    const [repeat, setRepeat] = useState(0);

    useEffect(() => {
        if (applause) {
            setRepeat(applause);
            if (applause === repeat) {
                console.log('oh oh oh lucky');
            }
        }
    }, [applause]);

    useEffect(() => {
        const handleBullRun = (e: any) => {
            if (e.detail.position === matadorPosition) {
                let newPosition = Math.floor(Math.random() * 8);
                if (newPosition === matadorPosition) {
                    newPosition = ++newPosition;
                }
                setMatarodPosition?.(newPosition)
            }
        }
        document.addEventListener('bullRun', handleBullRun)
        return () => {
            document.removeEventListener('bullRun', handleBullRun)
        }
    }, [])
    return <div> TEST matador {repeat}</div>
};

const areEqual = (prevProps: TestMatadorProps, nextProps: TestMatadorProps): boolean => {
    if (prevProps.applause === nextProps.applause && nextProps.applause !== 3) return true;
    return nextProps.applause !== 3;
}

export default memo(TestMatador, areEqual)
import { memo, useEffect, useState } from "react";

export interface TestMatadorProps {
    applause?: number;
}

const TestMatador = ({ applause }: TestMatadorProps) => {
    const [test, setTest] = useState(0);

    useEffect(() => {
        if (applause) {
            setTest(applause);
            if (applause === test) {
                console.log('oh oh oh lucky');
            }
        }
    }, [applause]);

    useEffect(() => {
        const log = () => {
            console.log('run');
        }
        document.addEventListener('bullRun', log)
        return () => {
            document.removeEventListener('bullRun', log)
        }
    }, [])
    return <div> TEST matador {test}</div>
};

const areEqual = (prevProps: TestMatadorProps, nextProps: TestMatadorProps): boolean => {
    if (prevProps.applause === nextProps.applause && nextProps.applause !== 3) return true;
    return nextProps.applause !== 3;
}

TestMatador.whyDidYouRender = true;

export default memo(TestMatador, areEqual)
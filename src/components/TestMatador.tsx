import { memo, useEffect, useState } from "react";

interface TestMatadorProps {
    applause: number;
}

const TestMatador = ({ applause }: TestMatadorProps) => {
    const [test, setTest] = useState(0);

    useEffect(() => {
        setTest(test + 1);
    }, [applause]);
    return <div> TEST matador {test}</div>
}

const areEqual = (prevProps: TestMatadorProps, nextProps : TestMatadorProps): boolean => {
    if (prevProps.applause === nextProps.applause && nextProps.applause !== 3) return true;
    return false;
}

export default memo(TestMatador,areEqual)
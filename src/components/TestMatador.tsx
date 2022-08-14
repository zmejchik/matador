import { useEffect, useState } from "react";

interface TestMatadorProps {
    screemJoy: number;
}

export const TestMatador = ({ screemJoy }: TestMatadorProps) => {
    const [test, setTest] = useState(0);

    useEffect(() => {
        setTest(test + 1);
    }, [screemJoy]);
    return <div> TEST matador {test}</div>
}
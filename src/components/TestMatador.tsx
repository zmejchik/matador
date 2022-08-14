import { useEffect, useState } from "react";

export const TestMatador = () => {
    const [test, setTest] = useState(0);

    useEffect(() => {
        setTest(1);
    })
    return <div> TEST matador {test}</div>
}
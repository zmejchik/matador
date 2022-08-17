import React from "react";
import { TestMatadorProps } from "./FunctionalMatador";


class ClassMatador extends React.Component<TestMatadorProps, { test: number }> {
    constructor(props: TestMatadorProps) {
        super(props);
        this.state = { test: 0 };
    }

    log = () => {
        console.log('run');
    }

    componentDidMount() {
        document.addEventListener('bullRun', this.log)
    }

    componentDidUpdate(prevProps: TestMatadorProps) {
        if (prevProps.applause === this.props.applause) {
            console.log('oh oh oh lucky');
        }
    }

    shouldComponentUpdate(nextProps: TestMatadorProps) {
        if (this.props.applause === nextProps.applause && nextProps.applause !== 3) return false;
        return nextProps.applause === 3;
    }

    componentWillUnmount() {
        document.removeEventListener('bullRun', this.log);
    }
    render() {
        return <div> TEST matador {this.state.test}</div>;
    }
}

export default ClassMatador;
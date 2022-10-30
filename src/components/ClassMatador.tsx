import React from "react";
import { TestMatadorProps } from "./FunctionalMatador";


class ClassMatador extends React.Component<TestMatadorProps, { repeat: number }> {
    constructor(props: TestMatadorProps) {
        super(props);
        this.state = { repeat: 0 };
    }

    log = () => {
        console.log('run');
    }

    componentDidMount() {
        document.addEventListener('bullRun', this.log)
    }

    shouldComponentUpdate(nextProps: TestMatadorProps) {
        if (this.props.applause === nextProps.applause && nextProps.applause !== 3) return false;
        return nextProps.applause === 3;
    }

    componentWillUnmount() {
        document.removeEventListener('bullRun', this.log);
    }
    render() {
        return <div> TEST matador {this.state.repeat}</div>;
    }
}

export default ClassMatador;
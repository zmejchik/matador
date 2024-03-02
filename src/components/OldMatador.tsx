import React, { Component } from "react";
import MatadorImage from "../assets/matador.svg";
import Applause3 from "../assets/applause3.wav";

interface MatadorProps {
  matadorPosition?: number;
  setMatadorPosition?: Function;
  applause?: number;
}

class OldMatador extends Component<MatadorProps> {
  private previousApplause: number | undefined;

  constructor(props: MatadorProps) {
    super(props);
    this.previousApplause = undefined;
  }

  componentDidMount() {
    //@ts-ignore
    document.addEventListener("bullRun", this.changePosition);
  }

  componentWillUnmount() {
    //@ts-ignore
    document.removeEventListener("bullRun", this.changePosition);
  }

  changePosition = (event: CustomEvent<{ position: number }>) => {
    const { matadorPosition, setMatadorPosition } = this.props;
    const bullPosition: number = event.detail.position;
    if (matadorPosition === bullPosition) {
      let newMatadorPosition: number = Math.floor(Math.random() * 8);
      while (newMatadorPosition === bullPosition) {
        newMatadorPosition = Math.floor(Math.random() * 8);
      }
      setMatadorPosition?.(newMatadorPosition);
      console.log(
        `Matador is moving from ${bullPosition} to ${newMatadorPosition}`
      );
    }
  };

  componentDidUpdate(prevProps: MatadorProps) {
    const { applause } = this.props;
    if (applause === 3 && prevProps.applause !== 3) {
      const applauseAudio = new Audio(Applause3);
      applauseAudio.play();
    }
    this.previousApplause = applause;
  }

  render() {
    return (
      <div>
        <img
          src={MatadorImage}
          style={{ height: "50%", width: "50%" }}
          alt="Matador"
        />
      </div>
    );
  }
}

export default OldMatador;

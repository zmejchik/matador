import React, { useEffect, useState, memo } from "react";
import MatadorImage from "../assets/matador.svg";
import Applause0 from "../assets/applause0.wav";
import Applause1 from "../assets/applause1.wav";
import Applause2 from "../assets/applause2.wav";
import Applause3 from "../assets/applause3.wav";

interface MatadorProps {
  matadorPosition?: number;
  setMatadorPosition?: Function;
  applause?: number;
}

const Matador: React.FC<MatadorProps> = ({
  matadorPosition,
  setMatadorPosition,
  applause,
}: MatadorProps) => {
  const [previousApplause, setPreviousApplause] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    function changePosition(event: CustomEvent<{ position: number }>) {
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
    }
    //@ts-ignore
    document.addEventListener("bullRun", changePosition);

    return () => {
      //@ts-ignore
      document.removeEventListener("bullRun", changePosition);
    };
  }, [matadorPosition, setMatadorPosition]);

  useEffect(() => {
    if (applause === 3 && previousApplause !== 3) {
      const applauseAudio = new Audio(Applause3);
      applauseAudio.play();
    }

    setPreviousApplause(applause);
  }, [applause, previousApplause]);

  return (
    <div>
      <img
        src={MatadorImage}
        style={{ height: "50%", width: "50%" }}
        alt="Matador"
      />
    </div>
  );
};

export default memo(
  Matador,
  (prevProps: MatadorProps, nextProps: MatadorProps) => {
    return prevProps.applause === 3 && nextProps.applause !== 3;
  }
);

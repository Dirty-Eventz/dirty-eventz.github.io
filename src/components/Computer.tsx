import styled from "styled-components";
import monitors_black from "../assets/monitors_black.png";
import logo from "../assets/dirtyeventz.png";
import monitors from "../assets/monitors.png";
import device from "../assets/device.png";
import boom from "../assets/boom.gif";
import Eye from "./Eye";
import { useState } from "react";

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const Screen = styled.img`
  position: absolute;
  width: 110px;
  height: auto;
`;

const Monitors = styled.img`
  position: absolute;
  width: 350px;
  height: auto;
`;

const Eyes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Computer = () => {
  const [tooLate, setTooLate] = useState<boolean>(true);

  return (
    <TechContainer>
      <Eyes>
        <Eye
          style={{ width: 110, height: 110, top: 150, left: 175 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
        <Eye
          style={{ width: 30, height: 30, top: 173, left: 120 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
        <Eye
          style={{ width: 40, height: 40, top: 220, left: 95 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
        <Eye
          style={{ width: 60, height: 60, top: 220, left: 130 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
        <Eye
          style={{ width: 30, height: 30, top: 220, left: 285 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
        <Eye
          style={{ width: 30, height: 30, top: 165, left: 315 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
        <Eye
          style={{ width: 40, height: 40, top: 205, left: 320 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
        <Eye
          style={{ width: 50, height: 50, top: 260, left: 205 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
        <Eye
          style={{ width: 50, height: 50, top: 260, left: 305 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
        <Eye
          style={{ width: 20, height: 20, top: 305, left: 120 }}
          eyeNum={Math.floor(Math.random() * 4)}
          sizeNum={60 + Math.floor(Math.random() * (100 - 60 + 1))}
          animationNum={Math.floor(Math.random() * 4)}
          timeNum={Math.floor(Math.random() * (10 - 3 + 1)) + 3}
          flipped={Math.random() < 0.5}
        />
      </Eyes>

      {tooLate ? (
        <Screen src={boom} style={{ top: 50, left: 118 }} />
      ) : (
        <Screen src={logo} style={{ top: 57, left: 122 }} />
      )}

      <Monitors src={device} style={{ top: 5, left: 10, zIndex: 1 }} />
      <Monitors src={monitors} style={{ top: 110, left: 40, zIndex: 4 }} />
      <Monitors
        src={monitors_black}
        style={{ top: 110, left: 40, zIndex: 1 }}
      />
    </TechContainer>
  );
};

export default Computer;

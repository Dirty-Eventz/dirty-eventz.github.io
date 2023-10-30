import styled, { keyframes } from "styled-components";
import eye1 from "../assets/eyes/eye1.png";
import eye2 from "../assets/eyes/eye2.png";
import eye3 from "../assets/eyes/eye3.png";
import eye4 from "../assets/eyes/eye4.png";
import pupil from "../assets/eyes/pupil.png";
import { CSSProperties } from "react";

const schizo_base = keyframes`
    0% { transform: translate(0, 0); }
    10% { transform: translate(-5%, 2.5%); }
    20% { transform: translate(5%, -2.5%); }
    30% { transform: translate(-10%, 5%); }
    40% { transform: translate(10%, -5%); }
    50% { transform: translate(0, 5%); }
    60% { transform: translate(-5%, -5%); }
    70% { transform: translate(10%, 2.5%); }
    80% { transform: translate(-5%, 0); }
    90% { transform: translate(0, -2.5%); }
    100% { transform: translate(0, 0); }
`;

const schizo_mild = keyframes`
    0% { transform: translate(0, 0); }
    20% { transform: translate(-2%, 1%); }
    40% { transform: translate(2%, -0.5%); }
    60% { transform: translate(-1%, -1%); }
    80% { transform: translate(1%, 0.5%); }
    100% { transform: translate(0, 0); }
`;

const schizo_twitchy = keyframes`
    0% { transform: translate(0, 0); }
    10% { transform: translate(-10%, 5%); }
    20% { transform: translate(10%, -5%); }
    30% { transform: translate(-10%, 2.5%); }
    40% { transform: translate(5%, -5%); }
    50% { transform: translate(0, 5%); }
    60% { transform: translate(-5%, -2.5%); }
    70% { transform: translate(5%, 2.5%); }
    80% { transform: translate(-5%, 0); }
    90% { transform: translate(0, -2.5%); }
    100% { transform: translate(0, 0); }
`;

const schizo_tweaker = keyframes`
    0% { transform: translate(0, 0); }
    2.5% { transform: translate(-20%, 10%); }
    5% { transform: translate(20%, -10%); }
    7.5% { transform: translate(-20%, 5%); }
    10% { transform: translate(10%, -10%); }
    12.5% { transform: translate(0, 10%); }
    15% { transform: translate(-10%, -5%); }
    17.5% { transform: translate(10%, 5%); }
    20% { transform: translate(-10%, 0); }
    22.5% { transform: translate(0, -5%); }
    25% { transform: translate(10%, 10%); }
    27.5% { transform: translate(-10%, -10%); }
    30% { transform: translate(10%, 0); }
    32.5% { transform: translate(0, 10%); }
    35% { transform: translate(-20%, -10%); }
    37.5% { transform: translate(20%, 10%); }
    40% { transform: translate(-20%, 0); }
    42.5% { transform: translate(0, -10%); }
    45% { transform: translate(20%, 10%); }
    47.5% { transform: translate(-20%, -10%); }
    50% { transform: translate(0, 0); }
`;

const eyes: string[] = [eye1, eye2, eye3, eye4];
const animations = [schizo_base, schizo_mild, schizo_twitchy, schizo_tweaker];

const EyeContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface EyeProps {
  style?: CSSProperties;
  eyeNum: number;
  sizeNum: number;
  animationNum: number;
  timeNum: number;
  flipped: boolean;
}

const Eye = ({
  style,
  eyeNum,
  sizeNum,
  animationNum,
  timeNum,
  flipped,
}: EyeProps) => {
  const Eyelids = styled.img`
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    ${flipped && "transform: scaleY(-1);"}
  `;

  const Eyeball = styled.img`
    position: absolute;
    z-index: 2;
    width: ${sizeNum}%;
    height: ${sizeNum}%;
    animation: ${animations[animationNum]} ${timeNum}s infinite alternate;
  `;

  return (
    <EyeContainer style={style}>
      <Eyelids src={eyes[eyeNum]} />
      <Eyeball src={pupil} />
    </EyeContainer>
  );
};

export default Eye;

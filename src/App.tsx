import { useState } from "react";
import Computer from "./components/Computer";
import styled from "styled-components";
import button_pressed from "./assets/buttons/button_pressed.png";
import button_unpressed from "./assets/buttons/button_unpressed.png";

const Console = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const DoomsdayButton = styled.button`
  position: absolute;
  bottom: 200px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
`;

const DoomsdayButton_img = styled.img`
  width: 250px;
  height: auto;
`;

function App() {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <Console>
      <Computer pressed={pressed} />
      <DoomsdayButton onClick={() => setPressed(true)}>
        {pressed ? (
          <DoomsdayButton_img src={button_pressed} />
        ) : (
          <DoomsdayButton_img src={button_unpressed} />
        )}
      </DoomsdayButton>
    </Console>
  );
}

export default App;

import styled from "styled-components";
import monitors_black from "../assets/monitors_black.png";
import logo from "../assets/dirtyeventz.png";
import monitors from "../assets/monitors.png";
import device from "../assets/device.png";
import boom from "../assets/boom.gif";
import Eye from "./Eye";

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
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
  pointer-events: none;
`;

const Eyes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Screen_Interactable = styled.button`
  position: absolute;
  z-index: 4;
  border: none;
  background-color: transparent;
`;

const Screen_Text = styled.a`
  font-family: "VT323", monospace;
  color: white;
  text-decoration: none;
`;

interface ComputerProps {
  pressed: boolean;
}

const Computer = ({ pressed }: ComputerProps) => {
  return (
    <TechContainer>
      {pressed ? (
        <>
          <Eyes>
            {/* row one */}
            <Screen_Interactable
              style={{ width: 30, height: 30, top: 170, left: 116 }}
            >
              <Screen_Text>djs:</Screen_Text>
            </Screen_Interactable>
            <Screen_Interactable
              style={{ width: 110, height: 110, top: 146, left: 177 }}
            >
              <Screen_Text
                href="https://www.instagram.com/st6nley/"
                style={{
                  textDecoration: "underline",
                  fontSize: "16px",
                  display: "block",
                }}
              >
                @st6nley
              </Screen_Text>
              <br />
              <Screen_Text
                href="https://www.instagram.com/thycups/"
                style={{
                  textDecoration: "underline",
                  fontSize: "16px",
                  margin: "-16px 0 0 0",
                  display: "block",
                }}
              >
                @thycups
              </Screen_Text>
              <br />
              <Screen_Text
                href="https://www.instagram.com/p11no/"
                style={{
                  textDecoration: "underline",
                  fontSize: "16px",
                  margin: "-16px 0 0 0",
                  display: "block",
                }}
              >
                @p11no
              </Screen_Text>
              <br />
              <Screen_Text
                href="https://www.instagram.com/replicator444/"
                style={{
                  textDecoration: "underline",
                  fontSize: "16px",
                  margin: "-16px 0 0 0",
                  display: "block",
                }}
              >
                @replicator444
              </Screen_Text>
              <br />
              <Screen_Text
                href="https://www.instagram.com/feardotc0m/"
                style={{
                  textDecoration: "underline",
                  fontSize: "16px",
                  margin: "-16px 0 0 0",
                  display: "block",
                }}
              >
                @feardotc0m
              </Screen_Text>
            </Screen_Interactable>
            <Screen_Interactable
              style={{
                width: 30,
                height: 30,
                top: 165,
                left: 315,
                transform: "rotate(-6deg)",
              }}
            >
              <Screen_Text>!!!</Screen_Text>
            </Screen_Interactable>

            {/* row two */}
            <Screen_Interactable
              style={{ width: 60, height: 40, top: 220, left: 82 }}
            >
              <Screen_Text
                style={{
                  fontSize: "8px",
                  display: "block",
                  textAlign: "left",
                }}
              >
                經網絡而廣泛流傳的錯誤
              </Screen_Text>
            </Screen_Interactable>
            <Screen_Interactable
              style={{
                width: 60,
                height: 60,
                top: 222,
                left: 130,
                transform: "rotate(-4deg)",
              }}
            >
              <Screen_Text
                style={{
                  margin: "-2px 0 0 0",
                  display: "block",
                }}
              >
                saturday
              </Screen_Text>
              <Screen_Text
                style={{
                  margin: "-2px 0 0 0",
                  display: "block",
                  whiteSpace: "nowrap",
                }}
              >
                march 2nd
              </Screen_Text>
              <Screen_Text
                style={{
                  margin: "-2px 0 0 0",
                  display: "block",
                }}
              >
                9pm-2am
              </Screen_Text>
            </Screen_Interactable>
            <Screen_Interactable
              style={{
                width: 60,
                height: 35,
                top: 220,
                left: 268,
                transform: "rotate(-10deg)",
              }}
            >
              <Screen_Text
                style={{
                  fontSize: "11px",
                  margin: "-4px 0 0 0",
                  display: "block",
                }}
              >
                visuals
              </Screen_Text>
              <Screen_Text
                style={{
                  fontSize: "11px",
                  margin: "-4px 0 0 0",
                  display: "block",
                }}
              >
                vendors
              </Screen_Text>
              <Screen_Text
                style={{
                  fontSize: "11px",
                  margin: "-4px 0 0 0",
                  display: "block",
                }}
              >
                tattoos
              </Screen_Text>
            </Screen_Interactable>
            <Screen_Interactable
              style={{ width: 40, height: 40, top: 205, left: 320 }}
            >
              <Screen_Text>18+</Screen_Text>
            </Screen_Interactable>

            {/* row three */}
            <Screen_Interactable
              style={{
                width: 20,
                height: 20,
                top: 302,
                left: 114,
                transform: "rotate(-8deg)",
              }}
            >
              <Screen_Text
                style={{ fontSize: "20px" }}
                href="https://www.instagram.com/objectivephi"
              >
                Φ
              </Screen_Text>
            </Screen_Interactable>
            <Screen_Interactable
              style={{ width: 50, height: 50, top: 258, left: 198 }}
            >
              <Screen_Text
                href=""
                style={{ textDecoration: "underline", whiteSpace: "nowrap" }}
              >
                rsvp here
              </Screen_Text>
            </Screen_Interactable>
            <Screen_Interactable
              style={{
                width: 50,
                height: 50,
                top: 257,
                left: 303,
                transform: "rotate(12deg)",
              }}
            >
              <Screen_Text>at</Screen_Text>
              <Screen_Text
                href="https://www.instagram.com/beatroot.allston/"
                style={{
                  margin: "-4px 0 0 0",
                  display: "block",
                  textDecoration: "underline",
                }}
              >
                beatroot
              </Screen_Text>
            </Screen_Interactable>
          </Eyes>
          <Screen src={boom} style={{ top: 50, left: 118 }} />
        </>
      ) : (
        <>
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
          <Screen src={logo} style={{ top: 57, left: 122 }} />
        </>
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

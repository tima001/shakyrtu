import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import CircleFrame from "../img/эти фото/цветы рамка.webp";
import Medallion from "../img/эти фото/орнамент.webp";
import Number70 from "../img/цифра70.webp";
import FloralCorner from "../img/эти фото/цветы 1.webp";
import PageBg from "../img/эти фото/фиолетовый гардиентный фон.webp";

const pulse = keyframes`
  0%{box-shadow:0 0 0 0 rgba(200,176,109,.4)}
  70%{box-shadow:0 0 0 10px rgba(200,176,109,0)}
  100%{box-shadow:0 0 0 0 rgba(200,176,109,0)}
`;

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const rotateSlow = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
`;

export default function PhotoWithHeader({ isMuted, onToggle }) {
  return (
    <Hero>
      <FloralCornerImg src={FloralCorner} alt="" />

      <MusicCircle onClick={onToggle} playing={isMuted ? 0 : 1}>
        {isMuted ? "▶" : "❙❙"}
      </MusicCircle>

      <Eyebrow>Мерейтойға шақыру</Eyebrow>

      <Badge>
        <Glow src={Medallion} alt="" />
        <Circle src={CircleFrame} alt="" />
        <Number src={Number70} alt="70" />
        <Years>ЖАС</Years>
      </Badge>

      <Name>Бүбізәйнап</Name>
      <Subtitle>70 жасқа толу мерекесі</Subtitle>
    </Hero>
  );
}

const Hero = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 56px 20px 44px;
  background:
    radial-gradient(120% 90% at 50% 0%, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.78) 45%, rgba(255, 255, 255, 0.2) 100%),
    url("${PageBg}") top center / cover no-repeat,
    #fdfcfd;
  overflow: hidden;
`;

const FloralCornerImg = styled.img`
  position: absolute;
  top: -18px;
  right: -30px;
  width: 220px;
  max-width: 55vw;
  opacity: 0.95;
  z-index: 1;
  pointer-events: none;
`;

const MusicCircle = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 5;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1.5px solid #cdad56;
  background: rgba(255, 255, 255, 0.7);
  color: #84744b;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(132, 116, 75, 0.18);
  animation: ${(p) => (p.playing ? `${pulse} 2s ease-in-out infinite` : "none")};
`;

const Eyebrow = styled.div`
  position: relative;
  z-index: 1;
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 700;
  font-size: clamp(12px, 3.6vw, 16px);
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #856685;
  text-align: center;
  padding: 0 68px;
`;

const Badge = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  max-width: 78vw;
  max-height: 78vw;
  aspect-ratio: 1 / 1;
  margin: 6px 0 4px;
`;

const Glow = styled.img`
  width: 140%;
  height: 140%;
  object-fit: contain;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.2;
  transform-origin: center center;
  animation: ${rotateSlow} 60s linear infinite;
  pointer-events: none;
`;

const Circle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  animation: ${rotate} 22s linear infinite;
`;

const Number = styled.img`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 58%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
`;

const Years = styled.div`
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 700;
  font-size: clamp(20px, 6vw, 26px);
  letter-spacing: 6px;
  color: #6d4a6d;
`;

const Name = styled.div`
  position: relative;
  z-index: 1;
  font-family: "bika", cursive;
  font-size: clamp(48px, 15vw, 68px);
  color: #6d4a6d;
  line-height: 1;
  text-align: center;
  margin-top: 4px;
`;

const Subtitle = styled.div`
  position: relative;
  z-index: 1;
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 4vw, 17px);
  letter-spacing: 2px;
  color: #856685;
  text-align: center;
`;

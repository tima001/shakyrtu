import React from "react";
import styled from "@emotion/styled";
import FrameImg from "../img/рамка.webp";

export default function OvalCard({ children, flip }) {
  return (
    <Outer>
      <FrameBg flip={flip ? 1 : 0}>
        <Content flip={flip ? 1 : 0}>{children}</Content>
      </FrameBg>
    </Outer>
  );
}

const Outer = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 26px;
  display: flex;
  justify-content: center;
`;

const FrameBg = styled.div`
  position: relative;
  width: 100%;
  max-width: 330px;
  background-image: url(${FrameImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transform: ${(p) => (p.flip ? "scaleX(-1)" : "none")};
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  padding: 84px 40px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  transform: ${(p) => (p.flip ? "scaleX(-1)" : "none")};

  @media (max-width: 360px) {
    padding: 74px 30px 84px;
  }
`;

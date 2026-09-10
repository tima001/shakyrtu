import React from "react";
import styled from "@emotion/styled";
import FrameImg from "../img/рамка.webp";

export default function InvitationText() {
  return (
    <Outer>
      <Frame>
        <Heading>Құрметті қонақтар!</Heading>

        <GuestText>
          Сіз(дер)ді анамыз<br />Бүбізәйнаптың 70 жас<br />мерей тойына арналған<br />
          шағын кешіміздің<br />қадірлі қонағы<br />болуға шақырамыз.
        </GuestText>
      </Frame>
    </Outer>
  );
}

const Outer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 24px 36px;
`;

const Frame = styled.div`
  position: relative;
  width: 100%;
  max-width: 330px;
  background-image: url(${FrameImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 84px 40px 96px;

  @media (max-width: 360px) {
    padding: 74px 30px 84px;
  }
`;

const Heading = styled.div`
  font-family: "bika", cursive;
  font-size: clamp(36px, 11vw, 46px);
  color: #6d4a6d;
  text-align: center;
`;

const GuestText = styled.p`
  font-family: "KZ_RomulC", Arial, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.8;
  text-align: center;
  letter-spacing: 0.3px;
  color: #3a204b;
  margin: 0;
`;

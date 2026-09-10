import React from "react";
import styled from "@emotion/styled";

import PhotoWithHeader from "./pages/PhotoWithHeader";
import OvalCard from "./pages/OvalCard";
import InvitationText from "./pages/InvitationText";
import Calendar from "./pages/Calendar";
import CountdownBand from "./pages/CountdownBand";
import InformationText from "./pages/InformationText";
import RestaurantPhotos from "./pages/RestaurantPhotos";
import FormContent from "./pages/FormContent";
import Wishes from "./pages/Wishes";
import Reveal from "./pages/Reveal";
import { TitleFlourish } from "./pages/Ornaments";
import GoldDivider from "./img/эти фото/орнамент 25.webp";
import FloralBottom from "./img/эти фото/цветы 2.webp";
import PageBg from "./img/эти фото/фиолетовый гардиентный фон.webp";

export default function Components({ isMuted, onToggle }) {
  return (
    <Page>
      <PhotoWithHeader isMuted={isMuted} onToggle={onToggle} />

      <Divider><img src={GoldDivider} alt="" style={{ width: 160, opacity: 0.9 }} /></Divider>

      <Reveal>
          <InvitationText />
      </Reveal>

      <Reveal><Calendar /></Reveal>

      <Reveal><CountdownBand /></Reveal>

      <Reveal>
        <OvalCard flip>
          <InformationText />
        </OvalCard>
      </Reveal>

      <Reveal><RestaurantPhotos /></Reveal>

      <Reveal><FormContent /></Reveal>

      <Divider>
        <img src={GoldDivider} alt="" style={{ width: 130, opacity: 0.9 }} />
      </Divider>

      <Reveal><Wishes /></Reveal>


      <Reveal>
        <Closing>
          {/* <FloralDeco src={FloralBottom} alt="" /> */}
          <TitleFlourish gap={14}>
            <CloseTitle>Той иелері:</CloseTitle>
          </TitleFlourish>
          <CloseSub>Балалары</CloseSub>

        </Closing>
      </Reveal>

    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fdfcfd;
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0 8px;
  background: #fdfcfd;
`;

const Closing = styled.div`
  position: relative;
  background:
    linear-gradient(to top, rgba(253, 252, 253, 0.35), rgba(253, 252, 253, 0.92) 55%),
    url("${PageBg}") bottom center / cover no-repeat,
    #fdfcfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 20px 60px;
  text-align: center;
  overflow: hidden;
`;

const FloralDeco = styled.img`
  width: min(320px, 80%);
  opacity: 0.9;
  margin-bottom: -6px;
  pointer-events: none;
`;

const CloseTitle = styled.div`
  font-family: "bika", cursive;
  font-size: 54px;
  color: #6d4a6d;
`;

const CloseSub = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 400;
  font-size: 19px;
  color: #856685;
`;

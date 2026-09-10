import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { TitleFlourish } from "./Ornaments";

const SEED = [
  { name: "Балалары", likes: 5, text: "Анашым, сізді 70 жасқа толу мерейтойыңызбен шын жүректен құттықтаймыз! Денсаулығыңыз мықты, ғұмыріңіз ұзақ болсын!" },
  { name: "Немерелері", likes: 4, text: "Сүйікті әжеміз! Мерейлі мерейтойыңызбен құттықтаймыз. Сізбен бірге болған әр сәт біз үшін бақыт. Ұзақ ғұмыр, мықты денсаулық тілейміз!" },
  { name: "Туыстары мен достары", likes: 4, text: "Құрметті Бүбізәйнап апай! Мерейтойыңыз құтты болсын. Немере-шөберелеріңіздің қуанышын көре беріңіз!" },
];

export default function Wishes() {
  const scroller = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const cardW = el.firstChild ? el.firstChild.offsetWidth + 12 : 1;
    setActive(Math.round(el.scrollLeft / cardW));
  };

  return (
    <Wrap>
      <TitleFlourish gap={14}><Title>Ізгі тілектер:</Title></TitleFlourish>

      <Scroller ref={scroller} onScroll={onScroll}>
        {SEED.map((w, i) => (
          <Card key={i}>
            <LikeBadge>♥ {w.likes}</LikeBadge>
            <Quote>“</Quote>
            <WishText>{w.text}</WishText>
            <CardFoot>
              <Avatar>{w.name.charAt(0)}</Avatar>
              <div>
                <WName>{w.name}</WName>
              </div>
            </CardFoot>
          </Card>
        ))}
      </Scroller>

      <Dots>
        {SEED.map((_, i) => (
          <Dot key={i} active={i === active ? 1 : 0} />
        ))}
      </Dots>
    </Wrap>
  );
}

const Wrap = styled.div`
  background: #fdfcfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 44px 0 56px;
`;

const Title = styled.div`
  font-family: "bika", cursive;
  font-size: 48px;
  color: #6d4a6d;
  text-align: center;
`;

const Scroller = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 20px 24px 4px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar { display: none; }
`;

const Card = styled.div`
  position: relative;
  flex: 0 0 82%;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 18px rgba(109, 74, 109, 0.12);
  padding: 22px 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LikeBadge = styled.div`
  position: absolute;
  top: -14px;
  right: 14px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(132, 116, 75, 0.18);
  padding: 5px 12px;
  font-size: 12px;
  color: #c0504d;
  font-family: "body", Arial, sans-serif;
  font-weight: 600;
`;

const Quote = styled.div`
  font-family: "display", cursive;
  font-size: 40px;
  color: #d9c3de;
  line-height: 0.5;
`;

const WishText = styled.div`
  font-family: "body", Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #3a204b;
  min-height: 64px;
`;

const CardFoot = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid rgba(109, 74, 109, 0.12);
  padding-top: 12px;
  margin-top: auto;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #4b2a5a;
  color: #fdfcfd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "body", Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
`;

const WName = styled.div`
  font-family: "body", Arial, sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #3a204b;
`;

const Dots = styled.div`
  display: flex;
  gap: 6px;
`;

const Dot = styled.div`
  width: ${(p) => (p.active ? "18px" : "6px")};
  height: 6px;
  border-radius: 3px;
  background: ${(p) => (p.active ? "#6d4a6d" : "#e3d3e6")};
  transition: all 0.25s;
`;

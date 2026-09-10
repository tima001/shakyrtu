import React from "react";
import styled from "@emotion/styled";

export function FlourishDivider({ color = "#cdad56", width = 280 }) {
  return (
    <FlourishSvg viewBox="0 0 320 28" width={width} style={{ color }}>
      <line x1="0" y1="14" x2="118" y2="14" stroke="currentColor" strokeWidth="1" />
      <line x1="202" y1="14" x2="320" y2="14" stroke="currentColor" strokeWidth="1" />
      <path d="M118,14 C128,6 138,6 148,14" stroke="currentColor" fill="none" strokeWidth="1" strokeLinecap="round" />
      <path d="M202,14 C192,6 182,6 172,14" stroke="currentColor" fill="none" strokeWidth="1" strokeLinecap="round" />
      <path d="M160,3 L165,14 L160,25 L155,14 Z" fill="currentColor" opacity="0.75" />
      <circle cx="160" cy="14" r="2.6" fill="#fffbec" />
    </FlourishSvg>
  );
}

const FlourishSvg = styled.svg`
  display: block;
  height: auto;
`;

export function CornerFlourish({ color = "#cdad56", flip = false, size = 30 }) {
  return (
    <CurlSvg
      viewBox="0 0 60 60"
      width={size}
      height={size}
      style={{ color, transform: flip ? "scaleX(-1)" : "none" }}
    >
      <path
        d="M4,52 C4,22 20,6 52,4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M52,4 C40,5 31,11 30,21"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="30" cy="21" r="2.6" fill="currentColor" />
    </CurlSvg>
  );
}

const CurlSvg = styled.svg`
  display: block;
  flex-shrink: 0;
`;

export function TitleFlourish({ children, color = "#cdad56", gap = 12 }) {
  return (
    <Row style={{ gap }}>
      <CornerFlourish color={color} />
      {children}
      <CornerFlourish color={color} flip />
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

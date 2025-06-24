import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled, { keyframes, css } from "styled-components";
import type { NextPage } from "next";
import Link from "next/link";

const crashInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate(-2000px, -50%);
  }
  30% {
    opacity: 0.7;
    transform: translate(400px, -50%) scale(1.2);
  }
  45% {
    transform: translate(-200px, -80%) scale(0.9);
  }
  60% {
    transform: translate(100px, -20%) scale(1.1);
  }
  75% {
    transform: translate(-60px, -60%) scale(0.95);
  }
  85% {
    transform: translate(30px, -40%) scale(1.05);
  }
  92% {
    transform: translate(-10px, -45%) scale(0.98);
  }
  100% { 
    opacity: 0.7;
    transform: translate(0, -50%) scale(1); 
  }
`;

const crashInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate(2000px, -50%);
  }
  30% {
    opacity: 0.7;
    transform: translate(-400px, -50%) scale(1.2);
  }
  45% {
    transform: translate(200px, -20%) scale(0.9);
  }
  60% {
    transform: translate(-100px, -80%) scale(1.1);
  }
  75% {
    transform: translate(60px, -40%) scale(0.95);
  }
  85% {
    transform: translate(-30px, -60%) scale(1.05);
  }
  92% {
    transform: translate(10px, -55%) scale(0.98);
  }
  100% { 
    opacity: 0.7;
    transform: translate(0, -50%) scale(1); 
  }
`;

const crashInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 2000px);
  }
  30% {
    opacity: 0.7;
    transform: translate(-50%, -400px) scale(1.2);
  }
  45% {
    transform: translate(-80%, 200px) scale(0.9);
  }
  60% {
    transform: translate(-20%, -100px) scale(1.1);
  }
  75% {
    transform: translate(-60%, 60px) scale(0.95);
  }
  85% {
    transform: translate(-40%, -30px) scale(1.05);
  }
  92% {
    transform: translate(-45%, 10px) scale(0.98);
  }
  100% { 
    opacity: 0.7;
    transform: translate(-50%, 0) scale(1); 
  }
`;

const popOutCV = keyframes`
  0% {
    opacity: 0;
    transform: translate(200px, 0) scale(0);
  }
  50% {
    opacity: 0.7;
    transform: translate(50px, 0) scale(1.2);
  }
  75% {
    transform: translate(-10px, 0) scale(0.9);
  }
  100% {
    opacity: 0.7;
    transform: translate(0, 0) scale(1);
  }
`;

const popOutContact = keyframes`
  0% {
    opacity: 0;
    transform: translate(-200px, 0) scale(0);
  }
  50% {
    opacity: 0.7;
    transform: translate(-50px, 0) scale(1.2);
  }
  75% {
    transform: translate(10px, 0) scale(0.9);
  }
  100% {
    opacity: 0.7;
    transform: translate(0, 0) scale(1);
  }
`;

const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 5rem 2rem 2rem 2rem;
    overflow: visible;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  position: relative;
  margin-top: -150px;
  overflow: visible;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: -100px;
  }
`;

const CloverContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  z-index: 1;
  overflow: visible;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 1000px;
    height: 1000px;
    margin-top: -100px;
  }
`;

const CircleLink = styled(Link)<{
  $position: "left" | "right" | "bottom";
  $shouldAnimate: boolean;
}>`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.orange};
  opacity: ${({ $shouldAnimate }) => ($shouldAnimate ? 0 : 0.7)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 500px;
    height: 500px;
  }

  ${({ $position, $shouldAnimate }) => {
    switch ($position) {
      case "left":
        return css`
          top: 30%;
          left: -10%;
          animation: ${$shouldAnimate ? crashInLeft : "none"} 2.8s
            cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;

          @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
            top: 40%;
            left: 5%;
            transform: translateY(-50%);
            animation: ${$shouldAnimate ? crashInLeft : "none"} 2.8s
              cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          }
        `;
      case "right":
        return css`
          top: 30%;
          right: -10%;
          animation: ${$shouldAnimate ? crashInRight : "none"} 2.8s
            cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s forwards;

          @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
            top: 40%;
            right: 5%;
            transform: translateY(-50%);
            animation: ${$shouldAnimate ? crashInRight : "none"} 2.8s
              cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s forwards;
          }
        `;
      case "bottom":
        return css`
          bottom: -5%;
          left: 50%;
          transform: translateX(-50%);
          animation: ${$shouldAnimate ? crashInBottom : "none"} 2.8s
            cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s forwards;

          @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
            bottom: 0%;
            left: 50%;
            transform: translateX(-50%);
            animation: ${$shouldAnimate ? crashInBottom : "none"} 2.8s
              cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s forwards;
          }
        `;
      default:
        return "";
    }
  }}

  &:hover {
    transform: ${({ $position }) => {
      switch ($position) {
        case "left":
        case "right":
          return "translateY(-50%) scale(1.1)";
        case "bottom":
          return "translateX(-50%) scale(1.1)";
        default:
          return "scale(1.1)";
      }
    }};
    opacity: 0.9 !important;
  }
`;

const CircleText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3.5rem;
  }
`;

const SmallCircleLink = styled(Link)<{
  $type: "cv" | "contact";
  $shouldAnimate: boolean;
}>`
  position: absolute;
  border-radius: 50%;
  opacity: ${({ $shouldAnimate }) => ($shouldAnimate ? 0 : 0.7)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  z-index: 20;
  background-color: white;
  border: 3px solid ${({ theme }) => theme.colors.orange};
  transition: all 0.3s ease;

  ${({ $type, theme, $shouldAnimate }) => {
    switch ($type) {
      case "cv":
        return css`
          width: 140px;
          height: 140px;
          top: 130%;
          left: 0%;
          animation: ${$shouldAnimate ? popOutCV : "none"} 1s
            cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.4s forwards;

          @media (min-width: ${theme.breakpoints.desktop}) {
            width: 220px;
            height: 220px;
            left: -5%;
            top: 65%;
            border-width: 4px;
          }
        `;
      case "contact":
        return css`
          width: 100px;
          height: 100px;
          top: 115%;
          right: 5%;
          animation: ${$shouldAnimate ? popOutContact : "none"} 1s
            cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.4s forwards;

          @media (min-width: ${theme.breakpoints.desktop}) {
            width: 160px;
            height: 160px;
            right: 0%;
            top: 75%;
            border-width: 4px;
          }
        `;
    }
  }}

  &:hover {
    transform: scale(1.05);
    border-color: #ff3b30;
    box-shadow: 0 0 15px #ff3b30, 0 0 25px #ff3b30,
      0 0 35px rgba(255, 59, 48, 0.5);
  }
`;

const SmallCircleText = styled.span<{ $type: "cv" | "contact" }>`
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
  transition: color 0.3s ease;

  ${({ $type, theme }) => {
    switch ($type) {
      case "cv":
        return css`
          font-size: 1.4rem;
          @media (min-width: ${theme.breakpoints.desktop}) {
            font-size: 2rem;
          }
        `;
      case "contact":
        return css`
          font-size: 1.1rem;
          @media (min-width: ${theme.breakpoints.desktop}) {
            font-size: 1.6rem;
          }
        `;
    }
  }}

  ${SmallCircleLink}:hover & {
    color: #ff3b30;
  }
`;

const Home: NextPage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  // const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <>
      <Head>
        <title>Ylva Landoff Lindberg - Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio - Explore my creative journey through art, technology, and innovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingContainer>
        <HeroSection>
          <CloverContainer>
            <CircleLink
              href="/code"
              $position="left"
              $shouldAnimate={shouldAnimate}
            >
              <CircleText>Code</CircleText>
            </CircleLink>
            <CircleLink
              href="/collage"
              $position="right"
              $shouldAnimate={shouldAnimate}
            >
              <CircleText>Art</CircleText>
            </CircleLink>
            <CircleLink
              href="/video"
              $position="bottom"
              $shouldAnimate={shouldAnimate}
            >
              <CircleText>Video</CircleText>
            </CircleLink>
            <SmallCircleLink
              href="/cv"
              $type="cv"
              $shouldAnimate={shouldAnimate}
            >
              <SmallCircleText $type="cv">CV</SmallCircleText>
            </SmallCircleLink>
            <SmallCircleLink
              href="/contact"
              $type="contact"
              $shouldAnimate={shouldAnimate}
            >
              <SmallCircleText $type="contact">Contact</SmallCircleText>
            </SmallCircleLink>
          </CloverContainer>
        </HeroSection>
      </LandingContainer>
    </>
  );
};

export default Home;

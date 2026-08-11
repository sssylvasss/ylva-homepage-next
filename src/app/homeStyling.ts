"use client"
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";

const crashInLeft = keyframes`
  0% { opacity: 0; transform: translate(-2000px, -50%); }
  60% { opacity: 0.7; }
  100% { opacity: 0.7; transform: translate(0, -50%); }
`;

const crashInRight = keyframes`
  0% { opacity: 0; transform: translate(2000px, -50%); }
  60% { opacity: 0.7; }
  100% { opacity: 0.7; transform: translate(0, -50%); }
`;

const crashInBottom = keyframes`
  0% { opacity: 0; transform: translate(-50%, 2000px); }
  60% { opacity: 0.7; }
  100% { opacity: 0.7; transform: translate(-50%, 0); }
`;

const popOutCV = keyframes`
  0% { opacity: 0; transform: scale(0); }
  60% { opacity: 0.7; }
  100% { opacity: 0.7; transform: scale(1); }
`;

const popOutContact = keyframes`
  0% { opacity: 0; transform: scale(0); }
  60% { opacity: 0.7; }
  100% { opacity: 0.7; transform: scale(1); }
`;

export const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: #ffffff;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (min-width: 991px) {
    padding: 5rem 2rem 2rem 2rem;
    overflow: visible;
  }
`;

export const HeroSection = styled.section`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  position: relative;
  margin-top: -150px;
  overflow: visible;

  @media (min-width: 991px) {
    margin-top: -100px;
  }
`;

export const CloverContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  z-index: 1;
  overflow: visible;

  @media (min-width: 991px) {
    width: 1000px;
    height: 1000px;
    margin-top: -100px;
  }
`;

export const CircleLinkLeft = styled(Link)<{ $shouldAnimate: boolean }>`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fc4103;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
  top: 40%;
  left: 5%;
  transform: translateY(-50%);
  opacity: ${({ $shouldAnimate }) => ($shouldAnimate ? 0 : 0.7)};

  ${({ $shouldAnimate }) =>
    $shouldAnimate &&
    css`
      animation: ${crashInLeft} 2.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    `}

  @media (min-width: 991px) { width: 500px; height: 500px; }
  @media (max-width: 991px) { top: 30%; left: -10%; }
  &:hover { transform: translateY(-50%) scale(1.1); opacity: 0.9; }
`;

export const CircleLinkRight = styled(Link)<{ $shouldAnimate: boolean }>`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fc4103;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
  top: 40%;
  right: 5%;
  transform: translateY(-50%);
  opacity: ${({ $shouldAnimate }) => ($shouldAnimate ? 0 : 0.7)};

  ${({ $shouldAnimate }) =>
    $shouldAnimate &&
    css`
      animation: ${crashInRight} 2.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s forwards;
    `}

  @media (min-width: 991px) { width: 500px; height: 500px; }
  @media (max-width: 991px) { top: 30%; right: -10%; }
  &:hover { transform: translateY(-50%) scale(1.1); opacity: 0.9; }
`;

export const CircleLinkBottom = styled(Link)<{ $shouldAnimate: boolean }>`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fc4103;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${({ $shouldAnimate }) => ($shouldAnimate ? 0 : 0.7)};

  ${({ $shouldAnimate }) =>
    $shouldAnimate &&
    css`
      animation: ${crashInBottom} 2.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s forwards;
    `}

  @media (min-width: 991px) { width: 500px; height: 500px; }
  @media (max-width: 991px) { bottom: -5%; }
  &:hover { transform: translateX(-50%) scale(1.1); opacity: 0.9; }
`;

export const CircleText = styled.span`
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: 991px) {
    font-size: 3.5rem;
  }
`;

export const SmallCircleLinkCV = styled(Link)<{ $shouldAnimate: boolean }>`
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  z-index: 20;
  background-color: white;
  border: 3px solid #fc4103;
  transition: all 0.3s ease;
  top: 130%;
  left: 0%;
  opacity: ${({ $shouldAnimate }) => ($shouldAnimate ? 0 : 0.7)};

  ${({ $shouldAnimate }) =>
    $shouldAnimate &&
    css`
      animation: ${popOutCV} 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.4s forwards;
    `}

  @media (min-width: 991px) {
    width: 220px;
    height: 220px;
    left: -5%;
    top: 65%;
    border-width: 4px;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #ff3b30;
    box-shadow: 0 0 15px #ff3b30, 0 0 25px #ff3b30, 0 0 35px rgba(255, 59, 48, 0.5);
  }
`;

export const SmallCircleLinkContact = styled(Link)<{ $shouldAnimate: boolean }>`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  z-index: 20;
  background-color: white;
  border: 3px solid #fc4103;
  transition: all 0.3s ease;
  top: 115%;
  right: 5%;
  opacity: ${({ $shouldAnimate }) => ($shouldAnimate ? 0 : 0.7)};

  ${({ $shouldAnimate }) =>
    $shouldAnimate &&
    css`
      animation: ${popOutContact} 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.4s forwards;
    `}

  @media (min-width: 991px) {
    width: 160px;
    height: 160px;
    right: 0%;
    top: 75%;
    border-width: 4px;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #ff3b30;
    box-shadow: 0 0 15px #ff3b30, 0 0 25px #ff3b30, 0 0 35px rgba(255, 59, 48, 0.5);
  }
`;

export const SmallCircleText = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  color: #fc4103;
  transition: color 0.3s ease;
  font-size: 1.4rem;

  @media (min-width: 991px) {
    font-size: 2rem;
  }

  &:hover {
    color: #ff3b30;
  }
`;

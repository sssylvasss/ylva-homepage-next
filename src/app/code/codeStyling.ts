import styled, { keyframes } from "styled-components";

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 165, 0, 0.2),
                0 0 10px rgba(255, 165, 0, 0.2),
                0 0 15px rgba(255, 165, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.3),
                0 0 20px rgba(255, 165, 0, 0.3),
                0 0 30px rgba(255, 165, 0, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 165, 0, 0.2),
                0 0 10px rgba(255, 165, 0, 0.2),
                0 0 15px rgba(255, 165, 0, 0.2);
  }
`;

export const CodeContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #1a1a1a;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media (min-width: 991px) {
    padding: 5rem 2rem 2rem 2rem;
  }
`;

export const ContentSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 1rem;

  @media (min-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectCard = styled.div`
  background: rgba(30, 30, 30, 0.95);
  border-radius: 15px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${glowAnimation} 3s infinite ease-in-out;
  min-width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    background: rgba(35, 35, 35, 0.95);
  }

  &::before {
    content: "</>";
    position: absolute;
    top: 10px;
    right: 10px;
    font-family: monospace;
    color: rgba(255, 255, 255, 0.1);
    font-size: 1.2rem;
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: var(--color-orange);
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
  height: 9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

export const TechTag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  margin: 0.5rem 0.5rem 0.5rem 0;
  font-size: 0.9rem;
  color: var(--color-orange);
  font-family: monospace;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: var(--color-orange);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  flex: 1;
  min-width: 130px;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  svg {
    margin-right: 0.5rem;
  }
`;
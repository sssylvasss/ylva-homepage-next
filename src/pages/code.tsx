import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import type { NextPage } from "next";

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

const CodeContainer = styled.div`
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 5rem 2rem 2rem 2rem;
  }
`;

const ContentSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: rgba(30, 30, 30, 0.95);
  border-radius: 15px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${glowAnimation} 3s infinite ease-in-out;

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

const ProjectImage = styled.div`
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

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.orange};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
`;

const TechTag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  margin: 0.5rem 0.5rem 0.5rem 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.orange};
  font-family: monospace;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

interface ProjectProps {
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
}

const ProjectCardComponent: React.FC<ProjectProps> = ({
  title,
  description,
  imageUrl,
  technologies,
}) => (
  <ProjectCard>
    <ProjectImage>
      {imageUrl && (
        <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
      )}
    </ProjectImage>
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
    <div>
      {technologies.map((tech, index) => (
        <TechTag key={index}>{tech}</TechTag>
      ))}
    </div>
  </ProjectCard>
);

const Code: NextPage = () => {
  // Example projects - replace with your actual data later
  const projects: ProjectProps[] = [
    {
      title: "Project One",
      description:
        "A futuristic web application showcasing innovative technologies and modern design patterns.",
      technologies: ["React", "TypeScript", "Node.js"],
    },
    {
      title: "Project Two",
      description:
        "An AI-powered platform that transforms the way we interact with data.",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
    {
      title: "Project Three",
      description:
        "A blockchain solution for secure and transparent transactions.",
      technologies: ["Solidity", "Web3.js", "Ethereum"],
    },
    // Add more projects as needed
  ];

  return (
    <>
      <Head>
        <title>Code | sssylvasss </title>
        <meta
          name="description"
          content="Code projects and development work by Ylva Landoff Lindberg"
        />
      </Head>

      <CodeContainer>
        <ContentSection>
          <Title>Code</Title>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCardComponent key={index} {...project} />
            ))}
          </ProjectsGrid>
        </ContentSection>
      </CodeContainer>
    </>
  );
};

export default Code;

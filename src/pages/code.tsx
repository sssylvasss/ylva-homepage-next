import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import type { NextPage } from "next";
import { type ProjectProps, projects as projectData } from "../data/projects";

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
  height: 9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
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

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.orange};
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

const ProjectCardComponent: React.FC<ProjectProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
  githubUrl,
}) => {
  return (
    <ProjectCard>
      <ProjectImage
        style={{ cursor: projectUrl ? "pointer" : "default" }}
        onClick={() => projectUrl && window.open(projectUrl, "_blank")}
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </ProjectImage>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <div
        style={{
          margin: "2rem 0 1rem 0",
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          flexWrap: "nowrap",
        }}
      >
        {projectUrl && (
          <LinkButton
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 3h6v6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 14L21 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Live Demo
          </LinkButton>
        )}
        {githubUrl && (
          <LinkButton
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            GitHub
          </LinkButton>
        )}
      </div>
      <div>
        {technologies.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </div>
    </ProjectCard>
  );
};

const Code: NextPage = () => {
  const projects = projectData;

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

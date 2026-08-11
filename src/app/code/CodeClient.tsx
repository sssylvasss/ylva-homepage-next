"use client";

import React from "react";
import Image from "next/image";
import { type ProjectProps, projects as projectData } from "../../data/projects";
import {
  CodeContainer,
  ContentSection,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  TechTag,
  LinkButton,
} from "./codeStyling";

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
          <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
        )}
      </ProjectImage>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <div style={{ margin: "2rem 0 1rem 0", display: "flex", flexDirection: "row", gap: "0.5rem", flexWrap: "nowrap" }}>
        {projectUrl && (
          <LinkButton href={projectUrl} target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Live Demo
          </LinkButton>
        )}
        {githubUrl && (
          <LinkButton href={githubUrl} target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

export default function CodeClient() {
  return (
    <CodeContainer>
      <ContentSection>
        <ProjectsGrid>
          {projectData.map((project, index) => (
            <ProjectCardComponent key={index} {...project} />
          ))}
        </ProjectsGrid>
      </ContentSection>
    </CodeContainer>
  );
}
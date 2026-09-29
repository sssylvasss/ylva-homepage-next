"use client";

import React from "react";
import Image from "next/image";
import { type ProjectProps, projects as projectData } from "../../data/projects";
import {
  CodeContainer,
  ProjectsGrid,
  Project,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  Technologies,
  ProjectLinks,
} from "./codeStyling";

const ProjectItem: React.FC<ProjectProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
  githubUrl,
}) => {
  return (
    <Project>
      {imageUrl && (
        <ProjectImage
          as={projectUrl ? "a" : "div"}
          href={projectUrl}
          target={projectUrl ? "_blank" : undefined}
          rel={projectUrl ? "noopener noreferrer" : undefined}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 520px) 90vw, (max-width: 991px) 45vw, 30vw"
          />
        </ProjectImage>
      )}
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <Technologies>{technologies.join(" · ")}</Technologies>
      {(projectUrl || githubUrl) && (
        <ProjectLinks>
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              Live site
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </ProjectLinks>
      )}
    </Project>
  );
};

export default function CodeClient() {
  return (
    <CodeContainer>
      <ProjectsGrid>
        {projectData.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </ProjectsGrid>
    </CodeContainer>
  );
}

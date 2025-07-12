import React from 'react';
import ProjectSummary from '../../Components/ProjectSummary/ProjectSummary';
import Title from '../../Components/Title/Title';
import classes from './Projects.module.scss';
import { projectsList } from '../../Utils/Constants';

export const Projects = () => {
  const renderExistingProjects = () => {
    return projectsList
      .filter(cur => !cur.current)
      .map(cur => (
        <ProjectSummary
          key={cur.id}
          title={cur.title}
          github={cur.github}
          link={cur.link}
          text={cur.text}
        />
      ));
  };

  const renderCurrentProjects = () => {
    return projectsList
      .filter(cur => cur.current)
      .map(cur => (
        <ProjectSummary
          key={cur.id}
          title={cur.title}
          github={cur.github}
          link={cur.link}
          text={cur.text}
        />
      ));
  };

  return (
    <div className={classes.container}>
  <Title bold="Previous">projects I've worked on</Title>
  {renderExistingProjects()}

  <Title bold="Ongoing">projects I'm currently exploring</Title>
  {renderCurrentProjects()}
</div>

  );
};

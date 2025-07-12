import React from 'react';
import classes from './Experience.module.scss';
import Title from '../../Components/Title/Title';
import { experienceList } from '../../Utils/Constants';

const Experience = () => {
  return (
    <div className={classes.container}>
      <Title bold="Work">Experience</Title>

      {experienceList.length === 0 ? (
        <p>No experience to show yet.</p>
      ) : (
        experienceList.map(({ id, title, role, organization, location, date, description }) => (
          <div key={id} className={classes.experience}>
            <h3>
              {title} <span> - {role}</span>
            </h3>
            <p className={classes.roleOrg}><strong>{organization}</strong></p>
            <p className={classes.locationDate}>
              {location} <em>({date})</em>
            </p>
            {description && description.length > 0 ? (
              <ul className={classes.descriptionList}>
                {description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>No details available.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Experience;

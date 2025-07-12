import classes from "./Skills.module.scss";
import React from "react";
import { skills, educationList } from "../../Utils/Constants";
import EducationComponent from "../../Components/EducationComponent/EducationComponent";
import Title from "../../Components/Title/Title";

const Skill = () => {
   const renderEducations = () => {
      return educationList.map(cur => {
         return <EducationComponent key={cur.id} data={cur} />;
      });
   };

   const renderSkills = () => {
      return (
         <ul>
            {skills.split(";").map((skill, index) => (
               <li key={index}>{skill.trim()}</li>
            ))}
         </ul>
      );
   };

   return (
      <div className={classes.container}>
         <div className={classes.skillsContainer}>
            <Title bold="Skills" />
            <div className={classes.skillsListContainer}>
               {renderSkills()}
            </div>
         </div>
         <div className={classes.educationContainer}>
            <Title bold="Education" />
            <ul className={classes.educationListContainer}>{renderEducations()}</ul>
         </div>
      </div>
   );
};

export default Skill;

import React from 'react'
import './Skills.css'
import Skills_Programming_Data from '../../assets/skill_programming_data'
import Skills_Frameworks_Data from '../../assets/skill_frameworks_data'
import Skills_Databases_Data from '../../assets/skill_databases_data'
import Skills_Tools_Data from '../../assets/skill_tools_data'
import Skills_UIUX_Data from '../../assets/skill_uiux_data'
import Skill_Devops_Data from '../../assets/skill_devops_data'
import Skill_SoftSkills_Data from '../../assets/skill_softskills_data'

const Skills = () => {
  return (
    <div id='skill' className='skills'>
        <div className="skills-title">
            <h1>My Skills</h1>
        </div>
        <div className="skill-title">
            <h2>Programming Languages</h2>
        </div>
        <div className="skills-container">
            {Skills_Programming_Data.map((skill,index)=>{
                return <div key={index} className='skills-format'>
                    <h2>{skill.s_name}</h2>
                </div>
            })}
        </div>
        <div className="skill-title">
            <h2>Frameworks & Libraries</h2>
        </div>
        <div className="skills-container">
            {Skills_Frameworks_Data.map((skill,index)=>{
                return <div key={index} className='skills-format'>
                    <h2>{skill.s_name}</h2>
                </div>
            })}
        </div>
        <div className="skill-title">
            <h2>Databases</h2>
        </div>
        <div className="skills-container">
            {Skills_Databases_Data.map((skill,index)=>{
                return <div key={index} className='skills-format'>
                    <h2>{skill.s_name}</h2>
                </div>
            })}
        </div>
        <div className="skill-title">
            <h2>Tools and Technologies</h2>
        </div>
        <div className="skills-container">
            {Skills_Tools_Data.map((skill,index)=>{
                return <div key={index} className='skills-format'>
                    <h2>{skill.s_name}</h2>
                </div>
            })}
        </div>
        <div className="skill-title">
            <h2>UI/UX & Design</h2>
        </div>
        <div className="skills-container">
            {Skills_UIUX_Data.map((skill,index)=>{
                return <div key={index} className='skills-format'>
                    <h2>{skill.s_name}</h2>
                </div>
            })}
        </div>
        <div className="skill-title">
            <h2>Devops</h2>
        </div>
        <div className="skills-container">
            {Skill_Devops_Data.map((skill,index)=>{
                return <div key={index} className='skills-format'>
                    <h2>{skill.s_name}</h2>
                </div>
            })}
        </div>
        <div className="skill-title">
            <h2>Soft Skills</h2>
        </div>
        <div className="skills-container">
            {Skill_SoftSkills_Data.map((skill,index)=>{
                return <div key={index} className='skills-format'>
                    <h2>{skill.s_name}</h2>
                </div>
            })}
        </div>
    </div>
  )
}

export default Skills
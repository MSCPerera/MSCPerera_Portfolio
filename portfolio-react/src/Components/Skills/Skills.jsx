import React from 'react'
import './Skills.css'
import Skills_Programming_Data from '../../assets/skill_programming_data'
import Skills_Frameworks_Data from '../../assets/skill_frameworks_data'

const Skills = () => {
  return (
    <div className='skills'>
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
    </div>
  )
}

export default Skills
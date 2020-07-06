import React from 'react'


import {Skillslist, SkillsTitle, ToolTip, SkillIcons,DivLingua,LinguaText} from './styles'

import mo from '../../assets/mo2.png'
import ps from '../../assets/ps2.png'
import pr from '../../assets/pr2.png'
import ae from '../../assets/ae2.png'


function skills(props) {
     return (  
          <Skillslist>
               <SkillsTitle>Skills</SkillsTitle>
               
               <ToolTip className='tooltip'><SkillIcons alt='Photoshop' src={ps}></SkillIcons><span className="tooltiptext">Photoshop</span></ToolTip>
               <ToolTip className='tooltip'><SkillIcons alt='Premiere' src={pr}></SkillIcons><span className="tooltiptext">Premiere</span></ToolTip>
               <ToolTip className='tooltip'><SkillIcons alt='After Effects' src={ae}></SkillIcons><span className="tooltiptext">After Effects</span></ToolTip>
               <ToolTip className='tooltip'><SkillIcons alt='Microsoft Office' src={mo}></SkillIcons><span className="tooltiptext">Microsoft Office</span></ToolTip>    
               <DivLingua><LinguaText>Inglês Avançado</LinguaText></DivLingua>           
          </Skillslist>
     )
}


export default skills


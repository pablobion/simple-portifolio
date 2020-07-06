import React from 'react'
import {DivAbout, AboutText} from './styles'

function about(props) {
     return (
          <DivAbout>
               <AboutText>{props.description}</AboutText>
          </DivAbout>
     )
}



export default about


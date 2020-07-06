import React from 'react'
import { ProfileName, DescriptionName, DivProfile } from './styles'

function Profile(props) {
     return (
          <DivProfile>
               <ProfileName>{props.name}</ProfileName>
               <DescriptionName>{props.description}</DescriptionName>
          </DivProfile>
     )
}


export default Profile


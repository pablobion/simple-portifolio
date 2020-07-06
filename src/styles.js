import styled from 'styled-components';
import px2vw from "./utils/px2vw";


export const DivApp = styled.div`

     width: 100%;
     @media (min-width: 0px) and (max-width: 719px) {       
     }  
     @media (min-width: 720px) {
          padding:  ${px2vw(70)};
     }
`;


export const DivTopSide = styled.div`
     display: flex;    
     @media (min-width: 0px) and (max-width: 719px) {
          flex-direction: column;
     }
     @media (min-width: 720px) { 
     }
`;

export const DivTopLeft = styled.div`
`;

export const Logo = styled.img`
     width: 100%;  
     @media (min-width: 720px) {
        width: ${px2vw(500)};
     }
`;

export const InsideLogo = styled.div`
   @media (min-width: 720px) {
        position: absolute;
        top: ${px2vw(50)};
        left: ${px2vw(240)};
     }
`;

export const DivTopMid = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     @media (min-width: 720px) {
          padding-left:  ${px2vw(60)};
          padding-right:  ${px2vw(60)};
     }     
`;

export const DivTopMidLeft = styled.div`  
     @media (min-width: 0px) and (max-width: 719px) {
          width: ${px2vw(1000)};
     }
     @media (min-width: 720px) {
          width: ${px2vw(400)};
     }
`;

export const DivTopMidRight = styled.div`
     width: 100%;
     @media (min-width: 0px) and (max-width: 719px) {
          padding-left: ${px2vw(50)};
          padding-right: ${px2vw(50)};
     }  
     @media (min-width: 720px) {
          padding-top:  ${px2vw(60)};
     }
`;

export const DivTopRight = styled.div`

`;

export const DivBottom = styled.div`

`;

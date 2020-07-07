import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const DivAbout = styled.div`
     text-align: justify;
     text-align-last: justify;
     @media (min-width: 720px) {
          width: 400px;
     }
     
`;

export const AboutText = styled.small`

     @media (min-width: 0px) and (max-width: 719px) {
          font-size: ${px2vw(60)};
     }
     @media (min-width: 720px) {
     }

`;
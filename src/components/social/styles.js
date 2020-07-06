import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const SocialList = styled.div`
     display: flex; 
     @media (min-width: 0px) and (max-width: 719px) {
          flex-direction: column;
          margin-top: ${px2vw(200)};
          align-items: center;
     }
     @media (min-width: 720px) {
          flex-direction: column;
     }
`;

export const SocialBox = styled.div`
     display: flex;
     justify-content: center;

     @media (min-width: 0px) and (max-width: 719px) {
          width: 115px;
          height: 40px;
          border: 1px solid;
          align-items: center;
          justify-content: center;
          padding: 5px;
          font-size: 18px;
          box-shadow: 4px 4px 1px ${props => props.color};
     }
     @media (min-width: 720px) {
          border: 1px solid;
          padding: 10px;
          width: 140px;
          height: 50px;
          box-shadow: 4px 4px 1px ${props => props.color};
          background-color: white;
          color: black;
     }
`;

export const SocialTitle = styled.h2`
`;

export const DivSocialIcons = styled.div`
     width: 100%;
     display: flex;
     justify-content: center;
     @media (min-width: 0px) and (max-width: 719px) {
          flex-direction: row;
          margin-top: ${px2vw(100)};
          & div {
               margin-left: ${px2vw(80)};
               margin-right: ${px2vw(80)};
          }

     }
     @media (min-width: 720px) {
          align-items: center;
          flex-direction: column;
     }

`;

export const Textarea = styled.input`
     position: absolute;
     top: -50px;
     border: none;
     text-align: center;
     padding: 10px;
     width: 200px;
     resize: none;
`;

export const SocialIcons = styled.img`

     @media (min-width: 0px) and (max-width: 719px) {
          width: 40px;
     }
     @media (min-width: 720px) {
          display:block;
          width: 60px;
          margin-top: 60px;
          cursor: pointer;
     }
`;

export const TooltipSocialWhatsapp = styled.div`
    position: relative;
    display: inline-block;

    @media (min-width: 0px) and (max-width: 719px) {
          .tooltiptext-social-whatsapp {
               visibility: hidden;
               width: 100px;
               font-size: 14px;
               color: black;
               border: 1px solid;
               box-shadow: 4px 4px 1px green;
               text-align: center;
               border-radius: epx;
               padding: 2px 0; 
               /* Position the tooltip */
               position: absolute;
               z-index: 1;
               margin-left: -72px;
               margin-top: 5px;
               top: 100%;
          }
          &:hover .tooltiptext {
               visibility: visible;
          }
          &:hover .tooltiptext-social-whatsapp {
               animation: fadeIn 0.3s ease-in-out;
               visibility: visible;
          }         
     }
     @media (min-width: 720px) {
          .tooltiptext-social-whatsapp {
               visibility: hidden;
               width: 100px;
               font-size: 14px;
               color: black;
               border: 1px solid;
               box-shadow: 4px 4px 1px green;
               text-align: center;
               border-radius: epx;
               padding: 2px 0;
               /* Position the tooltip */
               position: absolute;
               z-index: 1;
               margin-left: -20px;
               margin-top: 5px;
               top: 100%;
          }
          &:hover .tooltiptext {
               visibility: visible;
          }
          &:hover .tooltiptext-social-whatsapp {
               animation: fadeIn 0.3s ease-in-out;
               visibility: visible;
          }     
     }

     @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
     }

`;
export const TooltipSocialEmail = styled.div`
    position: relative;
    display: inline-block;

    @media (min-width: 0px) and (max-width: 719px) {
          .tooltiptext-social-email {
               visibility: hidden;
               width: 100px;
               font-size: 14px;
               color: black;
               border: 1px solid;
               box-shadow: 4px 4px 1px #f56d6d;
               text-align: center;
               border-radius: epx;
               padding: 2px 0; 
               /* Position the tooltip */
               position: absolute;
               z-index: 1;
               margin-left: -72px;
               margin-top: 5px;
               top: 100%;
          }
          &:hover .tooltiptext-social-email {
               visibility: visible;
          }
          &:hover .tooltiptext-social-email {
               animation: fadeIn 0.3s ease-in-out;
               visibility: visible;
          }         
     }
     @media (min-width: 720px) {
          .tooltiptext-social-email {
               visibility: hidden;
               width: 100px;
               font-size: 14px;
               color: black;
               border: 1px solid;
               box-shadow: 4px 4px 1px #f56d6d;
               text-align: center;
               border-radius: epx;
               padding: 2px 0;
               /* Position the tooltip */
               position: absolute;
               z-index: 1;
               margin-left: -20px;
               margin-top: 5px;
               top: 100%;
          }
          &:hover .tooltiptext-social-email {
               visibility: visible;
          }
          &:hover .tooltiptext-social-email {
               animation: fadeIn 0.3s ease-in-out;
               visibility: visible;
          }     
     }

     @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
     }
`;
export const TooltipSocialLinkedin = styled.div`
    position: relative;
    display: inline-block;

    @media (min-width: 0px) and (max-width: 719px) {
          .tooltiptext-social-linkedin {
               visibility: hidden;
               width: 100px;
               font-size: 14px;
               color: black;
               border: 1px solid;
               box-shadow: 4px 4px 1px #0077B5;
               text-align: center;
               border-radius: epx;
               padding: 2px 0; 
               /* Position the tooltip */
               position: absolute;
               z-index: 1;
               margin-left: -72px;
               margin-top: 5px;
               top: 100%;
          }
          &:hover .tooltiptext-social-linkedin {
               visibility: visible;
          }
          &:hover .tooltiptext-social-linkedin {
               animation: fadeIn 0.3s ease-in-out;
               visibility: visible;
          }         
     }
     @media (min-width: 720px) {
          .tooltiptext-social-linkedin {
               visibility: hidden;
               width: 100px;
               font-size: 14px;
               color: black;
               border: 1px solid;
               box-shadow: 4px 4px 1px #0077B5;
               text-align: center;
               border-radius: epx;
               padding: 2px 0;
               /* Position the tooltip */
               position: absolute;
               z-index: 1;
               margin-left: -20px;
               margin-top: 5px;
               top: 100%;
          }
          &:hover .tooltiptext-social-linkedin {
               visibility: visible;
          }
          &:hover .tooltiptext-social-linkedin {
               animation: fadeIn 0.3s ease-in-out;
               visibility: visible;
          }     
     }

     @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
     }
`;


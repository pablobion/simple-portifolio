import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Skillslist = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 0px) and (max-width: 719px) {
        margin-top: ${px2vw(200)};
     }
     
     @media (min-width: 720px) {
        margin-top: ${px2vw(150)};
     }
`;

export const SkillsTitle = styled.h2`
    @media (min-width: 0px) and (max-width: 719px) {
        font-size: ${px2vw(70)};
    }
`;

export const SkillIcons = styled.img`
    width: 40px;
`;

export const DivLingua = styled.div``;

export const LinguaText = styled.span`
    @media (min-width: 0px) and (max-width: 719px) {
        font-size: ${px2vw(70)};
    }
`;

export const ToolTip = styled.div`
    position: relative;
    display: inline-block;

    @media (min-width: 0px) and (max-width: 719px) {
        .tooltiptext {
            visibility: hidden;
            width: 100px;
            font-size: 14px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: epx;
            padding: 2px 0;
        
            /* Position the tooltip */
            position: absolute;
            z-index: 1;
            margin-left: ${px2vw(-280)};
            margin-top: 5px;
            top: 100%; 
        }

        &:hover .tooltiptext {
            visibility: visible;
        }
     }
     
     @media (min-width: 720px) {
        .tooltiptext {
            visibility: hidden;
            width: 100px;
            font-size: 14px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: epx;
            padding: 2px 0;
        
            /* Position the tooltip */
            position: absolute;
            z-index: 1;
            margin-left: ${px2vw(-70)};
            margin-top: 5px;
            top: 100%; 
        }

        &:hover .tooltiptext {
            visibility: visible;
        }
     }

    

`
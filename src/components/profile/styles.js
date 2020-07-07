import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const DivProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
     @media (min-width: 720px) {
          align-items: flex-start;
     }
`;

export const ProfileName = styled.h1`
    font-size: ${px2vw(120)};
    @media (min-width: 0px) and (max-width: 719px) {
        margin-top: ${px2vw(100)};
    }

    @media (min-width: 720px) {
        font-size: ${px2vw(32)};
     }
`;

export const DescriptionName = styled.small`
    font-size: ${px2vw(40)};

    @media (min-width: 720px) {
        font-size: ${px2vw(14)};
    }
`;
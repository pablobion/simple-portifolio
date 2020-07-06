import styled from 'styled-components';
import px2vw from "../../utils/px2vw";


export const DivPortifolioButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const PortifolioButton = styled.button`
     @media (min-width: 0px) and (max-width: 719px) {
        border: 1px solid;
        align-items: center;
        justify-content: center;
        background: transparent;
        margin-top: ${px2vw(200)};
        padding: 5px;
        font-size: 20px;
        box-shadow: 4px 4px 1px ${props => props.color};
     }  
     @media (min-width: 720px) {
        border: 1px solid;
        align-items: center;
        justify-content: center;
        background: transparent;
        margin-top: ${px2vw(100)};
        padding: 5px;
        font-size: 20px;
        box-shadow: 4px 4px 1px ${props => props.color};
     }
`;

export const PortifolioList = styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
`;

export const DivProjeto = styled.div`
    width: 100%;
    display: flex;
    margin-top: 150px;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.side};
    
`;


export const Projeto = styled.iframe`
    border: none;
    box-shadow: 6px 6px 1px ${props => props.color};
`;

export const DivInsideProjeto = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivNomeProjeto = styled.div`
   
`;

export const NomeProjeto = styled.span`
   font-size: 28px;
   border-bottom: 3px solid  ${props => props.color};
`;


export const DivDescriçaoProjeto = styled.div`

`;
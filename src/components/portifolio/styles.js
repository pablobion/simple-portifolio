import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
/*
 @media (min-width: 0px) and (max-width: 719px) {
 }
 @media (min-width: 720px) {
 }
 */
export const DivPortifolioList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DivPortifolioTop = styled.div`
     width: 100%;
     display: flex;

     justify-content: center;
`;


export const DivPortifolioButton = styled.div`

`;

export const PortifolioButton = styled.div`
border: 1px solid;
     @media (min-width: 0px) and (max-width: 719px) {
        align-items: center;
        justify-content: center;
        padding: 5px;
        font-size: 20px;
        box-shadow: 4px 4px 1px ${props => props.color};
     }  
     @media (min-width: 720px) {
        align-items: center;
        justify-content: center;
        padding: 5px;
        font-size: 20px;
        box-shadow: 4px 4px 1px ${props => props.color};
     }
`;

export const DivPortifolioBottom = styled.div`
     width:100%;
`;

export const PortifolioList = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const DivProjeto = styled.div`
     display: flex;
     /* box-shadow: 6px 6px 1px ${props => props.color}; */
     margin-top: 50px;
     width: 1000px;
     flex-direction: ${props => props.direction};
    justify-content: ${props => props.side};
`;

export const DivProjetoLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivNomeProjeto = styled.div`

`;

export const NomeProjeto = styled.h2`
     font-size: 28px;
     border-bottom: 3px solid  ${props => props.color};
`;

export const DivDescriçaoProjeto = styled.div`
     width: 300px;
     word-wrap: break-word;
`;

export const DescriçaoProjeto = styled.small`

`;

export const DivProjetoRight = styled.div`
     display: flex;
     align-items: flex-end;
     justify-content: flex-end;

`;
export const Projeto = styled.iframe`
     box-shadow: 6px 6px 1px ${props => props.color};
    @media (min-width: 0px) and (max-width: 719px) {
        height: ${px2vw(400)};
        width: ${px2vw(700)};
        border: none;

    }
    @media (min-width: 720px) {
        border: none;
        width: ${px2vw(600)};
    }
`;
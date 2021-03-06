import styled from 'styled-components';


export const DivPortifolioList = styled.div `
    display: flex;
    flex-direction: column;
    @media (min-width: 0px) and (max-width: 719px) {
          margin-top: 70px;
     }
     @media (min-width: 720px) {
          margin-top: 80px;
     }
`;

export const DivPortifolioTop = styled.div `
     width: 100%;
     display: flex;
     justify-content: center;
`;


export const DivPortifolioButton = styled.div `
     @media (min-width: 0px) and (max-width: 719px) {
          margin-bottom: 50px;
     }
`;

export const TitlePortifolio = styled.h3 `
     @media (min-width: 0px) and (max-width: 719px) {
          font-size: 20px;
     }
`;

export const PortifolioButton = styled.div `
     border: 1px solid;
     @media (min-width: 0px) and (max-width: 719px) {
     display: flex;
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
          display: flex;
          justify-content: center;
          border: 1px solid;
          padding: 10px;
          width: 140px;
          height: 50px;
          box-shadow: 4px 4px 1px ${props => props.color};
          background-color: white;
          color: black;
     }
`;

export const DivPortifolioBottom = styled.div `
     width:100%;
`;

export const PortifolioList = styled.div `
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const DivProjeto = styled.div `
     display: flex;
     /* box-shadow: 6px 6px 1px ${props => props.color}; */

     width: 100%;

     @media (min-width: 0px) and (max-width: 719px) {
          margin-bottom: 150px;
        flex-direction: column;
        align-items: center;
    }
    @media (min-width: 720px) {
          margin-top: 190px;
          flex-direction: ${props => props.direction};
          justify-content: ${props => props.side};
    }
    

`;

export const DivProjetoLeft = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 720px) {
     width: 50%;
    }
`;

export const DivNomeProjeto = styled.div `
     @media (min-width: 0px) and (max-width: 719px) {
          margin-left: 30px;
          margin-right: 30px;
          text-align: center;
          text-align-last: center;
    }
`;

export const NomeProjeto = styled.h2 `
     font-size: 20px;
     border-bottom: 3px solid ${props => props.color};
`;

export const DivDescriçaoProjeto = styled.div `
     text-align: justify;
     text-align-last: justify;
     @media (min-width: 0px) and (max-width: 719px) {
       margin: 15px 30px 15px 30px;
    }
     @media (min-width: 720px) {
          margin-top: 30px;
          width: 300px;
          word-wrap: break-word;
    }
`;

export const DescriçaoProjeto = styled.small `

`;

export const DivProjetoRight = styled.div `
     display: flex;
     align-items: flex-end;
     justify-content: flex-end;

`;
export const Projeto = styled.iframe `
     box-shadow: 6px 6px 1px ${props => props.color};
    @media (min-width: 0px) and (max-width: 719px) {
          height: 175px;
          border: none;
    }
    @media (min-width: 720px) {
        border: none;
        width: 600px;
        margin-left: 50px;
        margin-right: 50px;
    }
`;
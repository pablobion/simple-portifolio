import React from 'react'
import { PortifolioList, PortifolioButton, DivPortifolioButton, DivProjeto, DivInsideProjeto, DivNomeProjeto, DivDescriçaoProjeto, NomeProjeto, Projeto, DescriçaoProjeto, Divdiv } from './styles';

import { Parallax } from 'react-scroll-parallax';
import { changecolor, changecolorButtonHeader } from './scripts/changecolor'
import { changeside } from './scripts/changeside'
import { changedirection } from './scripts/changedirection'



function Portifolio(props) {

     const projetos = props.projetos

   

     return (
          <>
               <DivPortifolioButton>
                    <PortifolioButton color={changecolorButtonHeader()}><h3>Portifolio</h3></PortifolioButton>
               </DivPortifolioButton>

               <PortifolioList>
                    {projetos.map(elem =>
                     <Parallax key={elem.nome} className="custom-class" x={[-17, 4]} tagOuter="figure">
                         <DivProjeto direction={changedirection()} side={changeside()}  >
                              <DivInsideProjeto>
                                   <DivNomeProjeto><NomeProjeto color={changecolor()}>{elem.nome}</NomeProjeto></DivNomeProjeto>
                                   <DivDescriçaoProjeto><DescriçaoProjeto>{elem.descrição}</DescriçaoProjeto></DivDescriçaoProjeto>
                                   <Divdiv><h3>skshjisdhusdhsudhsduihsdiuhsdiusdhuisdhiudshiudshiusdhsdiuhsiu</h3></Divdiv>
                              </DivInsideProjeto>
                              <Projeto width="660" height="265" src={elem.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" color={changecolor()}/>
                              
                         </DivProjeto>
                         
                    </Parallax>
                    )}

               </PortifolioList>
          </>
     )
}



export default Portifolio




import React, { useState } from 'react'

import { changecolor, changecolorButtonHeader } from './scripts/changecolor'
import { changeside } from './scripts/changeside'
import { changedirection } from './scripts/changedirection'

import { Parallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt'

import {
     DivPortifolioList,
     DivPortifolioTop,
     DivPortifolioButton,
     PortifolioButton,
     DivPortifolioBottom,
     PortifolioList,
     DivProjeto,
     DivProjetoLeft,
     DivNomeProjeto,
     NomeProjeto,
     DivDescriçaoProjeto,
     DescriçaoProjeto,
     DivProjetoRight,
     Projeto

} from './styles';



function Portifolio(props) {

     const projetos = props.projetos
     const [scale, setScale] = useState(1.15);
     

     return (
          <DivPortifolioList>
               <DivPortifolioTop>
                    <DivPortifolioButton>
                         <PortifolioButton color={changecolorButtonHeader()}><h3>Portifolio</h3></PortifolioButton>
                    </DivPortifolioButton>
               </DivPortifolioTop>
               
                         <DivPortifolioBottom>
                              <PortifolioList>
                              {projetos.map(elem =>
                              
                                   <DivProjeto direction={changedirection()} side={changeside()} >
                                        <Parallax key={elem.nome} className="custom-class" x={[-17, 4]} tagOuter="figure">
                                        <DivProjetoLeft>
                                             <Parallax key={elem.nome} className="custom-class" x={[1, 14]} tagOuter="figure">
                                             <DivNomeProjeto>
                                                  <NomeProjeto color={changecolor()}>{elem.nome}</NomeProjeto>
                                             </DivNomeProjeto>
                                             </Parallax>
                                             <DivDescriçaoProjeto>
                                                  <DescriçaoProjeto>{elem.descrição}</DescriçaoProjeto>
                                             </DivDescriçaoProjeto>
                                        </DivProjetoLeft>
                                        </Parallax>
                                        <DivProjetoRight>
                                             <Projeto width="640" height="320" src={elem.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  color={changecolor()}/>
                                        </DivProjetoRight>
                                   </DivProjeto>
                              )}
                              </PortifolioList>

                              
                         </DivPortifolioBottom>
               
          </DivPortifolioList>
     )
}



export default Portifolio




import React, { useState, useEffect } from 'react'

import { changecolor, changecolorButtonHeader } from './scripts/changecolor'
import { changeside } from './scripts/changeside'
import { changedirection } from './scripts/changedirection'

import { Parallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt'


import {
     DivPortifolioList,
     DivPortifolioTop,
     DivPortifolioButton,
     TitlePortifolio,
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
     const [scale, setScale] = useState(1);




     return (
          <DivPortifolioList>
               <DivPortifolioTop>
                    <DivPortifolioButton>
                         <PortifolioButton color={changecolorButtonHeader()}><TitlePortifolio>Portfólio</TitlePortifolio></PortifolioButton>
                    </DivPortifolioButton>
               </DivPortifolioTop>

               <DivPortifolioBottom>
                    <PortifolioList>
                         {projetos.map(elem =>
                              <Tilt tiltEnable={false} scale={scale} transitionSpeed={9500}>
                                   {/* <Parallax key={elem.nome} className="custom-class" x={[-10, 5]} tagOuter="figure"> */}
                                   <DivProjeto direction={changedirection()} side={changeside()} >
                                        <DivProjetoLeft>
                                             <DivNomeProjeto>
                                                  <NomeProjeto color={changecolor()}>{elem.nome}</NomeProjeto>
                                             </DivNomeProjeto>
                                             <DivDescriçaoProjeto>
                                                  <DescriçaoProjeto>{elem.descrição}</DescriçaoProjeto>
                                             </DivDescriçaoProjeto>
                                        </DivProjetoLeft>
                                        <DivProjetoRight>
                                             <DivProjetoRight>
                                                  <Projeto width="100%" height="340" src={elem.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" color={changecolor()} />
                                             </DivProjetoRight>
                                        </DivProjetoRight>
                                   </DivProjeto>
                                   {/* </Parallax> */}
                              </Tilt>
                         )}
                    </PortifolioList>


               </DivPortifolioBottom>

          </DivPortifolioList >
     )
}



export default Portifolio




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
     const [scale, setScale] = useState(1.15);



     // Get Width screen
     const size = useWindowSize();
     function useWindowSize() {
          const isClient = typeof window === 'object';
          function getSize() {
               return {
                    width: isClient ? window.innerWidth : undefined,
                    height: isClient ? window.innerHeight : undefined
               };
          }
          const [windowSize, setWindowSize] = useState(getSize);
          useEffect(() => {
               if (!isClient) {
                    return false;
               }
               function handleResize() {
                    setWindowSize(getSize());
               }
               window.addEventListener('resize', handleResize);

               return () => window.removeEventListener('resize', handleResize);
          }, []); // Empty array ensures that effect is only run on mount and unmount
          return windowSize;
     }

     useEffect(() => { //Roda 1x identificando o tamanho da tela
          if (size.width < 719) { // se for de celular 
               setScale(1)
          } else { //se não for de celular;
          }
     }, []);



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
                              <>
                                   {size.width < 719 &&
                                        <DivProjeto>
                                             <DivProjetoLeft>
                                                  <DivNomeProjeto>
                                                       <NomeProjeto color={changecolor()}>{elem.nome}</NomeProjeto>
                                                  </DivNomeProjeto>
                                                  <DivDescriçaoProjeto>
                                                       <DescriçaoProjeto>{elem.descrição}</DescriçaoProjeto>
                                                  </DivDescriçaoProjeto>
                                             </DivProjetoLeft>
                                             <DivProjetoRight>
                                                  <Projeto width="100%" height="340" src={elem.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" color={changecolor()} />
                                             </DivProjetoRight>
                                        </DivProjeto>
                                   }{size.width >= 719 &&
                                        <Tilt tiltEnable={false} scale={scale} transitionSpeed={9500}>
                                             <Parallax key={elem.nome} className="custom-class" x={[-12, -3]} tagOuter="figure">
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
                                                            <Projeto width="100%" height="340" src={elem.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" color={changecolor()} />
                                                       </DivProjetoRight>
                                                  </DivProjeto>
                                             </Parallax>
                                        </Tilt>
                                   }
                              </>
                         )}
                    </PortifolioList>


               </DivPortifolioBottom>

          </DivPortifolioList >
     )
}



export default Portifolio




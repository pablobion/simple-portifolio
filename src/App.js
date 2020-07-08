import React, { useEffect, useState } from "react";

import {
  DivApp,
  Logo,
  DivTopSide,
  DivTopLeft,
  InsideLogo,
  DivTopMid,
  DivTopMidLeft,
  DivTopMidRight,
  DivTopRight,
  DivBottom
} from './styles'

import GlobalStyle from './global'

import Profile from './components/profile/profile'
import logo from './assets/logo.svg'
import arrow from './assets/arrow.svg'

import Skills from './components/skills/skills'
import Social from './components/social/social'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio.jsx'

import ScrollToTop from 'react-scroll-up'
import { config } from './config/config'


function App() {
  const configs = config()

  return (
    <div className="container">
      <GlobalStyle />
      <DivApp>

        <DivTopSide>
          <DivTopLeft>
            <InsideLogo><Profile name={configs.nome} description={configs.subname} /></InsideLogo>
            <Logo alt='logo' src={logo}></Logo>
          </DivTopLeft>
          <DivTopMid>
            <DivTopMidLeft>
              <About description={configs.descrição} />
            </DivTopMidLeft>
            <DivTopMidRight>
              <Skills />
            </DivTopMidRight>
          </DivTopMid>
          <DivTopRight>
                <Social numerowpp={configs.numerowpp} mensagemwpp={configs.mensagemwpp} />
          </DivTopRight>
        </DivTopSide>

        <DivBottom>
            <Portfolio projetos={configs.projetos} />
        </DivBottom>

      </DivApp>

      <div className='up-button'>
        <ScrollToTop showUnder={160}>
          <img src={arrow}></img>
          <span>UP</span>
        </ScrollToTop>
      </div>
    </div >

  );
}

export default App;

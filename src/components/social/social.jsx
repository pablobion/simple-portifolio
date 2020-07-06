import React,{useState, useRef} from 'react'

import {
     SocialList, 
     SocialBox,
     SocialTitle, 
     Textarea,
     DivSocialIcons,
     SocialIcons,
     TooltipSocialWhatsapp,
     TooltipSocialEmail,
     TooltipSocialLinkedin,
} from './styles';

import whatsappIcon from '../../assets/whatsapp.png'
import emailIcon from '../../assets/email.png'
import linkedin from '../../assets/linkedin.png'



function Social(props) {
     //Mensagem para encaminhar no whatsapp
     const message = props.mensagemwpp
     
     const numerowpp = props.numerowpp

     //Math random para box shadow do contato
     function changecolor(){
     const color = Math.floor(Math.random() * (1 + 1 - 0)) + 0
          if(color === 0) return '#428e91'
          if(color === 1) return '#d8517e'  
     }

     //
     

     const textAreaRef = useRef(null);

     const [email, setEmail] = useState('ayresgui@yahoo.com.br')
     const [clickcopy, setClickcopy] = useState('Clique p/ copiar')


     function copyToClipboard(e) {
          textAreaRef.current.select();
          document.execCommand('copy');
          e.target.focus();
          setClickcopy('copiado!')
               setTimeout(function(){ setClickcopy('Clique para copiar') }, 3000);
        };
     
     
     return (
          <SocialList>
               <div>
               <SocialBox color={changecolor()}><SocialTitle>Contato</SocialTitle></SocialBox>
               </div>
               <DivSocialIcons>
                    <TooltipSocialWhatsapp><a href={`https://wa.me/${numerowpp}?text=${message}`} target="_blank" rel="noopener noreferrer"><SocialIcons alt='whatsapp' src={whatsappIcon} ></SocialIcons></a><span className="tooltiptext-social-whatsapp">Whatsapp</span></TooltipSocialWhatsapp>
                    <TooltipSocialEmail onClick={copyToClipboard}><SocialIcons alt='email' src={emailIcon} ></SocialIcons><span className="tooltiptext-social-email">{clickcopy}</span></TooltipSocialEmail>
                    <Textarea onClick={copyToClipboard} ref={textAreaRef}  defaultValue={email} readonly/>
                    <TooltipSocialLinkedin><a href={`https://linkedin.com/in/guilhermeayres`} target="_blank" rel="noopener noreferrer"><SocialIcons alt='linkedin-icon' src={linkedin}></SocialIcons></a><span className="tooltiptext-social-linkedin">Currículo</span></TooltipSocialLinkedin>
               </DivSocialIcons>
          </SocialList>

     )
}


export default Social


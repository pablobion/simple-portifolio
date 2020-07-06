const config = () => {

     //Nome na parte princiapal 
     const nome = 'Guilherme Ayres' 

     //Sub nick.
     const subname = 'Assistência de Produção e Direção e Edição de Vídeo' 

     //Sua descrição
     const descrição = `Tenho 21 anos e estou no 7º semestre de Cinema e Audiovisual no Centro Universitário São Judas Tadeu - Campus Unimonte em Santos/SP. 
     Meu último trabalho foi como Composite e Render no estúdio de animação Lightstar Studios na primeira temporada da série animada da Turma da Mônica Jovem que está no ar no Cartoon Network. 
     Possuo também expêriencia em produções independentes de videoclipes, curtas-metragens, documentários, e vídeos para Internet.`

     const numerowpp = '5513981823482' //inserir o 55 codigo brasil. ex 5548991252555

     const mensagemwpp = `Olá Guilherme, te encontrei através do seu site, podemos conversar?` //Essa sera a mensagem que ira para o whatsapp

     const projetos = [
          {
               nome: 'Sambinha', 
               descrição: '',
               video: 'https://www.youtube.com/embed/frNk-aAoQzY',
          },
          {
               nome: 'teste', 
               descrição: '',
               video: 'https://www.youtube.com/embed/frNk-aAoQzY',
          },
          {
               nome: 'teste', 
               descrição: '',
               video: 'https://www.youtube.com/embed/frNk-aAoQzY',
          },
          {
               nome: 'teste', 
               descrição: '',
               video: 'https://www.youtube.com/embed/frNk-aAoQzY',
          },
          {
               nome: 'teste', 
               descrição: '',
               video: 'https://www.youtube.com/embed/frNk-aAoQzY',
          },

     ]



     const allFields = {
          nome,
          subname,
          descrição,
          numerowpp,
          mensagemwpp,
          projetos
     }

     return allFields;
}

export { config }
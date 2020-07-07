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
               nome: 'Turma da Monica Jovem', 
               descrição: 'Todos os casais do bairro vão participar de um jantar de namorados no food truck da praça. Na zoeira, Mônica chama Cebola para ir com ela e ganharem um desconto fingindo que são um casal, mas Cebola nega o convite. Ele vê a burrada que fez quando DC aceita o convite no lugar dele. Cebola fica transtornado: será que Mônica e DC estarão num date?',
               video: 'https://www.youtube.com/embed/mLGOZWG2CwA',
          },
          {
               nome: 'Curta-metragem AVE', 
               descrição: 'Curta-metragem experimental surreal inspirado nas obras de Alejandro Jodorowsky e Carl Jung. Nesse projeto exerci a função de assistente de produção e direção.',
               video: 'https://player.vimeo.com/video/262144700',
          },
          {
               nome: 'O Grilo - Sambinha', 
               descrição: 'Direção – Guilherme Ayres e Ricardo Costa',
               video: 'https://www.youtube.com/embed/frNk-aAoQzY',
          },
          {
               nome: 'Kaya Conky - Marmita ft. Pepita', 
               descrição: 'Assistente de Direção de Arte: Guilherme Ayres',
               video: 'https://www.youtube.com/embed/9lQQvItnoqM',
          },
          {
               nome: 'Kika Boom & Kaya Conky - Bomba Kleyton', 
               descrição: 'Assistentes de Direção: @tatamachado.g @guiliermi',
               video: 'https://www.youtube.com/embed/8bKBjDvdWbw',
          },
          {
               nome: 'Dodi - Tenha Dó!', 
               descrição: 'Assist. de Produção: Guilherme Ayres ',
               video: 'https://www.youtube.com/embed/iQUeREL3Nyc',
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
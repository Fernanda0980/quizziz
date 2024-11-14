const perguntas = [
    {
      categoria: 'História',
      pergunta: 'Quais foram as principais causas da Revolução Indústrial?',
      resposta: 'Inovações técnologicas, mudanças agricolas, investimentos e capital.'
    },
    {
      categoria: 'Biologia',
      pergunta: 'O que é a fotossintese?',
      resposta: 'É o processo pelo qual as plantas, algas e algumas bactérias convertem a luz solar em energia química.'
    },
    {
      categoria: 'Português',
      pergunta: 'O que é um adjetivo?'
      resposta: 'É uma palavra que descreve ou qualifica um substantivo, indicando características, estados ou propriedades.'
    },
    {
      categoria: 'Inglês',
      pergunta: 'O que é um verbo to be e como é usado ?',
      resposta: 'É um dos verbos mais importantes em inglês e é usado para indicar estado, identidade ou características.'
    },
    {
      categoria: 'Geografia',
      pergunta: ' Quais são os tipos de relevo terrestre ?',
      resposta: 'Montanhas, planaltos, planicies, vales, colina.'
    },
    {
      categoria: 'Educação fisica',
      pergunta: 'Quais são os componentes da aptidão física?',
      resposta: 'Resistência cardiovascular,Força muscular,Flexibilidade,Agilidade,Equilibrio.'
    }
  ];
  
  perguntas.forEach(({ categoria, pergunta, resposta }) => criaCartao(categoria, pergunta, resposta));
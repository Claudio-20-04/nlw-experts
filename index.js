const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "var myVar = 10;", 
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um banco de dados",
        "Uma linguagem de programação",
        "Uma interface de programação para documentos HTML e XML.", 
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===", 
        "=" 
      ],
      correta: 1
    },
    {
      pergunta: "Qual destas é uma maneira de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de linha",
        "<!-- Este é um comentário de linha -->",
        "/* Este é um comentário de linha */", 
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída de console.log(typeof []) em JavaScript?",
      respostas: [
        "array",
        "object",
        "undefined", 
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "para (i <= 5; i++)",
        "for (i = 0; i <= 5; i++)",
        "for (var i = 0; i < 5; i++)", 
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um loop",
        "Um bloco de código reutilizável que executa uma tarefa específica", 
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()", 
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita (igualdade sem coerção de tipo)",
        "Comparação solta (igualdade com coerção de tipo)",
        "Atribuição", 
      ],
      correta: 0
    },
    {
      pergunta: "O que o método .map() faz em um array em JavaScript?",
      respostas: [
        "Filtra os elementos do array",
        "Modifica os elementos do array original",
        "Cria um novo array com os resultados de uma função aplicada a cada elemento do array", 
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //repetição, laços
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value = item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' +     totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }
  
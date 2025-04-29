const responses = {
    "quem é o elenco da furia?": "O elenco atual da FURIA para CS:GO é: FalleN, yuurih, Sidde, KSCERATO, molodoy e YEKINDAR como stand-in.",
    "quais foram os últimos campeonatos conquistados?": "Últimos campeonatos conquistados pela FURIA: PGL CS2 Major Copenhagen 2024, IEM Rio 2024, YaLLa Compass 2024.",
    "qual é o placar dos últimos jogos da furia?": "A FURIA venceu 2G Esports por 2-0 no VCT 2025: Americas Kickoff.",
    "qual é a classificação atual da furia?": "A FURIA ocupa atualmente o 12º lugar no ranking mundial de CS:GO.",
    "quais são as últimas notícias da furia?": "Últimas notícias: Contratação de YEKINDAR como stand-in, e reforço no elenco com a chegada de skullz.",
    "qual é o próximo jogo da furia?": "O próximo jogo da FURIA é contra a Team Liquid no IEM Dallas 2025, agendado para o próximo sábado.",
    "quais são as estatísticas da furia?": "A FURIA tem uma taxa de vitórias de 72% nos últimos 6 meses.",
    "qual é o maior rival da furia?": "O maior rival da FURIA é a MIBR, principalmente por sua rivalidade histórica no cenário brasileiro de CS:GO.",

    "Quem é o elenco da FURIA?": "O elenco atual da FURIA para CS:GO é: FalleN, yuurih, Sidde, KSCERATO, molodoy e YEKINDAR como stand-in.",
    "Quais foram os últimos campeonatos conquistados?": "Últimos campeonatos conquistados pela FURIA: PGL CS2 Major Copenhagen 2024, IEM Rio 2024, YaLLa Compass 2024.",
    "Qual é o placar dos últimos jogos da FURIA?": "A FURIA venceu 2G Esports por 2-0 no VCT 2025: Americas Kickoff.",
    "Qual é a classificação atual da FURIA?": "A FURIA ocupa atualmente o 12º lugar no ranking mundial de CS:GO.",
    "Quais são as últimas notícias da FURIA?": "Últimas notícias: Contratação de YEKINDAR como stand-in, e reforço no elenco com a chegada de skullz.",
    "Qual é o próximo jogo da FURIA?": "O próximo jogo da FURIA é contra a Team Liquid no IEM Dallas 2025, agendado para o próximo sábado.",
    "Quais são as estatísticas da FURIA?": "A FURIA tem uma taxa de vitórias de 72% nos últimos 6 meses.",
    "Qual é o maior rival da FURIA?": "O maior rival da FURIA é a MIBR, principalmente por sua rivalidade histórica no cenário brasileiro de CS:GO.",

    "quem é o elenco da furia?": "O elenco atual da FURIA para CS:GO é: FalleN, yuurih, Sidde, KSCERATO, molodoy e YEKINDAR como stand-in.",
    "quais foram os ultimos campeonatos conquistados?": "Últimos campeonatos conquistados pela FURIA: PGL CS2 Major Copenhagen 2024, IEM Rio 2024, YaLLa Compass 2024.",
    "qual é o placar dos ultimos jogos da furia?": "A FURIA venceu 2G Esports por 2-0 no VCT 2025: Americas Kickoff.",
    "qual é a classifição atual da furia?": "A FURIA ocupa atualmente o 12º lugar no ranking mundial de CS:GO.",
    "quais são as ultimas noticias da furia?": "Últimas notícias: Contratação de YEKINDAR como stand-in, e reforço no elenco com a chegada de skullz.",
    "qual é o proximo jogo da furia?": "O próximo jogo da FURIA é contra a Team Liquid no IEM Dallas 2025, agendado para o próximo sábado.",
    "quais são as estatisticas da furia?": "A FURIA tem uma taxa de vitórias de 72% nos últimos 6 meses.",
    "qual é o maior rival da furia?": "O maior rival da FURIA é a MIBR, principalmente por sua rivalidade histórica no cenário brasileiro de CS:GO.",
  };
  
  // Função para limpar e formatar a entrada
  function cleanInput(input) {
    return input.trim().toLowerCase();
  }
  
  // Função para verificar se a entrada corresponde a alguma pergunta
  function getResponse(input) {
    const cleanedInput = cleanInput(input);
    if (responses[cleanedInput]) {
      return responses[cleanedInput];
    } else {
      return "Desculpe, não entendi sua pergunta. Tente novamente.";
    }
  }
  
  // Função para enviar a mensagem
  function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");
  
    if (userInput.trim() === "") return; // Não envia mensagem vazia
  
    // Adiciona a mensagem do usuário com o balão correto
    chatBox.innerHTML += `
      <div class="message user">
        <div class="message-text">${userInput}</div>
      </div>
    `;
  
    // Obtém a resposta do bot e adiciona também com o balão correto
    const botResponse = getResponse(userInput);
    chatBox.innerHTML += `
      <div class="message bot">
        <div class="message-text">${botResponse}</div>
      </div>
    `;
  
    // Limpa o campo de entrada e faz o scroll até a última mensagem
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Evento de clique no botão
  document.getElementById("send-btn").addEventListener("click", sendMessage);
  
  // Evento de pressionar "Enter" no campo de input
  document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Previne que o enter envie formulário ou recarregue
      sendMessage();
    }

    function sendMessage() {
        const userInput = document.getElementById("user-input").value;
        const chatBox = document.getElementById("chat-box");
      
        if (userInput.trim() === "") return; // Não envia mensagem vazia
      
        // Adiciona a mensagem do usuário COM o ícone
        chatBox.innerHTML += `
          <div class="message user">
            <img src="assets/user.png" alt="User" class="icon"> <!-- Adicione seu caminho correto -->
            <div class="message-text">${userInput}</div>
          </div>
        `;
      
        // Obtém a resposta do bot e adiciona COM o ícone
        const botResponse = getResponse(userInput);
        chatBox.innerHTML += `
          <div class="message bot">
            <img src="assets/bot.jpg" alt="Bot" class="icon"> <!-- Adicione seu caminho correto -->
            <div class="message-text">${botResponse}</div>
          </div>
        `;
      
        // Limpa o campo de entrada e faz o scroll até a última mensagem
        document.getElementById("user-input").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
      }
  });
  
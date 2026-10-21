// Este script é responsável por fazer as perguntas e as exibir via html
const perguntas = [
    "Você esteve na empresa no dia em que o relógio desapareceu?",
    "Você percebeu alguma movimentação incomum naquele dia?",
    "Você esteve próximo da sala onde o relógio estava guardado?",
    "Você conversou com alguém sobre o relógio recentemente?",
    "Você notou se alguém demonstrou interesse incomum pelo objeto?",
    "Você teve acesso a alguma informação sobre a rotina de segurança da empresa?",
    "Você percebeu se alguma coisa estava fora do lugar na sala?",
    "Você sabe de algo que possa ajudar a esclarecer o desaparecimento?",
    "Você acredita que alguém possa ter informações importantes sobre o caso e ainda não as tenha revelado?",
    "Você considera que todas as informações que forneceu durante este questionário são verdadeiras?"
]; // Lista de perguntas do teste do poligrafo
let resposta = "Indefinido"


document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Listener iniciado")

    for (let i = 0; i < perguntas.length; i++) {
        const pergunta = perguntas[i];

        const perguntaContainer = document.getElementById("questionario-container");
        const perguntaElement = document.createElement("h3");
        perguntaElement.textContent = pergunta;

        const respostaElement = document.createElement("select");
        respostaElement.innerHTML = `
            <option value="Indefinido" selected disabled>Sua Resposta </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
        `;
        perguntaContainer.appendChild(perguntaElement);
        perguntaContainer.appendChild(respostaElement);
    }

});

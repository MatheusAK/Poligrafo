// Este script é responsável por fazer as perguntas e as exibir via html
const perguntas = [
    "Você esteve perto do local onde o relógio desapareceu sem ter um motivo claro?",
    "Você entrou na sala onde o relógio estava guardado sem avisar ninguém?",
    "Você escondeu de alguém que esteve próximo ao local do desaparecimento?",
    "Você teve acesso ao relógio fora das situações habituais?",
    "Você percebeu que alguém estava procurando pelo relógio antes de o desaparecimento ser anunciado?",
    "Você conversou com alguém sobre como entrar na sala sem ser percebido?",
    "Você saiu da empresa levando algum objeto que não lhe pertencia?",
    "Você omitiu alguma informação importante ao ser questionado sobre o desaparecimento?",
    "Você mudou sua versão dos acontecimentos ao falar sobre aquele dia?",
    "Você sabe de algum detalhe sobre o desaparecimento que ainda não contou aos investigadores?"
]; // Lista de perguntas do teste do poligrafo
let resposta = "Indefinido"

document.addEventListener("DOMContentLoaded", function () {
    console.log("Listener iniciado");

    const perguntaContainer = document.getElementById("questionario-container");
    let sims = 0
    let respostas = 0

    for (let i = 0; i < perguntas.length; i++) {
        const pergunta = perguntas[i];

        const card = document.createElement("div");
        card.classList.add("card");

        const perguntaElement = document.createElement("h3");
        perguntaElement.textContent = `${pergunta} (${i + 1}/${perguntas.length})`;

        const respostaElement = document.createElement("div");
        respostaElement.innerHTML = `
            <div class="radio-inputs" id="radio-inputs-${i}">
                <label class="radio">
                    <input type="radio" name="resposta-${i}" value="Sim">
                    <span class="name">Sim</span>
                </label>

                <label class="radio">
                    <input type="radio" name="resposta-${i}" value="Não">
                    <span class="name">Não</span>
                </label>
            </div>
        `;

        card.appendChild(perguntaElement);
        card.appendChild(respostaElement);
        perguntaContainer.appendChild(card);
    }

    document.addEventListener("change", function (event) {
        if (event.target.type === "radio") {
            sims = document.querySelectorAll('input[type="radio"][value="Sim"]:checked').length;
            respostas = document.querySelectorAll('input[type="radio"]:checked').length;

            console.log(`Respostas "Sim": ${sims}`);
            console.log(`Total de respostas: ${respostas}`);

            const barraProgresso = document.getElementById("progresso-barra");
            barraProgresso.style.width = `${(respostas / perguntas.length) * 100}%`;
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target.id === "btn") {
            if (respostas === perguntas.length) {
                let resultado = "Indefinido";

                switch (sims) {
                    case 0:
                    case 1:
                    case 2:
                        resultado = "Inocente";
                        break;
                    case 3:
                    case 4:
                    case 5:
                        resultado = "Suspeito";
                        break;
                    case 6:
                    case 7:
                    case 8:
                        resultado = "Cúmplice";
                        break;
                    case 9:
                    case 10:
                        resultado = "Altamente Suspeito";
                        break;
                }

                console.log("Botão de envio clicado");

                const divResultado = document.createElement("div");
                divResultado.classList.add("resultado");
                divResultado.appendChild(document.createElement("h2")).textContent = "Resultado do Teste do Poligrafo:";
                divResultado.appendChild(document.createElement("h3")).textContent = `Resultado: ${resultado}`;
                divResultado.appendChild(document.createElement("p")).textContent = `Você respondeu "Sim" a ${sims} de ${perguntas.length} perguntas.`;

                perguntaContainer.appendChild(divResultado);
                document.getElementById("btn").remove();
            } else {
                alert("Por favor, responda todas as perguntas antes de enviar.");
            }
        }
    });
});

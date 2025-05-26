const palavrasBanco = [
  { palavra: "pássaro", dica: "Animal que voa.", explicacao: "‘Pássaro’ é paroxítona terminada em ‘o’ e leva acento conforme regra." },
  { palavra: "pôde", dica: "Passado do verbo poder.", explicacao: "‘Pôde’ tem acento para diferenciar do presente ‘pode’." },
  { palavra: "país", dica: "Divisão política internacional.", explicacao: "‘País’ possui hiato e recebe acento para marcar pronúncia." },
  { palavra: "fácil", dica: "Oposto de difícil.", explicacao: "‘Fácil’ é paroxítona terminada em ‘l’, acentuada." },
  { palavra: "árvore", dica: "Planta com tronco.", explicacao: "‘Árvore’ é paroxítona terminada em ‘r’, leva acento." },
  { palavra: "órgão", dica: "Parte do corpo.", explicacao: "‘Órgão’ é oxítona com ditongo nasal, leva acento." },
  { palavra: "hábito", dica: "Costume ou rotina.", explicacao: "‘Hábito’ é paroxítona terminada em ‘o’, recebe acento." },
  { palavra: "crônica", dica: "Texto narrativo.", explicacao: "‘Crônica’ é paroxítona terminada em ‘a’, com acento." },
  { palavra: "lógico", dica: "Relacionado à lógica.", explicacao: "‘Lógico’ é paroxítona terminada em ‘o’, acentuada." },
  { palavra: "máquina", dica: "Equipamento mecânico.", explicacao: "‘Máquina’ é paroxítona terminada em ‘a’, com acento." },
  { palavra: "tênis", dica: "Esporte com raquete.", explicacao: "‘Tênis’ possui hiato e recebe acento." },
  { palavra: "júri", dica: "Grupo que julga.", explicacao: "‘Júri’ tem hiato, por isso leva acento." },
  { palavra: "vôlei", dica: "Esporte de rede.", explicacao: "‘Vôlei’ tem acento para marcar tonicidade." },
  { palavra: "ônibus", dica: "Veículo coletivo.", explicacao: "‘Ônibus’ é paroxítona terminada em ‘us’, leva acento." },
  { palavra: "álcool", dica: "Bebida ou substância química.", explicacao: "‘Álcool’ é paroxítona terminada em ‘l’, recebe acento." },
  { palavra: "órfão", dica: "Pessoa sem pais.", explicacao: "‘Órfão’ é oxítona com ditongo nasal, acentuada." },
  { palavra: "fósforo", dica: "Elemento químico.", explicacao: "‘Fósforo’ é paroxítona terminada em ‘o’, leva acento." },
  { palavra: "sólido", dica: "Estado da matéria.", explicacao: "‘Sólido’ é paroxítona terminada em ‘o’, com acento." },
  { palavra: "tóxico", dica: "Que faz mal à saúde.", explicacao: "‘Tóxico’ é paroxítona terminada em ‘o’, acentuada." },
  { palavra: "médico", dica: "Profissional da saúde.", explicacao: "‘Médico’ é paroxítona terminada em ‘o’, leva acento." }
];

// Fases com número de palavras e cor do fundo
const fases = [
  { palavras: 2, corFundo: "#f0f8ff" },
  { palavras: 3, corFundo: "#fff0f5" },
  { palavras: 5, corFundo: "#f5fff0" },
  { palavras: 6, corFundo: "#fffff0" },
  { palavras: 10, corFundo: "#f0fff5" }
];

let nomeJogador = "";
let faseAtual = 0;
let palavrasFase = [];
let palavraIndex = 0;
let erros = 0;
const maxErros = 3;
let pontos = 0;

const telaInicial = document.getElementById("tela-inicial");
const btnIniciar = document.getElementById("btn-iniciar");
const nomeInput = document.getElementById("nome-jogador");
const jogoDiv = document.getElementById("jogo");
const boneco = document.getElementById("boneco");
const palavraDisplay = document.getElementById("palavra");
const letrasDiv = document.getElementById("letras");
const message = document.getElementById("message");
const dica = document.getElementById("dica");
const explicacao = document.getElementById("explicacao");
const restartBtn = document.getElementById("restart");
const faseInfo = document.getElementById("fase-info");
const placarSpan = document.getElementById("pontos");
const somNao = document.getElementById("som-nao");

btnIniciar.addEventListener("click", () => {
  const nome = nomeInput.value.trim();
  if (!nome) {
    alert("Por favor, digite seu nome para começar.");
    return;
  }
  nomeJogador = nome;
  telaInicial.style.display = "none";
  jogoDiv.style.display = "block";
  iniciarFase();
});

restartBtn.addEventListener("click", () => {
  iniciarFase();
});

function iniciarFase() {
  erros = 0;
  palavraIndex = 0;
  restartBtn.style.display = "none";
  explicacao.textContent = "";
  message.textContent = "";
  boneco.style.transform = "translateY(0) scale(1)";
  document.body.style.backgroundColor = fases[faseAtual].corFundo;

  // Sorteia as palavras da fase sem repetir
  palavrasFase = shuffleArray(palavrasBanco).slice(0, fases[faseAtual].palavras);

  faseInfo.textContent = `Fase ${faseAtual + 1} - Palavra ${palavraIndex + 1} de ${palavrasFase.length}`;
  pontos = 0;
  placarSpan.textContent = pontos;
  mostrarPalavra();
}

function mostrarPalavra() {
  const objPalavra = palavrasFase[palavraIndex];
  palavraDisplay.textContent = "_ ".repeat(objPalavra.palavra.length);
  dica.textContent = `Dica: ${objPalavra.dica}`;
  explicacao.textContent = "";
  message.textContent = "";
  criarTeclado();
  faseInfo.textContent = `Fase ${faseAtual + 1} - Palavra ${palavraIndex + 1} de ${palavrasFase.length}`;
  erros = 0;
  boneco.textContent = "🙂";
  boneco.style.transform = "translateY(0) scale(1)";
}

function criarTeclado() {
  letrasDiv.innerHTML = "";
  const alfabeto = "aáàâãbcdeéèêfghiíìîjklmnoóòôõpqrstuúùûvwxyzç".split("");
  alfabeto.forEach((letra) => {
    const btn = document.createElement("button");
    btn.className = "letra";
    btn.textContent = letra;
    btn.addEventListener("click", () => clicarLetra(letra, btn));
    letrasDiv.appendChild(btn);
  });
}

function clicarLetra(letra, botao) {
  botao.disabled = true;
  const objPalavra = palavrasFase[palavraIndex];
  const palavra = objPalavra.palavra.toLowerCase();

  if (palavra.includes(letra)) {
    // Revela letras corretas
    let textoAtual = palavraDisplay.textContent.split(" ");
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) textoAtual[i] = objPalavra.palavra[i]; // Mantém maiúsculas/acento original
    }
    palavraDisplay.textContent = textoAtual.join(" ");

    if (!textoAtual.includes("_")) {
      // Palavra completa!
      pontos += 10;
      placarSpan.textContent = pontos;
      explicacao.textContent = objPalavra.explicacao;
      message.textContent = "Parabéns! Palavra correta.";
      setTimeout(() => {
        palavraIndex++;
        if (palavraIndex < palavrasFase.length) {
          mostrarPalavra();
        } else {
          faseAtual++;
          if (faseAtual >= fases.length) {
            alert(`Parabéns ${nomeJogador}! Você completou todas as fases com ${pontos} pontos!`);
            reiniciarJogo();
          } else {
            alert(`Fase ${faseAtual} concluída! Preparando próxima fase.`);
            iniciarFase();
          }
        }
      }, 2000);
    }
  } else {
    erros++;
    atualizarBoneco();
    if (erros >= maxErros) {
      bonecoCaindo();
    } else {
      message.textContent = `Errado! Você tem mais ${maxErros - erros} tentativas.`;
    }
  }
}

function atualizarBoneco() {
  if (erros === 1) boneco.textContent = "😟";
  else if (erros === 2) boneco.textContent = "😢";
}

function bonecoCaindo() {
  message.textContent = "Você errou 3 vezes! Boneco caiu no buraco!";
  boneco.style.transition = "transform 0.5s ease";
  boneco.style.transform = "translateY(100px) scale(1.2)";
  somNao.play();

  restartBtn.style.display = "inline-block";
  desabilitarTeclado();
}

function desabilitarTeclado() {
  const botoes = document.querySelectorAll("button.letra");
  botoes.forEach(btn => btn.disabled = true);
}

function reiniciarJogo() {
  faseAtual = 0;
  pontos = 0;
  telaInicial.style.display = "block";
  jogoDiv.style.display = "none";
  nomeInput.value = "";
}

function shuffleArray(array) {
  let arr = array.slice();
  for (let i = arr.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

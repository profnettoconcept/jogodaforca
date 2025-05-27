const palavras = [
  { palavra: "pássaro", dica: "Animal que voa", explicacao: "A palavra 'pássaro' é acentuada por ser uma paroxítona terminada em 'o'. Paroxítonas terminadas em 'a', 'e', 'o', 'em' são acentuadas." },
  { palavra: "fácil", dica: "Oposto de difícil", explicacao: "A palavra 'fácil' é acentuada por ser uma paroxítona terminada em 'l'. Paroxítonas terminadas em 'l', 'n', 'r', 'x' são acentuadas." },
  { palavra: "júri", dica: "Conjunto de juízes", explicacao: "A palavra 'júri' é acentuada por ser uma paroxítona terminada em 'i'. Paroxítonas terminadas em 'i' ou 'is' são acentuadas." },
  { palavra: "ciência", dica: "Campo de estudo", explicacao: "A palavra 'ciência' é acentuada por ser paroxítona terminada em ditongo ('ia')." },
  { palavra: "país", dica: "Nação", explicacao: "A palavra 'país' é acentuada por ser oxítona terminada em 's'. Oxítonas terminadas em 'a', 'e', 'o', 'em', ou 's' são acentuadas." },
  { palavra: "história", dica: "Estudo do passado", explicacao: "A palavra 'história' é acentuada por ser paroxítona terminada em ditongo ('ia')." },
  { palavra: "língua", dica: "Meio de comunicação", explicacao: "A palavra 'língua' é acentuada por ser paroxítona terminada em ditongo ('ua')." },
  { palavra: "fósforo", dica: "Serve para acender", explicacao: "A palavra 'fósforo' é acentuada por ser proparoxítona, todas as proparoxítonas são acentuadas." },
  { palavra: "ônibus", dica: "Transporte coletivo", explicacao: "A palavra 'ônibus' é acentuada por ser proparoxítona, todas as proparoxítonas são acentuadas." },
  { palavra: "vôlei", dica: "Esporte com bola", explicacao: "A palavra 'vôlei' é acentuada por ser paroxítona terminada em ditongo." },
  { palavra: "trânsito", dica: "Movimento de veículos", explicacao: "A palavra 'trânsito' é acentuada por ser proparoxítona." },
  { palavra: "cálculo", dica: "Operação matemática", explicacao: "A palavra 'cálculo' é acentuada por ser proparoxítona." },
  { palavra: "lâmpada", dica: "Ilumina ambientes", explicacao: "A palavra 'lâmpada' é acentuada por ser proparoxítona." },
  { palavra: "médico", dica: "Profissional da saúde", explicacao: "A palavra 'médico' é acentuada por ser proparoxítona." },
  { palavra: "próximo", dica: "Que está perto", explicacao: "A palavra 'próximo' é acentuada por ser proparoxítona." },
  { palavra: "sólido", dica: "Estado físico", explicacao: "A palavra 'sólido' é acentuada por ser proparoxítona." },
  { palavra: "público", dica: "Relacionado à sociedade", explicacao: "A palavra 'público' é acentuada por ser proparoxítona." },
  { palavra: "gênero", dica: "Classificação", explicacao: "A palavra 'gênero' é acentuada por ser proparoxítona." },
  { palavra: "rápido", dica: "Que se move depressa", explicacao: "A palavra 'rápido' é acentuada por ser proparoxítona." },
  { palavra: "tóxico", dica: "Perigoso à saúde", explicacao: "A palavra 'tóxico' é acentuada por ser proparoxítona." },
  { palavra: "matemática", dica: "Disciplina escolar", explicacao: "A palavra 'matemática' é acentuada por ser proparoxítona." },
  { palavra: "física", dica: "Ciência natural", explicacao: "A palavra 'física' é acentuada por ser proparoxítona." },
  { palavra: "biologia", dica: "Estudo dos seres vivos", explicacao: "A palavra 'biologia' é acentuada por ser paroxítona terminada em ditongo." },
  { palavra: "filosofia", dica: "Estudo do conhecimento", explicacao: "A palavra 'filosofia' é acentuada por ser paroxítona terminada em ditongo." },
  { palavra: "sociologia", dica: "Estudo da sociedade", explicacao: "A palavra 'sociologia' é acentuada por ser paroxítona terminada em ditongo." },
  { palavra: "poético", dica: "Relacionado à poesia", explicacao: "A palavra 'poético' é acentuada por ser proparoxítona." },
  { palavra: "crítico", dica: "Que julga ou avalia", explicacao: "A palavra 'crítico' é acentuada por ser proparoxítona." },
  { palavra: "artístico", dica: "Relacionado à arte", explicacao: "A palavra 'artístico' é acentuada por ser proparoxítona." },
  { palavra: "acadêmico", dica: "Relacionado à academia", explicacao: "A palavra 'acadêmico' é acentuada por ser proparoxítona." },
  { palavra: "ético", dica: "Relacionado à ética", explicacao: "A palavra 'ético' é acentuada por ser proparoxítona." },
  { palavra: "público", dica: "Coletivo", explicacao: "A palavra 'público' é acentuada por ser proparoxítona." },
  { palavra: "clássico", dica: "Tradicional", explicacao: "A palavra 'clássico' é acentuada por ser proparoxítona." },
  { palavra: "técnico", dica: "Especializado", explicacao: "A palavra 'técnico' é acentuada por ser proparoxítona." },
  { palavra: "político", dica: "Relacionado à política", explicacao: "A palavra 'político' é acentuada por ser proparoxítona." },
  { palavra: "cômico", dica: "Engraçado", explicacao: "A palavra 'cômico' é acentuada por ser proparoxítona." },
  { palavra: "lógico", dica: "Racional", explicacao: "A palavra 'lógico' é acentuada por ser proparoxítona." },
  { palavra: "místico", dica: "Espiritual", explicacao: "A palavra 'místico' é acentuada por ser proparoxítona." },
  { palavra: "plástico", dica: "Material sintético", explicacao: "A palavra 'plástico' é acentuada por ser proparoxítona." },
  { palavra: "prático", dica: "Funcional", explicacao: "A palavra 'prático' é acentuada por ser proparoxítona." },
  { palavra: "médico", dica: "Profissional da saúde", explicacao: "A palavra 'médico' é acentuada por ser proparoxítona." },
  { palavra: "ético", dica: "Relacionado à ética", explicacao: "A palavra 'ético' é acentuada por ser proparoxítona." },
  { palavra: "acadêmico", dica: "Universitário", explicacao: "A palavra 'acadêmico' é acentuada por ser proparoxítona." },
  { palavra: "técnico", dica: "Especialista", explicacao: "A palavra 'técnico' é acentuada por ser proparoxítona." },
  { palavra: "público", dica: "Coletivo", explicacao: "A palavra 'público' é acentuada por ser proparoxítona." },
  { palavra: "músico", dica: "Artista sonoro", explicacao: "A palavra 'músico' é acentuada por ser proparoxítona." },
  { palavra: "crítico", dica: "Que avalia", explicacao: "A palavra 'crítico' é acentuada por ser proparoxítona." },
  { palavra: "pássaro", dica: "Animal que voa", explicacao: "A palavra 'pássaro' é acentuada por ser paroxítona terminada em 'o'." },
  { palavra: "fósforo", dica: "Serve para acender", explicacao: "A palavra 'fósforo' é acentuada por ser proparoxítona." },
  { palavra: "âncora", dica: "Segura o navio", explicacao: "A palavra 'âncora' é acentuada por ser proparoxítona." },
  { palavra: "ímpar", dica: "Número não divisível por 2", explicacao: "A palavra 'ímpar' é acentuada por ser paroxítona terminada em 'r'." },
  { palavra: "água", dica: "Líquido essencial", explicacao: "A palavra 'água' é acentuada por ser paroxítona terminada em ditongo." }
];

let palavraAtual = {};
let exibicao = [];
let erros = 0;

function novaPalavra() {
  palavraAtual = palavras[Math.floor(Math.random() * palavras.length)];
  exibicao = Array(palavraAtual.palavra.length).fill("_");
  document.getElementById("dica").innerText = `Dica: ${palavraAtual.dica}`;
  document.getElementById("palavra").innerText = exibicao.join(" ");
  document.getElementById("explicacao").innerText = "";
}

function tentativa(letra) {
  let acerto = false;
  for (let i = 0; i < palavraAtual.palavra.length; i++) {
    if (palavraAtual.palavra[i].toLowerCase() === letra.toLowerCase()) {
      exibicao[i] = palavraAtual.palavra[i];
      acerto = true;
    }
  }
  document.getElementById("palavra").innerText = exibicao.join(" ");
  if (!acerto) {
    erros++;
  }
  if (!exibicao.includes("_")) {
    document.getElementById("explicacao").innerText = palavraAtual.explicacao;
    novaPalavra();
  }
}

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Bem-vindo ao jogo O Embaixador! O destino do país está em suas mãos. Suas decisões moldarão a economia, a diplomacia e o bem-estar do povo. Você enfrentará dilemas profundos e perguntas desafiadoras ao longo dessa jornada. Prepare-se, faça suas escolhas com sabedoria e vamos ver como você se sai!",
        alternativas: [
            {
                texto: "Vamos começar!",
                afirmacao: [
                    "Essa foi sua trajetória como Embaixador:",
                    "Suas escolhas mostraram como você lidaria com os desafios de representar e proteger os interesses do seu país."
                ]
            },
            {
                texto: "Mas eu nem sei o que o Embaixador faz...",
                afirmacao: [
                    "Essa foi sua trajetória como Embaixador:",
                    "Agora você já sabe: ser Embaixador é representar os interesses do seu país, negociar com outras nações e tomar decisões que podem mudar o futuro de milhões de pessoas."

                ] 
            }
        ]
    },
    {
        enunciado: "Uma nação vizinha militarizou a fronteira sem aviso prévio, alegando exercícios de rotina.",
        alternativas: [
            {
                texto: "Exige publicamente a retirada imediata das tropas, ameaçando sanções econômicas severas.",
                afirmacao: [
                    "Ao peitar publicamente a ameaça na fronteira, seu país ganhou a reputação de destemido, embora tenha iniciado uma era de forte corrida armamentista na região.",
                    "A tensão aumentou, e os países vizinhos passaram a reforçar suas defesas, tornando a diplomacia mais difícil e instável."
                ]
            },
            {
                texto: "Ignora a provocação publicamente para não gerar mais pânico, mas reforça discretamente a segurança interna.",
                afirmacao: [
                    "Ao optar pelo silêncio e reforço discreto, você evitou um pânico geral e manteve a paz diplomática, deixando os vizinhos sem saber o real poder do seu exército.",
                    "Porém, sua postura reservada foi vista por alguns aliados como falta de firmeza, exigindo que você fortalecesse a confiança diplomática nos meses seguintes."
                ]
            }
        ]
    },
    {
        enunciado: "Um recurso natural vital foi descoberto em território neutro. Uma superpotência quer exclusividade e oferece apoio financeiro ao seu país em troca do seu voto a favor deles no conselho.",
        alternativas: [
            {
                texto: "Aceita a proposta da superpotência; a economia do seu país precisa desse investimento agora.",
                afirmacao: [
                    "Sua aliança com a superpotência encheu os cofres da nação de investimentos, mas transformou seu país em um satélite dependente das decisões dessa grande potência.",
                    "No curto prazo, a economia cresceu e novos empregos foram criados, mas a influência estrangeira sobre suas decisões políticas aumentou consideravelmente."
                ]
            },
            {
                texto: "Cria uma coalizão com países menores para que juntos vocês explorem o recurso, batendo de frente com a superpotência.",
                afirmacao: [
                    "Liderar a coalizão de países menores desafiou a hegemonia global, criando um bloco econômico independente e muito unido, embora visado por embargos.",
                    "A união fortaleceu a soberania dos países envolvidos e garantiu maior poder de negociação, mas aumentou a pressão diplomática e os riscos de retaliação econômica."
                ]
            }
        ]
    },
    {
        enunciado: "Documentos confidenciais do seu governo sobre espionagem de aliados foram vazados. A comunidade internacional está indignada.",
        alternativas: [
            {
                texto: "Nega veementemente a autenticidade dos documentos e acusa os rivais de tentarem sabotar sua nação.",
                afirmacao: [
                    "A postura agressiva de negar os vazamentos blindou o orgulho nacional internamente, mas azedou a confiança que antigos parceiros diplomáticos tinham em suas palavras.",
                    "A estratégia evitou uma crise imediata dentro do país, porém novas evidências surgiram e fizeram sua credibilidade internacional ser ainda mais questionada."
                ]
            },
            {
                texto: "Mantém o silêncio diplomático enquanto foca em descobrir quem foi o responsável pelo vazamento.",
                afirmacao: [
                    "O silêncio calculado sobre a espionagem fez a poeira baixar sem grandes escândalos, embora tenha deixado o mistério pairando nos bastidores internacionais.",
                    "Ao priorizar a investigação, seu governo conseguiu identificar os responsáveis e preparar uma resposta mais cuidadosa, mas alguns aliados passaram a exigir explicações oficiais."
                ]
            }
        ]
    },
    {
        enunciado: "Um país vizinho sofreu um desastre natural e milhares de refugiados estão na sua fronteira buscando abrigo, mas seu país passa por uma recessão.",
        alternativas: [
            {
                texto: "Abre as fronteiras totalmente e redireciona fundos públicos para criar abrigos e assistência médica.",
                afirmacao: [
                    "A abertura total das fronteiras para os refugiados foi um marco histórico de empatia que quebrou a economia a curto prazo, mas garantiu cidadãos extremamente leais no futuro.",
                    "A chegada de milhares de pessoas aumentou a pressão sobre os serviços públicos, mas também trouxe novos trabalhadores e ajudou a reconstruir a economia nos anos seguintes."
                ]
            },
            {
                texto: "Permite a entrada apenas de quem tem laços familiares no país e pede ajuda financeira internacional para lidar com o restante.",
                afirmacao: [
                    "A restrição controlada nas fronteiras protegeu a frágil economia interna, mas gerou duras críticas de organizações de direitos humanos globais.",
                    "A ajuda financeira internacional amenizou parte da crise, porém a postura restritiva prejudicou temporariamente a imagem do seu país diante de antigos parceiros diplomáticos."
                ]
            }
        ]
    },
    {
        enunciado: "Seu maior aliado histórico pede que você assine um tratado militar que praticamente obriga seu país a entrar em guerra caso eles sejam atacados.",
        alternativas: [
            {
                texto: "Propõe uma contraproposta: apoio logístico e diplomático em caso de guerra, mas sem envio de tropas.",
                afirmacao: [
                    "A contraproposta logística garantiu que nenhum soldado seu morresse por guerras alheias, consolidando sua nação como uma estrategista focada na autodefesa.",
                    "Apesar de preservar sua autonomia militar, a decisão fez o antigo aliado questionar a força da parceria entre os dois países."
                ]
            },
            {
                texto: "Assina o tratado imediatamente; a lealdade aos velhos aliados é o que mantém seu país seguro.",
                afirmacao: [
                    "Ao assinar o tratado militar de lealdade irrestrita, seu país garantiu um escudo de proteção indestrutível, mas atrelou seu futuro diretamente aos conflitos do seu aliado.",
                    "A aliança fortaleceu sua posição internacional e aumentou a confiança entre os dois países, mas qualquer guerra envolvendo seu aliado agora poderia arrastar sua nação para o conflito."]
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

mostraPergunta();
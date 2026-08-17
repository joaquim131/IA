const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const caixaPrincipal = document.querySelector(".caixa-principal");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você acha sobre o combate ao disperdício de água?",
        alternativas: [
            {
                texto:"Eu prefiro focar em reduzir o tempo do meu próprio banho e fechar a torneira em casa.",
                afirmacao:"Você acha que a transformação começa na disciplina dos meus próprios hábitos diários."
            },
            {
                texto:"Eu prefiro cobrar as autoridades por melhorias no saneamento básico e contra vazamentos na cidade."
                afirmacao:"Você acredita que a verdadeira mudança vem da infraestrutura e da cobrança por gestão publica."
            }
            
            
        ]
    },
    {
        enunciado: "O que você acha sobre a redução do uso do plástico?",
        alternativas: [
            
            
            {
                texto:"Eu prefiro carregar sempre minha própria sacola retornável e garrafa reutilizável.",
                afirmacao: "Você assuma a responsabilidade direta pelos resíduos que gera no seu dia a dia."
            },
            {
                texto:"Eu prefiro apoiar e comprar apenas de marcar que usam embalagens 100% biodegradáveis."
                afirmacao:"Você acha que o mercado e as industrias devem ser incentivados a mudar o modelo de produção."
            }
        ]    
    },
    {
        enunciado: "O que você acha sobre as escolhas de alimentação?",
        alternativas: [
          
            {
                texto:  "Eu prefiro reduzir o consumo de carne e priorizar alimentos vegetais na minha dieta.",
                afirmacao:"Você acredita que a sua saúde impacta direto na produção de alimentos guiam suas escolhas."
            },
            {
                texto:"Eu prefiro comprar frutas e verduras de pequenos produtores locais e da estação."
                afirmacao:"Você valoriza a economia da região e diminuir o trasporte de alimentos é prioridade."
                
            }
        ]    
    },
    {
        enunciado: "O que você acha sobre a locomoção no dia a dia?",
        alternativas: [
           
            
            {
                texto: "Eu prefiro andar a pé ou de bicicleta para cuidar da saúde enquanto não poluo.",
                afirmacao:"Você acredita que o bem-estar do seu corpo caminha junto com o respeito ao meio ambiente."
            },
            {
                texto:"EU prefiro utilizar transporte público ou caronas solidárias para otimizar o trânsito.",
                afirmacao:"Você pensa no coletivo e na eficiência do espaço urbano é o caminho para cidade melhores."
            }
        ]    
    },
    {
        enunciado: "O que você acha sobre espalhar a conscientização?",
        alternativas: [
            
            
            {
                texto:"Eu prefiro dar exemplo em silêncio através das minhas ações práticas dentro de casa.",
                afirmacao:"As atitudes valem mais do que palavras e inspiram quem está ao meu redor naturalmente."
            }
            {
                texto:"Eu prefiro debater o assunto na internet e compartilhar informações educativas com meus amigos."
                afirmacao:"A informação é uma ferramenta poderosa para despertar a consciêcia de muitas pessoas ao mesmo tempo."
            }
        ]    
    },
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
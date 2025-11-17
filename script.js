// Lista de matérias (tópicos) e seus dados
var topics = [
  {
    id: "desvio",
    name: "Desvio padrão (estatística)",
    tag: "STAT · 1-Variable",
    mode: "MENU → STAT (6) → 1-Variable (1-Var)",
    description: "Cálculo de média e desvio padrão (amostral e populacional) a partir de uma lista de medidas.",
    example: "Um eixo foi medido 6 vezes e os diâmetros em mm foram: 39,98; 40,02; 40,01; 39,99; 40,03; 40,00. Calcule a média e o desvio padrão amostral usando a fx-CG100.",
    steps: [
      "Ligar a calculadora com AC/ON.",
      "Apertar MENU e escolher a opção STAT (normalmente usando o número 6 ou as setas).",
      "Dentro de STAT, escolher 1-Variable (1-Var), pois temos apenas uma lista de dados.",
      "Na coluna List1, digitar o primeiro valor (39.98) e apertar EXE. Repetir para todos os valores: 40.02, 40.01, 39.99, 40.03 e 40.00, sempre confirmando com EXE.",
      "Após terminar a lista, pressionar F2 (CALC) e depois escolher 1-Var para calcular as estatísticas.",
      "Na tela de resultados, observar: x̄ (média), sx (desvio padrão amostral) e σx (desvio padrão populacional). Usar sx para responder questões de amostra."
    ],
    tip: "Se quiser limpar uma lista inteira antes de digitar novos dados, use as opções de CLR (clear) dentro do menu STAT."
  },
  {
    id: "bhaskara",
    name: "Bhaskara / Equação do 2º grau",
    tag: "EQN · Polynomial grau 2",
    mode: "MENU → EQN → Polynomial → grau 2",
    description: "Resolução de equações quadráticas do tipo ax² + bx + c = 0 usando o modo Equation (EQN).",
    example: "A altura de um projétil é dada por h(t) = -4,9t² + 30t + 1,5. Encontre os instantes em que o projétil está no chão (h=0) usando a fx-CG100.",
    steps: [
      "Apertar MENU e selecionar o ícone EQN (Equation).",
      "Dentro de EQN, escolher Polynomial e depois grau 2 (equações do segundo grau).",
      "Identificar a, b e c na função. No exemplo: a = -4,9 ; b = 30 ; c = 1,5 (equação -4,9t² + 30t + 1,5 = 0).",
      "Digitar o valor de a (-4.9) no campo a e apertar EXE. Em seguida, digitar 30 para b e 1.5 para c, confirmando com EXE em cada um.",
      "A calculadora mostra as raízes x1 e x2. Uma delas pode ser negativa (tempo físico negativo, que geralmente é descartado).",
      "Usar a raiz positiva como resposta para o tempo físico em que o projétil volta ao chão."
    ],
    tip: "Sempre coloque a equação na forma ax² + bx + c = 0 antes de jogar os coeficientes na calculadora."
  },
  {
    id: "func",
    name: "Funções, gráfico e tabela",
    tag: "GRAPH / TABLE",
    mode: "MENU → GRAPH ou MENU → TABLE",
    description: "Digitar funções, ver o gráfico e gerar tabela de valores para análise de comportamento.",
    example: "A corrente em um circuito é dada por I(t) = 5·e^(−0,2t). Use a tabela da calculadora para encontrar I(0), I(5) e I(10).",
    steps: [
      "Para ver o gráfico, apertar MENU e selecionar GRAPH.",
      "No campo Y1, digitar a função desejada (por exemplo, 2x² + 3x − 5), usando a tecla X apropriada para a variável.",
      "Apertar F6 (DRAW) para desenhar o gráfico da função na tela.",
      "Para gerar tabela, apertar MENU e escolher TABLE.",
      "Em f(x), digitar a mesma função de interesse (por exemplo, 2x² + 3x − 5). Definir o valor inicial (Start), o valor final (End) e o passo (Step), por exemplo: 0, 10 e 1.",
      "Apertar EXE para ver a tabela com uma coluna de x e outra com f(x) calculada automaticamente para cada valor."
    ],
    tip: "Use a tabela para encontrar rapidamente valores numéricos de funções que aparecerem em exercícios de engenharia."
  },
  {
    id: "logln",
    name: "Logaritmos e ln",
    tag: "RUN-MAT · LOG / LN",
    mode: "Modo RUN-MAT",
    description: "Cálculo de log base 10, log natural (ln) e log em base qualquer para equações exponenciais.",
    example: "A tensão em um capacitor é v(t) = 12(1 − e^(−t/5)). Em que tempo a tensão atinge 9 V? Use ln na fx-CG100.",
    steps: [
      "Isolar a parte exponencial no papel: 12(1 − e^(−t/5)) = 9 → 1 − e^(−t/5) = 9/12 = 0,75 → e^(−t/5) = 0,25.",
      "No modo RUN-MAT, usar a expressão t = −5·ln(0,25).",
      "Na calculadora, digitar:  -5 × LN(0.25).",
      "Apertar EXE para calcular o resultado numérico de t.",
      "O valor obtido é o tempo necessário para a tensão atingir 9 V.",
      "Esse tipo de conta é típico em problemas de circuitos RC, decaimento, crescimento e meia-vida."
    ],
    tip: "Lembre que ln(e) = 1 e que ln de valores menores que 1 é negativo (o que costuma aparecer em tempos de decaimento)."
  },
  {
    id: "trig",
    name: "Trigonometria (sen, cos, tan)",
    tag: "RUN-MAT · DEG",
    mode: "SETUP → Angle: Degree",
    description: "Uso de seno, cosseno e tangente em graus para decompor forças, rampas e outros problemas.",
    example: "Uma força de 500 N forma 30° com a horizontal. Calcule as componentes horizontal (Fx) e vertical (Fy) usando a fx-CG100.",
    steps: [
      "Conferir o modo de ângulo: ir em SETUP ou System e garantir que está em DEG (graus).",
      "Para Fx = F·cos(θ), no modo RUN-MAT digitar: 500 × COS(30) e apertar EXE.",
      "Guardar o valor obtido como a componente horizontal (aprox. 433 N).",
      "Para Fy = F·sen(θ), digitar: 500 × SIN(30) e apertar EXE.",
      "Guardar o resultado como componente vertical (aprox. 250 N).",
      "Usar esse tipo de decomposição em problemas de planos inclinados, estruturas e forças em cabos."
    ],
    tip: "Se o resultado não fizer sentido (muito grande ou muito pequeno), confira se a calculadora não está em RAD (radianos)."
  },
  {
    id: "complexos",
    name: "Números complexos e módulo",
    tag: "RUN-MAT · COMPLEX",
    mode: "Modo complexo (a + bi)",
    description: "Somar, multiplicar e encontrar o módulo de números complexos, usados em impedância em corrente alternada.",
    example: "Uma impedância é Z = 5 + j30 Ω. Calcule o módulo |Z| usando a fx-CG100.",
    steps: [
      "No modo RUN-MAT, digitar 5 + 30i (usando a tecla i, normalmente SHIFT + uma tecla indicada no teclado).",
      "Para obter o módulo, usar a função Abs( ). Digitar Abs(5+30i) ou aplicar Abs à resposta (Ans).",
      "Apertar EXE para ver o valor numérico do módulo |Z|.",
      "No exemplo, o resultado esperado é √(5² + 30²) ≈ 30,41 Ω.",
      "Interpretar |Z| como a magnitude da impedância equivalente do circuito.",
      "Em problemas de engenharia elétrica, combinar módulo e ângulo (Arg) ajuda a trabalhar com fasores."
    ],
    tip: "Trabalhe sempre no modo de exibição a + bi quando quiser ler parte real (resistência) e imaginária (reatância)."
  },
  {
    id: "sistemas",
    name: "Sistemas lineares (RREF)",
    tag: "MATRIX · RREF",
    mode: "MENU → MATRIX → RREF",
    description: "Resolução de sistemas lineares de 3, 4 ou 5 equações via matriz aumentada e transformação RREF.",
    example: "Resolver o sistema 3×3: 2x + y − z = 5 ; −x + 3y + 2z = 4 ; 3x − y + z = 2 usando a fx-CG100.",
    steps: [
      "Apertar MENU e selecionar MATRIX.",
      "Em EDIT, escolher MatA e definir o tamanho da matriz como 3×4 (3 linhas, 4 colunas).",
      "Preencher MatA com a matriz aumentada do sistema. Exemplo: primeira linha 2, 1, -1, 5; segunda linha -1, 3, 2, 4; terceira linha 3, -1, 1, 2 (confirmando com EXE a cada número).",
      "Voltar ao menu MATRIX e entrar em CALC.",
      "Escolher a opção RREF (forma reduzida por linhas).",
      "Aplicar RREF à MatA: a calculadora mostra a matriz na forma [1 0 0 | x ; 0 1 0 | y ; 0 0 1 | z], de onde se lê diretamente a solução do sistema."
    ],
    tip: "Para sistemas 4×4 use MatA 4×5; para 5×5 use 5×6 (4 ou 5 incógnitas + 1 coluna de resultados)."
  },
  {
    id: "det",
    name: "Determinante 4×4",
    tag: "MATRIX · DET",
    mode: "MENU → MATRIX → DET",
    description: "Cálculo do determinante de matrizes quadradas, útil em análises de rigidez, transformações e checagem de sistemas.",
    example: "Calcule o determinante de uma matriz 4×4 A usada em um modelo de rigidez simplificado (valores genéricos).",
    steps: [
      "Apertar MENU e selecionar MATRIX.",
      "Em EDIT, escolher MatA e definir o tamanho como 4×4.",
      "Digitar os elementos da matriz linha por linha, confirmando cada valor com EXE.",
      "Voltar ao menu MATRIX e entrar em CALC.",
      "Escolher a opção DET (determinante).",
      "Selecionar MatA e apertar EXE: a calculadora retorna o valor do determinante de A."
    ],
    tip: "Determinante zero normalmente indica sistema singular (sem solução única); determinante diferente de zero indica sistema invertível."
  },
  {
    id: "integral",
    name: "Integral definida",
    tag: "RUN-MAT · ∫",
    mode: "SHIFT → CALC → ∫",
    description: "Cálculo de integrais definidas para trabalho, área sob a curva, carga acumulada, etc.",
    example: "Uma força varia com a posição F(x) = 3x² − 4x + 1. Calcule o trabalho realizado de x = 1 até x = 5 usando a integral definida.",
    steps: [
      "No modo RUN-MAT, pressionar SHIFT e depois CALC para abrir o menu de cálculos especiais.",
      "Escolher a opção de integral definida (∫).",
      "No campo da função, digitar 3x^2 − 4x + 1, usando a tecla de potência e a variável x.",
      "Definir a variável de integração (geralmente x) e indicar o limite inferior (1) e o superior (5).",
      "Confirmar a configuração da integral e apertar EXE.",
      "A calculadora fornece o valor numérico da integral, que corresponde ao trabalho (dentro das unidades do problema)."
    ],
    tip: "Você pode usar o mesmo procedimento para calcular área sob curvas, carga elétrica acumulada ao longo do tempo, etc."
  },
  {
    id: "derivada",
    name: "Derivada: máximo/mínimo (gráfico)",
    tag: "GRAPH · G-Solv",
    mode: "MENU → GRAPH → G-Solv → MAX / MIN",
    description: "Uso do gráfico da função e da ferramenta G-Solv para localizar máximos e mínimos locais.",
    example: "A posição de uma partícula é s(t) = t³ − 6t² + 9t + 2. Use o gráfico na fx-CG100 para encontrar onde a função tem máximo e mínimo locais.",
    steps: [
      "Apertar MENU e selecionar GRAPH.",
      "Em Y1, digitar a função s(t) (usando x como variável se o modo estiver configurado para isso). Exemplo: x^3 − 6x^2 + 9x + 2.",
      "Apertar F6 (DRAW) para desenhar o gráfico da função.",
      "Com o gráfico na tela, apertar G-Solv para acessar as ferramentas de solução gráfica.",
      "Escolher MAX para localizar um ponto de máximo local. A calculadora mostra as coordenadas (x, y) desse ponto.",
      "Escolher MIN para localizar ponto(s) de mínimo local, quando existirem, e anotar seus valores."
    ],
    tip: "Depois de achar o máximo/min, você pode usar a tabela (TBL) ou TRACE para conferir o comportamento da função perto daquele ponto."
  },
  {
    id: "impedancia",
    name: "Impedância em paralelo",
    tag: "RUN-MAT · complexos",
    mode: "Zeq = 1 / (1/Z1 + 1/Z2)",
    description: "Cálculo de impedâncias equivalentes em paralelo usando números complexos na fx-CG100.",
    example: "Calcule a impedância equivalente de dois ramos em paralelo: Z1 = 4 + j6 Ω e Z2 = 8 − j4 Ω.",
    steps: [
      "No modo RUN-MAT, digitar 1/(4+6i) e apertar EXE. Armazenar o resultado em uma memória, por exemplo A.",
      "Digitar 1/(8-4i) e apertar EXE. Armazenar o resultado em outra memória, por exemplo B.",
      "Somar as admitâncias: digitar A + B e apertar EXE.",
      "Agora digitar 1/Ans e apertar EXE para encontrar a impedância equivalente Zeq em paralelo.",
      "Ler a parte real (resistência equivalente) e a parte imaginária (reatância equivalente) do resultado.",
      "Se necessário, calcular o módulo |Zeq| usando Abs(Zeq) para obter a magnitude da impedância."
    ],
    tip: "Esse método pode ser estendido para mais de dois ramos em paralelo, somando todas as admitâncias antes de inverter."
  },
  {
    id: "meiavida",
    name: "Meia-vida (log avançado)",
    tag: "RUN-MAT · ln",
    mode: "t = ln(fração) / ln(1/2) · T½",
    description: "Cálculo do tempo para chegar a uma fração da quantidade inicial usando o conceito de meia-vida.",
    example: "Um material tem meia-vida de 8 horas. Em quanto tempo restam apenas 10% da quantidade inicial?",
    steps: [
      "Usar o modelo Q(t) = Q0·(1/2)^(t/T½). Para 10% de Q0, temos 0,1 = (1/2)^(t/T½).",
      "Aplicar ln nos dois lados: ln(0,1) = (t/T½)·ln(1/2).",
      "Isolar t: t = ln(0,1)/ln(1/2) · T½.",
      "Na fx-CG100 (modo RUN-MAT), digitar ln(0.1)/ln(0.5)*8 e apertar EXE (usando 8 como meia-vida).",
      "O resultado é o tempo necessário para a quantidade chegar a 10% da inicial.",
      "Pode-se trocar 0,1 por outra fração (0,25, 0,5, etc.) e repetir o mesmo procedimento."
    ],
    tip: "Muito usado em engenharia nuclear, química, farmacocinética e qualquer processo de decaimento exponencial."
  }
];

function renderTopics() {
  var topicsListEl = document.getElementById("topicsList");
  topicsListEl.innerHTML = "";
  for (var i = 0; i < topics.length; i++) {
    var topic = topics[i];
    var btn = document.createElement("button");
    btn.className = "topic-btn";
    btn.setAttribute("data-id", topic.id);

    var nameDiv = document.createElement("div");
    nameDiv.className = "topic-name";
    nameDiv.textContent = topic.name;

    var tagDiv = document.createElement("div");
    tagDiv.className = "topic-tag";
    tagDiv.textContent = topic.tag;

    btn.appendChild(nameDiv);
    btn.appendChild(tagDiv);

    btn.addEventListener("click", function () {
      var id = this.getAttribute("data-id");
      selectTopic(id);
    });

    topicsListEl.appendChild(btn);
  }
}

function selectTopic(id) {
  var topic = null;
  for (var i = 0; i < topics.length; i++) {
    if (topics[i].id === id) {
      topic = topics[i];
      break;
    }
  }
  if (!topic) {
    return;
  }

  var buttons = document.querySelectorAll(".topic-btn");
  for (var j = 0; j < buttons.length; j++) {
    if (buttons[j].getAttribute("data-id") === id) {
      buttons[j].classList.add("active");
    } else {
      buttons[j].classList.remove("active");
    }
  }

  var contentTitleEl = document.getElementById("contentTitle");
  var contentDescriptionEl = document.getElementById("contentDescription");
  var contentModeEl = document.getElementById("contentMode");
  var exampleBlockEl = document.getElementById("exampleBlock");
  var stepsTitleEl = document.getElementById("stepsTitle");
  var stepsListEl = document.getElementById("stepsList");
  var tipBlockEl = document.getElementById("tipBlock");
  var hintBlockEl = document.getElementById("hintBlock");

  contentTitleEl.textContent = topic.name;
  contentDescriptionEl.textContent = topic.description;
  contentModeEl.textContent = topic.mode;

  exampleBlockEl.innerHTML = "<strong>Questão de exemplo:</strong> " + topic.example;

  stepsTitleEl.textContent = "Passo a passo na calculadora";
  stepsListEl.innerHTML = "";
  for (var k = 0; k < topic.steps.length; k++) {
    var li = document.createElement("li");
    li.textContent = topic.steps[k];
    stepsListEl.appendChild(li);
  }

  tipBlockEl.innerHTML = "<strong>Dica:</strong> " + topic.tip;
  hintBlockEl.innerHTML =
    "Modo da calculadora para este conteúdo: <strong>" +
    topic.mode +
    "</strong>. Revise esse caminho no MENU da fx-CG100 antes da prova.";
}

document.addEventListener("DOMContentLoaded", function () {
  renderTopics();
  if (topics.length > 0) {
    selectTopic(topics[0].id);
  }
});

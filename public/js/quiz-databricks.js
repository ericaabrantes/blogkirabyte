const questions = [
    {
        question: "Qual é a principal vantagem da arquitetura Lakehouse em relação a um Data Warehouse tradicional?",
        options: [
            "Suporta apenas dados estruturados.",
            "Combina a flexibilidade do Data Lake com a gestão e ACID do Data Warehouse.",
            "É mais caro e complexo de manter.",
            "Não permite o uso de SQL."
        ],
        correctIndex: 1,
        explanation: "O Lakehouse une o melhor dos dois mundos: suporte a dados variados (como um Lake) e confiabilidade transacional (como um Warehouse)."
    },
    {
        question: "No PySpark, qual método é usado para mostrar as primeiras linhas de um DataFrame de forma tabular?",
        options: [
            "df.print()",
            "df.view()",
            "df.show()",
            "df.display()"
        ],
        correctIndex: 2,
        explanation: "O método `show()` exibe o conteúdo do DataFrame no console. O `display()` é específico de notebooks como Databricks."
    },
    {
        question: "O que o comando 'OPTIMIZE' faz em uma tabela Delta?",
        options: [
            "Apaga dados antigos.",
            "Compacta pequenos arquivos em arquivos maiores para melhorar a leitura.",
            "Cria índices automáticos.",
            "Converte arquivos CSV para Parquet."
        ],
        correctIndex: 1,
        explanation: "O OPTIMIZE melhora a performance de leitura compactando pequenos arquivos (small files problem) em arquivos maiores."
    },
    {
        question: "Qual é o principal objetivo da camada Bronze na arquitetura Medallion (Multi-hop)?",
        options: [
            "Armazenar dados agregados para relatórios de BI.",
            "Manter uma cópia fiel (raw) dos dados da fonte, sem transformações de negócio.",
            "Filtrar dados inválidos e remover duplicatas.",
            "Gerenciar permissões de acesso aos usuários finais."
        ],
        correctIndex: 1,
        explanation: "A camada Bronze serve como um histórico inalterável (Raw). Ela armazena os dados exatamente como chegaram da fonte para garantir que você sempre possa reprocessar tudo se necessário."
    },
    {
        question: "Você precisa reverter uma tabela Delta para um estado anterior após uma exclusão acidental. Qual funcionalidade do Delta Lake permite isso?",
        options: [
            "Schema Evolution",
            "Z-Ordering",
            "Time Travel",
            "Auto Loader"
        ],
        correctIndex: 2,
        explanation: "O Time Travel permite consultar ou restaurar versões antigas da tabela usando o log de transações (ex: `RESTORE TABLE x TO VERSION AS OF 2`)."
    },
    {
        question: "No PySpark Structured Streaming, por que é crucial definir um 'checkpoint location'?",
        options: [
            "Para salvar os dados finais em formato Parquet.",
            "Para garantir tolerância a falhas e continuar o processamento de onde parou em caso de erro.",
            "Para melhorar a velocidade de leitura dos dados.",
            "Para conectar com o Power BI em tempo real."
        ],
        correctIndex: 1,
        explanation: "O checkpoint armazena o progresso da stream (offsets). Se o cluster cair, o Spark lê o checkpoint e retoma exatamente de onde parou, garantindo consistência 'exactly-once'."
    },
    {
        question: "Qual comando SQL é usado para converter arquivos Parquet existentes em uma tabela Delta sem reescrever os dados?",
        options: [
            "ALTER TABLE ... SET FORMAT DELTA",
            "CONVERT TO DELTA",
            "CAST(parquet AS delta)",
            "UPDATE TABLE FORMAT = 'delta'"
        ],
        correctIndex: 1,
        explanation: "O comando `CONVERT TO DELTA` cria o log de transações (_delta_log) para arquivos Parquet existentes, transformando-os em uma tabela Delta 'in-place'."
    },
    {
        question: "Para melhorar a performance de consultas que filtram por uma coluna específica (ex: 'data_venda') em grandes tabelas Delta, qual técnica é recomendada?",
        options: [
            "Usar o comando VACUUM.",
            "Aumentar o tamanho do cluster.",
            "Aplicar OPTIMIZE com Z-ORDER BY na coluna.",
            "Converter a tabela para CSV."
        ],
        correctIndex: 2,
        explanation: "O `OPTIMIZE` compacta arquivos pequenos, e o `Z-ORDER` co-localiza dados relacionados nos mesmos arquivos, fazendo com que o Delta Lake pule arquivos desnecessários (Data Skipping) na leitura."
    },
    {
        question: "Qual é a estrutura de namespace de três níveis utilizada pelo Unity Catalog?",
        options: [
            "schema.database.table",
            "catalog.schema.table",
            "container.folder.file",
            "project.dataset.table"
        ],
        correctIndex: 1,
        explanation: "No Unity Catalog, a hierarquia é: Catálogo (nível mais alto) > Schema (ou Database) > Tabela/View."
    },
    {
        question: "O que acontece se você executar o comando VACUUM em uma tabela Delta com a retenção padrão?",
        options: [
            "Ele apaga todos os dados da tabela.",
            "Ele remove arquivos físicos que não são mais referenciados no log há mais de 7 dias.",
            "Ele otimiza os índices da tabela.",
            "Ele arquiva os dados para armazenamento frio (Glacier)."
        ],
        correctIndex: 1,
        explanation: "O VACUUM limpa o armazenamento removendo arquivos de dados antigos que não fazem mais parte da versão atual da tabela, impedindo o Time Travel para versões anteriores ao período de retenção."
    },
    {
        question: "Qual a função do Auto Loader (cloud_files) no Databricks?",
        options: [
            "Carregar dados automaticamente para o Power BI.",
            "Ingerir arquivos novos de forma incremental e eficiente de um Data Lake (S3, ADLS) conforme eles chegam.",
            "Criar clusters automaticamente quando o usuário faz login.",
            "Gerar código SQL automático."
        ],
        correctIndex: 1,
        explanation: "O Auto Loader é projetado para processar novos arquivos de dados conforme eles chegam no armazenamento em nuvem, gerenciando o estado e evitando a necessidade de listar todos os arquivos repetidamente."
    },
    {
        question: "Em um Delta Live Tables (DLT), qual a diferença entre uma 'Streaming Table' e uma 'Materialized View' (ou Live Table)?",
        options: [
            "Não há diferença.",
            "Streaming Tables processam cada registro apenas uma vez (incremental), enquanto Materialized Views recalculam tudo do zero a cada atualização.",
            "Streaming Tables são mais lentas.",
            "Materialized Views só funcionam com SQL."
        ],
        correctIndex: 1,
        explanation: "Streaming Tables são ideais para ingestão contínua (append-only). Materialized Views (Live Tables) são melhores para agregações onde o resultado muda conforme os dados subjacentes mudam."
    },
    {
        question: "Qual é a diferença entre uma Managed Table e uma External Table no Databricks?",
        options: [
            "Tabelas gerenciadas são mais rápidas.",
            "Se você dropar (DROP) uma Managed Table, os dados e metadados são apagados. Na External, apenas os metadados são apagados.",
            "Tabelas externas não suportam Delta Lake.",
            "Tabelas gerenciadas ficam salvas no seu computador local."
        ],
        correctIndex: 1,
        explanation: "Managed Tables: O Databricks gerencia o ciclo de vida dos arquivos. External Tables: Você gerencia os arquivos; o Databricks só gerencia o ponteiro (metadados) para eles."
    }
    // Adicione mais perguntas aqui seguindo o modelo
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const explanationDiv = document.getElementById('explanation');
    const currentQSpan = document.getElementById('current-q');
    const totalQSpan = document.getElementById('total-q');

    // Reset
    nextBtn.style.display = 'none';
    explanationDiv.style.display = 'none';
    optionsEl.innerHTML = '';

    const currentData = questions[currentQuestionIndex];

    // Textos
    questionEl.textContent = currentData.question;
    currentQSpan.textContent = currentQuestionIndex + 1;
    totalQSpan.textContent = questions.length;

    // Botões
    currentData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    const currentData = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const explanationText = document.getElementById('explanation-text');

    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentData.correctIndex) {
        score++;
        btnElement.classList.add('correct');
        explanationText.innerHTML = "<strong>Correto! 🎉</strong> " + currentData.explanation;
    } else {
        btnElement.classList.add('wrong');
        buttons[currentData.correctIndex].classList.add('correct');
        explanationText.innerHTML = "<strong>Ops! 😅</strong> " + currentData.explanation;
    }

    document.getElementById('explanation').style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total').textContent = questions.length;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';
    loadQuestion();
}
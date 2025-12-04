const questions = [
    {
        question: "O que significa a sigla DAG no contexto do Airflow?",
        options: [
            "Data Analysis Group",
            "Directed Acyclic Graph (Grafo Acíclico Dirigido)",
            "Docker Airflow Group",
            "Distributed Availability Group"
        ],
        correctIndex: 1,
        explanation: "Uma DAG é um grafo onde o fluxo de dados segue uma direção (Directed) e não possui loops/ciclos (Acyclic), definindo a ordem de execução das tarefas."
    },
    {
        question: "Qual componente do Airflow é responsável por monitorar as DAGs e agendar a execução das tarefas quando os requisitos são atendidos?",
        options: [
            "Webserver",
            "Scheduler",
            "Worker",
            "Metadata Database"
        ],
        correctIndex: 1,
        explanation: "O Scheduler é o coração do Airflow. Ele verifica constantemente se as tarefas devem ser executadas com base na data de início, dependências e intervalo de agendamento."
    },
    {
        question: "No Airflow, o que é um 'Operator'?",
        options: [
            "Uma pessoa que monitora o sistema.",
            "Um modelo ou blueprint para uma tarefa (Task). Define o que será feito (ex: BashOperator, PythonOperator).",
            "Um sensor que espera por um arquivo.",
            "O banco de dados onde os logs são salvos."
        ],
        correctIndex: 1,
        explanation: "O Operator é a classe que define a lógica do que fazer. Quando um Operator é instanciado dentro de uma DAG, ele se torna uma Tarefa (Task)."
    },
    {
        question: "Se uma DAG tem `schedule_interval='@daily'` e `start_date` definido para ontem (2025-01-01), quando a primeira execução (Run) vai realmente acontecer?",
        options: [
            "Imediatamente (assim que ligar a DAG).",
            "Ao final do primeiro intervalo, ou seja, hoje (2025-01-02).",
            "Nunca, pois a data já passou.",
            "Daqui a uma semana."
        ],
        correctIndex: 1,
        explanation: "Essa é a pegadinha clássica! O Airflow executa uma tarefa ao **final** do período agendado. O run de '2025-01-01' só é disparado quando o dia 01 acaba (em 2025-01-02)."
    },
    {
        question: "Qual o mecanismo padrão para trocar pequenas quantidades de dados (metadados) entre tarefas no Airflow?",
        options: [
            "Variáveis de Ambiente",
            "Banco de Dados Temporário",
            "XComs (Cross-Communications)",
            "Arquivos CSV locais"
        ],
        correctIndex: 2,
        explanation: "XComs permitem que uma tarefa envie ('push') e outra receba ('pull') pequenos dados (ex: uma data, um ID de arquivo). Não deve ser usado para grandes volumes de dados (ETL pesado)."
    },
    {
        question: "O que o parâmetro `catchup=True` (padrão) faz em uma DAG?",
        options: [
            "Faz a DAG rodar mais rápido.",
            "Executa todos os intervalos passados entre a `start_date` e a data atual que ainda não foram executados.",
            "Impede que a DAG rode datas passadas.",
            "Apaga logs antigos."
        ],
        correctIndex: 1,
        explanation: "O Backfill/Catchup garante que nenhum dado seja perdido. Se você pausar a DAG por 5 dias e despausar, o Airflow agendará as 5 execuções pendentes se `catchup=True`."
    },
    {
        question: "Qual é a função de um 'Sensor' no Airflow?",
        options: [
            "Executar scripts Python.",
            "Esperar por um determinado critério ou evento externo (ex: chegada de arquivo no S3) antes de prosseguir.",
            "Enviar emails de alerta.",
            "Visualizar gráficos no Webserver."
        ],
        correctIndex: 1,
        explanation: "Sensores são um tipo especial de Operator projetados para aguardar (poke) até que uma condição seja verdadeira."
    },
    {
        question: "Para que servem as 'Connections' no Airflow?",
        options: [
            "Para conectar o Scheduler ao Webserver.",
            "Para armazenar credenciais e informações de conexão com sistemas externos (AWS, Postgres, Snowflake) de forma segura.",
            "Para definir a internet do servidor.",
            "Para ligar uma tarefa na outra (set_downstream)."
        ],
        correctIndex: 1,
        explanation: "Connections guardam segredos (usuário, senha, host). No código da DAG, você usa apenas o `conn_id`, sem expor senhas no código."
    },
    {
        question: "O que significa dizer que uma tarefa deve ser 'Idempotente'?",
        options: [
            "Que ela deve ser executada muito rápido.",
            "Que ela nunca deve falhar.",
            "Que se você executá-la múltiplas vezes com os mesmos parâmetros, o resultado final deve ser sempre o mesmo, sem duplicar dados.",
            "Que ela deve rodar em paralelo."
        ],
        correctIndex: 2,
        explanation: "Idempotência é crucial em Engenharia de Dados. Se sua pipeline falhar e você rodar de novo (retry), ela não pode inserir os dados duas vezes no banco."
    },
    {
        question: "Qual Executor é recomendado para produção em ambientes distribuídos e escaláveis?",
        options: [
            "SequentialExecutor",
            "LocalExecutor",
            "CeleryExecutor ou KubernetesExecutor",
            "DebugExecutor"
        ],
        correctIndex: 2,
        explanation: "SequentialExecutor (padrão) não roda tarefas em paralelo. Para produção, usa-se Celery (com filas de workers) ou Kubernetes (um pod por tarefa)."
    },
    {
        question: "Como você define a dependência onde a 'Task B' só roda depois que a 'Task A' terminar com sucesso?",
        options: [
            "Task A >> Task B",
            "Task B >> Task A",
            "Task A -- Task B",
            "Task A.run_after(Task B)"
        ],
        correctIndex: 0,
        explanation: "No Airflow moderno, usamos os bitshift operators: `>>` define que A vem antes de B (A é upstream de B)."
    },
    {
        question: "O que são 'Hooks'?",
        options: [
            "Ganchos para pendurar a DAG.",
            "Interfaces de alto nível para interagir com sistemas externos (APIs, Bancos) sem se preocupar com a configuração de baixo nível.",
            "Scripts que rodam antes da instalação.",
            "Erros que travam o scheduler."
        ],
        correctIndex: 1,
        explanation: "Os Operators usam Hooks internamente. Por exemplo, o `PostgresOperator` usa o `PostgresHook` para abrir a conexão e executar o SQL."
    },
    {
        question: "Para testar uma tarefa específica de uma DAG no terminal sem depender do Scheduler, qual comando você usaria?",
        options: [
            "airflow tasks test <dag_id> <task_id> <data>",
            "airflow dags trigger <dag_id>",
            "airflow run all",
            "python dag.py"
        ],
        correctIndex: 0,
        explanation: "O comando `airflow tasks test` executa a tarefa localmente ignorando dependências e sem salvar o estado no banco, ideal para depuração."
    }
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
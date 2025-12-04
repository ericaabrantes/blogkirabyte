const questions = [
    // --- QUESTÕES ORIGINAIS (1-13) ---
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
    },

    // --- NOVAS QUESTÕES (14-50) ---

    // CONCEITOS BÁSICOS E ARQUITETURA
    {
        question: "Onde o Airflow armazena o status das tarefas (Queued, Running, Success) e as definições das DAGs?",
        options: [
            "No Metadata Database (Postgres, MySQL).",
            "No Webserver.",
            "Em arquivos de log locais.",
            "Na memória RAM do Scheduler."
        ],
        correctIndex: 0,
        explanation: "O Metadata Database é a fonte da verdade. O Scheduler lê dele para saber o que agendar e o Webserver lê dele para mostrar o status na UI."
    },
    {
        question: "Qual a função do componente Webserver?",
        options: [
            "Executar as tarefas pesadas.",
            "Fornecer a Interface de Usuário (UI) para monitorar e interagir com as DAGs.",
            "Agendar os jobs.",
            "Analisar arquivos Python."
        ],
        correctIndex: 1,
        explanation: "O Webserver é uma aplicação Flask que serve a interface visual. Ele não executa tarefas nem agenda nada, apenas exibe o estado do banco de dados."
    },
    {
        question: "Por que não é recomendado fazer chamadas de banco de dados ou requisições pesadas fora dos Operators (no 'Top Level Code' da DAG)?",
        options: [
            "Porque o Python não suporta.",
            "Porque o Scheduler avalia (parse) o arquivo da DAG a cada poucos segundos, e isso sobrecarregaria o sistema.",
            "Porque gera erro de sintaxe.",
            "Porque as senhas ficam expostas."
        ],
        correctIndex: 1,
        explanation: "O 'Top Level Code' é executado toda vez que o Scheduler processa o arquivo. Se você colocar uma query SQL solta lá, ela será executada milhares de vezes, derrubando o banco."
    },
    
    // OPERATORS E WORKFLOW
    {
        question: "Qual Operator permite ramificar o fluxo da DAG, decidindo qual caminho seguir baseado em uma condição?",
        options: [
            "BashOperator",
            "BranchPythonOperator",
            "DummyOperator",
            "LatestOnlyOperator"
        ],
        correctIndex: 1,
        explanation: "O `BranchPythonOperator` retorna o ID da próxima tarefa (ou lista de tarefas) a ser executada, pulando as outras ramificações."
    },
    {
        question: "O que acontece com as tarefas que foram 'puladas' (Skipped) por um BranchPythonOperator?",
        options: [
            "Elas falham.",
            "Elas ficam com status 'skipped' e não são executadas.",
            "Elas rodam em segundo plano.",
            "Elas travam a DAG."
        ],
        correctIndex: 1,
        explanation: "O status 'skipped' é um estado válido de sucesso que indica que aquela parte do fluxo não precisava rodar."
    },
    {
        question: "Para agrupar visualmente um conjunto de tarefas na UI do Airflow (v2.0+), qual recurso você deve usar?",
        options: [
            "SubDAGs",
            "TaskGroup",
            "DAG Bags",
            "Pools"
        ],
        correctIndex: 1,
        explanation: "TaskGroups substituíram as antigas SubDAGs. Eles são apenas uma forma visual de organizar tarefas na UI, sem a complexidade de performance das SubDAGs."
    },
    {
        question: "Qual parâmetro define o que acontece se uma tarefa falhar (ex: tentar de novo 3 vezes)?",
        options: [
            "retries",
            "catchup",
            "depends_on_past",
            "execution_timeout"
        ],
        correctIndex: 0,
        explanation: "Você pode definir `retries=3` nos `default_args` da DAG ou na tarefa específica. O Airflow tentará executar novamente em caso de falha."
    },
    {
        question: "O que é um 'Trigger Rule'?",
        options: [
            "Uma regra para disparar emails.",
            "Uma condição que define quando uma tarefa deve rodar baseada no estado das tarefas anteriores (upstream).",
            "Um tipo de sensor.",
            "Uma configuração de banco de dados."
        ],
        correctIndex: 1,
        explanation: "O padrão é `all_success` (roda se todas as anteriores passaram). Outros exemplos: `one_failed` (para alertas), `all_done` (para limpeza/cleanup), `none_failed`."
    },
    {
        question: "Se você quer que uma tarefa rode MESMO se a tarefa anterior falhar (ex: tarefa de limpeza de cluster), qual trigger_rule usar?",
        options: [
            "all_success",
            "all_failed",
            "all_done",
            "one_success"
        ],
        correctIndex: 2,
        explanation: "`all_done` significa 'rode assim que a tarefa anterior terminar', não importando se ela foi sucesso, falha ou skipped."
    },

    // JINJA TEMPLATES E VARIÁVEIS
    {
        question: "No Airflow, o que são as 'Macros' (ex: `{{ ds }}`)?",
        options: [
            "Scripts em C++.",
            "Variáveis injetadas via Jinja Templating que fornecem informações dinâmicas em tempo de execução (como a data da execução).",
            "Erros de sistema.",
            "Conexões de banco."
        ],
        correctIndex: 1,
        explanation: "`{{ ds }}` retorna a data de execução no formato YYYY-MM-DD. É essencial para garantir idempotência ao processar dados por dia."
    },
    {
        question: "Qual a diferença entre Airflow Variables e Environment Variables?",
        options: [
            "Não há diferença.",
            "Airflow Variables vivem no Metadata DB e podem ser editadas na UI. Variáveis de ambiente são definidas no SO/Container.",
            "Airflow Variables são mais rápidas.",
            "Variáveis de ambiente não funcionam no Airflow."
        ],
        correctIndex: 1,
        explanation: "Airflow Variables são ótimas para configurações dinâmicas (JSON, flags), mas geram conexões ao banco. Para segredos, prefira Secrets Backend ou Env Vars."
    },
    
    // SCHEDULING E TEMPO
    {
        question: "O que significa o preset de agendamento `@once`?",
        options: [
            "Executa a cada 1 minuto.",
            "Executa a DAG apenas uma vez e nunca mais agenda.",
            "Executa uma vez por dia.",
            "Executa uma vez por ano."
        ],
        correctIndex: 1,
        explanation: "Útil para DAGs de one-off, setups iniciais ou DAGs que são disparadas apenas manualmente/externamente."
    },
    {
        question: "O que o parâmetro `depends_on_past=True` faz?",
        options: [
            "A tarefa depende do sucesso de todas as tarefas da DAG.",
            "A tarefa só roda se a execução anterior (run anterior) da MESMA tarefa tiver sido sucesso.",
            "A tarefa depende do passado do scheduler.",
            "A tarefa roda retroativamente."
        ],
        correctIndex: 1,
        explanation: "Isso garante ordem sequencial estrita. Se o job de ontem falhou, o job de hoje não roda (para não processar dados fora de ordem)."
    },
    {
        question: "O que acontece se uma DAG demora mais tempo para rodar do que o seu intervalo de agendamento (ex: roda a cada 5 min, mas leva 10 min)?",
        options: [
            "O Airflow mata a execução anterior.",
            "As execuções podem se acumular (overlap) a menos que você configure `max_active_runs` ou `concurrency`.",
            "O Airflow para de agendar.",
            "Dá erro no banco de dados."
        ],
        correctIndex: 1,
        explanation: "Por padrão, o Airflow permite execuções paralelas. Se isso for um problema, defina `max_active_runs=1` na DAG."
    },

    // PERFORMANCE E SCALING
    {
        question: "O que são 'Pools' no Airflow?",
        options: [
            "Piscinas para os desenvolvedores.",
            "Um mecanismo para limitar a concorrência de tarefas para recursos específicos (ex: limitar conexões a um banco de produção).",
            "Agrupamento de DAGs.",
            "Tipos de conexões."
        ],
        correctIndex: 1,
        explanation: "Você pode criar um Pool 'banco_prod' com 5 slots. Se tiver 20 tarefas querendo acessar o banco, só 5 rodam por vez, as outras esperam na fila."
    },
    {
        question: "Qual parâmetro define o tempo máximo que uma tarefa pode ficar rodando antes de falhar (timeout)?",
        options: [
            "sla",
            "execution_timeout",
            "timeout_seconds",
            "max_duration"
        ],
        correctIndex: 1,
        explanation: "Importante para evitar tarefas zumbis que travam workers. Ex: `execution_timeout=timedelta(minutes=30)`."
    },
    {
        question: "Para escalar o Airflow horizontalmente (adicionar mais máquinas), qual componente você deve replicar?",
        options: [
            "Scheduler",
            "Webserver",
            "Worker",
            "Database"
        ],
        correctIndex: 2,
        explanation: "Os Workers são quem executa o trabalho pesado. Com o CeleryExecutor ou KubernetesExecutor, você pode ter centenas de workers processando tarefas em paralelo."
    },

    // SENSORES E AVANÇADO
    {
        question: "Qual a desvantagem de usar um Sensor com modo `poke` (padrão) para intervalos longos?",
        options: [
            "Ele ocupa um slot de worker o tempo todo enquanto espera, desperdiçando recursos.",
            "Ele não funciona.",
            "Ele falha depois de 1 minuto.",
            "Ele duplica os dados."
        ],
        correctIndex: 0,
        explanation: "No modo `poke`, a tarefa fica 'Running' e dorme. Para esperas longas, use `mode='reschedule'`, que libera o slot do worker e reagenda a verificação para depois."
    },
    {
        question: "O que o `ExternalTaskSensor` faz?",
        options: [
            "Monitora um arquivo externo.",
            "Aguarda a conclusão de uma tarefa em OUTRA DAG.",
            "Monitora uma API externa.",
            "Aguarda o usuário clicar num botão."
        ],
        correctIndex: 1,
        explanation: "Essencial para criar dependências entre pipelines diferentes (ex: DAG B só roda quando DAG A terminar)."
    },
    {
        question: "O que é o 'SLA' (Service Level Agreement) no Airflow?",
        options: [
            "Um contrato jurídico.",
            "Um tempo limite definido para que uma tarefa ou DAG termine. Se passar desse tempo, o Airflow pode enviar um email ou chamar um callback.",
            "Uma ferramenta de log.",
            "Um tipo de conexão."
        ],
        correctIndex: 1,
        explanation: "O SLA ajuda a monitorar atrasos críticos no pipeline de dados."
    },

    // CLI E ADMINISTRAÇÃO
    {
        question: "Qual comando CLI é usado para inicializar ou atualizar o esquema do banco de dados de metadados?",
        options: [
            "airflow db init / airflow db migrate",
            "airflow start",
            "airflow initdb",
            "airflow run database"
        ],
        correctIndex: 0,
        explanation: "Nas versões mais novas (2.0+), usa-se `airflow db migrate` para aplicar as migrações de esquema."
    },
    {
        question: "Como você pausa uma DAG via CLI?",
        options: [
            "airflow dags stop <dag_id>",
            "airflow dags pause <dag_id>",
            "airflow dags delete <dag_id>",
            "airflow pause <dag_id>"
        ],
        correctIndex: 1,
        explanation: "Isso equivale a desligar o toggle (chave) na interface web."
    },
    {
        question: "Onde o Airflow procura pelos arquivos Python das DAGs?",
        options: [
            "Na pasta definida em `dags_folder` no arquivo airflow.cfg.",
            "Na pasta Downloads.",
            "No banco de dados.",
            "Na nuvem automaticamente."
        ],
        correctIndex: 0,
        explanation: "Por padrão é `~/airflow/dags`, mas isso é configurável."
    },
    
    // EXTRAS (MIXED TOPICS)
    {
        question: "Qual a diferença entre `PythonOperator` e `BashOperator`?",
        options: [
            "PythonOperator é mais rápido.",
            "PythonOperator executa uma função Python. BashOperator executa um comando shell/bash.",
            "BashOperator só funciona no Linux.",
            "Não há diferença."
        ],
        correctIndex: 1,
        explanation: "Escolha baseado no que você precisa. Se já tem um script shell pronto, use Bash. Se quer lógica complexa e bibliotecas, use Python."
    },
    {
        question: "O que é o `ShortCircuitOperator`?",
        options: [
            "Um operador que causa curto-circuito no servidor.",
            "Um operador que avalia uma condição booleana. Se False, pula (skips) todas as tarefas downstream.",
            "Um operador para tarefas muito curtas.",
            "Um sensor de eletricidade."
        ],
        correctIndex: 1,
        explanation: "Útil para validações iniciais. Ex: 'O arquivo chegou vazio? Se sim, para o pipeline aqui'."
    },
    {
        question: "Para usar Docker dentro de uma DAG, qual a melhor prática?",
        options: [
            "Instalar Docker dentro do Worker.",
            "Usar o `DockerOperator` ou `KubernetesPodOperator`.",
            "Rodar comandos docker via BashOperator.",
            "Não é possível usar Docker."
        ],
        correctIndex: 1,
        explanation: "Esses operadores especializados gerenciam melhor o ciclo de vida dos containers e logs do que um simples comando bash."
    },
    {
        question: "Se você precisa passar uma grande quantidade de dados (Gigabytes) entre duas tarefas, o que deve fazer?",
        options: [
            "Usar XComs.",
            "Usar uma Variável Global.",
            "Salvar os dados num armazenamento externo (S3, GCS, HDFS) na Tarefa A e passar apenas o caminho (path) via XCom para a Tarefa B.",
            "Escrever no log."
        ],
        correctIndex: 2,
        explanation: "O banco de metadados do Airflow não foi feito para Big Data. XComs grandes travam o banco."
    },
    {
        question: "O que é o 'Scheduler Heartbeat'?",
        options: [
            "Um som que o servidor faz.",
            "Um processo periódico que verifica a saúde do scheduler e garante que ele não travou.",
            "A frequência cardíaca do engenheiro.",
            "O tempo de execução da DAG."
        ],
        correctIndex: 1,
        explanation: "É uma métrica crítica para monitoramento da infraestrutura do Airflow."
    },
    {
        question: "Em uma arquitetura com KubernetesExecutor, o que acontece quando uma tarefa termina?",
        options: [
            "O Pod continua rodando para sempre.",
            "O Pod é encerrado (terminado) para liberar recursos do cluster.",
            "O Pod vira um Worker.",
            "Nada acontece."
        ],
        correctIndex: 1,
        explanation: "Essa é a vantagem do K8s: elasticidade total. Usa recurso só quando precisa."
    },
    {
        question: "Qual a função do arquivo `.airflowignore`?",
        options: [
            "Ignorar erros de execução.",
            "Especificar arquivos ou pastas dentro do diretório de DAGs que o Scheduler não deve processar (parse).",
            "Ignorar usuários.",
            "Ignorar configurações de segurança."
        ],
        correctIndex: 1,
        explanation: "Funciona igual ao `.gitignore`. Útil para esconder testes, bibliotecas auxiliares ou DAGs em desenvolvimento."
    },
    {
        question: "Qual variável do Jinja fornece o objeto de configuração da DAG (parâmetros passados manualmente)?",
        options: [
            "{{ params }} / {{ dag_run.conf }}",
            "{{ config }}",
            "{{ settings }}",
            "{{ manual }}"
        ],
        correctIndex: 0,
        explanation: "Quando você dispara uma DAG manualmente com um JSON de configuração ('Trigger DAG w/ config'), você acessa esses valores via `{{ dag_run.conf['key'] }}`."
    },
    {
        question: "O que é o 'Backfill'?",
        options: [
            "Preenchimento de formulários.",
            "O processo de executar (ou re-executar) DAGs para um período histórico passado.",
            "Fazer backup do banco.",
            "Limpar o cache."
        ],
        correctIndex: 1,
        explanation: "Ex: Você criou a DAG hoje, mas quer processar os dados desde o dia 1º do mês passado. Você roda um comando de backfill."
    },
    {
        question: "Qual o risco de usar `datetime.now()` no nível superior (top-level) de uma DAG?",
        options: [
            "Nenhum risco.",
            "A data será calculada apenas quando o Scheduler fizer o parse do arquivo, e não quando a tarefa rodar, causando datas incorretas.",
            "O Python trava.",
            "O Airflow fica mais rápido."
        ],
        correctIndex: 1,
        explanation: "Sempre use `execution_date` (logical_date) ou calcule a data DENTRO da função da tarefa/operator para garantir determinismo."
    },
    {
        question: "Qual a maneira correta de instalar pacotes Python extras (como pandas, boto3) no Airflow gerenciado (Composer/MWAA) ou Docker?",
        options: [
            "Rodar `pip install` dentro da tarefa Python.",
            "Adicionar ao arquivo `requirements.txt` da imagem Docker ou do ambiente.",
            "Copiar a pasta da biblioteca manualmente.",
            "Não é possível instalar extras."
        ],
        correctIndex: 1,
        explanation: "Boas práticas de DevOps: as dependências devem estar na imagem/ambiente, não sendo instaladas em tempo de execução."
    },
    {
        question: "O que significa o estado 'upstream_failed'?",
        options: [
            "A tarefa falhou.",
            "A tarefa não rodou porque uma tarefa anterior, da qual ela depende, falhou.",
            "A internet caiu.",
            "A tarefa foi pulada."
        ],
        correctIndex: 1,
        explanation: "O Airflow propaga o status. Se o Pai falha, o Filho fica `upstream_failed` (a menos que a trigger_rule diga o contrário)."
    },
    {
        question: "Quem é o criador original do Apache Airflow?",
        options: [
            "Google",
            "Facebook",
            "Airbnb (Maxime Beauchemin)",
            "Netflix"
        ],
        correctIndex: 2,
        explanation: "O Airflow nasceu no Airbnb em 2014 para gerenciar seus fluxos de trabalho de dados complexos."
    },
    {
        question: "Qual a vantagem de usar o `TaskFlow API` (decoradores `@task`) introduzido no Airflow 2.0?",
        options: [
            "Permite escrever DAGs de forma mais limpa, pythonica e gerencia XComs automaticamente entre tarefas Python.",
            "Faz o Airflow rodar em GPU.",
            "Elimina a necessidade do Scheduler.",
            "Substitui o SQL."
        ],
        correctIndex: 0,
        explanation: "Simplifica muito o código. Em vez de instanciar `PythonOperator`, você apenas decora a função com `@task` e chama ela como uma função normal."
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
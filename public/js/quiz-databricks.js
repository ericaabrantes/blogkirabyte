const questions = [
    // --- QUESTÕES ORIGINAIS (1-13) ---
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
        explanation: "O método `show()` exibe o conteúdo do DataFrame no console. O `display()` é específico de notebooks como Databricks e oferece formatação visual rica."
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
    },

    // --- NOVAS QUESTÕES (14-50) ---

    // SECTION 1: DATABRICKS INTELLIGENCE PLATFORM
    {
        question: "Qual recurso do Databricks utiliza um motor de execução vetorizado escrito em C++ para acelerar consultas Spark?",
        options: [
            "Databricks Jobs",
            "Photon Engine",
            "Unity Catalog",
            "MLflow"
        ],
        correctIndex: 1,
        explanation: "O Photon é o motor de execução nativo de alta performance do Databricks, projetado para acelerar cargas de trabalho SQL e DataFrame API."
    },
    {
        question: "Qual tipo de compute é recomendado para executar tarefas de orquestração agendadas e automatizadas para economizar custos?",
        options: [
            "All-Purpose Compute",
            "Job Compute",
            "Personal Compute",
            "GPU Optimized Compute"
        ],
        correctIndex: 1,
        explanation: "O Job Compute (Cluster de Jobs) é criado apenas para a execução da tarefa e encerrado ao final, sendo muito mais barato que um All-Purpose Compute interativo."
    },
    {
        question: "O que caracteriza o Databricks Serverless SQL Warehouse?",
        options: [
            "O usuário precisa gerenciar manualmente as versões do Spark.",
            "Não há tempo de espera para inicialização do cluster, pois a computação é gerenciada pelo Databricks.",
            "Ele só suporta Python e Scala.",
            "Ele armazena dados diretamente na memória RAM do usuário."
        ],
        correctIndex: 1,
        explanation: "O Serverless SQL Warehouse elimina a necessidade de gerenciar infraestrutura e inicia quase instantaneamente."
    },

    // SECTION 2: DEVELOPMENT AND INGESTION
    {
        question: "Qual ferramenta permite desenvolver código localmente na sua IDE favorita (VSCode, PyCharm) e executá-lo no cluster Databricks?",
        options: [
            "Databricks SQL",
            "Databricks CLI",
            "Databricks Connect",
            "Auto Loader"
        ],
        correctIndex: 2,
        explanation: "O Databricks Connect permite conectar IDEs locais aos clusters Databricks para desenvolvimento e testes remotos."
    },
    {
        question: "Ao usar o Auto Loader, qual opção deve ser habilitada para garantir que colunas novas ou inesperadas não quebrem o pipeline e sejam salvas separadamente?",
        options: [
            "mergeSchema",
            "failOnUnknown",
            "schemaHints",
            "cloudFiles.schemaEvolutionMode = 'rescue'"
        ],
        correctIndex: 3,
        explanation: "O modo de evolução de esquema com a coluna de dados resgatados (_rescued_data) garante que dados com tipos incorretos ou colunas novas sejam salvos sem falhar o job."
    },
    {
        question: "Qual sintaxe é correta para ler arquivos JSON usando Auto Loader em PySpark?",
        options: [
            "spark.read.json('path')",
            "spark.readStream.format('cloudFiles').option('cloudFiles.format', 'json').load('path')",
            "spark.read.format('autoloader').load('path')",
            "spark.readStream.json('path')"
        ],
        correctIndex: 1,
        explanation: "O Auto Loader é invocado pelo formato 'cloudFiles' e exige que o formato original do arquivo seja passado na opção 'cloudFiles.format'."
    },
    {
        question: "Se você precisa clonar um repositório Git dentro do Databricks para versionar seus notebooks, qual recurso você usa?",
        options: [
            "DBFS",
            "Databricks Repos (Git Folders)",
            "Unity Catalog Volumes",
            "System Tables"
        ],
        correctIndex: 1,
        explanation: "Os Databricks Repos (agora chamados Git Folders) permitem sincronização direta com provedores Git como GitHub, GitLab e Azure DevOps."
    },
    
    // SECTION 3: DATA PROCESSING & TRANSFORMATIONS
    {
        question: "Qual é o objetivo principal da camada Silver na arquitetura Medallion?",
        options: [
            "Ingestão bruta.",
            "Agregações finais para dashboards.",
            "Limpeza, deduplicação e enriquecimento dos dados.",
            "Arquivamento de dados históricos."
        ],
        correctIndex: 2,
        explanation: "A camada Silver é onde os dados são limpos, tipados corretamente, filtrados e enriquecidos (joins), servindo como uma 'single source of truth'."
    },
    {
        question: "Qual comando PySpark é usado para remover linhas duplicadas de um DataFrame?",
        options: [
            "df.unique()",
            "df.dropDuplicates()",
            "df.distinct_rows()",
            "df.clean()"
        ],
        correctIndex: 1,
        explanation: "`dropDuplicates()` (ou `distinct()`) é o método padrão para remover duplicatas. Você pode passar colunas específicas como argumento."
    },
    {
        question: "Como você pode transformar uma coluna que contém um array de valores em múltiplas linhas (uma para cada elemento do array)?",
        options: [
            "split()",
            "explode()",
            "flatten()",
            "array_expand()"
        ],
        correctIndex: 1,
        explanation: "A função `explode()` pega uma coluna de array e cria uma nova linha para cada elemento desse array, repetindo os valores das outras colunas."
    },
    {
        question: "O que acontece se você usar 'mode(\"overwrite\")' ao salvar um DataFrame como tabela Delta?",
        options: [
            "Ele falha se a tabela já existir.",
            "Ele adiciona os novos dados ao final da tabela.",
            "Ele substitui atomicamente todos os dados da tabela pelos novos dados.",
            "Ele deleta a tabela e o schema."
        ],
        correctIndex: 2,
        explanation: "O modo overwrite substitui os dados existentes. No Delta Lake, isso é feito de forma transacional e segura, mantendo o histórico para Time Travel."
    },
    {
        question: "Em um pipeline Delta Live Tables (DLT), como você define uma regra de qualidade que alerta mas não interrompe o processamento?",
        options: [
            "@dlt.expect_or_fail",
            "@dlt.expect_or_drop",
            "@dlt.expect",
            "@dlt.validate"
        ],
        correctIndex: 2,
        explanation: "`@dlt.expect` registra a violação da regra nos logs de eventos, mas permite que o registro seja processado. `expect_or_fail` para o pipeline, e `expect_or_drop` remove o registro."
    },
    {
        question: "Qual tipo de JOIN é mais eficiente quando uma das tabelas é muito pequena (ex: tabela de dimensão)?",
        options: [
            "Sort Merge Join",
            "Shuffle Hash Join",
            "Broadcast Join",
            "Cartesian Join"
        ],
        correctIndex: 2,
        explanation: "O Broadcast Join envia a tabela pequena para todos os nós do cluster, evitando o tráfego de rede (shuffle) da tabela grande."
    },
    
    // SECTION 4: PRODUCTIONIZING DATA PIPELINES
    {
        question: "Qual é a ferramenta de Infraestrutura como Código (IaC) nativa do Databricks para gerenciar projetos completos (jobs, pipelines, arquivos)?",
        options: [
            "Terraform Provider",
            "Databricks Asset Bundles (DABs)",
            "CloudFormation",
            "DBFS CLI"
        ],
        correctIndex: 1,
        explanation: "DABs permitem definir e implantar projetos complexos de dados e ML usando arquivos YAML, facilitando CI/CD e boas práticas de engenharia de software."
    },
    {
        question: "Qual arquivo é usado para configurar um Databricks Asset Bundle?",
        options: [
            "pipeline.json",
            "databricks.yml",
            "config.xml",
            "bundle.yaml"
        ],
        correctIndex: 1,
        explanation: "O arquivo `databricks.yml` na raiz do projeto define os recursos, alvos (dev, prod) e variáveis do bundle."
    },
    {
        question: "Se uma tarefa em um Job com múltiplas tarefas falhar, qual recurso permite reexecutar apenas a tarefa falha e suas dependentes?",
        options: [
            "Full Retry",
            "Repair and Rerun",
            "Time Travel",
            "Job Cloning"
        ],
        correctIndex: 1,
        explanation: "O recurso 'Repair and Rerun' permite selecionar o run falho e reexecutar apenas as partes que não tiveram sucesso, economizando tempo e custo."
    },
    {
        question: "Onde você deve procurar para analisar o plano de execução físico de uma query Spark lenta?",
        options: [
            "Driver Logs",
            "Spark UI",
            "Databricks CLI",
            "Unity Catalog Lineage"
        ],
        correctIndex: 1,
        explanation: "A Spark UI fornece detalhes visuais sobre Jobs, Stages e Tasks, incluindo DAGs de execução e métricas de shuffle/spill."
    },

    // SECTION 5: DATA GOVERNANCE & QUALITY
    {
        question: "Qual comando SQL é usado para dar permissão de leitura em uma tabela no Unity Catalog?",
        options: [
            "ALLOW READ ON TABLE",
            "GRANT SELECT ON TABLE",
            "PERMIT VIEW ON TABLE",
            "GIVE ACCESS TO"
        ],
        correctIndex: 1,
        explanation: "O padrão ANSI SQL `GRANT SELECT ON TABLE <tabela> TO <usuario/grupo>` é usado no Unity Catalog para controle de acesso."
    },
    {
        question: "No Unity Catalog, o que é um 'External Location'?",
        options: [
            "Um local físico onde o Databricks está instalado.",
            "Um objeto que combina uma credencial de armazenamento com um caminho na nuvem (S3/ADLS) para permitir acesso seguro.",
            "Uma tabela que foi deletada.",
            "Uma região da AWS/Azure."
        ],
        correctIndex: 1,
        explanation: "External Locations governam o acesso a caminhos de armazenamento em nuvem, permitindo a criação de Tabelas Externas e Volumes sem expor chaves de acesso diretamente."
    },
    {
        question: "Qual recurso do Unity Catalog permite rastrear a origem e o destino dos dados (colunas e tabelas) através dos pipelines?",
        options: [
            "Data Lineage",
            "Audit Logs",
            "Delta Sharing",
            "System Tables"
        ],
        correctIndex: 0,
        explanation: "Data Lineage captura automaticamente as dependências entre tabelas, views e colunas conforme as queries são executadas."
    },
    {
        question: "O Delta Sharing permite compartilhar dados com:",
        options: [
            "Apenas usuários na mesma conta Databricks.",
            "Apenas usuários usando Databricks em outras contas.",
            "Qualquer plataforma de computação que tenha um conector Delta Sharing (PowerBI, Pandas, Spark, etc).",
            "Apenas via email com arquivos CSV."
        ],
        correctIndex: 2,
        explanation: "O Delta Sharing é um protocolo aberto. O consumidor não precisa usar Databricks; basta ter um cliente compatível para ler os dados."
    },
    {
        question: "O que é o Lakehouse Federation?",
        options: [
            "Uma forma de unir vários workspaces Databricks.",
            "A capacidade de consultar dados em sistemas externos (PostgreSQL, Snowflake, SQL Server) sem precisar copiá-los para o Databricks.",
            "Uma ferramenta de visualização.",
            "O novo nome do Delta Lake."
        ],
        correctIndex: 1,
        explanation: "Lakehouse Federation permite criar conexões e catálogos estrangeiros para executar queries federadas em dados que residem fora do Databricks."
    },
    {
        question: "Onde ficam armazenados os logs de auditoria (quem acessou o quê) no Databricks com Unity Catalog habilitado?",
        options: [
            "Em arquivos de texto no driver.",
            "Nas System Tables (tabelas do sistema).",
            "Não são armazenados.",
            "Apenas no portal da AWS/Azure."
        ],
        correctIndex: 1,
        explanation: "As System Tables (dentro do catálogo `system`) centralizam logs de auditoria, faturamento e linhagem acessíveis via SQL."
    },
    
    // EXTRAS / MIXED TOPICS TO REACH 50
    {
        question: "Qual a diferença entre 'Deep Clone' e 'Shallow Clone' no Delta Lake?",
        options: [
            "Shallow copia dados, Deep copia metadados.",
            "Deep copia dados e metadados; Shallow copia apenas metadados (ponteiros).",
            "Não existe diferença.",
            "Shallow é mais caro que Deep."
        ],
        correctIndex: 1,
        explanation: "Shallow Clone é rápido e barato pois não duplica os arquivos físicos (ótimo para testes). Deep Clone duplica tudo, criando uma cópia independente."
    },
    {
        question: "Qual função de janela (Window Function) é usada para obter o valor da linha anterior em um conjunto de dados ordenado?",
        options: [
            "lead()",
            "lag()",
            "rank()",
            "previous()"
        ],
        correctIndex: 1,
        explanation: "`lag(coluna, 1)` pega o valor da linha anterior. `lead()` pega o valor da linha seguinte."
    },
    {
        question: "Como você cria uma Visualização Materializada (Materialized View) usando SQL no Databricks?",
        options: [
            "CREATE TABLE AS SELECT...",
            "CREATE MATERIALIZED VIEW AS SELECT...",
            "CREATE LIVE TABLE ... AS SELECT...",
            "CREATE VIEW ... AS SELECT..."
        ],
        correctIndex: 1,
        explanation: "Em SQL Warehouses ou DLT, usa-se `CREATE MATERIALIZED VIEW`. Ela pré-computa e armazena os resultados, atualizando-os incrementalmente."
    },
    {
        question: "Qual é o comportamento padrão de uma tarefa de Job se o cluster falhar?",
        options: [
            "A tarefa é marcada como sucesso.",
            "O Job tenta reiniciar indefinidamente.",
            "A tarefa falha, a menos que uma política de repetição (Retry Policy) esteja configurada.",
            "O Job envia um email e pausa."
        ],
        correctIndex: 2,
        explanation: "Por padrão, a falha encerra a tarefa. Configurar 'Retries' é uma boa prática para erros transientes."
    },
    {
        question: "No contexto de Unity Catalog, o que é um 'Volume'?",
        options: [
            "Uma partição de disco.",
            "Um objeto para governar arquivos não-tabulares (imagens, PDFs, CSVs brutos) dentro do catálogo.",
            "A quantidade de dados processados.",
            "Um tipo de cluster."
        ],
        correctIndex: 1,
        explanation: "Volumes permitem gerenciar, governar e acessar dados não estruturados da mesma forma que tabelas, usando caminhos como `/Volumes/catalogo/schema/volume/arquivo.txt`."
    },
    {
        question: "Qual comando Python é usado para instalar uma biblioteca de terceiros (ex: pandas) em um notebook com escopo de sessão?",
        options: [
            "install pandas",
            "%pip install pandas",
            "pip.get('pandas')",
            "dbutils.library.install('pandas')"
        ],
        correctIndex: 1,
        explanation: "O comando mágico `%pip install` instala bibliotecas apenas para a sessão atual do notebook, sem afetar outros usuários do cluster."
    },
    {
        question: "Qual é a vantagem de usar colunas geradas (Generated Columns) em tabelas Delta?",
        options: [
            "Elas criptografam os dados.",
            "Elas geram valores automaticamente baseados em outras colunas e permitem Partition Pruning automático.",
            "Elas aumentam o tamanho do arquivo.",
            "Elas só funcionam com datas."
        ],
        correctIndex: 1,
        explanation: "Exemplo: Gerar uma coluna 'data' a partir de 'timestamp'. Se você filtrar por 'timestamp', o Delta automaticamente usa a partição 'data' para pular arquivos (pruning)."
    },
    {
        question: "Para o que serve a instrução 'CACHE TABLE'?",
        options: [
            "Salvar a tabela no disco permanentemente.",
            "Armazenar a tabela na memória do cluster para acelerar consultas subsequentes.",
            "Limpar o cache do navegador.",
            "Fazer backup da tabela."
        ],
        correctIndex: 1,
        explanation: "O cache mantém os dados quentes na memória dos workers. Útil para tabelas pequenas ou médias acessadas repetidamente durante uma sessão."
    },
    {
        question: "No Delta Lake, o que é o 'Change Data Feed' (CDF)?",
        options: [
            "Um feed RSS de notícias.",
            "Um recurso que registra mudanças em nível de linha (inserts, updates, deletes) para facilitar o consumo downstream.",
            "Uma forma de mudar o tipo de dados.",
            "Um log de erros."
        ],
        correctIndex: 1,
        explanation: "CDF permite ler apenas o que mudou (delta) entre versões, facilitando a propagação de atualizações e deleções para tabelas Silver/Gold."
    },
    {
        question: "Qual é a principal função do Databricks SQL Dashboard?",
        options: [
            "Escrever código Python.",
            "Criar visualizações e painéis interativos para usuários de negócios baseados em queries SQL.",
            "Gerenciar clusters.",
            "Configurar Git."
        ],
        correctIndex: 1,
        explanation: "Databricks SQL é focado em analistas de BI, permitindo criar dashboards ricos e alertas SQL sem usar notebooks."
    },
    {
        question: "Ao ler muitos arquivos pequenos de uma vez, qual problema de performance pode ocorrer e como o Databricks resolve na ingestão?",
        options: [
            "Problema de listagem de arquivos. O Auto Loader resolve com o modo de notificação de arquivo ou listagem incremental.",
            "O cluster desliga. Resolve com Serverless.",
            "Os dados ficam corrompidos. Resolve com Delta Checksum.",
            "Nenhum problema ocorre."
        ],
        correctIndex: 0,
        explanation: "Listar milhões de arquivos no S3/ADLS é lento. O Auto Loader otimiza isso usando filas de notificação (SQS/Event Grid) ou listagem incremental inteligente."
    },
    {
        question: "O que a cláusula 'CONSTRAINT' faz em uma tabela Delta?",
        options: [
            "Define chaves estrangeiras (FK) que são forçadas fisicamente.",
            "Define regras de validação (como CHECK constraints) que impedem a inserção de dados inválidos.",
            "Apenas documenta a tabela.",
            "Cria um índice secundário."
        ],
        correctIndex: 1,
        explanation: "Delta Lake suporta `NOT NULL` e `CHECK` constraints. Se um dado violar a regra, a transação falha e o erro é retornado."
    },
    {
        question: "Qual a melhor prática para configurar o tamanho do cluster para um Job de produção estável?",
        options: [
            "Usar Autoscaling com limites muito distantes (min 1, max 100).",
            "Usar um tamanho fixo de cluster dimensionado para a carga de trabalho, para evitar overhead de scaling.",
            "Sempre usar o maior driver possível.",
            "Usar Single Node."
        ],
        correctIndex: 1,
        explanation: "Para Jobs previsíveis, um cluster de tamanho fixo costuma ser mais performático pois não perde tempo decidindo quando subir ou descer nós."
    },
    {
        question: "Como você referencia um parâmetro dinâmico (widget) dentro de uma célula SQL em um notebook?",
        options: [
            "$parametro",
            ":parametro",
            "{{parametro}}",
            "@parametro"
        ],
        correctIndex: 0,
        explanation: "Em notebooks Databricks antigos usava-se Widgets. A sintaxe SQL para pegar o valor é nomear o widget e usar `$nome_do_widget` (embora parâmetros de query Marker `?` ou `:name` sejam modernos)."
    },
    {
        question: "O que é um 'Job Task' do tipo 'Run Job'?",
        options: [
            "Uma tarefa que roda um script Python.",
            "Uma tarefa que aciona outro Job Databricks, permitindo modularizar workflows.",
            "Uma tarefa que corre uma maratona.",
            "Um erro de configuração."
        ],
        correctIndex: 1,
        explanation: "Isso permite criar pipelines complexos onde um 'Job Controlador' chama vários 'Jobs Filhos' reutilizáveis."
    },
    {
        question: "Qual a função da instrução `MERGE INTO`?",
        options: [
            "Unir dois DataFrames apenas para leitura.",
            "Atualizar, inserir ou deletar linhas em uma tabela Delta com base em uma condição de match com uma tabela fonte (Upsert).",
            "Criar uma tabela nova.",
            "Mesclar células do notebook."
        ],
        correctIndex: 1,
        explanation: "É o comando padrão para operações de UPSERT (Update + Insert) e deduplicação em Data Warehousing."
    },
    {
        question: "Qual privilégio no Unity Catalog é necessário para criar um Catálogo novo?",
        options: [
            "CREATE CATALOG no Metastore.",
            "CREATE SCHEMA.",
            "SELECT ANY FILE.",
            "USAGE."
        ],
        correctIndex: 0,
        explanation: "Apenas administradores de metastore ou usuários com privilégio `CREATE CATALOG` no metastore podem criar novos catálogos de topo."
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
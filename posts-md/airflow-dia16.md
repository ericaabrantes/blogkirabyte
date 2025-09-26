# 🎯 Dia 16 de 30 - Desafio de Dados – Versão Airflow
📡 Detectando Arquivos com FileSensor! 🗃️🕵️‍♀️

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-07
Desafio: Airflow
Dia: 16
Imagem: assets/images/desafios/airflow/airflow-dia16.jpeg

Hoje explorei o uso do **`FileSensor`**, um sensor poderoso que permite ao Airflow **aguardar a chegada de um arquivo** em um local específico do sistema de arquivos antes de executar o restante do pipeline. Ele é ótimo para automatizar processos de ingestão que dependem de fontes externas.

## 📦 O que aprendi:
- ✅ Como funciona o **`poke_interval`** (a frequência com que o sensor verifica a condição) e o **`timeout`** (o tempo máximo que ele vai esperar).
- ✅ A diferença crucial entre **`poke mode`** (que mantém o worker ocupado) e **`reschedule mode`** (que libera o worker e agenda a checagem para mais tarde, economizando recursos).
- ✅ Prática de checagem de arquivos em volumes montados no Docker, como a pasta `/opt/airflow/data`, simulando a chegada de dados.
- ✅ Boas práticas: manter sensores leves, com *timeout* adequado, e isolados em tarefas próprias para evitar o travamento de outros processos.

## ✨ Reflexão do Dia
Sensores são como porteiros do pipeline: nada passa até que a condição esteja certa. O `FileSensor` garante que o pipeline não comece a processar dados incompletos ou inexistentes. E aprender a usá-los corretamente, preferindo o `reschedule mode`, evita que a DAG fique travada ou consuma recursos do Airflow à toa!

Continuando a construir fluxos de trabalho resilientes!

💫💻📚🌸🎯

---

🦋 **Dia 07/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-dados-desafio-activity-7371676058955358209-azsT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
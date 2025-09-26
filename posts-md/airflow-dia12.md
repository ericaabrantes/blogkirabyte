# 🎯 Dia 12 de 30 - Desafio de Dados – Versão Airflow
🧪 Testando DAGs com `airflow tasks test` e `airflow dags test` 🛠️🔁

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-03
Desafio: Airflow
Dia: 12
Imagem: assets/images/desafios/airflow/airflow-dia12.jpeg

Hoje foi o dia de explorar os testes locais no **Apache Airflow**, usando os comandos de CLI que permitem simular a execução de tarefas e DAGs completas antes mesmo de agendar execuções no scheduler. Essa é uma etapa fundamental do ciclo de desenvolvimento!

## 🔍 O que aprendi e usei:
- ✅ O comando **`airflow tasks test`**: essencial para rodar uma tarefa isoladamente, verificando se a lógica interna e as dependências externas funcionam corretamente.
- ✅ O comando **`airflow dags test`**: ideal para simular todo o fluxo da DAG de ponta a ponta, sem a necessidade de o scheduler estar ativo.
- ✅ Controle de datas com a flag **`--execution-date`**: permite simular o contexto de execução exato que o scheduler usaria.
- ✅ A diferença entre testar com e sem as dependências *upstream* (tarefas anteriores) resolvidas.

## ✨ Reflexão do Dia
Testar localmente é um superpoder subestimado no desenvolvimento de pipelines. Evitar idas e vindas com o scheduler (que adiciona latência e complexidade) me dá agilidade e liberdade para experimentar sem medo. Para quem está aprendendo, essa prática é libertadora, pois permite falhar rápido e corrigir mais rápido ainda.

Continuando a construir pipelines com confiança!

💫💻📚🌸🎯

---

🦋 **Dia 03/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-estudos-dados-activity-7370215104627322880-nRow?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
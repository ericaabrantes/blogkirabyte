# 🎯 Dia 20 de 30 - Desafio de Dados – Versão Airflow
🧹 Limpando DAGs antigas: manutenção e boas práticas 🧼📁

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-11
Desafio: Airflow
Dia: 20
Imagem: assets/images/desafios/airflow/airflow-dia20.jpeg

Finalizei a semana revisando todas as DAGs que criei até agora. O foco de hoje foi **limpeza, organização e aplicação de boas práticas**, deixando o ambiente Airflow mais leve, eficiente e gerenciável. Manter a casa organizada é fundamental para evitar problemas no futuro!

## 🧼 O que fiz para a manutenção:
- ✅ **Remoção de DAGs antigas**: Excluí DAGs de teste e experimentais que não eram mais necessárias na pasta `dags/`.
- ✅ **Exclusão de Registros no Metadatabase**: Usei o comando `airflow dags delete [dag_id]` via CLI para remover permanentemente os registros de execução no banco de dados, garantindo que elas sumam da UI.
- ✅ **Organização de Estrutura**: Revisitei e padronizei a estrutura da pasta `dags/` e da pasta `utils/` (criada no Dia 14), garantindo a clareza dos *imports*.
- ✅ **Padronização e Documentação**: Padronizei nomes de tarefas e DAGs e adicionei **`docstrings`** claros para explicar o propósito de cada pipeline e tarefa.

## ✨ Reflexão do Dia
Cuidar do ambiente Airflow é cuidar do seu ecossistema de dados. A limpeza e a organização evitam *bugs* inesperados, melhoram a *performance* do Scheduler e do Webserver e, mais importante, mostram que você está pronta para operar em um ambiente de produção de verdade.

Foco total na qualidade do código!

💫💻📚🌸🎯

---

🦋 **Dia 11/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-dados-estudos-activity-7373509298275991552-m1Gy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
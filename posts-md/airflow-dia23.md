# 🎯 Dia 23 de 30 - Desafio de Dados – Versão Airflow
📅 Callbacks no Airflow: controle total da DAG

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-14
Desafio: Airflow
Dia: 23
Imagem: assets/images/desafios/airflow/airflow-dia23.jpeg

Hoje aprendi (e implementei!) os **callbacks** que agem no nível de toda a DAG, usando os parâmetros `on_success_callback`, `on_failure_callback` e `on_execute_callback`. Enquanto os callbacks de Task são ótimos, os de DAG fornecem uma visão macro e final de todo o pipeline.

## ⚙️ Com isso, consigo:
- ✅ **Enviar alertas customizados** por Google Chat ou e-mail, sabendo o status final da execução.
- ✅ **Gravar métricas específicas** que só podem ser computadas após a DAG inteira ser concluída.
- ✅ **Logar eventos** com o contexto completo da execução, garantindo rastreabilidade.
- ✅ **Evitar *spam* de alertas**: Criei uma função que dispara notificação no Chat apenas no final da DAG, e só se **não houver falha em nenhuma task** — garantindo que a notificação de sucesso seja significativa.

## ✨ Reflexão do Dia
Os callbacks te dão o superpoder de reagir de forma proativa e inteligente ao comportamento das DAGs. Não é só sobre executar tarefas em sequência, é sobre **dominar o fluxo** e garantir que o ecossistema reaja ao seu estado de maneira orquestrada e eficiente.

Reta final do desafio com controle total!

💫💻📚🌸🎯

---

🦋 **Dia 14/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-estudos-dados-activity-7374587726899089408-gBJw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
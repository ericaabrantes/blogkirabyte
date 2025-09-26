# 🎯 Dia 21 de 30 - Desafio de Dados – Versão Airflow
🚨 Alertas por E-mail e Webhook com Callbacks! 📬🔗

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-12
Desafio: Airflow
Dia: 21
Imagem: assets/images/desafios/airflow/airflow-dia21.jpeg

Hoje aprofundei o uso de **alertas automáticos** no Airflow. Configurei *callbacks* de falha para enviar e-mail e mensagens no Google Chat sempre que uma *task* falhar — um recurso essencial para garantir a rápida resposta em ambientes de produção.

## 📣 O que testei e configurei:
- ✅ Uso de **`on_failure_callback`** e **`on_success_callback`** na definição da DAG ou da Task para acionar funções personalizadas.
- ✅ **Envio de e-mail**: Configuração do `EmailOperator` (ou de uma função Python que usa SMTP) para notificar sobre o status da tarefa.
- ✅ **Mensagem no Google Chat/Slack**: Implementação de uma função Python personalizada que utiliza um **webhook** para enviar alertas ricos em detalhes para canais de comunicação.
- ✅ **Templates de Alerta**: Criei mensagens que capturam variáveis de contexto cruciais, como **`dag_id`**, **`task_id`** e **`log_url`**, permitindo acesso rápido ao erro.

## ✨ Reflexão do Dia
Alertar rápido significa reagir rápido. Automatizar essas notificações traz mais segurança, evita que erros passem despercebidos por longos períodos e minimiza o tempo de inatividade do pipeline. Isso transforma o Airflow em um verdadeiro guardião dos dados, que te avisa imediatamente quando precisa de atenção!

Construindo pipelines que falam comigo!

💫💻📚🌸🎯

---

🦋 **Dia 12/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-dados-estudos-activity-7373848928829554688-6209?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
# 🎯 Dia 17 de 30 - Desafio de Dados – Versão Airflow
🔄 Dependência entre DAGs com ExternalTaskSensor 🪢

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-08
Desafio: Airflow
Dia: 17
Imagem: assets/images/desafios/airflow/airflow-dia17.jpeg

Hoje conectei duas DAGs de forma que uma só começasse depois que a outra terminasse com sucesso. Para criar essa dependência entre fluxos de trabalho, utilizei o poderoso **`ExternalTaskSensor`**. Ele garante que o pipeline *downstream* (o que recebe os dados) só comece quando o *upstream* (o que gera os dados) estiver pronto.

## 🧩 Práticas testadas e aprofundadas:
- ✅ Definição de **`external_dag_id`** e **`external_task_id`**: Essenciais para apontar exatamente qual DAG e qual tarefa o sensor deve monitorar.
- ✅ Sincronização de execuções com **`mode='reschedule'`**: Usado para liberar o worker enquanto o sensor espera, economizando recursos (boa prática!).
- ✅ Entendimento do `ExternalTaskSensor` como alternativa segura ao uso de *triggers* forçados ou verificações manuais de status.
- ✅ Uso de **`execution_date_fn`** ou **`execution_delta`** (ou `execution_date_mod_by_timedelta` no Airflow 2+) para garantir que o sensor espere pela *execution_date* correta da DAG externa.

## ✨ Reflexão do Dia
Orquestrar DAGs entre si é subir de nível na organização dos pipelines. É como uma fila organizada de eventos — e o Airflow garante que tudo siga a ordem certa com segurança e resiliência. Ainda tenho muito o que aprender sobre o `ExternalTaskSensor`, mas sigo feliz com esse avanço em complexidade!

---

### 💡 Sugestão de Estudo para o `ExternalTaskSensor`:
Como você gostou do avanço, sugiro explorar a relação entre o `ExternalTaskSensor` e o **`TriggerDagRunOperator`**.

O `ExternalTaskSensor` apenas *espera* a conclusão de uma DAG externa, mas não a *inicia*. O **`TriggerDagRunOperator`** é o complemento perfeito: ele pode ser usado na DAG 1 para *disparar* a DAG 2 assim que a DAG 1 terminar. Isso te dá um controle completo sobre o fluxo: **a DAG 1 dispara, e o Sensor na DAG 2 confirma se foi concluída com sucesso.**

💫💻📚🌸🎯

---

🦋 **Dia 08/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-engenhariadedados-dados-activity-7372024433085079552-cFa1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
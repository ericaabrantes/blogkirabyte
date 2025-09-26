# 🎯 Dia 27 de 30 - Desafio de Dados – Versão Airflow
🎯 Revisão prática: Consolidando DAGs com Decorators (`@dag` e `@task`)

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-18
Desafio: Airflow
Dia: 27
Imagem: assets/images/desafios/airflow/airflow-dia27.jpeg

Hoje dediquei o tempo para revisar e consolidar o uso dos **Decorators** do Airflow 2+. Essa foi a oportunidade de refatorar DAGs antigas, aplicando o novo padrão — que é muito mais legível, enxuto e moderno.

## 📝 O que revisei e apliquei:
- ✅ **`@dag` e `@task`**: Entendi como eles transformam funções Python comuns em componentes de orquestração do Airflow, reduzindo o *boilerplate* code.
- ✅ **Parâmetros Padrão (`default_args`)**: Confirmei a importância de usar o `default_args` para passar configurações comuns (como `owner`, `retries` e `retry_delay`) para todas as tarefas.
- ✅ **Criação com `schedule`**: Pratiquei a definição do agendamento (usando Cron ou `timedelta` como strings) diretamente no decorador `@dag`.
- ✅ **Datas e `pendulum`**: Reforcei o uso de `pendulum` para definir o `start_date`, garantindo que o fuso horário seja tratado corretamente e evitando problemas de agendamento.
- ✅ **Modularização com `.build()`**: Apliquei o conceito do Dia 24 para criar DAGs reutilizáveis e com diferentes versões.

## ✨ Reflexão do Dia
Saber **refatorar** é tão importante quanto criar. Migrar para os Decorators deixa o código das DAGs mais limpo, mais Pythonico e padronizado, facilitando a manutenção futura por mim ou pela minha equipe. É um grande passo para a maturidade de projeto.

Quase lá! Foco total nos últimos dias!

💫💻📚🌸🎯

---

🦋 **Dia 18/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-estudos-dados-activity-7375993192762118144-CHfk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
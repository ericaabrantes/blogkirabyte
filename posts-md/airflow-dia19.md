# 🎯 Dia 19 de 30 - Desafio de Dados – Versão Airflow
⏰ Sensor de Tempo: TimeSensor e TimeDeltaSensor 🕒

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-10
Desafio: Airflow
Dia: 19
Imagem: assets/images/desafios/airflow/airflow-dia19.jpeg

Nem todo fluxo de trabalho de dados depende apenas da chegada de um arquivo ou da conclusão de uma tarefa — às vezes, é o **horário** que importa! Hoje explorei os sensores de tempo que aguardam o momento certo para o pipeline agir, garantindo que as execuções ocorram dentro das janelas de serviço ideais.

## 🕒 Estudei:
- ✅ **`TimeSensor`**: Utilizado para esperar que a execução da DAG atinja um **horário específico** do dia (definido por `target_time`). Ideal para processos que só podem rodar após a meia-noite, por exemplo.
- ✅ **`TimeDeltaSensor`**: Aguarda que se passe um **intervalo de tempo** específico (definido por `timedelta`) desde o início da execução da DAG.
- ✅ **Aplicações práticas**: Usar esses sensores para evitar sobrecarga em sistemas críticos durante o horário comercial ou respeitar janelas de manutenção de bancos de dados.
- ✅ **Cuidados essenciais**: A importância de configurar corretamente o **`timezone`** do Airflow e do `poke_interval` para evitar desperdício de recursos.

## ✨ Reflexão do Dia
Ter controle do tempo é essencial em pipelines sensíveis. Os Sensores de Tempo me mostraram que orquestrar não é apenas executar tarefas, mas também **saber esperar** quando for o momento certo. Uma DAG bem orquestrada garante que a carga de trabalho seja distribuída de forma inteligente ao longo do dia.

O tempo está ao meu lado no Airflow!

💫💻📚🌸🎯

---

🦋 **Dia 10/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-estudos-engenhariadedados-activity-7373083264116359168-pKXj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
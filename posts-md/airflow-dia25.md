# 🎯 Dia 25 de 30 - Desafio de Dados – Versão Airflow
📚 Trabalhando com Assets e Datasets no Airflow (v2.7+) 🔗

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-16
Desafio: Airflow
Dia: 25
Imagem: assets/images/desafios/airflow/airflow-dia25.jpeg

Hoje mergulhei nos **Assets (ou Datasets)** do Airflow 2.7+, uma forma revolucionária de organizar o código e definir dependências **reativas** entre DAGs. Em vez de depender do tempo, as DAGs *downstream* podem ser agendadas para rodar apenas quando os dados de que precisam (os Assets) estiverem prontos.

## 💡 O que são Assets?
Assets são essencialmente **objetos de dados** (tabelas, arquivos, modelos ML) que você materializa e monitora. Eles:
- ✅ Ajudam a estruturar o pipeline de forma **declarativa**, focando no *que* está sendo produzido.
- ✅ Permitem a **visualização automática** do linhegagem (Data Lineage) na interface do Airflow, mostrando quem lê e quem escreve em cada Asset.
- ✅ Facilitam a criação de dependências reativas, substituindo a complexidade de `ExternalTaskSensor` por uma declaração simples de **`inlets`** (o que a DAG lê) e **`outlets`** (o que a DAG escreve).

## 🧩 Usei Assets para representar:
- **`outlets`** em tarefas de **extração** (a tabela bruta está pronta).
- **`inlets`** e **`outlets`** em tarefas de **processamento** (lê a tabela bruta e gera a tabela tratada).
- **`inlets`** em tarefas de **carga** (lê a tabela tratada para carregar no destino final).

## ✨ Reflexão do Dia
Assets mudam o jogo: eles transformam o Airflow de um simples *job scheduler* baseado em tempo para um **orquestrador reativo de dados** baseado em eventos de dados. Isso deixa o pipeline mais intuitivo, rastreável e robusto.

Foco no dado, não no tempo!

💫💻📚🌸🎯

---

🦋 **Dia 16/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-estudos-dados-activity-7375285809194717185-OuV2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
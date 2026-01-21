# 📅 Dia 17 de 30 - Desafio de Dados: Versão Databricks
✨ Arquitetura Multi-Hop: Organizando o Lakehouse

Categoria: Desafios, Engenharia de Dados, Databricks, Arquitetura
Data: 2025-11-23
Desafio: Databricks
Dia: 17
Imagem: assets/images/desafios/databricks/dia17databricks.jpeg
Destaque: false

O estudo de hoje foi sobre o padrão de arquitetura **Multi-hop** (também conhecida como Medallion Architecture), que organiza o Lakehouse em camadas (ou "saltos"): **Bronze**, **Silver** e **Gold**.



A camada **Bronze** recebe os dados brutos, quase sem alteração. A camada **Silver** aplica transformações, filtros e enriquecimento. A camada **Gold** contém os dados agregados e prontos para o consumo (Analytics/BI/ML). Essa segregação garante qualidade progressiva.

## ✨ Reflexão do Dia
A arquitetura Multi-hop é o mapa para a sanidade dos dados. Ela torna os pipelines modulares, fáceis de manter e garante que as camadas de consumo recebam apenas dados de alta qualidade.

💫💻📚🌸🎯

---

🦋 **Dia 23/11/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
🌸 Blog: [kirabyte.com.br](https://kirabyte.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
🎥 Youtube: [@ericaignatios](https://youtube.com/@ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_multihop-dataarchitecture-datalakehouse-activity-7404916567777398784-XLIS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)

#multihop #dataarchitecture #datalakehouse #databricks
# 📅 Dia 7 de 30 - Desafio de Dados: Versão Databricks
✨ Otimizando a Leitura: Optimize e ZORDER

Categoria: Desafios, Engenharia de Dados, Databricks, Performance
Data: 2025-11-13
Desafio: Databricks
Dia: 7
Imagem: assets/images/desafios/databricks/dia07databricks.jpeg
Destaque: true

A performance de leitura no Delta Lake depende da organização física dos dados. Hoje, estudei os comandos de otimização: o comando **OPTIMIZE** e a técnica de **ZORDER**.

O `OPTIMIZE` consolida pequenos arquivos (muito comuns em streaming) em arquivos maiores para leituras mais rápidas. O `ZORDER` organiza o layout dos arquivos por colunas de alta cardinalidade, permitindo ao Spark pular arquivos que não contêm os dados necessários, o que acelera absurdamente as queries.

## ✨ Reflexão do Dia
Um engenheiro de dados não apenas escreve código, ele gerencia a performance no disco. Saber usar OPTIMIZE e ZORDER corretamente é essencial para manter os custos baixos e as consultas rápidas.

💫💻📚🌸🎯

---

🦋 **Dia 13/11/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
🌸 Blog: [kirabyte.com.br](https://kirabyte.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_zorder-optimize-deltalake-activity-7398087839588028416-hvYG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)

#zorder #optimize #deltalake #sparkperformance #engenhariadedados #databricks
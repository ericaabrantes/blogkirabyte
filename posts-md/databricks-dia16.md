# 📅 Dia 16 de 30 - Desafio de Dados: Versão Databricks
✨ Configurações do Auto Loader e o Rescue Data

Categoria: Desafios, Engenharia de Dados, Databricks, Auto Loader
Data: 2025-11-22
Desafio: Databricks
Dia: 16
Imagem: assets/images/desafios/databricks/dia16databricks.jpeg
Destaque: false

Aprofundei as opções de configuração do **Auto Loader**. O mais importante é o gerenciamento de esquema. Eu posso configurar o Auto Loader para inferir o esquema inicial e, em seguida, lidar com a evolução dele.

A opção `cloudFiles.rescuedDataColumn` é um salva-vidas! Ela permite que dados malformados (que não se encaixam no esquema) sejam armazenados em uma coluna separada, em vez de parar todo o pipeline. Os dados "resgatados" podem ser analisados e corrigidos posteriormente.

## ✨ Reflexão do Dia
Pipeline de dados à prova de falhas significa lidar com o inesperado. A coluna de dados resgatados garante que o processamento principal nunca pare por causa de alguns registros sujos.

💫💻📚🌸🎯

---

🦋 **Dia 22/11/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
🌸 Blog: [kirabyte.com.br](https://kirabyte.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
🎥 Youtube: [@ericaignatios](https://youtube.com/@ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_autoloader-rescueddata-schemaevolution-activity-7403842626380115968-DTfd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)

#autoloader #rescueddata #schemaevolution #qualidadededados #databricks
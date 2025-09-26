# 🎯 Dia 14 de 30 - Desafio de Dados – Versão Airflow
🗂️ Refatoração Modular: Separando as Funções em `utils/`! 🧱📦

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-05
Desafio: Airflow
Dia: 14
Imagem: assets/images/desafios/airflow/airflow-dia14.jpeg

Hoje peguei uma DAG que já tinha criado e reorganizei tudo para ficar mais **limpo, reutilizável e fácil de testar**. Foi dia de começar a modularizar de verdade, separando a lógica de negócio da definição do pipeline!

## 📦 O que fiz:
- ✅ **Criei a pasta `utils/`**: O local ideal para isolar as funções de apoio e scripts auxiliares.
- ✅ **Organizei as funções**: Movi o código Python puro, que executa o trabalho de ETL, para módulos específicos dentro de `utils/`.
- ✅ **Adaptei os *imports***: Mudei a forma como a DAG acessa o código, usando `from utils.meu_modulo import minha_funcao`.
- ✅ **Mantive o princípio de Responsabilidade Única (SRP)**: Garanti que cada função faça apenas uma coisa, tornando-as mais previsíveis e fáceis de debugar.

## ✨ Reflexão do Dia
Refatorar é um ato de carinho com o seu eu do futuro. Modularizar me ajuda a escalar projetos com menos dor de cabeça e muito mais controle. Quando o código da DAG fica limpo — contendo apenas a orquestração —, a leitura e a manutenção se tornam triviais. Cada função bem separada é um presente!

Em frente na jornada de boas práticas!

💫💻📚🌸🎯

---

🦋 **Dia 05/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-estudos-engenhariadedados-activity-7370955570209697792-Ch7m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
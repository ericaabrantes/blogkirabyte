# 🎯 Dia 28 de 30 - Desafio de Dados – Versão Airflow
🌸 Revisão prática: XComs e comunicação fluida entre tasks 🗣️

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-19
Desafio: Airflow
Dia: 28
Imagem: assets/images/desafios/airflow/airflow-dia28.jpeg

Hoje reforcei e consolidei os conceitos de **XCom (Cross-Communication)**, a ferramenta nativa do Airflow para permitir que tarefas troquem pequenas quantidades de dados entre si. A comunicação clara é a chave para uma DAG coesa.

## 📝 Conceitos de XCom reforçados:
- ✅ **`xcom_push` e `xcom_pull`**: O mecanismo manual para uma tarefa enviar dados (push) e outra tarefa recuperar esses dados (pull).
- ✅ **Passagem de Dicionários e JSON**: Prática de empacotar múltiplos valores ou configurações em um dicionário antes de enviá-lo via XCom.
- ✅ **Armazenamento Implícito (*TaskFlow*)**: Com os decoradores (`@task`), o Airflow 2+ faz a mágica: o valor de **retorno da função** é automaticamente enviado via XCom, e a tarefa *downstream* pode recebê-lo como um argumento comum.

## 📎 Prática com TaskFlow
Criei exemplos usando o padrão **TaskFlow** (`@task`), mostrando como passar resultados diretamente entre tarefas como argumentos de funções. Essa é a maneira mais limpa e *Pythonica* de usar XComs e evitar a complexidade do `xcom_pull` manual.

## ✨ Reflexão do Dia
Usar XCom corretamente evita "gambiarra" e acoplamento desnecessário. Uma DAG bem estruturada conversa entre si de forma **fluida e segura**, onde a saída de uma tarefa é claramente a entrada da próxima. Isso é a verdadeira orquestração.

Reta final com código limpo!

💫💻📚🌸🎯

---

🦋 **Dia 19/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-estudos-dados-activity-7376337788608274432-agp6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
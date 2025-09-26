# 🎯 Dia 15 de 30 - Desafio de Dados – Versão Airflow
🔄 Integração com Scripts Externos (PowerShell e Shell) 💻🛠️

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-06
Desafio: Airflow
Dia: 15
Imagem: assets/images/desafios/airflow/airflow-dia15.jpeg

Hoje fui além do Python e explorei como o Airflow pode orquestrar **scripts externos**, como `.ps1` (PowerShell) e `.sh` (Shell Script). Usei o poderoso **`BashOperator`** para ambientes Linux/Unix e dei uma olhada no **`WinRMOperator`** para orquestrar scripts em máquinas Windows.

## 🧪 O que testei e aprendi:
- ✅ **Execução de scripts via `bash_command`**: Aprendi a chamar scripts `.sh` armazenados no ambiente da DAG, passando argumentos de forma dinâmica.
- ✅ **Configuração de Conexões Remotas**: Entendi o princípio de uso de *Operators* como o `WinRMOperator` para se conectar a servidores externos e executar comandos.
- ✅ **Teste local com Docker e CMD**: Usei o ambiente Docker para simular a execução desses comandos em um contexto controlado.
- ✅ **Validação de arquivos**: Aplicação prática para checar a existência ou o status de arquivos em servidores externos antes de prosseguir com o pipeline.

## ✨ Reflexão do Dia
O Airflow é um **maestro**, não um instrumentista. Hoje percebi que ele pode acionar o que eu quiser — seja código Python puro, scripts de shell, chamadas de API ou até mesmo outras DAGs. Essa capacidade de abstração e orquestração em nível macro é o que o torna a ferramenta padrão da indústria. Basta saber orquestrar com responsabilidade e segurança!

Cruzando a metade do desafio com maestria!

💫💻📚🌸🎯

---

🦋 **Dia 06/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](
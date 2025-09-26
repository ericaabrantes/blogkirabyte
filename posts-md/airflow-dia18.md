# 🎯 Dia 18 de 30 - Desafio de Dados – Versão Airflow
🔐 Conexões com Bancos, APIs e Servidores via Airflow Connections 🔗

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-09
Desafio: Airflow
Dia: 18
Imagem: assets/images/desafios/airflow/airflow-dia18.jpeg

O dia foi de explorar o recurso de **Connections**, que centraliza credenciais e parâmetros de conexão para integrar o Airflow com outras ferramentas, como bancos de dados, APIs e servidores. Isso é vital para evitar *hardcoding* de senhas no código da DAG.

## 🔐 Trabalhei com:
- ✅ **Criação e Gerenciamento**: Aprendi a criar conexões pela **Interface do Usuário (UI)**, via **CLI** e, de forma mais segura, usando **Variáveis de Ambiente** no ambiente de Docker/Vercel.
- ✅ O identificador **`conn_id`**: Entendi como ele funciona como uma chave que o *Operator* usa para buscar as credenciais e parâmetros necessários.
- ✅ **Tipos de Conexão**: Explorei a vasta gama de tipos de conexão suportados, como **Postgres** (para bancos), **HTTP** (para APIs REST), **SSH** e **WinRM** (para servidores) e **S3** (para armazenamento em nuvem).
- ✅ **Segurança**: Reforcei a importância de usar *secrets backend* (como HashiCorp Vault ou AWS Secrets Manager, por exemplo) em ambientes de produção para proteger as credenciais.

## ✨ Reflexão do Dia
Manter conexões organizadas, isoladas do código e seguras é sinal de maturidade no projeto. O Airflow facilita isso ao fornecer uma camada de abstração de conexão. Hoje ficou mais claro como usar esse recurso como base para **escalar** e **integrar** sistemas externos de forma eficiente e controlada.

Garantindo a segurança dos meus pipelines!

💫💻📚🌸🎯

---

🦋 **Dia 09/09/2025**
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_airflow-estudos-engenhariadedados-activity-7372699587309924352-3uZB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD164bEBQp0olLnMAzq-FV4u5gT8pBJSSoc)
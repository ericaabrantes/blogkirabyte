# 🎯 Dia 03 de 30 - Desafio de Dados – Versão Airflow
⚙️ Por dentro da arquitetura e componentes do Airflow 🧩🚦

Categoria: Aprendizado  
Data: 2025-08-25  
Desafio: Airflow  
Dia: 3  
Imagem: assets/images/desafios/airflow/airflow-dia3.jpg  

O dia de hoje foi de estruturar melhor o funcionamento interno do **Airflow** — entender seus componentes principais e como ele trabalha por baixo dos panos. 🔍

## 📌 Componentes Principais (Core Components)
- ✅ **Scheduler**: Define quando as tasks devem ser executadas  
- ✅ **Executor**: Responsável por como rodar as tasks (Celery, Local, etc)  
- ✅ **Webserver**: Interface visual para acompanhar DAGs  
- ✅ **Worker**: Executa as tasks (dependendo da arquitetura)  
- ✅ **Metadata DB**: Onde o estado das execuções é armazenado  

## 📌 Arquiteturas Disponíveis
- ✅ **Sequential Executor** (teste local)  
- ✅ **Local Executor**  
- ✅ **Celery Executor** (distribuído, o que estou usando com Docker)  
- ✅ **Kubernetes Executor** (para ambientes em nuvem)  

## 📌 Como o Airflow Funciona
- ✅ Lê arquivos `.py` da pasta **DAGs**  
- ✅ Interpreta as DAGs e agenda execuções  
- ✅ Executa as tarefas conforme dependências e *schedule* definidos  

## ✨ Reflexão do Dia
Foi como montar um **quebra-cabeça**: cada componente tem um papel claro, e a arquitetura escolhida muda completamente o poder do Airflow.  
Entender essas engrenagens internas vai me ajudar muito quando for depurar problemas reais em produção.  

💫💻📚🌸🎯  

---

🦋 **Dia 25/08/2025**  
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)  
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)  
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)  

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_30diasdedados-apacheairflow-dataorchestration-activity-7366962719889014786-3Y_o)

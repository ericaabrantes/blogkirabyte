# 🎯 Dia 05 de 30 - Desafio de Dados – Versão Airflow
🌿 Caminhos diferentes para cenários diferentes com BranchPythonOperator! 🌱🔀

Categoria: Aprendizado  
Data: 2025-08-27  
Desafio: Airflow  
Dia: 5  
Imagem: assets/images/desafios/airflow/airflow-dia5.jpg  

Hoje mergulhei em uma das estruturas mais poderosas (e charmosas) do **Airflow**: o **BranchPythonOperator**.  
Aquele momento em que a DAG precisa tomar uma decisão com base em uma lógica — e seguir por caminhos diferentes a partir disso.  

Pude simular cenários com múltiplas rotas possíveis dentro da DAG, controlando a execução de tarefas com base em condições dinâmicas.  
Tudo isso com **Python puro** e um toque de criatividade 🧠✨  

---

## 🔧 O que explorei na prática
- ✅ Criação de função de decisão `def escolher_caminho()`  
- ✅ Uso do **BranchPythonOperator** para controlar o fluxo  
- ✅ Criação de tasks alternativas (e exclusivas)  
- ✅ Comportamento de *skip* nas tarefas não escolhidas  
- ✅ Importância de ter um ponto de convergência no final da DAG  

---

## ✨ Reflexão do Dia
Uma das belezas do Airflow é que ele permite estruturar **pipelines tão dinâmicos quanto os nossos próprios processos de negócio**.  
Ter esse controle sobre o caminho a seguir, com base em uma lógica que eu defino, é o que transforma uma DAG em algo verdadeiramente inteligente e adaptável.  

Mais do que automatizar, o que estamos construindo aqui é **governança e flexibilidade**.  

💫💻📚🌸🎯  

---

🦋 **Dia 27/08/2025**  
📌 Portfólio: [ericaignatios.com.br](https://ericaignatios.com.br)  
📸 Instagram: [@ericaignatios](https://instagram.com/ericaignatios)  
💻 GitHub: [github.com/ericaabrantes](https://github.com/ericaabrantes)  

🔗 [Ver post no LinkedIn](https://www.linkedin.com/posts/ericaabrantesignatios_30diasdedados-apacheairflow-engenhariadedados-activity-7367708490980614144-QygJ)

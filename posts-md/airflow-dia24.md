# 🎯 Dia 24 de 30 - Desafio de Dados – Versão Airflow
📚 Criando versões da DAG com `.build()` (Abordagem Modular)

Categoria: Desafios, Engenharia de Dados, Airflow, Aprendizado
Data: 2025-09-15
Desafio: Airflow
Dia: 24
Imagem: assets/images/desafios/airflow/airflow-dia24.jpeg

Hoje aprendi sobre o uso essencial do método **`.build()`** na criação de DAGs utilizando os novos **Decorators do Airflow 2+** (`@dag`, `@task`). Este método permite que você defina a lógica do seu pipeline em uma função e a transforme em um objeto DAG que pode ser instanciado e reutilizado.

## 🛠️ Entendendo o `.build()`
O decorador `@dag` transforma uma função em uma fábrica de DAGs. Ao chamar `minha_dag_modular()`, ele retorna um objeto que **ainda não é a DAG final**. O `.build()` é o passo que finaliza o processo e registra a DAG no Airflow, permitindo que ela seja descoberta pelo Scheduler.

### Exemplo Prático:

```python
from airflow.decorators import dag, task

@dag(schedule=None, start_date=...)
def minha_dag_modular(parametro_de_versao='v1'):
    # Lógica do pipeline que pode mudar com o parâmetro
    ...

# Versão 1 da DAG
minha_dag_gerada_v1 = minha_dag_modular(parametro_de_versao='v1').build(dag_id='pipeline_versao_1')

# Versão 2 da DAG (com outro parâmetro/comportamento)
minha_dag_gerada_v2 = minha_dag_modular(parametro_de_versao='v2').build(dag_id='pipeline_versao_2')
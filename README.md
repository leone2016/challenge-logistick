# challenge-logistick


Contexto del Proyecto

Una empresa internacional dedicada al transporte y gestión de carga aérea, marítima y terrestre. Como parte de sus herramientas internas, la empresa necesita un dashboard que permita visualizar, analizar y entender el comportamiento de sus operaciones logísticas: envíos, clientes, rutas y costos.

El objetivo del challenge es construir una interfaz que permita ver los datos, filtrarlos, agruparlos y generar estadísticas clave para la toma de decisiones.


Requerimientos Funcionales del Frontend
Tu tarea es construir un dashboard en React + TypeScript que consuma un único endpoint:

GET /freight


## 1. Tabla Principal de Envíos

Construir una tabla interactiva que muestre la lista de registros con las siguientes columnas:

* Customer
* Origen → Destino
* Peso / Volumen
* Medio de transporte
* Estado
* Costo

### La tabla debe permitir:

* Buscar por nombre de cliente
* Filtrar por tipo de transporte
* Filtrar por estado
* Ordenar por peso, costo y fecha


## 2. Panel de Estadísticas

Crear una sección donde se muestren métricas relevantes basadas en los datos recibidos.
Las estadísticas mínimas solicitadas son:

* Total de envíos
* Peso total y volumen total
* Costo promedio por tipo de transporte
* Top 5 clientes con mayor volumen total transportado
* Cantidad de envíos por estado
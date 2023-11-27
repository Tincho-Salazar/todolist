## Trabajo Integrador Final - Desarrollo en React JS

## Descripción del Proyecto

Esta aplicación web desarrollada en React permite gestionar una lista de tareas de manera interactiva. La aplicación hace uso de componentes funcionales, el hook `useState` para el manejo del estado, el hook `useEffect` para efectos secundarios, y eventos para interactuar con el usuario.

### Componentes Funcionales

#### Componente de Lista de Tareas (TaskList):

Este componente muestra la lista de tareas. Recibe la lista de tareas y funciones para gestionar eventos relacionados con las tareas, como marcar como completada o eliminar. Cada tarea se representa mediante un componente TaskItem.

#### Componente de Tarea (TaskItem):

Este componente representa individualmente una tarea. Muestra el nombre de la tarea y un botón para completarla. Utiliza el estado local para gestionar la apariencia de la tarea, como tacharla cuando está completada.

#### Componente de Formulario (TaskForm):

Contiene un formulario para agregar nuevas tareas. Utiliza el estado local para gestionar la entrada del usuario y envía la nueva tarea a la lista principal.

### Estado con `useState`

#### Estado Principal (tasks):

Se utiliza el hook `useState` en el componente principal para gestionar el estado de la lista de tareas. Cada tarea es un objeto con propiedades como id, nombre y completada.

### Efectos con `useEffect`

#### Efecto de Actualización (useEffect en el componente principal):

Utiliza `useEffect` para realizar una acción (por ejemplo, mostrar un mensaje) cuando el estado de la lista de tareas cambie.

### Interacción con el Usuario - Eventos

#### Eventos en Componente de Lista (TaskList):

Implementa eventos que permiten al usuario interactuar con cada tarea, como marcar como completada o eliminar. Estos eventos modifican el estado principal (`tasks`).

#### Eventos en Componente de Formulario (TaskForm):

Implementa eventos para gestionar la entrada del usuario y agregar nuevas tareas a la lista.

### Estilo y Diseño

Aplica estilos CSS para mejorar la apariencia de los componentes. Puede utilizar bibliotecas como styled-components si lo desea.

### Puntos Extra (Opcionales)

Implementa la persistencia de datos utilizando `localStorage` para que las tareas persistan incluso después de recargar la página.

## Repositorio

Encuentra el código fuente en el siguiente repositorio: [todolist](https://github.com/Tincho-Salazar/todolist.git)

![Tema Dark](/public/Dark%20Theme.png)
![Tema light](/public/Light%20Theme.png)

---

**Desarrollador: Luis Orlando Salazar**
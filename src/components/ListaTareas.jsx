// src/components/ListaTareas.jsx
function ListaTareas() {
  // Array de tareas (al menos 7 objetos)
  const tareas = [
    { id: 1, titulo: "Revisar documentación de React", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Configurar Vite", completada: true, prioridad: "media" },
    { id: 3, titulo: "Crear componente Perfil", completada: false, prioridad: "media" },
    { id: 4, titulo: "Escribir tests unitarios", completada: false, prioridad: "alta" },
    { id: 5, titulo: "Subir cambios a GitHub", completada: true, prioridad: "baja" },
    { id: 6, titulo: "Revisar pull requests", completada: false, prioridad: "media" },
    { id: 7, titulo: "Actualizar README", completada: true, prioridad: "baja" },
  ];

  // Filtrar tareas pendientes (completada === false)
  const tareasPendientes = tareas.filter(tarea => !tarea.completada);
  // Filtrar tareas completadas (completada === true)
  const tareasCompletadas = tareas.filter(tarea => tarea.completada);

  // Estilos para el badge de prioridad
  const estiloPrioridad = (prioridad) => {
    if (prioridad === "alta") {
      return { color: "red", fontWeight: "bold", marginLeft: "8px" };
    } else if (prioridad === "media") {
      return { color: "orange", marginLeft: "8px" };
    } else {
      return { color: "green", marginLeft: "8px" };
    }
  };

  return (
    <div>
      {/* Lista de tareas pendientes */}
      <div>
        <h3>Tareas pendientes ({tareasPendientes.length})</h3>
        {tareasPendientes.length === 0 ? (
          <p>No hay tareas pendientes</p>
        ) : (
          <ul>
            {tareasPendientes.map(tarea => (
              <li key={tarea.id}>
                {tarea.titulo}
                <span style={estiloPrioridad(tarea.prioridad)}>
                  ({tarea.prioridad})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Lista de tareas completadas */}
      <div>
        <h3>Tareas completadas ({tareasCompletadas.length})</h3>
        {tareasCompletadas.length === 0 ? (
          <p>No hay tareas completadas</p>
        ) : (
          <ul>
            {tareasCompletadas.map(tarea => (
              <li key={tarea.id} style={{ textDecoration: "line-through" }}>
                {tarea.titulo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListaTareas;
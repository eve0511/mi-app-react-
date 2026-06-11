
function Dashboard() {
  
  const usuario = {
    nombre: "Evelyn de la Rosa",
    email: "evelyn@example.com",
    rol: "Administrador",
  };

  // Array de notificaciones (al menos 4 objetos)
  const notificaciones = [
    { id: 1, mensaje: "Bienvenido a la plataforma", leida: true },
    { id: 2, mensaje: "Tienes una nueva tarea asignada", leida: false },
    { id: 3, mensaje: "Reunión a las 3:00 PM", leida: false },
    { id: 4, mensaje: "Tu reporte está listo", leida: true },
  ];

  // Array de actividad reciente (al menos 3 objetos)
  const actividadReciente = [
    { id: 1, accion: "Inició sesión", fecha: "2024-05-25" },
    { id: 2, accion: "Actualizó su perfil", fecha: "2024-05-24" },
    { id: 3, accion: "Comentó en un proyecto", fecha: "2024-05-23" },
  ];

  // Contar notificaciones no leídas
  const noLeidas = notificaciones.filter(noti => !noti.leida).length;

  return (
    <>
      {/* Sección 1: Información del usuario */}
      <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
        <h2>Información del usuario</h2>
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Rol:</strong> {usuario.rol}</p>
      </div>

      {/* Sección 2: Notificaciones */}
      <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
        <h2>Notificaciones (no leídas: {noLeidas})</h2>
        {notificaciones.length === 0 ? (
          <p>No tienes notificaciones pendientes</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {notificaciones.map((noti) => (
              <li key={noti.id} style={{ marginBottom: "0.5rem", opacity: noti.leida ? 0.6 : 1, fontWeight: noti.leida ? "normal" : "bold" }}>
                {noti.mensaje}
              </li>
            ))}
          </ul>
        )}
        {noLeidas === 0 && notificaciones.length > 0 && <p>No tienes notificaciones pendientes</p>}
      </div>

      {/* Sección 3: Actividad reciente */}
      <div>
        <h2>Actividad reciente</h2>
        {actividadReciente.length === 0 ? (
          <p>No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map((act) => (
              <li key={act.id} style={{ marginBottom: "0.5rem" }}>
                <strong>{act.accion}</strong> - {act.fecha}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Dashboard;
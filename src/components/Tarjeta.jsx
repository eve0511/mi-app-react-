
function Tarjeta() {

  const datos = {
    titulo: "React Avanzado",
    descripcion: "Aprende hooks, context y mejores prácticas para aplicaciones escalables.",
    etiquetas: ["React", "Hooks", "Context", "Vite"],
    destacado: true,  // Cambia a false para probar el estilo sin destacado
  };

  // Estilos para la tarjeta 
  const estilosTarjeta = {
    border: datos.destacado ? "2px solid #ffc107" : "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    backgroundColor: datos.destacado ? "#fffef7" : "#fff",
  };

  // Estilos 
  const estilosBadge = {
    display: "inline-block",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "16px",
    padding: "4px 12px",
    fontSize: "0.8rem",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  };

  return (
    <div style={estilosTarjeta}>
      <h3>{datos.titulo}</h3>
      <p>{datos.descripcion}</p>
      <div>
        {datos.etiquetas.map((etiqueta, index) => (
          <span key={index} style={estilosBadge}>
            {etiqueta}
          </span>
        ))}
      </div>
      {datos.destacado && <p style={{ marginTop: "0.5rem", fontStyle: "italic" }}>⭐ Destacado</p>}
    </div>
  );
}

export default Tarjeta;
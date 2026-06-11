
function Perfil() {
  // Variables internas
  const nombre = "Evelyn de la Rosa";
  const profesion = "Ingenieria Informatica";
  const experiencia = 5;
  const disponible = true;  

  // Determinar texto según disponibilidad
  const estadoDisponibilidad = disponible ? "Disponible para contratar" : "No disponible";

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h2>{nombre}</h2>
      <p>Profesión: {profesion}</p>
      <p>{experiencia} años de experiencia</p>
      <p>{estadoDisponibilidad}</p>
    </div>
  );
}

export default Perfil;
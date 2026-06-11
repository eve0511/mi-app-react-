
function ListaHabilidades() {
  // Array de habilidades técnicas
  const habilidades = ["React", "JavaScript", "CSS", "Node.js", "Git", "TypeScript"];

  return (
    <div>
      <h2>Habilidades técnicas</h2>
      <p>Total de habilidades: {habilidades.length}</p>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaHabilidades;
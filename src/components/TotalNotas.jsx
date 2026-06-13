
import { useNotas } from '../context/NotasContext';

function TotalNotas() {
  const { notas } = useNotas();
  return (
    <div>
      <h2>Prueba del contexto</h2>
      <p>Total de notas: {notas.length}</p>
      <ul>
        {notas.map(nota => (
          <li key={nota.id}>{nota.titulo} - {nota.categoria}</li>
        ))}
      </ul>
    </div>
  );
}

export default TotalNotas;
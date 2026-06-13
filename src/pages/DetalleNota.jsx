import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function DetalleNota() {
  const { id } = useParams();
  const { notas, eliminarNota } = useNotas();
  const navigate = useNavigate();

  const nota = notas.find(n => n.id === id);
  if (!nota) {
    return (
      <div>
        <h2>Nota no encontrada</h2>
        <Link to="/notas">Volver a notas</Link>
      </div>
    );
  }

  const formatearFecha = (fechaISO) => new Date(fechaISO).toLocaleDateString();
  const handleEliminar = () => {
    if (window.confirm('¿Eliminar esta nota?')) {
      eliminarNota(nota.id);
      navigate('/notas');
    }
  };

  const coloresCategoria = {
    personal: '#17a2b8',
    trabajo: '#007bff',
    estudio: '#28a745',
    ideas: '#ffc107'
  };

  return (
    <div>
      <h2>{nota.titulo}</h2>
      <div style={{ marginBottom: '20px' }}>
        <span style={{
          backgroundColor: coloresCategoria[nota.categoria] || '#6c757d',
          color: nota.categoria === 'ideas' ? '#333' : 'white',
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '0.8rem',
          marginRight: '10px'
        }}>
          {nota.categoria}
        </span>
        <span style={{ fontSize: '0.8rem', color: '#666' }}>
          {formatearFecha(nota.fechaCreacion)}
        </span>
        {nota.fijada && <span style={{ marginLeft: '10px' }}>📌 Fijada</span>}
      </div>
      <p style={{ whiteSpace: 'pre-wrap' }}>{nota.contenido}</p>
      <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
        <Link to="/notas">
          <button style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', backgroundColor: '#6c757d', color: 'white', cursor: 'pointer' }}>Volver</button>
        </Link>
        <Link to={`/notas/${nota.id}/editar`}>
          <button style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Editar</button>
        </Link>
        <button onClick={handleEliminar} style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}>Eliminar</button>
      </div>
    </div>
  );
}

export default DetalleNota;
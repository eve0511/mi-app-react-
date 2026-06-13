import { Link } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function Notas() {
  const {
    notas,
    busqueda,
    filtroCategoria,
    cambiarBusqueda,
    cambiarFiltro,
    toggleFijada
  } = useNotas();

  const notasFiltradas = notas.filter(nota => {
    const coincideBusqueda =
      nota.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      nota.contenido.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria =
      filtroCategoria === 'todas' || nota.categoria === filtroCategoria;
    return coincideBusqueda && coincideCategoria;
  });

  const notasOrdenadas = [...notasFiltradas].sort((a, b) => {
    if (a.fijada === b.fijada) return 0;
    return a.fijada ? -1 : 1;
  });

  const truncarContenido = (texto, max = 100) =>
    texto.length > max ? texto.substring(0, max) + '...' : texto;
  const formatearFecha = (fechaISO) => new Date(fechaISO).toLocaleDateString();

  const coloresCategoria = {
    personal: '#17a2b8',
    trabajo: '#007bff',
    estudio: '#28a745',
    ideas: '#ffc107'
  };

  const handleToggleFijada = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFijada(id);
  };

  return (
    <div>
      <h2>Mis Notas</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Buscar por título o contenido..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="todas">Todas</option>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <p>Mostrando {notasOrdenadas.length} de {notas.length} notas</p>

      {notasOrdenadas.length === 0 ? (
        <p>No hay notas que coincidan con los filtros.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {notasOrdenadas.map(nota => (
            <Link to={`/notas/${nota.id}`} key={nota.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                border: nota.fijada ? '2px solid gold' : '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: nota.fijada ? '#fffef0' : '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: '0 0 10px 0' }}>{nota.titulo}</h3>
                  <button
                    onClick={(e) => handleToggleFijada(e, nota.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
                  >
                    {nota.fijada ? '📌' : '📍'}
                  </button>
                </div>
                <p>{truncarContenido(nota.contenido)}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <span style={{
                    backgroundColor: coloresCategoria[nota.categoria] || '#6c757d',
                    color: nota.categoria === 'ideas' ? '#333' : 'white',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    {nota.categoria}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#666' }}>
                    {formatearFecha(nota.fechaCreacion)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notas;


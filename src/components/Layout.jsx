import { NavLink, Outlet } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function Layout() {
  const { notas, notificacion, cerrarNotificacion } = useNotas();

  return (
    <div>
      {/* Toast de notificación */}
      {notificacion && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: notificacion.tipo === 'exito' ? '#28a745' :
                          notificacion.tipo === 'info' ? '#17a2b8' : '#dc3545',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span>{notificacion.mensaje}</span>
          <button onClick={cerrarNotificacion} style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1.2rem'
          }}>×</button>
        </div>
      )}

      {/* Header con navegación estilizada */}
      <header style={{
        backgroundColor: '#f8f9fa',
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0, color: '#333' }}>MisNotas</h1>
        <nav style={{ marginTop: '10px' }}>
          <NavLink to="/" style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            marginRight: '15px',
            textDecoration: 'none',
            color: isActive ? '#007bff' : '#333',
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: isActive ? '#e9ecef' : 'transparent'
          })}>Inicio</NavLink>
          <NavLink to="/notas" style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            marginRight: '15px',
            textDecoration: 'none',
            color: isActive ? '#007bff' : '#333',
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: isActive ? '#e9ecef' : 'transparent'
          })}>Notas</NavLink>
          <NavLink to="/notas/nueva" style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
            color: isActive ? '#007bff' : '#333',
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: isActive ? '#e9ecef' : 'transparent'
          })}>Nueva nota</NavLink>
        </nav>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
          Total de notas: {notas.length}
        </p>
      </header>

      <main style={{ padding: '0 20px 20px' }}>
        <Outlet />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '15px',
        borderTop: '1px solid #ddd',
        marginTop: '40px',
        color: '#666'
      }}>
        <p>© 2026 MisNotas</p>
      </footer>
    </div>
  );
}

export default Layout;
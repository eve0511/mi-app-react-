// src/components/Notificador.jsx
import useNotification from '../hooks/useNotification';

function Notificador() {
  const { notificacion, mostrar, cerrar } = useNotification(4000);

  return (
    <div>
      <h3>Notificaciones</h3>
      <button onClick={() => mostrar('Este es un mensaje de éxito', 'exito')}>Éxito</button>
      <button onClick={() => mostrar('Cuidado con esto', 'advertencia')}>Advertencia</button>
      <button onClick={() => mostrar('Ocurrió un error', 'error')}>Error</button>
      <button onClick={cerrar}>Cerrar manual</button>
      {notificacion && (
        <div style={{
          marginTop: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          backgroundColor: notificacion.tipo === 'exito' ? '#d4edda' : notificacion.tipo === 'advertencia' ? '#fff3cd' : '#f8d7da',
          color: notificacion.tipo === 'exito' ? '#155724' : notificacion.tipo === 'advertencia' ? '#856404' : '#721c24'
        }}>
          {notificacion.mensaje}
        </div>
      )}
    </div>
  );
}

export default Notificador;
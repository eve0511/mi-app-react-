
import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Modal from './Modal';
import Alerta from './Alerta';

function ListaContactos() {
  // Estado con array de contactos (al menos 5)
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Evelyn Velazquez', telefono: '55-10-07-37', favorito: true },
    { id: 2, nombre: 'Luis Pérez', telefono: '58-65-32-14', favorito: false },
    { id: 3, nombre: 'Marta López', telefono: '55-51-23-45', favorito: true },
    { id: 4, nombre: 'Carlos Ruiz', telefono: '54-45-55-66', favorito: false },
    { id: 5, nombre: 'Elena Martínez', telefono:'57-77-88-99', favorito: false }
  ]);

  // Estado para el filtro de búsqueda
  const [busqueda, setBusqueda] = useState('');
  // Estado para mostrar solo favoritos o todos
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  // Estado para controlar el modal de confirmación de eliminación
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  // Filtrar por búsqueda (nombre o teléfono, sin distinción mayúsculas)
  const contactosFiltrados = contactos.filter(contacto =>
    contacto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    contacto.telefono.includes(busqueda)
  );

  // Aplicar filtro de favoritos si está activado
  const contactosAMostrar = soloFavoritos
    ? contactosFiltrados.filter(c => c.favorito)
    : contactosFiltrados;

  // Contar favoritos totales (sobre la lista original sin búsqueda)
  const totalFavoritos = contactos.filter(c => c.favorito).length;

  // Alternar favorito de un contacto
  const toggleFavorito = (id) => {
    setContactos(prevContactos =>
      prevContactos.map(contacto =>
        contacto.id === id
          ? { ...contacto, favorito: !contacto.favorito }
          : contacto
      )
    );
  };

  // Confirmar eliminación (abre modal)
  const confirmarEliminar = (contacto) => {
    setContactoAEliminar(contacto);
  };

  // Eliminar contacto después de confirmación
  const eliminarContacto = () => {
    if (contactoAEliminar) {
      setContactos(prevContactos =>
        prevContactos.filter(c => c.id !== contactoAEliminar.id)
      );
      setContactoAEliminar(null);
    }
  };

  // Cancelar eliminación
  const cancelarEliminacion = () => {
    setContactoAEliminar(null);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Lista de Contactos</h2>
      
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre o teléfono..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
      />

      {/* Botón para alternar solo favoritos */}
      <div style={{ marginBottom: '10px' }}>
        <BotonAccion
          texto={soloFavoritos ? "Mostrar todos" : "Mostrar solo favoritos"}
          variante="secundario"
          onClick={() => setSoloFavoritos(!soloFavoritos)}
        />
      </div>

      {/* Contador de favoritos y resultados */}
      <p>
        ⭐ Favoritos: {totalFavoritos} / {contactos.length} &nbsp;|&nbsp;
        📋 Mostrando: {contactosAMostrar.length} contactos {soloFavoritos && "(solo favoritos)"}
        {busqueda && ` (coinciden con "${busqueda}")`}
      </p>

      {/* Mostrar alerta si no hay resultados */}
      {contactosAMostrar.length === 0 && (
        <Alerta tipo="info" titulo="Sin resultados">
          No se encontraron contactos.
        </Alerta>
      )}

      {/* Lista de contactos */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {contactosAMostrar.map(contacto => (
          <li key={contacto.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{contacto.nombre}</strong><br />
                📞 {contacto.telefono}
              </div>
              <div>
                {/* Ícono de favorito (★ / ☆) */}
                <span
                  onClick={() => toggleFavorito(contacto.id)}
                  style={{ cursor: 'pointer', fontSize: '1.5rem', marginRight: '10px' }}
                >
                  {contacto.favorito ? '★' : '☆'}
                </span>
                {/* Botón eliminar */}
                <BotonAccion
                  texto="Eliminar"
                  variante="peligro"
                  onClick={() => confirmarEliminar(contacto)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal de confirmación para eliminar */}
      <Modal
        titulo="Confirmar eliminación"
        abierto={contactoAEliminar !== null}
      >
        {contactoAEliminar && (
          <>
            <p>¿Estás seguro de eliminar a <strong>{contactoAEliminar.nombre}</strong>?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <BotonAccion texto="Cancelar" variante="secundario" onClick={cancelarEliminacion} />
              <BotonAccion texto="Eliminar" variante="peligro" onClick={eliminarContacto} />
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

export default ListaContactos;

import { useState } from 'react';
import Alerta from './Alerta';
import BotonAccion from './BotonAccion';

function FormularioEvento() {
  // Estado del formulario
  const [formulario, setFormulario] = useState({
    titulo: '',
    fecha: '',
    categoria: '',
    descripcion: '',
    esPublico: false
  });

  // Estado para errores de validación
  const [errores, setErrores] = useState({});
  // Estado para controlar la visibilidad del mensaje de éxito
  const [mostrarExito, setMostrarExito] = useState(false);
  // Estado para almacenar la lista de eventos registrados
  const [eventosRegistrados, setEventosRegistrados] = useState([]);
  // Estado para guardar el último evento registrado (para mostrar en el resumen)
  const [ultimoEvento, setUltimoEvento] = useState(null);

  // Función única handleChange
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulario(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errores[name]) {
      setErrores(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Función de validación
  const validarFormulario = () => {
    const nuevosErrores = {};
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Normalizar para comparar solo fechas

    if (formulario.titulo.trim().length < 5) {
      nuevosErrores.titulo = 'El título debe tener al menos 5 caracteres.';
    }
    if (!formulario.fecha) {
      nuevosErrores.fecha = 'La fecha es obligatoria.';
    } else {
      const fechaEvento = new Date(formulario.fecha);
      if (fechaEvento < hoy) {
        nuevosErrores.fecha = 'La fecha no puede ser pasada.';
      }
    }
    if (!formulario.categoria) {
      nuevosErrores.categoria = 'Debes seleccionar una categoría.';
    }
    if (formulario.descripcion.trim().length < 20) {
      nuevosErrores.descripcion = 'La descripción debe tener al menos 20 caracteres.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      // Crear un nuevo evento con los datos del formulario
      const nuevoEvento = { ...formulario, id: Date.now() }; // id único
      setEventosRegistrados(prev => [...prev, nuevoEvento]);
      setUltimoEvento(nuevoEvento);
      setMostrarExito(true);
      // Limpiar formulario
      setFormulario({
        titulo: '',
        fecha: '',
        categoria: '',
        descripcion: '',
        esPublico: false
      });
      // Ocultar mensaje de éxito después de 4 segundos
      setTimeout(() => {
        setMostrarExito(false);
        setUltimoEvento(null);
      }, 4000);
    }
  };

  // Verificar si el botón de envío debe estar deshabilitado
  const isFormularioIncompleto = () => {
    return (
      formulario.titulo.trim() === '' ||
      formulario.fecha === '' ||
      formulario.categoria === '' ||
      formulario.descripcion.trim() === ''
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Registro de Evento</h2>

      {/* Mensaje de éxito */}
      {mostrarExito && ultimoEvento && (
        <Alerta tipo="exito" titulo="Evento registrado">
          <strong>{ultimoEvento.titulo}</strong> - Fecha: {ultimoEvento.fecha} - Categoría: {ultimoEvento.categoria} - {ultimoEvento.esPublico ? 'Público' : 'Privado'}
        </Alerta>
      )}

      <form onSubmit={handleSubmit}>
        {/* Campo Título */}
        <div style={{ marginBottom: '15px' }}>
          <label>Título: </label>
          <input
            type="text"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errores.titulo && <Alerta tipo="error" titulo="Error">{errores.titulo}</Alerta>}
        </div>

        {/* Campo Fecha */}
        <div style={{ marginBottom: '15px' }}>
          <label>Fecha: </label>
          <input
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errores.fecha && <Alerta tipo="error" titulo="Error">{errores.fecha}</Alerta>}
        </div>

        {/* Campo Categoría */}
        <div style={{ marginBottom: '15px' }}>
          <label>Categoría: </label>
          <select
            name="categoria"
            value={formulario.categoria}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Selecciona una categoría</option>
            <option value="conferencia">Conferencia</option>
            <option value="taller">Taller</option>
            <option value="seminario">Seminario</option>
            <option value="otro">Otro</option>
          </select>
          {errores.categoria && <Alerta tipo="error" titulo="Error">{errores.categoria}</Alerta>}
        </div>

        {/* Campo Descripción */}
        <div style={{ marginBottom: '15px' }}>
          <label>Descripción: </label>
          <textarea
            name="descripcion"
            value={formulario.descripcion}
            onChange={handleChange}
            rows="3"
            style={{ width: '100%', padding: '8px' }}
          />
          {errores.descripcion && <Alerta tipo="error" titulo="Error">{errores.descripcion}</Alerta>}
        </div>

        {/* Checkbox esPublico */}
        <div style={{ marginBottom: '15px' }}>
          <label>
            <input
              type="checkbox"
              name="esPublico"
              checked={formulario.esPublico}
              onChange={handleChange}
            />
            {' '}Evento público
          </label>
        </div>

        {/* Botón de envío */}
        <BotonAccion
          texto="Registrar Evento"
          variante="primario"
          disabled={isFormularioIncompleto()}
          onClick={handleSubmit}
        />
      </form>

      {/* Lista de eventos registrados */}
      <h3>Eventos registrados ({eventosRegistrados.length})</h3>
      {eventosRegistrados.length === 0 ? (
        <p>No hay eventos registrados aún.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {eventosRegistrados.map(evento => (
            <li key={evento.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
              <strong>{evento.titulo}</strong> <br />
              📅 {evento.fecha} | 🏷️ {evento.categoria} | {evento.esPublico ? '🌍 Público' : '🔒 Privado'}
              <br />
              <small>{evento.descripcion}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FormularioEvento;
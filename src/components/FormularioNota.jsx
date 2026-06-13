import { useState } from 'react';

function FormularioNota({ initialValues, onSubmit, submitButtonText = 'Guardar', onCancel }) {
  const [formData, setFormData] = useState(
    initialValues || { titulo: '', contenido: '', categoria: 'personal', fijada: false }
  );
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errores[name]) setErrores(prev => ({ ...prev, [name]: '' }));
  };

  const validar = () => {
    const nuevos = {};
    if (formData.titulo.trim().length < 3) nuevos.titulo = 'Mínimo 3 caracteres';
    if (formData.contenido.trim().length < 10) nuevos.contenido = 'Mínimo 10 caracteres';
    setErrores(nuevos);
    return Object.keys(nuevos).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) onSubmit(formData);
  };

  const isInvalid = formData.titulo.trim().length < 3 || formData.contenido.trim().length < 10;

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Título:</label>
        <input
          type="text"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {errores.titulo && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errores.titulo}</span>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Contenido:</label>
        <textarea
          name="contenido"
          value={formData.contenido}
          onChange={handleChange}
          rows="5"
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {errores.contenido && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errores.contenido}</span>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Categoría:</label>
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          <input
            type="checkbox"
            name="fijada"
            checked={formData.fijada}
            onChange={handleChange}
          />
          {' '}Fijada
        </label>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          type="submit"
          disabled={isInvalid}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#28a745',
            color: 'white',
            cursor: isInvalid ? 'not-allowed' : 'pointer',
            opacity: isInvalid ? 0.6 : 1
          }}
        >
          {submitButtonText}
        </button>
        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#6c757d',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default FormularioNota;
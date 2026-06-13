// src/components/ConfiguracionUsuario.jsx (usando useLocalStorage)
import useLocalStorage from '../hooks/useLocalStorage';

function ConfiguracionUsuario() {
  const [config, setConfig] = useLocalStorage('config-usuario', {
    nombre: '',
    tema: 'claro',
    notificaciones: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetearConfig = () => {
    setConfig({
      nombre: '',
      tema: 'claro',
      notificaciones: true,
    });
  };

  return (
    <div>
      <h2>Configuración de Usuario (con useLocalStorage)</h2>
      <form>
        <div>
          <label>Nombre: </label>
          <input type="text" name="nombre" value={config.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Tema: </label>
          <select name="tema" value={config.tema} onChange={handleChange}>
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" name="notificaciones" checked={config.notificaciones} onChange={handleChange} />
            Recibir notificaciones
          </label>
        </div>
      </form>
      <h3>Vista previa:</h3>
      <pre>{JSON.stringify(config, null, 2)}</pre>
      <button onClick={resetearConfig}>Restablecer valores</button>
    </div>
  );
}

export default ConfiguracionUsuario;
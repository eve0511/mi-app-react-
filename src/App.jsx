/*
import { useState } from 'react';
// Componentes del Laboratorio 2 
import Perfil from './components/Perfil';
import Clima from './components/Clima';
import EstadoPedido from './components/EstadoPedido';
import MensajeBienvenida from './components/MensajeBienvenida';
import ListaHabilidades from './components/ListaHabilidades';
import ListaProductos from './components/ListaProductos';
import ListaTareas from './components/ListaTareas';
import Tarjeta from './components/Tarjeta';
import Dashboard from './components/Dashboard';
// Componentes del Laboratorio 3
import Acordeon from './components/Acordeon';
import Alerta from './components/Alerta';
import BotonAccion from './components/BotonAccion';
import Modal from './components/Modal';
import Contador from './components/Contador';
import ListaContactos from './components/ListaContactos';
import FormularioEvento from './components/FormularioEvento';

function App() {
  // Estado para el modal del ejercicio 2 (usado en la demostración)
  const [modalAbierto, setModalAbierto] = useState(false);

  // Estilos generales
  const estilosGlobales = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={estilosGlobales}>
      <h1>Laboratorios 2 y 3 - Web Avanzada</h1>

      {}
      <Acordeon titulo="📁 Laboratorio 2: Fundamentos de React">
        <Acordeon titulo="Ejercicio 1: Perfil">
          <Perfil />
        </Acordeon>
        <Acordeon titulo="Ejercicio 2: Clima">
          <Clima />
        </Acordeon>
        <Acordeon titulo="Ejercicio 3: Estado Pedido">
          <EstadoPedido />
        </Acordeon>
        <Acordeon titulo="Ejercicio 4: Mensaje Bienvenida">
          <MensajeBienvenida />
        </Acordeon>
        <Acordeon titulo="Ejercicio 5: Lista Habilidades">
          <ListaHabilidades />
        </Acordeon>
        <Acordeon titulo="Ejercicio 6: Lista Productos">
          <ListaProductos />
        </Acordeon>
        <Acordeon titulo="Ejercicio 7: Lista Tareas">
          <ListaTareas />
        </Acordeon>
        <Acordeon titulo="Ejercicio 8: Tarjeta">
          <Tarjeta />
        </Acordeon>
        <Acordeon titulo="Ejercicio 9: Dashboard">
          <Dashboard />
        </Acordeon>
      </Acordeon>

      {}
      {}
      <Acordeon titulo="📁 Laboratorio 3 - Ejercicio 1: Alerta y Acordeón" defaultExpandido={true}>
        <h3>Alertas</h3>
        <Alerta tipo="exito" titulo="Éxito">Operación exitosa</Alerta>
        <Alerta tipo="advertencia" titulo="Advertencia">Ten cuidado</Alerta>
        <Alerta tipo="error" titulo="Error">Algo salió mal</Alerta>
        <Alerta tipo="info" titulo="Info">Información importante</Alerta>
        <h3>Acordeones anidados</h3>
        <Acordeon titulo="Ejemplo 1">Contenido del acordeón interno 1</Acordeon>
        <Acordeon titulo="Ejemplo 2">Contenido del acordeón interno 2</Acordeon>
      </Acordeon>

      <Acordeon titulo="📁 Laboratorio 3 - Ejercicio 2: Modal y Contador">
        <h3>Modal</h3>
        <BotonAccion texto="Abrir Modal" onClick={() => setModalAbierto(true)} />
        <Modal titulo="Modal de ejemplo" abierto={modalAbierto}>
          <p>Contenido del modal. Puedes cerrarlo con el botón.</p>
          <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setModalAbierto(false)} />
        </Modal>
        <h3>Contador</h3>
        <Contador />
      </Acordeon>

      <Acordeon titulo="📁 Laboratorio 3 - Ejercicio 3: Lista de Contactos">
        <ListaContactos />
      </Acordeon>

      <Acordeon titulo="📁 Laboratorio 3 - Ejercicio 4: Formulario de Eventos">
        <FormularioEvento />
      </Acordeon>
    </div>
  );
}

export default App;*/

// - Laboratorio 4 completo
import { useState } from 'react';
import VisorDocumento from './components/VisorDocumento';
import TemporizadorPomodoro from './components/TemporizadorPomodoro';
import ConfiguracionUsuario from './components/ConfiguracionUsuario';
import Notificador from './components/Notificador';

function App() {
  const [mostrarVisor, setMostrarVisor] = useState(true);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      <h1>Laboratorio 4-Efectos secundarios</h1>

      <section style={{ border: '1px solid #ccc', margin: '20px 0', padding: '15px', borderRadius: '8px' }}>
        <h2>Ejercicio 1: Visor Documento (sincronización del título)</h2>
        <button onClick={() => setMostrarVisor(!mostrarVisor)}>
          {mostrarVisor ? 'Ocultar Visor' : 'Mostrar Visor'}
        </button>
        {mostrarVisor && <VisorDocumento />}
      </section>

      <section style={{ border: '1px solid #ccc', margin: '20px 0', padding: '15px', borderRadius: '8px' }}>
        <h2>Ejercicio 2: Temporizador Pomodoro</h2>
        <TemporizadorPomodoro />
      </section>

      <section style={{ border: '1px solid #ccc', margin: '20px 0', padding: '15px', borderRadius: '8px' }}>
        <h2>Ejercicio 3 y 4: Configuración (con useLocalStorage) y Notificaciones (con useNotification)</h2>
        <ConfiguracionUsuario />
        <hr />
        <Notificador />
      </section>
    </div>
  );
}

export default App;
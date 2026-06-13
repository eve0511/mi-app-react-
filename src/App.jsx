
/*import Perfil from './components/Perfil';
import Clima from './components/Clima';
import EstadoPedido from './components/EstadoPedido';
import MensajeBienvenida from './components/MensajeBienvenida';
import ListaHabilidades from './components/ListaHabilidades';
import ListaProductos from './components/ListaProductos';
import ListaTareas from './components/ListaTareas';
import Tarjeta from './components/Tarjeta';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <h1>Laboratorio 2 - Fundamentos de React</h1>

      <section>
        <h2>Ejercicio 1: Perfil</h2>
        <Perfil />
      </section>

      <section>
        <h2>Ejercicio 2: Clima</h2>
        <Clima />
      </section>

      <section>
        <h2>Ejercicio 3: Estado del Pedido</h2>
        <EstadoPedido />
      </section>

      <section>
        <h2>Ejercicio 4: Mensaje de Bienvenida (Early Return)</h2>
        <MensajeBienvenida />
      </section>

      <section>
        <h2>Ejercicio 5: Lista de Habilidades</h2>
        <ListaHabilidades />
      </section>

      <section>
        <h2>Ejercicio 6: Lista de Productos</h2>
        <ListaProductos />
      </section>

      <section>
        <h2>Ejercicio 7: Lista de Tareas</h2>
        <ListaTareas />
      </section>

      <section>
        <h2>Ejercicio 8: Tarjeta</h2>
        <Tarjeta />
      </section>

      <section>
        <h2>Ejercicio 9: Dashboard</h2>
        <Dashboard />
      </section>
    </div>
  );
}

export default App;*/

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

      {/* ========== LABORATORIO 2 (opcional) ========== */}
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

export default App;
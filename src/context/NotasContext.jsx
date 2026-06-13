import { createContext, useContext, useReducer, useEffect } from 'react';
import useNotification from '../hooks/useNotification';

const cargarEstadoInicial = () => {
  try {
    const stored = localStorage.getItem('notas-app');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.notas && parsed.filtroCategoria !== undefined && parsed.busqueda !== undefined) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Error al leer localStorage:', error);
  }
  return {
    notas: [
      { id: '1', titulo: 'Revisar proyecto React', contenido: 'Revisar el código y los componentes...', categoria: 'trabajo', fijada: true, fechaCreacion: new Date().toISOString() },
      { id: '2', titulo: 'Comprar víveres', contenido: 'Leche, pan, huevos...', categoria: 'personal', fijada: false, fechaCreacion: new Date().toISOString() },
      { id: '3', titulo: 'Estudiar React Router', contenido: 'Revisar documentación de rutas dinámicas', categoria: 'estudio', fijada: true, fechaCreacion: new Date().toISOString() },
      { id: '4', titulo: 'Idea para app', contenido: 'Crear una app de notas con persistencia', categoria: 'ideas', fijada: false, fechaCreacion: new Date().toISOString() },
      { id: '5', titulo: 'Reunión con equipo', contenido: 'Discutir avances del proyecto', categoria: 'trabajo', fijada: false, fechaCreacion: new Date().toISOString() }
    ],
    filtroCategoria: 'todas',
    busqueda: ''
  };
};

const notasReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_NOTA':
      return { ...state, notas: [...state.notas, action.payload] };
    case 'ELIMINAR_NOTA':
      return { ...state, notas: state.notas.filter(n => n.id !== action.payload) };
    case 'EDITAR_NOTA':
      return {
        ...state,
        notas: state.notas.map(n =>
          n.id === action.payload.id ? { ...n, ...action.payload.datos } : n
        )
      };
    case 'TOGGLE_FIJADA':
      return {
        ...state,
        notas: state.notas.map(n =>
          n.id === action.payload ? { ...n, fijada: !n.fijada } : n
        )
      };
    case 'CAMBIAR_FILTRO':
      return { ...state, filtroCategoria: action.payload };
    case 'CAMBIAR_BUSQUEDA':
      return { ...state, busqueda: action.payload };
    default:
      return state;
  }
};

const NotasContext = createContext();

export const NotasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notasReducer, cargarEstadoInicial());
  const { notificacion, mostrarNotificacion, cerrarNotificacion } = useNotification(3000);

  useEffect(() => {
    try {
      localStorage.setItem('notas-app', JSON.stringify(state));
    } catch (error) {
      console.error('Error guardando en localStorage:', error);
    }
  }, [state]);

  const agregarNota = (nota) => {
    dispatch({ type: 'AGREGAR_NOTA', payload: nota });
    mostrarNotificacion('Nota creada con éxito', 'exito');
  };

  const eliminarNota = (id) => {
    dispatch({ type: 'ELIMINAR_NOTA', payload: id });
    mostrarNotificacion('Nota eliminada', 'info');
  };

  const editarNota = (id, datos) => {
    dispatch({ type: 'EDITAR_NOTA', payload: { id, datos } });
    mostrarNotificacion('Nota actualizada', 'exito');
  };

  const toggleFijada = (id) => {
    const notaActual = state.notas.find(n => n.id === id);
    if (notaActual) {
      const nuevoEstado = !notaActual.fijada;
      dispatch({ type: 'TOGGLE_FIJADA', payload: id });
      mostrarNotificacion(nuevoEstado ? 'Nota fijada' : 'Nota desfijada', 'info');
    } else {
      dispatch({ type: 'TOGGLE_FIJADA', payload: id });
    }
  };

  const cambiarFiltro = (filtro) => dispatch({ type: 'CAMBIAR_FILTRO', payload: filtro });
  const cambiarBusqueda = (busqueda) => dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: busqueda });

  return (
    <NotasContext.Provider value={{
      notas: state.notas,
      filtroCategoria: state.filtroCategoria,
      busqueda: state.busqueda,
      agregarNota,
      eliminarNota,
      editarNota,
      toggleFijada,
      cambiarFiltro,
      cambiarBusqueda,
      notificacion,
      cerrarNotificacion
    }}>
      {children}
    </NotasContext.Provider>
  );
};

export const useNotas = () => {
  const context = useContext(NotasContext);
  if (!context) throw new Error('useNotas debe usarse dentro de NotasProvider');
  return context;
};
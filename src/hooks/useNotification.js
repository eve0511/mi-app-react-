// src/hooks/useNotification.js
import { useState, useEffect, useCallback } from 'react';

function useNotification(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);

  // Función para mostrar una nueva notificación
  const mostrar = useCallback((mensaje, tipo = 'info') => {
    const id = Date.now(); // ID simple para identificar la notificación
    setNotificacion({ id, mensaje, tipo });
  }, []);

  // Cerrar manualmente la notificación
  const cerrar = useCallback(() => {
    setNotificacion(null);
  }, []);

  // Efecto para ocultar automáticamente después de 'duracion' ms
  useEffect(() => {
    if (notificacion) {
      const timeout = setTimeout(() => {
        setNotificacion(null);
      }, duracion);
      // Función de limpieza: cancela el timeout si se muestra otra notificación o se desmonta
      return () => clearTimeout(timeout);
    }
  }, [notificacion, duracion]);

  return { notificacion, mostrar, cerrar };
}

export default useNotification;
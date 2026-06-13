
import { useState, useEffect } from 'react';

function useLocalStorage(clave, valorInicial) {
  // Estado para almacenar el valor
  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(clave);
      // Si existe, lo parseamos y devolvemos; si no, el valorInicial (que puede ser función)
      return item ? JSON.parse(item) : valorInicial instanceof Function ? valorInicial() : valorInicial;
    } catch (error) {
      console.error(`Error al leer localStorage clave "${clave}":`, error);
      return valorInicial instanceof Function ? valorInicial() : valorInicial;
    }
  });

  // Efecto para sincronizar con localStorage cada vez que el valor cambie
  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error(`Error al guardar en localStorage clave "${clave}":`, error);
    }
  }, [clave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;
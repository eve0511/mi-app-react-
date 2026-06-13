
import { useState, useEffect } from 'react';

function VisorDocumento() {
  const [contador, setContador] = useState(0);

  // Efecto para actualizar el título de la pestaña
  useEffect(() => {
    document.title = `Contador: ${contador} - Mi App`;
    
    // Función de limpieza: restaura el título cuando el componente se desmonte
    return () => {
      document.title = 'Mi App';
    };
  }, [contador]); // Dependencia: se ejecuta cada vez que cambia contador

  const incrementar = () => setContador(prev => prev + 1);
  const decrementar = () => setContador(prev => prev - 1);

  return (
    <div>
      <h2>Visor de Documento</h2>
      <p>Valor del contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default VisorDocumento;
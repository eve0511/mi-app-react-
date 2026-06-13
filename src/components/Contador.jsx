
import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

function Contador() {
  const [valor, setValor] = useState(0);

  const decrementar = () => {
    if (valor > 0) {
      setValor(prev => prev - 1);
    }
  };
  const incrementar = () => setValor(prev => prev + 1);
  const incrementar5 = () => setValor(prev => prev + 5);
  const reiniciar = () => setValor(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
      <h2>Contador: {valor}</h2>
      <div>
        <BotonAccion texto="-1" variante="secundario" onClick={decrementar} disabled={valor === 0} />
        <BotonAccion texto="+1" variante="primario" onClick={incrementar} />
        <BotonAccion texto="+5" variante="primario" onClick={incrementar5} />
        <BotonAccion texto="Reiniciar" variante="peligro" onClick={reiniciar} />
      </div>
      {valor === 0 && <Alerta tipo="info" titulo="Info">El contador está en cero</Alerta>}
      {valor > 10 && <Alerta tipo="advertencia" titulo="Advertencia">¡Valor alto!</Alerta>}
    </div>
  );
}

export default Contador;
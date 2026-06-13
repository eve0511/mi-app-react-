import { useNotas } from '../context/NotasContext';

function Inicio() {
  const { notas } = useNotas();
  const fijadas = notas.filter(n => n.fijada).length;
  const porCategoria = notas.reduce((acc, n) => {
    acc[n.categoria] = (acc[n.categoria] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Bienvenido a MisNotas</h2>
      <p>Total de notas: {notas.length}</p>
      <p>Notas fijadas: {fijadas}</p>
      <p>Distribución por categorías:</p>
      <ul>
        {Object.entries(porCategoria).map(([cat, count]) => (
          <li key={cat}>{cat}: {count}</li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio;
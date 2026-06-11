
function EstadoPedido() {
 
  const estado = 'enviado';

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h3>Estado del Pedido</h3>
      <p>
        {/* Operador ternario para el ícono */}
        {estado === 'pendiente' ? '⏳' : 
         estado === 'enviado' ? '🚚' : 
         estado === 'entregado' ? '✅' : '❌'}
        {' '}
        {}
        {estado === 'pendiente' ? 'Tu pedido está siendo procesado' :
         estado === 'enviado' ? 'Tu pedido está en camino' :
         estado === 'entregado' ? 'Tu pedido ha sido entregado' :
         'Tu pedido fue cancelado'}
      </p>
      {}
      {estado === 'enviado' && (
        <p style={{ fontStyle: 'italic' }}>Tiempo estimado de entrega: 2-3 días hábiles</p>
      )}
    </div>
  );
}

export default EstadoPedido;
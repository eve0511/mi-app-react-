
import { useState } from 'react';

function Acordeon({ titulo, children, defaultExpandido = false }) {
  const [expandido, setExpandido] = useState(defaultExpandido);
  return (
    <div style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <div
        onClick={() => setExpandido(!expandido)}
        style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#f5f5f5', fontWeight: 'bold' }}
      >
        {expandido ? '▼' : '▶'} {titulo}
      </div>
      {expandido && <div style={{ padding: '10px' }}>{children}</div>}
    </div>
  );
}

export default Acordeon;
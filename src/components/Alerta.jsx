
function Alerta({ tipo = 'info', titulo, children }) {
  // Configuración según tipo
  const config = {
    exito: { icono: '✅', colorFondo: '#d4edda', colorBorde: '#28a745', colorTexto: '#155724' },
    advertencia: { icono: '⚠️', colorFondo: '#fff3cd', colorBorde: '#ffc107', colorTexto: '#856404' },
    error: { icono: '❌', colorFondo: '#f8d7da', colorBorde: '#dc3545', colorTexto: '#721c24' },
    info: { icono: 'ℹ️', colorFondo: '#d1ecf1', colorBorde: '#17a2b8', colorTexto: '#0c5460' }
  };
  const { icono, colorFondo, colorBorde, colorTexto } = config[tipo];

  const estilosContenedor = {
    backgroundColor: colorFondo,
    borderLeft: `4px solid ${colorBorde}`,
    padding: '12px',
    margin: '10px 0',
    borderRadius: '4px',
    color: colorTexto
  };
  const estilosHeader = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 'bold'
  };

  return (
    <div style={estilosContenedor}>
      <div style={estilosHeader}>
        <span>{icono}</span>
        <span>{titulo}</span>
      </div>
      <div style={{ marginTop: '8px' }}>{children}</div>
    </div>
  );
}

export default Alerta;

function Modal({ titulo, abierto, children }) {
  if (!abierto) return null;

  const estiloFondo = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };
  const estiloContenedor = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
  };
  return (
    <div style={estiloFondo}>
      <div style={estiloContenedor}>
        <h3>{titulo}</h3>
        {children}
      </div>
    </div>
  );
}

export default Modal;
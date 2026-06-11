// src/components/MensajeBienvenida.jsx
function MensajeBienvenida() {
 
  const usuario ={ nombre: "Evelyn", rol: "admin" }; //null;


 
  if (usuario === null) {
    return (
      <div style={{ border: "1px solid orange", padding: "1rem", margin: "1rem 0", borderRadius: "8px", backgroundColor: "#fff3e0" }}>
        <p>Por favor, inicia sesión para continuar</p>
      </div>
    );
  }

  
  return (
    <div style={{ border: "1px solid green", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      {usuario.rol === 'admin' && <p>Tienes acceso completo al sistema</p>}
    </div>
  );
}

export default MensajeBienvenida;
// src/components/ListaProductos.jsx
function ListaProductos() {
  // Array de productos
  const productos = [
    { id: 1, nombre: "Laptop", precio: 899.99, disponible: true },
    { id: 2, nombre: "Mouse", precio: 19.99, disponible: true },
    { id: 3, nombre: "Teclado", precio: 45.50, disponible: false },
    { id: 4, nombre: "Monitor", precio: 199.90, disponible: true },
    { id: 5, nombre: "Auriculares", precio: 29.95, disponible: false }
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td>
                <span style={{ color: producto.disponible ? "green" : "red" }}>
                  {producto.disponible ? "Disponible" : "Agotado"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;
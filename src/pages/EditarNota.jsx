import { useParams, useNavigate, Link } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';

function EditarNota() {
  const { id } = useParams();
  const { notas, editarNota } = useNotas();
  const navigate = useNavigate();

  const nota = notas.find(n => n.id === id);
  if (!nota) {
    return (
      <div>
        <h2>Nota no encontrada</h2>
        <Link to="/notas">Volver a notas</Link>
      </div>
    );
  }

  const valoresIniciales = {
    titulo: nota.titulo,
    contenido: nota.contenido,
    categoria: nota.categoria,
    fijada: nota.fijada
  };

  const handleGuardar = (datos) => {
    editarNota(id, datos);
    navigate(`/notas/${id}`);
  };

  const handleCancelar = () => navigate(`/notas/${id}`);

  return (
    <div>
      <h2>Editar nota</h2>
      <FormularioNota
        initialValues={valoresIniciales}
        onSubmit={handleGuardar}
        submitButtonText="Actualizar nota"
        onCancel={handleCancelar}
      />
    </div>
  );
}

export default EditarNota;
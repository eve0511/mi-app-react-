import { useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';

function NuevaNota() {
  const { agregarNota } = useNotas();
  const navigate = useNavigate();

  const handleGuardar = (nuevaNota) => {
    const notaCompleta = {
      ...nuevaNota,
      id: Date.now().toString(),
      fechaCreacion: new Date().toISOString()
    };
    agregarNota(notaCompleta);
    navigate('/notas');
  };

  const handleCancelar = () => navigate('/notas');

  return (
    <div>
      <h2>Crear nueva nota</h2>
      <FormularioNota
        onSubmit={handleGuardar}
        submitButtonText="Crear nota"
        onCancel={handleCancelar}
      />
    </div>
  );
}

export default NuevaNota;
// src/components/TemporizadorPomodoro.jsx
import { useState, useEffect } from 'react';

function TemporizadorPomodoro() {
  const [tiempo, setTiempo] = useState(1500); // 25 minutos = 1500 segundos
  const [activo, setActivo] = useState(false);

  // Formatear segundos a MM:SS
  const formatearTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  // Efecto para manejar el intervalo
  useEffect(() => {
    let intervalo = null;
    if (activo && tiempo > 0) {
      intervalo = setInterval(() => {
        setTiempo(prev => prev - 1);
      }, 1000);
    } else if (tiempo === 0 && activo) {
      // Cuando llega a cero, detener y mostrar alerta
      setActivo(false);
      alert('¡Tiempo completado!');
    }
    // Limpieza del intervalo
    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [activo, tiempo]); // Dependencias: cuando activo o tiempo cambian

  const iniciar = () => setActivo(true);
  const pausar = () => setActivo(false);
  const reiniciar = () => {
    setActivo(false);
    setTiempo(1500);
  };

  return (
    <div>
      <h2>Temporizador Pomodoro</h2>
      <div style={{ fontSize: '2rem', margin: '20px' }}>
        {formatearTiempo(tiempo)}
      </div>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default TemporizadorPomodoro;
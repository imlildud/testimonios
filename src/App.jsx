import { useState } from 'react';
import testimonios from './data.js';
import Testimonial from './components/Testimonial.jsx';
import Controls from './components/Controls.jsx';

export default function App() {
  // index guarda cuál testimonio se está viendo
  const [index, setIndex] = useState(0);
  const total = testimonios.length;

  // pasa al siguiente, y después del último vuelve al primero
  function next() {
    setIndex(actual => (actual + 1) % total);
  }

  // va al anterior, y desde el primero salta al último
  function prev() {
    setIndex(actual => (actual - 1 + total) % total);
  }

  // avanza una cantidad entre 1 y total - 1, así nunca cae en el mismo
  function random() {
    if (total < 2) return;
    const salto = 1 + Math.floor(Math.random() * (total - 1));
    setIndex(actual => (actual + salto) % total);
  }

  // si no hay testimonios no se intenta mostrar ninguno
  if (total === 0) {
    return (
      <main className="app">
        <h1>Experiencias de nuestros usuarios</h1>
        <p>No hay testimonios disponibles.</p>
      </main>
    );
  }

  return (
    <main className="app">
      <h1>Experiencias de nuestros usuarios</h1>
      <Testimonial item={testimonios[index]} />
      <Controls onPrev={prev} onNext={next} onRandom={random} />
      <p className="counter" aria-live="polite">
        Testimonio {index + 1} de {total}
      </p>
    </main>
  );
}

import testimonios from './data.js';
import Testimonial from './components/Testimonial.jsx';

export default function App() {
  return (
    <main className="app">
      <h1>Experiencias de nuestros usuarios</h1>
      {/* por ahora solo se muestra el primero, sin botones */}
      <Testimonial item={testimonios[0]} />
    </main>
  );
}

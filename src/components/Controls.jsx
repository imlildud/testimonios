// Solo dibuja los botones. Cada clic avisa al padre con el callback que recibe.
export default function Controls({ onPrev, onNext, onRandom }) {
  return (
    <div className="controls">
      <button type="button" onClick={onPrev}>Anterior</button>
      <button type="button" onClick={onNext}>Siguiente</button>
      <button type="button" onClick={onRandom}>Aleatorio</button>
    </div>
  );
}

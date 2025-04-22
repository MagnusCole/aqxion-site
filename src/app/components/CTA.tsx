export default function CTA() {
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-accent">Contacto Directo</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg font-sans mb-6 text-text">¿Considerando el retiro? Solicita una llamada privada sin compromiso (cierre en 60-90 días).</p>
        <a 
          href="mailto:deal@aqxion.com" 
          className="inline-block px-8 py-3 bg-accent text-primary font-sans font-medium rounded hover:opacity-90 transition-opacity ease-out"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
}
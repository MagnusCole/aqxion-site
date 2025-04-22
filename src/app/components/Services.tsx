export default function Services() {
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-accent">Lo que buscamos hoy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-accent rounded-lg hover:bg-accent/5 transition-opacity ease-out">
          <p className="text-lg font-sans text-text">Identificar empresas operadas por propietarios sin sucesión.</p>
        </div>
        <div className="p-6 border border-accent rounded-lg hover:bg-accent/5 transition-opacity ease-out">
          <p className="text-lg font-sans text-text">Negociar salidas respetuosas y flexibles.</p>
        </div>
        <div className="p-6 border border-accent rounded-lg hover:bg-accent/5 transition-opacity ease-out">
          <p className="text-lg font-sans text-text">Inyectar tecnología mínima y rigor operacional.</p>
        </div>
      </div>
    </div>
  );
}
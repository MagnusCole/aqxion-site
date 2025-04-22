export default function Footer() {
  return (
    <footer className="py-12 bg-primary border-t border-accent/20">
      <div className="max-w-[1080px] mx-auto px-6 text-center">
        <p className="text-sm font-serif italic text-text leading-relaxed">
          El caos de la sucesión no se resolverá con discursos.<br />
          Se resolverá con adquisición disciplinada.<br />
          AQXION ha comenzado; decide desde dónde lo presencias.
        </p>
        <div className="mt-8 text-xs text-text/70">
          <p>© {new Date().getFullYear()} AQXION™ | Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
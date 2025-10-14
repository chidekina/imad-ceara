const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <img src="/logo/logo-white.svg" alt="IMAD" className="h-full w-auto" />
        </div>
        <p className="text-gray-400 mb-4 font-family-body">Instituto do Movimento de Arquitetura e Design</p>
        <p className="text-gray-400 mb-6 font-family-body">@imadceara</p>
        
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6 text-sm font-family-body">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/cesar-hideki-nagano-326b75115/"
            className="hover:text-institutional transition-colors"
          >
            LinkedIn
          </a>
          <span className="hidden md:inline text-white/60">|</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/chidekina"
            className="hover:text-institutional transition-colors"
          >
            GitHub
          </a>
          <span className="hidden md:inline text-white/60">|</span>
          <a 
            href="mailto:cesar.nagano1@gmail.com" 
            className="hover:text-institutional transition-colors"
          >
            cesar.nagano1@gmail.com
          </a>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-500 font-family-body">
            © 2025 IMAD - Instituto do Movimento da Arquitetura e do Design. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
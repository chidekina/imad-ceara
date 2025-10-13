const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-white flex items-center justify-center p-4">
          <img src="/logo/logo-white.svg" alt="IMAD" className="h-full w-auto" style={{filter: 'invert(1)'}} />
        </div>
        <p className="text-gray-400 mb-4">Instituto do Movimento de Arquitetura e Design</p>
        <p className="text-gray-400 mb-6">@imadceara</p>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-500">
            © 2025 IMAD. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
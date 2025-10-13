const Hero = ({ scrollToSection }) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1e40af, #374151)'
    }}>
      {/* Background com overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/images/enhanced_Modern_minimalist_living_room_with_dark_brown_wood.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      ></div>
      
      {/* Overlay escuro */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 2
      }}></div>
      
      {/* Conteúdo */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        {/* Logo IMAD */}
        <div className="mb-8">
          <img src="/logo/logo-white.svg" alt="IMAD" className="h-32 md:h-48 w-auto mx-auto" />
        </div>
        
        {/* Botão Registrar */}
        <button 
          onClick={() => scrollToSection('cadastro')}
          className="bg-black text-white px-12 py-4 text-xl font-semibold hover:bg-gray-800 transition rounded-lg"
        >
          Registrar
        </button>
        
        {/* Texto inferior */}
        <div className="mt-12 text-white">
          <p className="text-lg md:text-xl font-light font-body">Instituto do Movimento</p>
          <p className="text-lg md:text-xl font-light font-body">de Arquitetura e Design</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
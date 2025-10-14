import Banner from "../Banner";

import bgImagem from "/images/enhanced_Modern_minimalist_living_room_with_dark_brown_wood.png"

const Hero = ({ scrollToSection, openRegistrationModal }) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1e40af, #374151)'
    }}>
      <Banner image={bgImagem} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 2
      }}></div>

      <div style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <div className="mb-4">
          <img src="/logo/logo-white.svg" alt="IMAD" className="h-32 md:h-48 w-auto mx-auto" />
        </div>

        <button
          onClick={openRegistrationModal}
          className="bg-black text-white px-12 py-4 text-xl font-semibold hover:bg-gray-800 transition rounded-lg hover:scale-110 cursor-pointer"
        >
          Registrar
        </button>
        <div className="mt-8 text-white">
          <p className="text-2lg md:text-3xl font-family-title">Instituto do Movimento</p>
          <p className="text-2lg md:text-3xl font-family-title">da Arquitetura e Design</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
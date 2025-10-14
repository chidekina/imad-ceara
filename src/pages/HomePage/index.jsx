import { useState } from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Registration from '../../components/Registration';
import PillarsSection from '../../components/PillarsSection';
import Modal from '../../components/Modal';

const HomePage = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <>
      <Hero scrollToSection={scrollToSection} openRegistrationModal={openRegistrationModal} />
      <About />
      <PillarsSection />
      
      {/* Seção de Call to Action para abrir o modal de registro */}
      <section id="cadastro" className="py-16 px-4 bg-gradient-to-br from-institutional/10 to-institutional/20">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-title">
            Faça parte do IMAD
          </h2>
          <p className="text-gray-700 mb-8 text-lg font-body">
            Seja um associado deste movimento
          </p>
          <button
            onClick={openRegistrationModal}
            className="bg-institutional text-white px-8 py-4 font-semibold text-lg hover:bg-institutional/90 transition border-2 border-institutional hover:border-institutional/90"
          >
            REGISTRAR-SE AGORA
          </button>
        </div>
      </section>

      {/* Modal de Registro */}
      <Modal 
        isOpen={isRegistrationModalOpen} 
        onClose={closeRegistrationModal}
        title="Faça parte do IMAD"
      >
        <Registration />
      </Modal>
    </>
  );
};

export default HomePage;
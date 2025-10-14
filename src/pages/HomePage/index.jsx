import { useState } from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Registration from '../../components/Registration';
import PillarsSection from '../../components/PillarsSection';
import RegistrationCTA from '../../components/RegistrationCTA';
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
      <RegistrationCTA openRegistrationModal={openRegistrationModal} />

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
import Hero from '../../components/Hero';
import About from '../../components/About';
import Pillars from '../../components/Pillars';
import Differentials from '../../components/Differentials';
import Registration from '../../components/Registration';

const HomePage = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Pillars />
      <Differentials />
      <Registration />
    </>
  );
};

export default HomePage;
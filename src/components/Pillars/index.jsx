const Pillars = () => {
  const pillars = [
    {
      logo: '/logo/logo-blue.svg',
      title: 'Educacional',
      subtitle: 'Elevamos sua Arquitetura',
      description: 'Capacitamos seu escritório em gestão, posicionamento e estrutura empresarial para transformar e desenvolver seu negócio.'
    },
    {
      logo: '/logo/logo-orange.svg',
      title: 'Institucional',
      subtitle: 'Presença Digital que Impacta',
      description: 'Fortalecemos sua presença nas redes sociais com estratégias, mentorias e apoio institucional.'
    },
    {
      logo: '/logo/logo-green.svg',
      title: 'Cultural',
      subtitle: 'Design para Viver e Inspirar',
      description: 'Promovemos experiências culturais através de viagens e imersões que ampliam seu repertório estético.'
    }
  ];

  return (
    <section id="pilares" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl mb-12 text-center text-gray-900 font-family-title">Nossos Pilares</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-8 border-4 border-gray-900">
              <div className="mb-4 flex justify-start">
                <img src={pillar.logo} alt={`${pillar.title} logo`} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-family-subtitle">{pillar.title}</h3>
              <p className="mb-4 font-semibold font-family-subtitle">{pillar.subtitle}</p>
              <p className="text-md leading-relaxed font-family-body">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
const Pillars = () => {
  const pillars = [
    {
      color: 'bg-education',
      title: 'Educacional',
      subtitle: 'Elevamos sua Arquitetura',
      description: 'Capacitamos seu escritório em gestão, posicionamento e estrutura empresarial para transformar e desenvolver seu negócio.'
    },
    {
      color: 'bg-institutional',
      title: 'Institucional',
      subtitle: 'Presença Digital que Impacta',
      description: 'Fortalecemos sua presença nas redes sociais com estratégias, mentorias e apoio institucional.'
    },
    {
      color: 'bg-culture',
      title: 'Cultural',
      subtitle: 'Design para Viver e Inspirar',
      description: 'Promovemos experiências culturais através de viagens e imersões que ampliam seu repertório estético.'
    }
  ];

  return (
    <section id="pilares" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 font-title">Nossos Pilares</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-8 border-4 border-gray-900">
              <div className="mb-4">
                <div className={`w-12 h-12 ${pillar.color} mx-auto`}></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-subtitle">{pillar.title}</h3>
              <p className="text-gray-700 mb-4 font-semibold font-subtitle">{pillar.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed font-body">
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
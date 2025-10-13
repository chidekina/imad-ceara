import { Check } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    'Compromisso sem fins lucrativos',
    'Crescimento com gestão compartilhada',
    'Ambiente livre de concorrência',
    'Expansão estratégica planejada',
    'Hub de negócios e inovação',
    'Suporte direto ao profissional',
    'Aprimoramento constante'
  ];

  return (
    <section id="diferenciais" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 font-title">Diferenciais</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {differentials.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="text-institutional flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg font-body">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
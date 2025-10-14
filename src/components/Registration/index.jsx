import { useState } from 'react';
import { Check } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipo: 'arquiteto'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do cadastro:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        tipo: 'arquiteto'
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <p className="text-center text-gray-700 mb-8 text-lg font-body">
          Seja um associado deste movimento
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-50 border-4 border-green-500 p-8 text-center">
          <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-700 mb-2">Cadastro realizado!</h3>
          <p className="text-gray-700">Em breve entraremos em contato.</p>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 font-subtitle">PREENCHA SEUS DADOS</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm uppercase tracking-wide">Nome completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-institutional transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm uppercase tracking-wide">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-institutional transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm uppercase tracking-wide">Telefone</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-institutional transition"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm uppercase tracking-wide">Empresa/Escritório</label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-institutional transition"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm uppercase tracking-wide">Tipo de profissional</label>
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-institutional transition"
              >
                <option value="arquiteto">Arquiteto(a)</option>
                <option value="designer">Designer de Interiores</option>
                <option value="empresa">Empresa Parceira</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-institutional text-white py-4 font-semibold text-lg hover:bg-institutional/90 transition border-2 border-institutional hover:border-institutional/90"
            >
              REGISTRAR
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registration;
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do login:', formData);
    // Aqui você implementaria a lógica de autenticação
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-institutional/10 to-institutional/20 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <img src="/logo/logo-main.svg" alt="IMAD" className="h-16 mx-auto mb-4" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 font-title">Entrar no IMAD</h1>
          <p className="text-gray-600 mt-2 font-body">Acesse sua conta</p>
        </div>

        <div className="bg-white p-8 border-4 border-gray-900">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-900 font-semibold mb-2 text-sm uppercase tracking-wide">
                E-mail
              </label>
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
              <label className="block text-gray-900 font-semibold mb-2 text-sm uppercase tracking-wide">
                Senha
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-institutional transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-institutional text-white py-4 font-semibold text-lg hover:bg-institutional/90 transition border-2 border-institutional hover:border-institutional/90"
            >
              ENTRAR
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 font-body">
              Ainda não tem conta?{' '}
              <Link to="/" className="text-institutional font-semibold hover:underline">
                Registre-se aqui
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-gray-500 hover:text-institutional">
              Esqueceu sua senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
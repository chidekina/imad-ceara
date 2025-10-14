import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const UserPage = () => {
  const navigate = useNavigate();
  
  // Mock data - em produção viria de um contexto/state de autenticação
  const user = {
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    tipo: 'Arquiteto(a)',
    empresa: 'Silva Arquitetura'
  };

  const handleLogout = () => {
    // Aqui implementaria a lógica de logout (limpar tokens, etc.)
    console.log('Logout realizado');
    // Redirecionar para a página inicial
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-institutional/10 to-institutional/20">
      {/* Header simples */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <img src="/logo/logo-full.svg" alt="IMAD" className="h-10 w-auto" />
          </Link>
          <Button 
            onClick={handleLogout}
            variant="secondary"
            size="sm"
            rounded
          >
            Sair
          </Button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-white p-8 border-4 border-gray-900 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-family-title">
              Bem-vindo ao IMAD, {user.nome}!
            </h1>
            <p className="text-gray-700 mb-6 font-family-body">
              Você agora faz parte do movimento da arquitetura e design do Ceará.
            </p>
          </div>

          {/* Dados do Usuário */}
          <div className="bg-white p-8 border-4 border-gray-900 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-family-subtitle">
              Seus Dados
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm uppercase tracking-wide">
                  Nome
                </label>
                <p className="text-gray-900 font-family-body">{user.nome}</p>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm uppercase tracking-wide">
                  E-mail
                </label>
                <p className="text-gray-900 font-family-body">{user.email}</p>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm uppercase tracking-wide">
                  Tipo de profissional
                </label>
                <p className="text-gray-900 font-family-body">{user.tipo}</p>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm uppercase tracking-wide">
                  Empresa/Escritório
                </label>
                <p className="text-gray-900 font-family-body">{user.empresa}</p>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="bg-white p-8 border-4 border-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-family-subtitle">
              Próximos Passos
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 font-family-body">
                Em breve você receberá informações sobre:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 font-family-body">
                <li>Eventos e workshops educacionais</li>
                <li>Oportunidades de networking</li>
                <li>Experiências culturais e viagens</li>
                <li>Parcerias institucionais</li>
              </ul>
              <div className="pt-4">
                <Button
                  as={Link}
                  to="/"
                  variant="primary"
                  size="lg"
                  rounded
                >
                  Voltar à Página Inicial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
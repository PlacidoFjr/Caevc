import { MapPin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/src/assets/logo-veracruz.png" alt="Prefeitura Municipal de Vera-Cruz" className="h-12" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Valorizando e promovendo os jovens talentos da nossa cidade através 
              de uma plataforma de visibilidade e conexão para a primeira oportunidade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('portfolios');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-lime-400 transition-colors"
                >
                  Portfólios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('sobre');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-lime-400 transition-colors"
                >
                  Sobre o Projeto
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contato');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-lime-400 transition-colors"
                >
                  Contato
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span className="text-gray-300">portfolios@prefeitura.gov.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span className="text-gray-300">(11) 3000-0000</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Secretaria de Cultura<br />
                  Rua das Artes, 123<br />
                  Centro - CEP 01000-000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Feito por Placido Junior - todos direitos reservados
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


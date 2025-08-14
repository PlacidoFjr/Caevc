import { X, Mail, Phone, ExternalLink, Instagram, Globe, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioModal = ({ portfolio, isOpen, onClose }) => {
  if (!isOpen || !portfolio) return null;

  const getIconForLinkType = (tipo) => {
    switch (tipo) {
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'website':
        return <Globe className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'behance':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{portfolio.nome}</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Header Info */}
            <div className="text-center space-y-2">
              <h3 className="text-xl text-blue-600 font-semibold">{portfolio.titulo}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {portfolio.descricao}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Galeria de Trabalhos</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {portfolio.imagens.map((imagem, index) => (
                  <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                    <img
                      src={imagem.src}
                      alt={imagem.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE3NSAxMjVIMjI1TDIwMCAxNTBaIiBmaWxsPSIjOUI5QkEzIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE3NSAxNzVIMjI1TDIwMCAxNTBaIiBmaWxsPSIjOUI5QkEzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkltYWdlbSBuw6NvIGRpc3BvbsOtdmVsPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {portfolio.links && portfolio.links.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Links e Redes Sociais</h4>
                <div className="flex flex-wrap gap-3">
                  {portfolio.links.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={() => window.open(link.url, '_blank')}
                      className="flex items-center space-x-2"
                    >
                      {getIconForLinkType(link.tipo)}
                      <span className="capitalize">{link.tipo}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900">Informações de Contato</h4>
              <div className="space-y-3">
                {portfolio.contato.email && (
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a
                      href={`mailto:${portfolio.contato.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {portfolio.contato.email}
                    </a>
                  </div>
                )}
                {portfolio.contato.telefone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a
                      href={`tel:${portfolio.contato.telefone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {portfolio.contato.telefone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioModal;


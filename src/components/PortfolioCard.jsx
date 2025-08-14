import { useState } from 'react';
import { ExternalLink, Instagram, Globe, Linkedin, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioCard = ({ portfolio, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);

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

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="portfolio-card bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        {/* Main Image */}
        <div className="aspect-[4/3] overflow-hidden">
          {!imageError ? (
            <img
              src={portfolio.imagens[0]?.src}
              alt={portfolio.imagens[0]?.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-lime-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-600 text-sm">Imagem não disponível</p>
              </div>
            </div>
          )}
        </div>

        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            {portfolio.links.map((link, index) => (
              <Button
                key={index}
                size="sm"
                variant="secondary"
                className="bg-white/90 hover:bg-white text-gray-800"
                onClick={() => window.open(link.url, '_blank')}
              >
                {getIconForLinkType(link.tipo)}
              </Button>
            ))}
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => onViewDetails(portfolio)}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{portfolio.nome}</h3>
            <p className="text-blue-600 font-medium text-sm">{portfolio.titulo}</p>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {portfolio.descricao}
          </p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              {portfolio.links.slice(0, 2).map((link, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className="text-xs px-3 py-1 h-auto rounded-full border-green-200 text-green-700 hover:bg-green-50"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {getIconForLinkType(link.tipo)}
                  <span className="ml-1 capitalize hidden sm:inline">{link.tipo}</span>
                </Button>
              ))}
            </div>
            
            <Button
              size="sm"
              onClick={() => onViewDetails(portfolio)}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-2"
            >
              Ver Mais
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;


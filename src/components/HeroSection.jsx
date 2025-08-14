import { ArrowDown, Sparkles, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToPortfolios = () => {
    const element = document.getElementById('portfolios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient geometric-pattern relative overflow-hidden">
      {/* Advanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-green-300/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-300/20 rounded-lg rotate-45 float-animation"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/20 rounded-full glow-effect"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white/30 rounded-lg rotate-12 animate-pulse-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/60 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/80 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-300/40 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/2 left-0 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/4 right-0 w-24 h-24 border border-green-300/20 rounded-lg animate-spin" style={{animationDuration: '15s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 glass-morphism rounded-full px-6 py-3 mb-8 animate-fade-in-up shadow-modern hover:shadow-modern-hover transition-all duration-300 interactive-element">
            <span className="text-white text-sm font-medium">Descubra Talentos Locais</span>
          </div>

          {/* Main Title with advanced effects */}
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-green-900 mb-8 leading-tight animate-fade-in-up will-change-transform">
            <span className="inline-block animate-slide-in-left">CAEVC e Seus</span>
            <span className="block text-gradient animate-slide-in-right">Prodígios</span>
          </h1>

          {/* Enhanced Slogan */}
          <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <p className="text-2xl md:text-3xl font-medium text-green-900 mb-2 glass-morphism rounded-2xl px-8 py-6 inline-block shadow-modern hover:shadow-modern-hover transition-all duration-500 interactive-element gradient-border">
              "Dê a primeira oportunidade para quem é da terra"
            </p>
          </div>

          {/* Enhanced Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed glass-morphism rounded-2xl px-8 py-6 shadow-modern backdrop-blur-sm border border-gray-100 animate-fade-in-up will-change-opacity" style={{animationDelay: '0.6s'}}>
            Conheça os jovens talentos e estudantes que buscam sua primeira oportunidade profissional em nossa comunidade. Cada portfólio é um passo em direção ao futuro.
          </p>

          {/* Enhanced Description Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="text-left glass-morphism rounded-2xl p-8 shadow-modern hover:shadow-modern-hover transition-all duration-500 border border-green-50 portfolio-card animate-slide-in-left will-change-transform" style={{animationDelay: '0.9s'}}>
              <h3 className="card-title text-xl font-semibold text-green-900 mb-4 text-glow">Diversidade de Habilidades</h3>
              <p className="body-text text-gray-700">
                Explore uma vasta gama de habilidades e projetos desenvolvidos por estudantes em diversas áreas.
              </p>
            </div>
            <div className="text-left glass-morphism rounded-2xl p-8 shadow-modern hover:shadow-modern-hover transition-all duration-500 border border-green-50 portfolio-card animate-slide-in-right will-change-transform" style={{animationDelay: '1.2s'}}>
              <h3 className="card-title text-xl font-semibold text-green-900 mb-4 text-glow">Conexão com o Mercado</h3>
              <p className="body-text text-gray-700">
                Projetos que visam conectar jovens talentos com empresas e oportunidades de trabalho na região.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <Button
            onClick={scrollToPortfolios}
            size="lg"
            className="modern-button text-white font-semibold px-12 py-6 rounded-2xl text-lg shadow-modern hover:shadow-modern-hover transition-all duration-500 float-animation border-0 transform hover:scale-105 animate-fade-in-up interactive-element will-change-transform glow-effect"
            style={{animationDelay: '1.5s'}}
          >
            Explorar Portfólios
          </Button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up" style={{animationDelay: '2s'}}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center glass-morphism">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


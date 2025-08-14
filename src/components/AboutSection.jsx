import { Users, Heart, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Comunidade de Talentos",
      description: "Conectamos jovens talentos e estudantes locais, promovendo colaboração e networking."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Impacto Social",
      description: "Projetos que transformam nossa cidade e criam valor para toda a comunidade."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Inovação Local",
      description: "Fomentamos a criatividade e inovação através de iniciativas de desenvolvimento e aprendizado."
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Oportunidades",
      description: "Criamos pontes entre talentos locais e oportunidades de trabalho e colaboração."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o
            <span className="text-gradient block">Projeto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma iniciativa da Prefeitura Municipal em parceria com a Casa Estudantil de Vera Cruz (CAEVC) para valorizar e promover os jovens talentos da nossa cidade, criando uma plataforma de visibilidade e conexão para a primeira oportunidade.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Valorizando o Talento Local
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Este projeto nasceu da necessidade de dar visibilidade aos incríveis jovens talentos que temos em nossa cidade. Acreditamos que o desenvolvimento de habilidades e a inovação são fundamentais para o crescimento profissional e econômico da nossa comunidade.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Este é um projeto desenvolvido com o apoio e a colaboração dos estudantes da Casa Estudantil de Vera Cruz (CAEVC), localizada no Imbuí, Salvador.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Através desta plataforma, conectamos jovens talentos com oportunidades, promovemos a colaboração entre estudantes e fortalecemos o ecossistema de desenvolvimento profissional local.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Nossa Missão</h4>
              <p className="text-blue-800">
                Criar uma ponte entre o talento criativo local e as oportunidades, 
                fortalecendo nossa identidade cultural e promovendo o desenvolvimento 
                econômico através da economia criativa.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-lime-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">50+</h4>
                <p className="text-gray-600">Jovens Talentos Cadastrados</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-lime-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">50+</h4>
              <p className="text-gray-600">Portfólios Ativos</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-lime-600 mb-2">15</h4>
              <p className="text-gray-600">Áreas Criativas</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-purple-600 mb-2">100+</h4>
              <p className="text-gray-600">Projetos Realizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';

const Hero = () => {
  const { language, texts } = useContext(LanguageContext);
  
  // Accede a los datos del proyecto con fallback a 'es' por seguridad
  const projectData = texts?.portOptimizer?.[language] || texts?.portOptimizer?.es || {};
  const { hero, stats } = projectData;

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("images/ia/port-optimizer.webp")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          {/* Badges dinámicos */}
          {hero?.badges && (
            <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🚢</span>
              {hero.badges.map((badge: string, index: number) => (
                <span key={index} className="text-xs md:text-sm font-semibold text-blue-200">
                  {badge}{index < hero.badges.length - 1 ? ' •' : ''}
                </span>
              ))}
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {hero?.title || 'Smart Port Terminal'}
           
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {hero?.description || 'Sistema de optimización y simulación de operaciones portuarias inspirado en PSA Singapore'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#results"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              {language === 'es' ? 'Ver Resultados' : 'View Results'}
            </a>
            <a
              href="#architecture"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg font-semibold transition-all hover:scale-105 border border-white/30"
            >
              {language === 'es' ? 'Ver Arquitectura' : 'View Architecture'}
            </a>
          </div>

          {/* Stats dinámicos */}
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {stats.map((stat: any, index: number) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { ArrowRight, Ship, Anchor, Activity, Clock, TrendingUp } from 'lucide-react';

const Hero = () => {
  const { language, texts } = useContext(LanguageContext);
  
  const projectData = texts?.portOptimizer?.[language] || texts?.portOptimizer?.es || {};
  const { hero, stats } = projectData;

  // Iconos para las estadísticas (puedes ajustar el orden según tus datos)
  const statIcons = [Activity, TrendingUp, Clock, Ship];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      
      {/* ============ 1. IMAGEN DE FONDO ============ */}
      {/* Imagen de un puerto moderno/terminal de contenedores */}
      <img
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
        alt="Smart Port Terminal"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      
      {/* ============ 2. OVERLAY DEGRADADO (Para legibilidad) ============ */}
      {/* Degradado oscuro de izquierda a derecha: azul marino profundo a transparente */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/80 to-blue-900/40"></div>
      
      {/* Efecto de brillo cyan sutil en la parte superior derecha */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ============ 3. CONTENIDO ============ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Texto y CTAs */}
          <div className="text-center lg:text-left">
            
            {/* Badge dinámico */}
            {hero?.badges && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-8 tracking-wide backdrop-blur-sm">
                <Anchor className="w-3.5 h-3.5" />
                <span>{hero.badges.slice(0, 2).join(' • ')}</span>
              </div>
            )}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              {hero?.title || 'Smart Port'}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {hero?.highlight || 'Terminal Optimizer'}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {hero?.description || 'Sistema de optimización y simulación de operaciones portuarias de clase mundial, inspirado en PSA Singapore.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#results"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)]"
              >
                {language === 'es' ? 'Ver Resultados' : 'View Results'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm hover:border-cyan-500/30"
              >
                {language === 'es' ? 'Ver Arquitectura' : 'View Architecture'}
              </a>
            </div>

            {/* Indicadores de confianza (Usando las primeras 2 stats) */}
            {stats && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>{stats[0]?.value} {stats[0]?.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{stats[1]?.value} {stats[1]?.label}</span>
                </div>
              </div>
            )}
          </div>

          {/* Columna Derecha: Mockup del Dashboard Portuario */}
          <div className="relative hidden lg:block">
            {/* Borde brillante animado */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 animate-pulse"></div>
            
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Barra superior del mockup */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-950/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-mono text-slate-500">port-optimizer-terminal.live</span>
                </div>
              </div>
              
              {/* Contenido dinámico del dashboard (Grid 2x2 con las stats) */}
              <div className="p-6 grid grid-cols-2 gap-4">
                {stats && stats.slice(0, 4).map((stat: any, index: number) => {
                  const Icon = statIcons[index] || Activity;
                  const isPrimary = index === 0; // La primera stat tiene un mini gráfico decorativo
                  
                  return (
                    <div key={index} className={`rounded-xl p-4 border flex flex-col justify-between ${isPrimary ? 'col-span-2 bg-blue-900/20 border-blue-500/30 flex-row items-center' : 'bg-slate-800/50 border-slate-700/50'}`}>
                      <div>
                        <div className={`flex items-center gap-2 mb-1 ${isPrimary ? 'mb-2' : ''}`}>
                          <Icon className={`w-4 h-4 ${isPrimary ? 'text-cyan-400' : 'text-blue-400'}`} />
                          <span className="text-xs font-mono text-slate-400 uppercase">{stat.label}</span>
                        </div>
                        <div className={`font-bold text-white ${isPrimary ? 'text-4xl' : 'text-2xl'}`}>
                          {stat.value}
                        </div>
                      </div>
                      
                      {/* Mini gráfico decorativo solo para la stat principal */}
                      {isPrimary && (
                        <div className="h-12 w-32 bg-cyan-500/10 rounded-lg flex items-end gap-1 p-1 ml-4">
                          {[30, 50, 40, 70, 60, 90, 80, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-cyan-500 rounded-sm opacity-80" style={{ height: `${h}%` }}></div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
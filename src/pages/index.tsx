import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import Hero from '../components/Hero';
import TerminalCard from '../components/TerminalCard';
import OperationalFlow from '../components/OperationalFlow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShip, faTruck, faAnchor, faLeaf, 
  faChartLine, faMicrochip, faUsers, faBuilding,
  faCheck, faXmark, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Activity, Anchor, ArrowRight, Box, BrainCircuit, Cpu, Database, GitBranch, Globe, Layers, LayoutDashboard, Leaf, Lightbulb, ListChecks, Map as MapIcon, Shield, Sliders, Target, Truck } from 'lucide-react';

const Home = () => {
  const { language, texts } = useContext(LanguageContext);
  
  const data = texts?.portOptimizer?.[language] || texts?.portOptimizer?.es || {};
  
  const terminals = data.terminals || [];
  const results = data.results || [];
  const architecture = data.architecture || [];
  const problems = data.problemsSolved || [];
  const cases = data.terminalCases || [];
  const techStack = data.techStack || [];
  const stakeholders = data.stakeholders || [];
  const comparison = data.comparison || [];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'from-cyan-600 to-blue-700 border-cyan-400/30';
      case 'green': return 'from-emerald-600 to-teal-700 border-emerald-400/30';
      case 'purple': return 'from-purple-600 to-indigo-700 border-purple-400/30';
      default: return 'from-cyan-600 to-blue-700 border-cyan-400/30';
    }
  };

  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'faShip': return faShip;
      case 'faTruck': return faTruck;
      case 'faAnchor': return faAnchor;
      case 'faLeaf': return faLeaf;
      default: return faChartLine;
    }
  };

  const getStakeholderIcon = (iconName: string) => {
    switch (iconName) {
      case 'faBuilding': return faBuilding;
      case 'faShip': return faShip;
      case 'faTruck': return faTruck;
      case 'faUsers': return faUsers;
      case 'faLeaf': return faLeaf;
      default: return faUsers;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100">
      <Hero />

            {/* 🆕 SECCIÓN: Objetivos y Justificación */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900/50 relative overflow-hidden">
        {/* Efectos de fondo decorativos */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header de la sección */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Visión del Proyecto
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Objetivos y Justificación
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Un enfoque de ingeniería integral para transformar la operación portuaria mediante IA
            </p>
          </div>

          {/* Grid principal: Objetivo General + Justificación */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Objetivo General */}
            <div className="group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Objetivo General</h3>
                </div>
                
                <p className="text-slate-300 leading-relaxed text-lg">
                  Desarrollar un <span className="text-cyan-400 font-semibold">simulador de operaciones portuarias multi-terminal</span> que modele la realidad operativa de PSA Singapore, permitiendo evaluar algoritmos de optimización bajo restricciones de atraque, estiba, programación de grúas, flujo de camiones, sostenibilidad ambiental y visualización 3D en tiempo real.
                </p>
              </div>
            </div>

            {/* Justificación */}
            <div className="group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
                    <Lightbulb className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Justificación</h3>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-4">
                  En la industria portuaria moderna, los terminales de contenedores operan con grúas, camiones y barcos que deben coordinarse bajo <span className="text-emerald-400 font-semibold">restricciones estrictas de tiempo, capacidad, seguridad y sostenibilidad</span>.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Los simuladores académicos tradicionales se enfocan exclusivamente en minimizar makespan o distancia, ignorando las <span className="text-emerald-400 font-semibold">restricciones del mundo real</span> que determinan si una operación portuaria es viable.
                </p>
              </div>
            </div>
          </div>

          {/* Objetivos Específicos */}
          <div className="group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                  <ListChecks className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Objetivos Específicos</h3>
                  <p className="text-slate-400 text-sm">11 metas de ingeniería para transformar la operación portuaria</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Anchor, text: "Implementar un motor de Berth Allocation Problem (BAP) dinámico con asignación en 3 olas temporales y ciclo de zarpe con liberación del 50% de capacidad" },
                  { icon: GitBranch, text: "Desarrollar un sistema de balanceo multi-terminal con Large Neighborhood Search (LNS) que distribuya carga entre 4 terminales reales" },
                  { icon: Cpu, text: "Implementar optimización de estiba y schedule con CP-SAT para ≤60 jobs y heurística Greedy+Local Search para >60 jobs" },
                  { icon: Activity, text: "Modelar el flujo operativo completo con SimPy: Gate → Yard (Grúas RTG) → Quay (Grúas STS)" },
                  { icon: MapIcon, text: "Integrar OSMnx + NetworkX para cálculo de rutas reales sobre el grafo de calles de Singapur (24,233 nodos, 46,127 aristas)" },
                  { icon: Truck, text: "Implementar Trip Chaining inteligente para consolidar viajes de import/export, reduciendo viajes vacíos del 50% al 12.9%" },
                  { icon: Shield, text: "Desarrollar un sistema de priorización IMO para contenedores peligrosos y refrigerados, garantizando atención preferencial" },
                  { icon: Leaf, text: "Implementar cálculo dinámico de emisiones CO2 por fuente e intensidad de carbono (kg CO2/TEU)" },
                  { icon: Box, text: "Crear un Digital Twin 3D profesional con Three.js con geografía realista y navegación completa" },
                  { icon: LayoutDashboard, text: "Desarrollar un dashboard interactivo en Streamlit con mapa 2D animado, visualización 3D y KPIs en tiempo real" },
                  { icon: Sliders, text: "Implementar análisis What-If de 8+ configuraciones de recursos para identificar la configuración óptima de costo y tiempo" }
                ].map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300 group/item">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center mt-0.5 group-hover/item:bg-purple-500/20 transition-colors">
                      <objective.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {objective.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* 1. Problems Solved Section */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {data.problemsTitle || 'Problemas Reales que Resolvemos'}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              {data.problemsSubtitle || 'Transformamos los cuellos de botella tradicionales en ventajas operativas mediante IA.'}
            </p>
          </div>
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem: any, index: number) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={getProblemIcon(problem.icon)} className="text-2xl text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 🆕 SECCIÓN: El Impacto de la IA en el Performance */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Optimización Algorítmica
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Cómo la IA Transforma el Performance
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Nuestros algoritmos (CP-SAT, LNS y SimPy) no solo simulan, sino que encuentran la configuración óptima que los métodos tradicionales no pueden ver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Métrica 1: Viajes Vacíos */}
            <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-400 text-sm font-medium">Viajes Vacíos de Camiones</span>
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">-74% Mejora</span>
                </div>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-4xl font-bold text-slate-500 line-through decoration-red-500/50">50%</span>
                  <span className="text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors">12.9%</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  El algoritmo de <span className="text-cyan-400 font-semibold">Trip Chaining</span> consolida viajes de import/export, eliminando retornos vacíos y ahorrando combustible.
                </p>
              </div>
            </div>

            {/* Métrica 2: Tiempo de Espera */}
            <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-400 text-sm font-medium">Tiempo de Espera en Gate</span>
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">-98% Mejora</span>
                </div>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-4xl font-bold text-slate-500 line-through decoration-red-500/50">45 min</span>
                  <span className="text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors">0.8 min</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  La <span className="text-cyan-400 font-semibold">Simulación de Eventos Discretos (SimPy)</span> calibra colas y recursos, eliminando cuellos de botella antes de que ocurran.
                </p>
              </div>
            </div>

            {/* Métrica 3: Ahorro Operativo */}
            <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-400 text-sm font-medium">Ahorro Operativo Anual</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full">IA What-If</span>
                </div>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors">$693K</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  El <span className="text-cyan-400 font-semibold">Análisis What-If automatizado</span> evaluó 8 configuraciones de recursos y encontró la óptima, minimizando costos sin sacrificar throughput.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OperationalFlow />

      {/* 2. Terminals Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {data.terminalSectionTitle || 'Terminales de PSA Singapore'}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              {data.terminalSectionSubtitle || '4 terminales reales modeladas con precisión geoespacial'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {terminals.map((terminal: any, index: number) => (
              <TerminalCard
                key={index}
                name={terminal.name || terminal.description?.split(' - ')[0] || 'Terminal'}
                description={terminal.description}
                num_cranes={terminal.cranes || terminal.numCranes || 0}
                num_bays={terminal.bays || terminal.numBays || 0}
                max_jobs={terminal.max_jobs || terminal.maxJobs || 0}
                specialization={terminal.specialization || 'general'}
                image={terminal.image || ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Terminal Success Cases Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {data.casesTitle || 'Casos de Éxito por Terminal'}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              {data.casesSubtitle || 'Resultados reales de la simulación de 960 jobs en un ciclo de 24 horas.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((c: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{c.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-slate-300 text-sm">Jobs Procesados</span>
                    <span className="text-white font-bold">{c.jobs}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-slate-300 text-sm">Barcos Zarparon</span>
                    <span className="text-white font-bold">{c.ships}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-slate-300 text-sm">Espera Promedio</span>
                    <span className="text-green-400 font-bold">{c.wait}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">Eficiencia Marítima</span>
                    <span className="text-cyan-400 font-bold">{c.efficiency}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Results Preview */}
      <section id="results" className="py-20 relative">
        <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {data.resultsSectionTitle || 'Resultados de la Simulación'}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              {data.resultsSectionSubtitle || '960 jobs procesados en 4 terminales con eficiencia optimizada'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result: any, index: number) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${getColorClasses(result.color)} rounded-2xl p-8 text-white border border-white/10 shadow-2xl backdrop-blur-md hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">{result.value}</div>
                <div className="text-xl font-semibold mb-2 text-white/90">{result.title}</div>
                <div className="text-white/70 text-sm leading-relaxed">
                  {result.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/results"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 border border-white/10"
            >
              {data.viewAllResultsBtn || 'Ver Todos los Resultados'}
            </a>
          </div>
        </div>
      </section>

      {/* 🆕 5. Stakeholders Section - ¿Por Qué Esto Importa? */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {data.stakeholdersTitle || '¿Por Qué Esto Importa?'}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              {data.stakeholdersSubtitle || 'Impacto real en cada actor de la cadena logística portuaria.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stakeholders.map((stakeholder: any, index: number) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={getStakeholderIcon(stakeholder.icon)} className="text-2xl text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{stakeholder.title}</h3>
                </div>
                <ul className="space-y-2">
                  {stakeholder.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                      <FontAwesomeIcon icon={faArrowRight} className="text-cyan-400 mt-1 flex-shrink-0 text-xs" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🆕 6. Comparison Section - Lo Que Nos Hace Únicos */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {data.comparisonTitle || 'Lo Que Nos Hace Únicos'}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              {data.comparisonSubtitle || 'Comparación directa entre sistemas tradicionales y nuestra solución.'}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            {/* Header de la tabla */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-slate-800/50 to-blue-900/50 border-b border-white/10">
              <div className="p-4 md:p-6 text-slate-300 font-semibold text-sm md:text-base">
                {data.comparisonFeatureLabel || 'Característica'}
              </div>
              <div className="p-4 md:p-6 text-slate-400 font-semibold text-sm md:text-base text-center border-l border-white/10">
                {data.comparisonTraditionalLabel || 'Sistemas Tradicionales'}
              </div>
              <div className="p-4 md:p-6 text-cyan-400 font-bold text-sm md:text-base text-center border-l border-white/10 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                {data.comparisonOurSystemLabel || 'Nuestro Sistema'}
              </div>
            </div>

            {/* Filas de la tabla */}
            {comparison.map((row: any, index: number) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors ${
                  index % 2 === 0 ? 'bg-slate-900/30' : 'bg-transparent'
                }`}
              >
                <div className="p-4 md:p-6 text-white font-medium text-sm md:text-base flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 md:p-6 text-slate-400 text-sm md:text-base text-center border-l border-white/10 flex items-center justify-center">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faXmark} className="text-red-400/70" />
                    {row.traditional}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-white text-sm md:text-base text-center border-l border-white/10 flex items-center justify-center">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} className="text-emerald-400" />
                    <span className="font-semibold text-emerald-400">{row.ours}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Tech Stack Section */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {data.techTitle || 'Stack Tecnológico de Última Generación'}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              {data.techSubtitle || 'Herramientas de vanguardia para optimización, simulación y visualización.'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech: string, index: number) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faMicrochip} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8. Architecture Preview */}
      <section id="architecture" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Arquitectura del Sistema
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {data.architectureSectionTitle || 'Arquitectura Técnica'}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {data.architectureSectionSubtitle || 'Sistema modular con 6 capas desacopladas'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {architecture.map((arch: any, index: number) => {
              // Mapeo inteligente de iconos basado en el nombre de la capa
              const getIcon = (title: string) => {
                const t = title.toLowerCase();
                if (t.includes('optim')) return <BrainCircuit className="w-7 h-7" />;
                if (t.includes('simul')) return <Activity className="w-7 h-7" />;
                if (t.includes('geo') || t.includes('map')) return <Globe className="w-7 h-7" />;
                if (t.includes('visual') || t.includes('3d')) return <Box className="w-7 h-7" />;
                if (t.includes('dato') || t.includes('data')) return <Database className="w-7 h-7" />;
                return <Layers className="w-7 h-7" />;
              };

              return (
                <div 
                  key={index} 
                  className="group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Efecto de brillo (glow) en hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
                  
                  <div className="relative">
                    {/* Badge de número de capa */}
                    <div className="absolute top-0 right-0 text-xs font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                      CAPA 0{index + 1}
                    </div>

                    {/* Icono */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500/10 text-cyan-400 mb-5 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                      {getIcon(arch.title)}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {arch.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {arch.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/architecture"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 border border-white/10"
            >
              {data.viewArchitectureBtn || 'Ver Documentación Completa'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      
      </section>
    </div>
  );
};

export default Home;
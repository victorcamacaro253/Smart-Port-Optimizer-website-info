import { 
  Layers, 
  Database, 
  Cpu, 
  Map, 
  Monitor, 
  FileCode, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const Architecture = () => {
  const layers = [
    {
      number: '01',
      name: 'Configuración',
      id: 'config/',
      icon: FileCode,
      description: 'Constantes globales, parámetros de simulación y settings de terminales reales de PSA. Permite reconfigurar el sistema sin tocar la lógica de negocio.'
    },
    {
      number: '02',
      name: 'Modelos de Datos',
      id: 'models/',
      icon: Database,
      description: 'Entidades puras (Job, Ship, Terminal, Truck, Crane) sin dependencia de UI ni lógica. Garantiza la integridad y tipado de los datos en toda la aplicación.'
    },
    {
      number: '03',
      name: 'Core Algorítmico',
      id: 'core/',
      icon: Cpu,
      description: 'Lógica de negocio pura: berth_allocator, multi_terminal_optimizer (LNS), stowage_optimizer (CP-SAT), port_simulator (SimPy) y emissions_calculator.'
    },
    {
      number: '04',
      name: 'Enrutamiento Geoespacial',
      id: 'singapore_router',
      icon: Map,
      description: 'Integración con OSMnx + NetworkX sobre el grafo real de calles de Singapur (24,233 nodos, 46,127 aristas) para calcular distancias reales, no líneas rectas.'
    },
    {
      number: '05',
      name: 'Visualización',
      id: 'visualization/',
      icon: Monitor,
      description: 'Renderizado de mapas y Digital Twin 3D (Three.js + WebGL). Consume el estado de la simulación sin modificarlo, garantizando una separación estricta de responsabilidades.'
    },
    {
      number: '06',
      name: 'Dashboard Interactivo',
      id: 'app.py',
      icon: Layers,
      description: 'Capa de presentación en Streamlit. Integra mapas 2D animados (Leaflet), visualización 3D, KPIs en tiempo real y el analizador What-If automatizado.'
    }
  ];

  const techStack = [
    { category: 'Optimización', items: ['Google OR-Tools (CP-SAT)', 'Large Neighborhood Search', 'Heurística Greedy+LS'] },
    { category: 'Simulación', items: ['SimPy (Eventos Discretos)', 'Micro-Layout realista', 'Tiempos calibrados PSA'] },
    { category: 'Geoespacial', items: ['OSMnx', 'NetworkX', 'Grafo WGS84 en caché'] },
    { category: 'Visualización', items: ['Three.js + WebGL', 'Leaflet.js', 'Streamlit + Plotly'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100 pb-20">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <Layers className="w-4 h-4" />
            Documentación de Ingeniería
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Arquitectura del Sistema
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Diseño modular de 6 capas desacopladas que separa estrictamente el motor de optimización 
            de la capa de simulación y visualización.
          </p>
        </div>
      </section>

      {/* Layers Diagram */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-4">
          {layers.map((layer, index) => (
            <div 
              key={index}
              className="group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur"></div>
              
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                {/* Number & Icon */}
                <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                  <div className="text-3xl font-mono font-bold text-slate-700 group-hover:text-cyan-500/50 transition-colors">
                    {layer.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <layer.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {layer.name}
                    </h3>
                    <span className="px-2 py-0.5 bg-slate-800 rounded text-xs font-mono text-slate-400 border border-slate-700">
                      {layer.id}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {layer.description}
                  </p>
                </div>

                {/* Connector Arrow (except last) */}
                {index < layers.length - 1 && (
                  <div className="hidden md:flex absolute -bottom-6 left-10 text-slate-700">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Technical Decisions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Decisiones Técnicas Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Híbrido CP-SAT + Heurística</h3>
            <p className="text-slate-400 text-sm">
              Óptimo garantizado con OR-Tools para ≤60 jobs. Para &gt;60 jobs, conmuta automáticamente a Greedy + Local Search para garantizar escalabilidad sin bloquear el sistema.
            </p>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">SimPy para Realismo</h3>
            <p className="text-slate-400 text-sm">
              La optimización teórica no captura colas. SimPy modela el flujo Gate → Yard → Quay con recursos compartidos y tiempos estocásticos calibrados con benchmarks de PSA.
            </p>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Grafo Real en Caché</h3>
            <p className="text-slate-400 text-sm">
              Descarga del grafo de Singapur vía Overpass API y almacenamiento en GraphML local. Elimina distorsiones de línea recta y reduce el tiempo de carga a &lt;1 segundo.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Stack Tecnológico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((group, index) => (
            <div key={index} className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 border-b border-slate-700 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Architecture;
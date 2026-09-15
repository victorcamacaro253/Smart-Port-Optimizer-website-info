import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Project Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Smart Port Terminal Optimizer</h3>
                <p className="text-sm text-gray-400">Digital Twin v3.0.0</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Sistema de optimización y simulación de operaciones portuarias inspirado en PSA Singapore. 
              Combina IA, optimización matemática y simulación de eventos discretos para optimizar 
              la gestión de terminales de contenedores.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/victorcamacaro253" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/project" className="hover:text-white transition-colors">Proyecto</Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-white transition-colors">Arquitectura</Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-white transition-colors">Resultados</Link>
              </li>
              <li>
                <Link to="/demo" className="hover:text-white transition-colors">Demo Interactiva</Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tecnologías</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Python 3.10+</li>
              <li className="text-gray-400">OR-Tools CP-SAT</li>
              <li className="text-gray-400">SimPy</li>
              <li className="text-gray-400">Three.js + WebGL</li>
              <li className="text-gray-400">OSMnx + NetworkX</li>
              <li className="text-gray-400">Streamlit</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Smart Port Terminal Optimizer. Desarrollado por Victor Camacaro.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Inspirado en PSA Singapore Terminal Operations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
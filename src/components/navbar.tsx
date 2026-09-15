import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Ship,
  LayoutDashboard,
  Warehouse,
  BarChart3,
  Network,
  Menu,
  X,
  Activity,
  Anchor
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Efecto de scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Inicio', icon: LayoutDashboard },
    { path: '/terminals', label: 'Terminales', icon: Warehouse },
    { path: '/results', label: 'Resultados', icon: BarChart3 },
    { path: '/architecture', label: 'Arquitectura', icon: Network },
    { path: '/simulation', label: 'Simulación', icon: Activity },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 border-b border-cyan-500/20'
            : 'bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-b border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* ============ LOGO ============ */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-700 p-2.5 rounded-xl shadow-lg">
                  <Ship className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  Smart Port
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400/80 font-semibold -mt-1">
                  Optimizer Pro
                </span>
              </div>
            </Link>

            {/* ============ DESKTOP MENU ============ */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 group ${
                      active
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {/* Fondo activo */}
                    {active && (
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30"></span>
                    )}
                    
                    <div className="relative flex items-center space-x-2">
                      <Icon className={`w-4 h-4 transition-colors ${
                        active ? 'text-cyan-400' : 'text-slate-400 group-hover:text-cyan-400'
                      }`} />
                      <span>{link.label}</span>
                    </div>

                    {/* Indicador inferior animado */}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ============ CTA + STATUS ============ */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Indicador "Live" */}
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-400">Sistema Activo</span>
              </div>

              {/* Botón Dashboard */}
              <Link
                to="/results"
                className="relative group overflow-hidden px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>Dashboard</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </Link>
            </div>

            {/* ============ MOBILE MENU BUTTON ============ */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-cyan-400 hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ============ MOBILE MENU ============ */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20 px-4 py-6 space-y-2">
            {/* Status móvil */}
            <div className="flex items-center justify-between px-3 py-2 mb-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-400">Sistema Activo</span>
              </div>
              <Anchor className="w-4 h-4 text-cyan-400" />
            </div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="font-medium">{link.label}</span>
                  {active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  )}
                </Link>
              );
            })}

            {/* CTA móvil */}
            <Link
              to="/results"
              className="flex items-center justify-center space-x-2 mt-4 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg"
            >
              <Activity className="w-4 h-4" />
              <span>Ver Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer para compensar el navbar fijo */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
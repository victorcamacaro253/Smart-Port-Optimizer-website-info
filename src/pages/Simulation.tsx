// src/pages/Simulation.tsx
import  { useState, useEffect, useMemo } from 'react';
import { Activity, Play, Pause, RotateCcw, Filter, Ship, Anchor, Truck, Warehouse, MapPin, AlertTriangle } from 'lucide-react';
import { simulationLogs, LogEvent } from '../data/simulationLogs';

const Simulation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [filterTerminal, setFilterTerminal] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  // Simulación de "tiempo real"
  useEffect(() => {
    let interval: any;
    if (isPlaying && currentTime < 1440) { // 24 horas = 1440 min
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 1);
      }, 100); // 100ms = 1 minuto de simulación
    } else if (currentTime >= 1440) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime]);

  // Filtrado de logs
  const visibleLogs = useMemo(() => {
    return simulationLogs.filter(log => {
      const matchTime = log.time <= currentTime;
      const matchTerminal = filterTerminal === 'all' || log.terminal === filterTerminal;
      const matchPriority = filterPriority === 'all' || log.priority === filterPriority;
      return matchTime && matchTerminal && matchPriority;
    });
  }, [currentTime, filterTerminal, filterPriority]);

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'BARCO': return <Ship className="w-4 h-4" />;
      case 'QUAY': return <Anchor className="w-4 h-4" />;
      case 'YARD': return <Warehouse className="w-4 h-4" />;
      case 'GATE': return <MapPin className="w-4 h-4" />;
      case 'TRUCK': return <Truck className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'MÁXIMA': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'ALTA': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100 pb-20">
      
      {/* Header de Control */}
      <div className="bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-cyan-400 animate-pulse" />
              <h1 className="text-2xl font-bold text-white">Centro de Control - Simulación en Vivo</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-slate-800 rounded-lg px-4 py-2 font-mono text-cyan-400">
                T+ {currentTime} min
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pausar' : 'Reproducir'}
              </button>
              <button 
                onClick={() => { setCurrentTime(0); setIsPlaying(false); }}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-slate-700/50">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select 
                value={filterTerminal}
                onChange={(e) => setFilterTerminal(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm focus:border-cyan-500 focus:outline-none"
              >
                <option value="all">Todas las terminales</option>
                <option value="Pasir Panjang">Pasir Panjang</option>
                <option value="Keppel">Keppel</option>
                <option value="Brani">Brani</option>
                <option value="Tanjong Pagar">Tanjong Pagar</option>
              </select>
            </div>
            <select 
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">Todas las prioridades</option>
              <option value="MÁXIMA">🔴 Peligroso (MÁXIMA)</option>
              <option value="ALTA">🟡 Refrigerado (ALTA)</option>
              <option value="NORMAL">⚪ Estándar (NORMAL)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Barra de progreso */}
        <div className="mb-8">
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-100"
              style={{ width: `${(currentTime / 1440) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </div>

        {/* Lista de Logs (Timeline) */}
        <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
          <div className="p-4 border-b border-slate-700/50 bg-slate-900/60 flex justify-between items-center">
            <h3 className="font-semibold text-white">Registro de Eventos en Tiempo Real</h3>
            <span className="text-xs text-slate-400">{visibleLogs.length} eventos mostrados</span>
          </div>
          
          <div className="max-h-[600px] overflow-y-auto p-4 space-y-3">
            {visibleLogs.length === 0 ? (
              <div className="text-center py-20 text-slate-500">
                <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Esperando eventos de la simulación...</p>
              </div>
            ) : (
              visibleLogs.slice().reverse().map((log) => (
                <div 
                  key={log.id} 
                  className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-cyan-500/30 transition-all"
                >
                  {/* Timestamp */}
                  <div className="flex-shrink-0 w-16 text-center pt-1">
                    <div className="text-cyan-400 font-mono font-bold text-sm">{log.time}m</div>
                    <div className="text-[10px] text-slate-500 uppercase">{log.terminal.split(' ')[0]}</div>
                  </div>
                  
                  {/* Icono de Etapa */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    log.stage === 'QUAY' ? 'bg-blue-500/20 text-blue-400' :
                    log.stage === 'YARD' ? 'bg-purple-500/20 text-purple-400' :
                    log.stage === 'GATE' ? 'bg-green-500/20 text-green-400' :
                    log.stage === 'TRUCK' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-cyan-500/20 text-cyan-400'
                  }`}>
                    {getStageIcon(log.stage)}
                  </div>
                  
                  {/* Descripción */}
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">{log.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getPriorityColor(log.priority)}`}>
                        {log.priority === 'MÁXIMA' && <AlertTriangle className="w-3 h-3 inline mr-1" />}
                        Prioridad: {log.priority}
                      </span>
                      {log.duration > 0 && (
                        <span className="text-xs text-slate-400">
                          ⏱️ {log.duration} min
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
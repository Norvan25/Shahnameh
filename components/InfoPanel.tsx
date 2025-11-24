import React from 'react';
import { GraphNode, TYPE_COLORS } from '../types';
import { X, Crown, Activity, ShieldAlert, Brain, BookOpen } from 'lucide-react';

interface InfoPanelProps {
  node: GraphNode | null;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ node, onClose }) => {
  if (!node) return null;

  const color = TYPE_COLORS[node.type];

  const getIcon = () => {
    switch(node.type) {
        case 'KING': return <Crown className="w-6 h-6 text-amber-400" />;
        case 'SHADOW': return <ShieldAlert className="w-6 h-6 text-red-400" />;
        case 'SERVER': return <Activity className="w-6 h-6 text-cyan-400" />;
        case 'HARDWARE': return <Brain className="w-6 h-6 text-slate-400" />;
        default: return <BookOpen className="w-6 h-6 text-blue-400" />;
    }
  }

  return (
    <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-slate-900/90 backdrop-blur-xl border-l border-slate-700 p-6 shadow-2xl transform transition-transform duration-300 z-50 overflow-y-auto">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
      >
        <X size={20} />
      </button>

      <div className="mt-8">
        <div className="flex items-center gap-3 mb-2">
            {getIcon()}
            <span 
                className="text-xs font-bold tracking-wider px-2 py-1 rounded uppercase bg-opacity-20"
                style={{ backgroundColor: color, color: color }}
            >
                {node.type}
            </span>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-2 cinzel leading-tight">{node.label}</h2>
        <p className="text-slate-300 text-lg mb-6 italic border-l-4 pl-4 py-1" style={{ borderColor: color }}>
          {node.description}
        </p>

        {node.details && (
            <div className="space-y-6">
                {node.details.layer && (
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Շերտ (Layer)</h3>
                        <p className="text-white">{node.details.layer}</p>
                    </div>
                )}

                {node.details.function && node.details.function.length > 0 && (
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Գործառույթներ (Functions)</h3>
                        <ul className="space-y-2">
                            {node.details.function.map((f, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-200 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {node.details.questions && node.details.questions.length > 0 && (
                     <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Հիմնական Հարցեր (Key Questions)</h3>
                        <ul className="space-y-3">
                            {node.details.questions.map((q, i) => (
                                <li key={i} className="text-amber-100/90 italic text-sm font-serif border-l-2 border-amber-500/30 pl-3">
                                    {q}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {(node.details.healthyRole || node.details.distortedRole) && (
                    <div className="grid grid-cols-1 gap-4">
                        {node.details.healthyRole && (
                            <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-800/50">
                                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-1">Առողջ Դեր (Healthy Role)</h3>
                                <p className="text-sm text-emerald-100">{node.details.healthyRole}</p>
                            </div>
                        )}
                        {node.details.distortedRole && (
                            <div className="bg-red-900/20 p-4 rounded-lg border border-red-800/50">
                                <h3 className="text-xs font-bold text-red-400 uppercase tracking-wide mb-1">Աղավաղված Դեր (Distorted Role)</h3>
                                <p className="text-sm text-red-100">{node.details.distortedRole}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default InfoPanel;
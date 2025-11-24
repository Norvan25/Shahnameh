import React from 'react';
import { TYPE_COLORS, NodeType } from '../types';
import { Info } from 'lucide-react';

interface OverlayProps {
  onShowAbout: () => void;
}

const TYPE_LABELS: Record<string, string> = {
  [NodeType.SERVER]: 'Սերվեր',
  [NodeType.HARDWARE]: 'Հարդվեր',
  [NodeType.KING]: 'Արքա',
  [NodeType.HEROIC]: 'Հերոսական',
  [NodeType.SHADOW]: 'Ստվեր',
  [NodeType.SABOTEUR]: 'Խափանարար',
  [NodeType.AFFECT]: 'Հուզական Դաշտ',
  [NodeType.INPUT]: 'Մուտք',
  [NodeType.MEMORY]: 'Հիշողություն',
};

const Overlay: React.FC<OverlayProps> = ({ onShowAbout }) => {
  return (
    <>
      {/* Top Left - Title */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500 cinzel drop-shadow-lg">
          Ճանաչողական ՕՀ
        </h1>
        <h2 className="text-slate-400 text-sm tracking-widest mt-1 uppercase font-semibold">
          Շահնամեի Համաստեղության Քարտեզ
        </h2>
      </div>

      {/* Bottom Left - Legend */}
      <div className="absolute bottom-6 left-6 z-10 bg-slate-900/80 backdrop-blur-md p-4 rounded-lg border border-slate-700 shadow-xl max-w-[240px] hidden md:block">
        <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Պայմանանշաններ</h3>
        <div className="grid grid-cols-1 gap-2">
          {Object.entries(TYPE_COLORS).map(([type, color]) => {
              if (['ROUTING', 'PRINCIPLE'].includes(type)) return null;
              return (
                <div key={type} className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
                    <span className="text-xs text-slate-300 capitalize">
                      {TYPE_LABELS[type] || type.toLowerCase()}
                    </span>
                </div>
              );
          })}
        </div>
      </div>

      {/* Top Right - Controls */}
      <div className="absolute top-6 right-6 z-10 flex gap-2">
        <button 
            onClick={onShowAbout}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-600 transition-all shadow-lg"
        >
            <Info size={16} />
            <span className="text-sm font-semibold">Ուղեցույց</span>
        </button>
      </div>
    </>
  );
};

export default Overlay;
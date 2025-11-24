import React from 'react';
import { X, Zap } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-amber-400 cinzel">Քարտեզի Օգտագործումը</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-slate-300">
          <p>
            Այս ինտերակտիվ քարտեզը պատկերում է մարդկային հոգեբանությունը որպես թագավորություն, որը կառավարվում է տարբեր արխետիպերի (Արքաների) կողմից՝ վերցված Շահնամեից։
            Բացահայտելով, թե որ «Արքան» է բազմել ձեր մտքի գահին, դուք կարող եք ավելի լավ հասկանալ ձեր արձագանքներն ու ընտրությունները:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Zap size={16} className="text-yellow-400"/> Քայլ 1. Անվանեք Գործող Արքային
              </h3>
              <p className="text-sm">Հարցրեք. «Ո՞վ է ինձ հիմա կառավարում»: Ռոստա՞մը (Գոյատևում), Քեյ Կավո՞ւսը (Էգո), թե՞ Զահհակը (Կախվածություն):</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Zap size={16} className="text-red-400"/> Քայլ 2. Ստուգեք Ստվերային Մակարդակները
              </h3>
              <p className="text-sm">Արդյո՞ք Վախը, Մեղքը կամ Ամոթը ակտիվ են: Դրանք համապատասխա՞ն ազդանշաններ են, թե՞ աղավաղված հրեշներ:</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Zap size={16} className="text-cyan-400"/> Քայլ 3. Հրավիրեք Այլ Արքայի
              </h3>
              <p className="text-sm">Գիտակցաբար փոխեք վիճակը: Կանչեք Քեյ Խոսրովին՝ իմաստության համար, Զալին՝ ռազմավարության, կամ Ֆարանգիսին՝ ապրումակցման համար:</p>
            </div>
          </div>

          <p className="text-xs text-slate-500 pt-4 border-t border-slate-800">
            Ուսումնասիրեք քարտեզը՝ սեղմելով հանգույցների վրա՝ բացահայտելու դրանց հարցերը, գործառույթները և դերերը:
            Քաշեք հանգույցները՝ համաստեղությունը վերադասավորելու համար:
          </p>
        </div>
        
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-center">
            <button 
                onClick={onClose}
                className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded transition-colors"
            >
                Մուտք Թագավորություն
            </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
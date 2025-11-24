import React, { useState } from 'react';
import StarBackground from './components/StarBackground';
import ConstellationMap from './components/ConstellationMap';
import InfoPanel from './components/InfoPanel';
import Overlay from './components/Overlay';
import AboutModal from './components/AboutModal';
import { INITIAL_DATA } from './constants';
import { GraphNode } from './types';

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleNodeSelect = (node: GraphNode) => {
    setSelectedNode(node);
  };

  const handleClosePanel = () => {
    setSelectedNode(null);
  };

  return (
    <div className="w-full h-screen relative bg-transparent">
      <StarBackground />
      
      <main className="absolute inset-0 z-0">
        <ConstellationMap 
            data={INITIAL_DATA} 
            onNodeSelect={handleNodeSelect} 
        />
      </main>

      <Overlay onShowAbout={() => setIsAboutOpen(true)} />

      <InfoPanel 
        node={selectedNode} 
        onClose={handleClosePanel} 
      />

      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />
    </div>
  );
};

export default App;
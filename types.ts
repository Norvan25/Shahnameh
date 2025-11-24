import * as d3 from 'd3';

export enum NodeType {
  SERVER = 'SERVER',
  HARDWARE = 'HARDWARE',
  KING = 'KING',
  HEROIC = 'HEROIC',
  SHADOW = 'SHADOW',
  SABOTEUR = 'SABOTEUR',
  AFFECT = 'AFFECT',
  INPUT = 'INPUT',
  MEMORY = 'MEMORY',
  PRINCIPLE = 'PRINCIPLE',
  ROUTING = 'ROUTING'
}

export const TYPE_COLORS: Record<NodeType, string> = {
  [NodeType.SERVER]: '#22d3ee', // Cyan
  [NodeType.HARDWARE]: '#64748b', // Slate
  [NodeType.KING]: '#fbbf24', // Amber/Gold
  [NodeType.HEROIC]: '#fcd34d', // Light Amber
  [NodeType.SHADOW]: '#ef4444', // Red
  [NodeType.SABOTEUR]: '#a855f7', // Purple
  [NodeType.AFFECT]: '#10b981', // Emerald
  [NodeType.INPUT]: '#f97316', // Orange
  [NodeType.MEMORY]: '#3b82f6', // Blue
  [NodeType.PRINCIPLE]: '#e879f9', // Fuchsia
  [NodeType.ROUTING]: '#94a3b8', // Gray
};

export interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  type: NodeType;
  description: string;
  details?: {
    function?: string[];
    questions?: string[];
    healthyRole?: string;
    distortedRole?: string;
    layer?: string;
    items?: string[];
  };
  r?: number; // radius for visualization
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  value: number;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}
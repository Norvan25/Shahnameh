import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { GraphData, GraphNode, GraphLink, TYPE_COLORS, NodeType } from '../types';

interface ConstellationMapProps {
  data: GraphData;
  onNodeSelect: (node: GraphNode) => void;
}

const ConstellationMap: React.FC<ConstellationMapProps> = ({ data, onNodeSelect }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle Resize
  useEffect(() => {
    const updateSize = () => {
      if (wrapperRef.current) {
        const { width, height } = wrapperRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // D3 Simulation
  useEffect(() => {
    if (!dimensions.width || !dimensions.height || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous

    const width = dimensions.width;
    const height = dimensions.height;

    // Create a group for zoom/pan
    const g = svg.append('g');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Clone data to avoid mutating props
    const nodes: GraphNode[] = data.nodes.map(d => ({ ...d, r: d.type === NodeType.KING ? 12 : d.type === NodeType.SERVER ? 15 : 6 }));
    const links: GraphLink[] = data.links.map(d => ({ ...d }));

    // Custom forces based on node type (to create layers)
    const forceY = d3.forceY((d: any) => {
      if (d.type === NodeType.SERVER) return -height * 0.4;
      if (d.type === NodeType.HARDWARE) return -height * 0.1;
      if (d.type === NodeType.KING) return 0;
      if (d.type === NodeType.HEROIC) return height * 0.1;
      if (d.type === NodeType.SHADOW || d.type === NodeType.SABOTEUR) return height * 0.35;
      return 0;
    }).strength(0.3);

    const forceX = d3.forceX((d: any) => {
      if (d.type === NodeType.INPUT) return -width * 0.4;
      if (d.type === NodeType.MEMORY) return width * 0.4;
      return 0;
    }).strength(0.1);

    const simulation = d3.forceSimulation<GraphNode, GraphLink>(nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(links).id(d => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide().radius((d: any) => d.r + 20))
      .force('y', forceY)
      .force('x', forceX);

    // Render Links
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#475569')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1);

    // Define drag functions
    function dragstarted(event: any, d: GraphNode) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: GraphNode) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: GraphNode) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Render Nodes
    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(nodes)
      .enter().append('g')
      .attr('cursor', 'pointer')
      .call(d3.drag<any, GraphNode>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
      )
      .on('click', (event, d) => {
        event.stopPropagation(); // Prevent clicking background
        onNodeSelect(d);
      })
      .on('mouseover', function(event, d) {
        const hoveredId = d.id;
        const neighborIds = new Set<string>();
        neighborIds.add(hoveredId);

        // Identify neighbors
        links.forEach((l: any) => {
           if (l.source.id === hoveredId) neighborIds.add(l.target.id);
           if (l.target.id === hoveredId) neighborIds.add(l.source.id);
        });

        // Highlight specific circle border
        d3.select(this).select('circle:nth-of-type(2)')
          .transition().duration(200)
          .attr('stroke', '#fff')
          .attr('stroke-width', 3);

        // Update links: Highlight connected, fade others
        link.transition().duration(200)
            .style('stroke-opacity', (l: any) => {
               const isConnected = l.source.id === hoveredId || l.target.id === hoveredId;
               return isConnected ? 1 : 0.1;
            })
            .attr('stroke', (l: any) => {
               const isConnected = l.source.id === hoveredId || l.target.id === hoveredId;
               return isConnected ? '#cbd5e1' : '#475569';
            });

        // Update nodes: Highlight neighbors/self, fade others
        node.transition().duration(200)
            .style('opacity', (n) => {
                return neighborIds.has(n.id) ? 1 : 0.2;
            });
      })
      .on('mouseout', function() {
        // Reset specific circle border
        d3.select(this).select('circle:nth-of-type(2)')
          .transition().duration(200)
          .attr('stroke', '#1e293b')
          .attr('stroke-width', 2);

        // Reset links
        link.transition().duration(200)
            .style('stroke-opacity', 0.4)
            .attr('stroke', '#475569');
            
        // Reset nodes
        node.transition().duration(200)
            .style('opacity', 1);
      });

    // Node Circles (Outer Glow)
    node.append('circle')
      .attr('r', d => (d.r || 5) + 4)
      .attr('fill', d => TYPE_COLORS[d.type])
      .attr('fill-opacity', 0.2)
      .attr('class', 'glow');

    // Node Circles (Main)
    node.append('circle')
      .attr('r', d => d.r || 5)
      .attr('fill', d => TYPE_COLORS[d.type])
      .attr('stroke', '#1e293b')
      .attr('stroke-width', 2);

    // Labels
    node.append('text')
      .attr('dy', d => (d.r || 5) + 15)
      .attr('text-anchor', 'middle')
      .text(d => d.label)
      .attr('fill', '#e2e8f0')
      .attr('font-size', d => d.type === NodeType.KING || d.type === NodeType.SERVER ? '12px' : '10px')
      .attr('font-weight', d => d.type === NodeType.KING ? 'bold' : 'normal')
      .style('pointer-events', 'none')
      .attr('class', 'cinzel shadow-sm');

    // Simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as GraphNode).x!)
        .attr('y1', d => (d.source as GraphNode).y!)
        .attr('x2', d => (d.target as GraphNode).x!)
        .attr('y2', d => (d.target as GraphNode).y!);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Initial zoom out slightly
    const initialTransform = d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8).translate(-width/2, -height/2);
    svg.call(zoom.transform, initialTransform);

  }, [dimensions, data, onNodeSelect]);

  return (
    <div ref={wrapperRef} className="w-full h-full relative overflow-hidden">
      <svg ref={svgRef} className="w-full h-full block" />
    </div>
  );
};

export default ConstellationMap;
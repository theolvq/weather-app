import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { svg } from 'd3';

export default function Chart({ response }) {
  const d3Chart = useRef(null);
  const { hourly } = response;

  useEffect(() => {
    const chart = d3Chart.current;
    if (hourly) {
      // Massage data
      const dates = hourly.map((d) => d.dt * 1000);
      const temps = hourly.map((d) => d.temp);

      // Create Graph
      const margin = { top: 20, right: 40, bottom: 30, left: 30 };
      const width =
        chart.parentNode.getBoundingClientRect().width -
        margin.left -
        margin.right;
      const height = 310 - margin.top - margin.bottom;

      const viewBoxWidth = width + margin.left + margin.right;
      const viewBoxHeight = height + margin.top + margin.bottom;
      const svg = d3
        .select(chart)
        .attr('viewBox', [0, 0, viewBoxWidth, viewBoxHeight])
        // .attr('width', width + margin.left + margin.right)
        // .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      // Create Axis
      const x = d3.scaleTime().domain(d3.extent(dates)).range([0, width]);

      svg
        .append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x));

      const y = d3
        .scaleLinear()
        .domain([d3.max(temps) + 2, d3.min(temps) - 2])
        .range([height, 0]);

      svg.append('g').call(d3.axisLeft(y));

      // Create Line
      const line = svg
        .append('path')
        .datum(hourly)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 5)
        .attr(
          'd',
          d3
            .line()
            .x((d) => x(d.dt * 1000))
            .y((d) => y(d.temp)),
        );
      // Create tooltip
      const tooltip = d3.select(chart).append('div').attr('class', 'tooltip');
      // Hover effects
      line.on('mouseover', () => {
        line
          .transition()
          .duration(200)
          .attr('stroke-width', 8)
          .ease(d3.easeBackInOut);
        tooltip.style('hidden', false);
      });
      line.on('mouseout', () => {
        line
          .transition()
          .duration(200)
          .attr('stroke-width', 5)
          .ease(d3.easeBackInOut);
      });
    }

    return () => {
      d3.select(chart).selectAll('*').remove();
    };
  });

  return (
    <div id='d3-chart' className='md:col-span-3 md:col-start-2 card'>
      <svg ref={d3Chart} />
    </div>
  );
}

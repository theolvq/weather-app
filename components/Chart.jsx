import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
// import './LineChart.css';

export default function Chart({ response }) {
  const d3Chart = useRef(null);
  const { hourly } = response;

  useEffect(() => {
    if (hourly) {
      const dates = hourly.map((d) => d.dt);
      const temps = hourly.map((d) => d.temp);

      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const width =
        parseInt(d3.select('#d3-chart').style('width'), 10) -
        margin.left -
        margin.right;
      const height =
        parseInt(d3.select('#d3-chart').style('height'), 10) -
        margin.top -
        margin.bottom;

      const svg = d3
        .select(d3Chart.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      const x = d3.scaleTime().domain(d3.extent(dates)).range([0, width]);

      svg
        .append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x));

      const max = d3.max(temps);

      const y = d3.scaleLinear().domain([-40, max]).range([height, 0]);

      svg.append('g').call(d3.axisLeft(y));

      svg
        .append('path')
        .datum(hourly)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr(
          'd',
          d3
            .line()
            .x((d) => x(d.dt))
            .y((d) => y(d.temp)),
        );
    }
  }, [hourly]);

  if (!hourly) {
    return null;
  }

  return (
    <div
      id='d3-chart'
      className='md:col-start-2 md:col-end-4 card min-w-max w-96'
    >
      <svg ref={d3Chart} />
    </div>
  );
}

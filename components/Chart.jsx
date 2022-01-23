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
        .domain([d3.min(temps) - 2, d3.max(temps) + 2])

        .range([height, 0]);

      svg.append('g').call(d3.axisLeft(y));

      // Create Line
      const line = svg
        .append('path')
        .datum(hourly)
        .attr('class', 'line')
        .attr(
          'd',
          d3
            .line()
            .x((d) => x(d.dt * 1000))
            .y((d) => y(d.temp)),
        );

      const circles = svg
        .append('g')
        .selectAll('circle')
        .data(hourly)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(d.dt * 1000))
        .attr('cy', (d) => y(d.temp))
        .attr('r', 4)
        .attr('class', 'dot');

      // Hover effects
      function onMouseOver(event, d) {
        const [x, y] = d3.pointer(event);

        d3.select('#d3-chart')
          .append('div')
          .attr('class', 'tooltip')
          .attr('r', 6)
          .style('opacity', 1)
          .style('left', `${x - width + 40}px`)
          .style('top', `${y - height + 40}px`)
          .html(
            `${d.temp}°C <br/> at ${new Date(d.dt * 1000).toLocaleTimeString(
              'en-CA',
              {
                hour: 'numeric',
                minute: 'numeric',
              },
            )}`,
          );
      }

      function onMouseMove(event, d) {
        const [x, y] = d3.pointer(event);

        d3.select('.tooltip')
          .style('left', `${x + 40}px`)
          .style('top', `${y + 40}px`);
      }

      function onMouseOut() {
        d3.select('.tooltip').style('opacity', 0).remove();
      }
      circles
        .on('mouseover', onMouseOver)
        .on('mouseout', onMouseOut)
        .on('mousemove', onMouseMove);
    }

    return () => {
      d3.select(chart).selectAll('*').remove();
    };
  });

  return (
    <div id='d3-chart' className='relative md:col-span-3 md:col-start-2 card'>
      <svg ref={d3Chart} />
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

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
      const margin = { top: 32, right: 40, bottom: 32, left: 24 };
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

      // Graph Label
      svg
        .append('text')
        .attr('class', 'label-title')
        .attr('x', width / 2)
        .attr('y', -margin.top / 8)
        .attr('text-anchor', 'middle')
        .text('Next 48 hours');

      //  X axis label
      svg
        .append('text')
        .attr('class', 'label')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom)
        .attr('text-anchor', 'middle')
        .text('Time');

      //  Y axis label
      svg
        .append('text')
        .attr('class', 'label')
        .attr('x', 0 - margin.left)
        .attr('y', 0 - margin.top / 4)
        .text('Temp (°C)');

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
          .style('opacity', 1)
          .html(
            `${d.temp}°C <br/> 
             <img
              src=${`http://openweathermap.org/img/wn/${d.weather[0].icon}.png`}
              alt=${d.weather[0].description}
              width="25"
              height="25"
             /> ${d.weather[0].main}, <br/>
            on ${new Date(d.dt * 1000).toLocaleDateString('en-CA', {
              day: 'numeric',
              month: 'short',
            })} at ${new Date(d.dt * 1000).toLocaleTimeString('en-CA', {
              hour: 'numeric',
              minute: 'numeric',
            })}             
            `,
          );
      }

      function onMouseMove(event, d) {
        const [x, y] = d3.pointer(event);
        const isTooLow = y > height * 0.66;
        const isTooRight = x > width * 0.9;

        if (isTooLow) {
          d3.select('.tooltip')
            .style('left', `${x + 40}px`)
            .style('top', `${y - 80}px`);
          return;
        }
        if (isTooRight) {
          d3.select('.tooltip')
            .style('left', `${x - 100}px`)
            .style('top', `${y + 40}px`);
          return;
        }

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

  if (!hourly) {
    return (
      <div
        id='d3-chart'
        className='sm:col-span-2 lg:col-span-3 card relative z-0 flex items-center justify-center'
      >
        <div className='h-3/4 w-11/12 placeholder' />
      </div>
    );
  }

  return (
    <div
      id='d3-chart'
      className='sm:col-span-2 lg:col-span-3 card relative z-0'
    >
      <svg ref={d3Chart} />
    </div>
  );
}

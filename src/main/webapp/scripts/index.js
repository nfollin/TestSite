function init(){
	body = d3.select('body')
	var width = $(window).width();
	var height = $(window).height();
	var renderwidth = 100;
	var margin = 10;
	var boxheight =50;
	var bottom = 10;
	svg = body.append('svg').attr('height', height).attr('width',width );

	        rect = svg.append('rect').transition().duration(1000).attr('width', renderwidth)
	                        .attr('height', boxheight)
	                        .attr('x', margin)
	                        .attr('y', bottom)
	                        .style('fill', 'blue')
	                        .attr('stroke', 'black');

	        text = svg.append('text').transition().duration(1500).text('Booz')
	                        .attr('x', 2*margin)
	                        .attr('y', bottom + boxheight/2)
	                        .attr('fill', 'white')
	                        .style("font-size",16);
	                        
	        rect = svg.append('rect').transition().duration(1500).attr('width', renderwidth)
	                        .attr('height', boxheight)
	                        .attr('x', 2*margin + renderwidth)
	                        .attr('y', bottom)
	                        .style('fill', 'blue')
	                        .attr('stroke', 'black');

	        text = svg.append('text').transition().duration(2000).text('Allen')
	                        .attr('x', 3*margin + renderwidth)
	                        .attr('y', bottom+boxheight/2)
	                        .attr('fill', 'white')
	                        .style("font-size",16);
	                        
	        rect = svg.append('rect').transition().duration(2500).attr('width', renderwidth)
	                        .attr('height', boxheight)
	                        .attr('x', 3*margin + 2*renderwidth)
	                        .attr('y', bottom)
	                        .style('fill', 'blue')
	                        .attr('stroke', 'black')
	                        .style("font-size",16);

	        text = svg.append('text').transition().duration(3000).text('Hamilton')
	                        .attr('x', 4*margin + 2 * renderwidth)
	                        .attr('y', bottom + boxheight/2)
	                        .attr('fill', 'white')
	                        .style("font-size",16);
	        
}
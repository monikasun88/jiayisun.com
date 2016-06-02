// JavaScript
window.sr = ScrollReveal({duration:1000, distance:'15%', scale:1, viewFactor:0.5 });
sr.reveal('.more-info-textbox-1', { origin:'top', delay:100 });
sr.reveal('.more-info-textbox-2', { origin:'top', delay:200 });
sr.reveal('.more-info-textbox-3', { origin:'top', delay:300 });
sr.reveal('.more-info-textbox-4', { origin:'top', delay:400 });


// var data = d3.range(256).map(function () {
// 	return Math.random();
// });

var data = [0.2, 0.4, 0.5, 0.2, 0.6]

var height = 400;
var width = 600;
var barPadding = 2;
var barWidth = (width / data.length) - barPadding;

var yScale = d3.scale.linear()
	.domain([0, d3.max(data) + 0.1*d3.max(data)])
	.range([0, height]);

var xScale = d3.scale.ordinal()
	.domain(data)
	.rangeBands([0, width], 0.1, 0.3);

var svg = d3.select("#chartarea")
	.style('width', width + 'px')
	.style('height', height + 'px');

svg.selectAll('rect')
	.data(data)
	.enter()
	.append('rect')
	.attr('class', 'bar')
	.attr("x", function (d, i) {
		return xScale(d);
	})
	.attr("y", function (d, i) {
		return height;
	})
	.attr("width", function (d, i) {
		return xScale.rangeBand()
	})
	.attr("fill", function (d, i) {
		return 'rgb(256, ' + Math.round(i / 2) + ', ' + i + ')'
	})
	.attr("height", 0)
	.transition()
	.duration(200)
	.delay(function (d, i) {
		return i * 50;
	})
	.attr("y", function (d, i) {
		return height - yScale(d);
	})
	.attr("height", function (d, i) {
		return yScale(d);
	});

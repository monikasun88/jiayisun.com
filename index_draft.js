// JavaScript
window.sr = ScrollReveal({duration:1000, distance:'15%', scale:1, viewFactor:0.5 });
sr.reveal('.more-info-textbox-1', { origin:'top', delay:100 });
sr.reveal('.more-info-textbox-2', { origin:'top', delay:200 });
sr.reveal('.more-info-textbox-3', { origin:'top', delay:300 });
sr.reveal('.more-info-textbox-4', { origin:'top', delay:400 });
sr.reveal('#chartarea', { origin:'right', delay:200 });


// var data = d3.range(256).map(function () {
// 	return Math.random();
// });

// var data = [0.3, 0.4, 0.5, 0.2, 0.6]


var margin = {top: 20, right: 20, bottom: 30, left: 120},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .2);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5, "");

var svg = d3.select("#chartarea").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("skills.txt", type, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.skills; }));
  // y.domain([0, d3.max(data, function(d) { return d.rating; })]);
  y.domain([0, 5]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  // svg.append("g")
  //     .attr("class", "y axis")
  //     .call(yAxis)
  //   .append("text")
  //     .attr("transform", "rotate(-90)")
  //     .attr("y", 6)
  //     .attr("dy", ".71em")
  //     .style("text-anchor", "end")
  //     .text("Rating");

  var rating_actual = ["Noob", "Beginner", "Moderate", "Expert", "Grand Master"]
  svg.selectAll('.line')
    .data(rating_actual)
    .enter()
    .append('line')
    .attr('x1', 0)
    .attr('x2', width)
    .attr('y1', function(d, i) y(i+1))
    .attr('y2', function(d, i) y(i+1))
    .style('stroke', 'grey')
  svg.selectAll('.line')
    .data(rating_actual)
    .enter()
    .append('text')
    .attr('x', function(d, i) (-d.length/2*9)-50)
    .attr('y', function(d, i) y(i+1)+5)
    .text(function(d, i) d)
    .style('font-family', 'Roboto Slab')
    .style('font-size', '15px');

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.skills); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return height; })
      .attr("fill", "red")
      .attr("height", 0)
      .transition()
			.duration(300)
			.delay(function (d, i) {
				return (i * 50);
			})
      .attr("y", function(d) { return y(d.rating); })
      .attr("height", function(d) { return height - y(d.rating); });

    });

  // var rating_actual = ["Noob", "Beginner", "Moderate", "Expert", "Grand Master"]
  // svg.selectAll("line")
  //   .data(rating_actual)
  //   .enter().append('line')
  //   // .attr("x1", function(d, i) { return 0; })
  //   // .attr("x2", function(d, i) { return width; })
  //   // .attr("y1", function(d, i) { return i + 1; })
  //   // .attr("y2", function(d, i) { console.log(i + 1); return i + 1; })
  //   .attr("y1", function(d, i) { 3; })
  //   .attr("y2", function(d, i) { 3; })
  //   .style("stroke", "blue");

function type(d) {
  d.rating = +d.rating;
  return d;
}

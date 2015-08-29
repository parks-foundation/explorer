var d3 = require('d3');
var topo = require('topojson');
var bulk = require('bulk-require');
var us = require('./../topojson/us.json');
var sections = bulk(__dirname, ['../topojson/parks/*.json']);
console.log(sections);

var w = 960;
var h = 1160;

var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var projection = d3.geo.albersUsa()
  .translate([w/2, h/2]);

var path = d3.geo.path()
  .projection(projection);

  svg.append("g")
    .attr("class", "states")
    .selectAll("path")
    .data(topo.feature(us, us.objects.states).features)
    .enter().append("path")
    .attr("d", path);

  svg.append('g')

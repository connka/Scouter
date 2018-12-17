import React, {Component} from 'react';

class SunburstGraph extends Component {

    render() {
        return(
        <div class="sunburst-wrapper">
            <div class="block">
                <script>
                    const width = 500,
                            height = 700,
                            radius = (Math.min(width, height) / 2) - 10;
                        const formatNumber = d3.format(",d");
                        const x = d3.scaleLinear()
                        .range([0, 2 * Math.PI]);
                        const y = d3.scaleSqrt()
                        .range([0, radius]);
                        const light = ['#CE632D', '#FFDB00', '#266B6B', '#093B6A', '#5E5A5F', '#fff'];
                        const mid = ['#5E5A5F', '#093B6A', '#CE632D', '#CE632D', '#CE632D'];
                        const palettes = [light, mid];
                        const firstPalette = palettes
                            .map(d => d.reverse())
                            .reduce((a, b) => a.concat(b));
                        const color = d3.scaleOrdinal(firstPalette);
                
                        const partition = d3.partition();
                        const arc = d3.arc()
                        .startAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x0))); })
                        .endAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x1))); })
                        .innerRadius(function (d) { return Math.max(0, y(d.y0)); })
                        .outerRadius(function (d) { return Math.max(0, y(d.y1)); });
                        const svg = d3.select(".sunburst-wrapper .block").append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .append("g")
                        .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");
                        d3.json("docs/data.json", function (error, xyz) {
                        if (error) throw error;
                
                        root = d3.hierarchy(xyz);
                        root.sum(function (d) { return d.size; });
                        svg.selectAll("path")
                            .data(partition(root).descendants())
                            .enter().append("path")
                            .attr("d", arc)
                            .style('stroke', '#fff')
                            .style("fill", function (d) { return color((d.children ? d : d.parent).data.name); })
                            .on("click", click)
                            .append("title")
                            .text(function (d) { return d.data.name + "\n" + formatNumber(d.value) + " TNG"; });
                
                        function click(d) {
                            svg.transition()
                            .duration(750)
                            .tween("scale", function () {
                                const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
                                yd = d3.interpolate(y.domain(), [d.y0, 1]),
                                yr = d3.interpolate(y.range(), [d.y0 ? 20 : 0, radius]);
                                return function (t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); };
                            })
                            .selectAll("path")
                            .attrTween("d", function (d) { return function () { return arc(d); }; });
                        }
                    });
                </script>
            </div>
            </div>
        )
    }
}

export default SunburstGraph;
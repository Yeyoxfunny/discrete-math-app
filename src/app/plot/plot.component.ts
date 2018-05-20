import { Component, OnInit } from '@angular/core';

declare const math: any;
declare const Plotly: any;

@Component({
  selector: 'app-plot',
  templateUrl: 'plot.component.html'
})

export class PlotComponent implements OnInit {

  equation: string;

  constructor() { }

  ngOnInit() { }

  draw() {
    try {
      const expression = math.compile(this.equation);
      const xValues = math.range(-10, 10, 0.5).toArray();
      console.log(xValues);
      const yValues = xValues.map(x => expression.eval({x: x}));

      const data = {
        x: xValues,
        y: yValues,
        type: 'scatter'
      };
      Plotly.newPlot('plot', [data]);
    } catch (err) {
      console.error(err);
    }
  }
}

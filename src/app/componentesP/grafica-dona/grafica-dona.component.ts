import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {
 // @Input() donaData: any = [[ 1, 2, 3]]; 

  @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: MultiDataSet = [ ];
  @Input('chartType') doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}

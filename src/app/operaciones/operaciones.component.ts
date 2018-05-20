import { Component, OnInit } from '@angular/core';
import { Operacion, OPERACIONES_INSTANCIAS } from './operaciones.util';

@Component({
  selector: 'app-operaciones',
  templateUrl: 'operaciones.component.html'
})

export class OperacionesComponent implements OnInit {
  sistemasNumericos = [
    { name: 'Binario', value: 2 },
    { name: 'Octal', value: 8 },
    { name: 'Decimal', value: 10},
    { name: 'Hexadecimal', value: 16}
  ];

  operaciones: Operacion[] = OPERACIONES_INSTANCIAS;

  valor1: string;
  valor2: string;
  sistemaNumerico: number;
  operacion: Operacion;
  resultado;

  constructor() { }

  ngOnInit() { }

  calcular() {
    this.resultado = this.operacion.calcular(this.valor1, this.valor2, this.sistemaNumerico);
  }
}

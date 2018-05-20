export interface Operacion {
  nombre: string;

  calcular(valor1, valor2, base);
}

export class Suma implements Operacion {
  nombre = 'Suma';

  calcular(valor1: any, valor2: any, base: any) {
    const value1 = parseInt(valor1, base);
    const value2 = parseInt(valor2, base);
    return (value1 + value2).toString(base);
  }
}

export class Resta implements Operacion {
  nombre = 'Resta';

  calcular(valor1: any, valor2: any, base: any) {
    const value1 = parseInt(valor1, base);
    const value2 = parseInt(valor2, base);
    return (value1 - value2).toString(base);
  }
}

export class Multiplicacion implements Operacion {
  nombre = 'Multiplicación';

  calcular(valor1: any, valor2: any, base: any) {
    const value1 = parseInt(valor1, base);
    const value2 = parseInt(valor2, base);
    return (value1 * value2).toString(base);
  }
}

export class Division implements Operacion {
  nombre = 'División';

  calcular(valor1: any, valor2: any, base: any) {
    const value1 = parseInt(valor1, base);
    const value2 = parseInt(valor2, base);
    return (value1 / value2).toString(base);
  }
}

export const OPERACIONES_INSTANCIAS = [new Suma(), new Resta(), new Multiplicacion(), new Division()];

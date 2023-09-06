import Aluno from "./Aluno.js";

export default class AlunoTecnicoADS extends Aluno {
    #notas;
  
    constructor(nome, matricula, notas) {
      super(nome, matricula);
      this.#notas = notas;
    }
  
    /**
     * Uso do método reduce() para calcular o produto de todas as notas no array this.#notas iniciando com um valor inicial de 1. Isso é feito multiplicando cada nota pelo valor total acumulado.
     * calcula a média geométrica usando a fórmula matemática apropriada: raiz enésima do produto das notas, onde n é o número de notas.
     * uso do toFixed(2) para formatar a média geométrica com duas casas decimais.
     * retorna uma mensagem que inclui a média geométrica calculada e o nome do aluno. 
     */
    calcularMedia() {
        let media = this.#notas.reduce(function (total, nota) {
          return (total * nota);
        }, 1); 

        // Calcula a média geométrica usando a fórmula: raiz enésima do produto das notas
        let mediaGeometrica = Math.pow(media, (1 / this.#notas.length));
        return `A média do aluno Técnico em ADS ${this.nome} é ${mediaGeometrica.toFixed(2)}`;
    }
  }
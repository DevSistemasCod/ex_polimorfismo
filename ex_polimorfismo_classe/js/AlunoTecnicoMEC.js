import Aluno from "./Aluno.js";

export default class AlunoTecnicoMEC extends Aluno {
    #notas;
  
    constructor(nome, matricula, notas) {
      super(nome, matricula);
      this.#notas = notas;
    }
  
    /**
     * Uso do método reduce() para somar todas as notas no array this.#notas e calcular a soma total.
     * dividimos a soma total pelo número de notas para calcular a média simples.
     * foi usado toFixed(2) para formatar a média com duas casas decimais.
     * retorna uma mensagem que inclui a média calculada e o nome do aluno.
     */
    calcularMedia() {
        // Reduz o array de notas para calcular a média simples
        let media = this.#notas.reduce(function (total, nota) {
          return (total + nota); 
        }, 0) / this.#notas.length;
    
        return `A média do aluno Técnico em Mecatrônica ${this.nome} é ${media.toFixed(2)}`;
    }
  }
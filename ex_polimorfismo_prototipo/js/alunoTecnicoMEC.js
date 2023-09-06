import Aluno from './aluno.js';
export default AlunoTecnicoMEC;


// "subclasse" AlunoTecnicoMEC
function AlunoTecnicoMEC(nome, matricula, notas) {
    /**
     * A função call é usada para chamar o construtor da classe Aluno (superclasse) com
     * os parâmetros nome e matricula, e assim inicializar as propriedades nome e matricula.
     *  O argumento this se refere à instância atual de AlunoTecnicoMEC
     * precisamos passar o this como argumento no método call 
     * para estabelecer o contexto de execução da função que está 
     * sendo chamada. 
     * De forma simples, o this representa o objeto atual no qual 
     *  função será executada.
     */
    Aluno.call(this, nome, matricula);
    
    this.notas = notas;
}

/**
 * Define o protótipo de AlunoTecnicoMEC como um objeto que herda 
 * de Aluno.prototype. Isso estabelece uma relação de herança entre 
 * a classe AlunoTecnicoMEC e a classe Aluno,
 * permitindo que AlunoTecnicoMEC herde métodos e propriedades de Aluno.
 */
AlunoTecnicoMEC.prototype = Object.create(Aluno.prototype);

/**
 * Restaura a referência ao construtor da classe AlunoTecnicoMEC para AlunoTecnicoMEC.
 * Quando uma classe herda de outra em JavaScript, a propriedade "constructor" da classe filha
 * às vezes precisa ser ajustada manualmente para que ela aponte para o construtor da classe filha
 * em vez de herdar a referência do protótipo pai. Esta linha garante que o construtor de
 * AlunoTecnicoMEC seja AlunoTecnicoMEC em vez de Aluno.
 */
AlunoTecnicoMEC.prototype.constructor = AlunoTecnicoMEC;

// Adiciona um método calcularMedia ao protótipo de Aluno
Aluno.prototype.calcularMedia = function() {
    // Função nomeada para somar as notas
    function somarNotas(total, nota) {
        return (total + nota);
    }

    // O método reduce é usado para acumular os valores de um array em um único valor.
    // ele recebe uma função de redução (nesse caso, somarNotas) e um valor inicial (0).
    // O valor inicial (0) é atribuído ao parâmetro "total" na primeira chamada da função somarNotas.

    // O reduce percorre o array "this.notas" e aplica a função somarNotas para acumular as notas.
    let media = this.notas.reduce(somarNotas, 0) / this.notas.length;    

return "A média do aluno " + this.nome + " do curso Técnico em Mecatrônica: é " + media.toFixed(2);
};


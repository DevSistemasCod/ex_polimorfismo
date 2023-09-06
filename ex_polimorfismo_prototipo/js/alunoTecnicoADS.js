import Aluno from './aluno.js';
export default AlunoTecnicoADS;

// Classe AlunoTecnicoADS
function AlunoTecnicoADS(nome, matricula, notas) {
    Aluno.call(this, nome, matricula);
    this.notas = notas;
}

AlunoTecnicoADS.prototype = Object.create(Aluno.prototype);
AlunoTecnicoADS.prototype.constructor = AlunoTecnicoADS;

AlunoTecnicoADS.prototype.calcularMedia = function() {
    // Cálculo da média geométrica
    let media = Math.pow(this.notas.reduce(function(total, nota) {
        return (total * nota);
    }, 1), 1 / this.notas.length);

    return "A média do aluno do curso Técnico em ADS: " + this.nome + " é " + media.toFixed(2);
};
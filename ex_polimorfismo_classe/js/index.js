import AlunoTecnicoADS from './AlunoTecnicoADS.js';
import AlunoTecnicoMEC from './AlunoTecnicoMEC.js';

// Cria instâncias de AlunoTecnicoADS e AlunoTecnicoMEC
let alunoTecADS = new AlunoTecnicoADS("Carlos", "123", [8, 7, 9]);
let alunoTecMEC = new AlunoTecnicoMEC("Pedro", "456", [9, 9, 10]);

// Chama o método calcularMedia em ambas as instâncias e imprime os resultados
console.log(alunoTecADS.calcularMedia()); 
console.log(alunoTecMEC.calcularMedia()); 

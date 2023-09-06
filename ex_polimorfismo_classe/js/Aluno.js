export default class Aluno {
    #nome;
    #matricula;
  
    constructor(nome, matricula) {
      this.#nome = nome;
      this.#matricula = matricula;
    }
  
    get getNome() {
      return this.#nome;
    }
  
    set setNome(nome) {
      this.#nome = nome;
    }
  
    get getMatricula() {
      return this.#matricula;
    }
  
    set setMatricula(matricula) {
      this.#matricula = matricula;
    }
  }

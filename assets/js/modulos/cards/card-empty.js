import { isEmpty } from "../utilitarios.js";

export class CardEmpty{
  #type;

  constructor(type){
    if(!isEmpty(type)){
      this.#type = type;
    }else{
      throw new Error('O parâmetro informado é nulo');
    }
  }

  render(){
    switch(this.#type){
      case 'courses':
        return generateCard('course');
      break;
      case 'formations':
        return generateCard('formation');
      break;

      default:
        throw new Error('Não foi existe ação para o tipo de card vazio definido');
      break;
    }

    function generateCard(type){
      return `
      <div class="card-${type} card-empty">
        <div class="card-empty-content">
          <span class="card-empty-content-image"></span>
          <h3 class="card-empty-content-title">Nada aqui por enquanto...</h3>
          <button class="button-refresh-query-api" data-action="refresh-query-api">carregar dados&nbsp;<span class="button-refresh-query-api-icon"></span></button>
        </div>
      </div>`;
    }
  }
}
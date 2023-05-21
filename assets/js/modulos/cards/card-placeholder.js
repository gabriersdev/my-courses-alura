import { isEmpty } from "../utilitarios.js";

export class CardPlaceholder{
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
        return `
        <div class="card-course card-placeholder">
          <div class="card-course-header placeholder-glow">
            <span class="placeholder col-1"></span>
            <span class="placeholder col-3"></span>
          </div>
          <div class="card-course-body placeholder-glow">
            <h3 class="card-course-body-title placeholder"></h3><br><br>
            <div class="card-course-body-footer">
              <div class="access-data placeholder-glow" style="width: 40%;">
                <span class="placeholder col-10"></span><br>
                <span class="placeholder col-4"></span>
              </div>
              <div class="progress-data placeholder-glow" style="width: 40%;">
                <span class="placeholder col-4"></span><br>
                <span class="placeholder col-10"></span>
              </div>
            </div>
          </div>
        </div>
        `;
      break;

      case 'formations':
        return `
        <div class="card-formation card-placeholder">
          <div class="card-formation-header placeholder-glow">
            <span class="placeholder col-1"></span>
            <span class="placeholder col-3"></span>
          </div>
          <div class="card-formation-body placeholder-glow">
            <h3 class="card-formation-body-title placeholder"></h3>
            <span class="placeholder col-6" style="height: 25px;"></span><br><br><br>
            <div class="card-formation-body-footer">
              <div class="access-data placeholder-glow" style="width: 40%;">
                <span class="placeholder col-10"></span><br>
                <span class="placeholder col-4"></span>
              </div>
              <div class="progress-data placeholder-glow" style="width: 40%;">
                <span class="placeholder col-4"></span><br>
                <span class="placeholder col-10"></span>
              </div>
            </div>
          </div>
        </div>
        `;
      break;

      default:
        throw new Error('Não foi existe ação para o tipo de card vazio definido');
      break;
    }
  }
}
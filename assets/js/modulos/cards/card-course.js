import { isEmpty } from '../utilitarios.js';
import { DinamycLastAccess } from '../dinamycLastAccess.js';

export class CardCourse{
  render(title, progress, access){
    if(!isEmpty(title) && !isEmpty(progress) && !isEmpty(access)){
      return `
      <div class="card-course">
        <div class="card-course-header">
          <span class="card-course-header-tag"></span>
          <div class="card-course-header-progress" style="--s: ${100 - Math.abs(progress.percentage)}%" data-toggle="tooltip" data-placement="bottom" data-bs-custom-class="custom-tooltip" title="Progresso">
            <progress value="${Math.abs(progress.percentage)}" min="0" max="100"></progress>
          </div>
        </div>
        <div class="card-course-body">
          <h3 class="card-course-body-title">${title}</h3>
          <div class="card-course-body-footer">
            <div class="access-data">
              <span class="access-data-label">último acesso</span>
              <span class="access-data-info">${this.dinamycLastAccess(access.last_access)}</span>
            </div>
            <div class="progress-data">
              <span class="progress-data-info">${Math.abs(progress.percentage)}%</span>
              <span class="progress-data-label">de progresso</span>
            </div>
          </div>
        </div>
      </div>`;
    }else{
      throw new Error('Um ou mais parâmetros informados são nulos');
    }
  }
  
  dinamycLastAccess(last_access){
    return new DinamycLastAccess(last_access).render();
  }
}
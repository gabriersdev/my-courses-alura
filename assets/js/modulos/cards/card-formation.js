import { hexToRgbA, isEmpty } from '../utilitarios.js';
import { DinamycLastAccess } from '../dinamycLastAccess.js';

export class CardFormation{
  render(title, description, progress, access){
    if(!isEmpty(title) && !isEmpty(description) && !isEmpty(progress) && !isEmpty(access)){
      return `
      <div class="card-formation">
        <div class="card-formation-header">
          <span class="card-formation-header-tag"></span>
          <span class="card-formation-header-progress" data-toggle="tooltip" data-placement="bottom" data-bs-custom-class="custom-tooltip" title="Progresso">${Math.abs(progress.finishedSteps)}/${Math.abs(progress.totalSteps)}</span>
        </div>
        <div class="card-formation-body">
          <h3 class="card-formation-body-title">${title.length >= 75? title.substr(0, 75) + '...' : title}</h3>
          <span class="card-formation-body-courses-finished" style="--c: ${hexToRgbA(description.color)}">
            <div>
              <span></span>
              ${this.personalizeCoursesCompletes(progress.finishedCourses)}
            </div>
          </span>
          <div class="card-formation-body-footer">
            <div class="access-data">
              <span class="access-data-label">último acesso</span>
              <span class="access-data-info">${this.dinamycLastAccess(access.last_access)}</span>
            </div>
            <div class="progress-data">
              <span class="progress-data-info">${Math.floor((progress.finishedSteps * 100) / progress.totalSteps)}%</span>
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

  personalizeCoursesCompletes(finishedCourses){
    let ret = null;
    if(finishedCourses <= 0){
      ret = `<b>nenhum curso</b>concluído`;
    }else if(finishedCourses == 1){
      ret = `<b>1 curso</b>concluído`;
    }else{
      ret = `<b>${finishedCourses} cursos</b>concluídos`
    }

    return ret;
  }
}
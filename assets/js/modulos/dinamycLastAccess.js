import { converterParaMesBRL } from "./utilitarios.js";

export class DinamycLastAccess{
  #last_acces = null;

  constructor(last_access){
    this.#last_acces = last_access;
  }

  render(){
    const date_moment = moment(this.#last_acces / 1000, 'X');
    
    // Diferença em dias entre a hora atual e o timestamp informado
    const diff_day = moment().diff([date_moment.get('year'), date_moment.get('month'), date_moment.get('date')], 'day');
    let ret = null;
    
    switch(diff_day){
      case 0:
      ret = 'Hoje';
      break;
      
      case 1:
      ret = 'Ontem';
      break;
      
      case 2:
      ret = 'Anteontem';
      break;
      
      default:
      // Diferença em meses entre a hora atual e o timestamp inforamdo
      const diff_month = moment().diff([date_moment.get('year'), date_moment.get('month'), date_moment.get('date')], 'month');

      if(diff_month < 11){
        ret = `${date_moment.get('date')} de ${converterParaMesBRL(date_moment.get('month')).substr(0, 3)}`;
      }else{
        ret = `${date_moment.format('DD') + ' ' + converterParaMesBRL(date_moment.get('month')).substr(0, 3) + ' ' + date_moment.format('YYYY')}`;
      }
      break;
    }
    
    return ret;
  }
}
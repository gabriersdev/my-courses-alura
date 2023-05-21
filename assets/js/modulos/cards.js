import { CardCourse } from "./cards/card-course.js"
import { CardFormation } from "./cards/card-formation.js"
import { CardPlaceholder } from "./cards/card-placeholder.js"
import { CardEmpty } from "./cards/card-empty.js"

export class Cards{
  #type
  #title
  #description
  #progress
  #access

  constructor(type, title, description, progress, access){
    this.#type = type;
    this.#title = title;
    this.#description = description;
    this.#progress = progress;
    this.#access = access;
  }

  createCard(){
    let ret = null;

    switch(this.#type.toLowerCase()){
      case 'course':
        ret = new CardCourse().render(this.#title, this.#progress, this.#access)
      break;
      
      case 'formation':
        ret = new CardFormation().render(this.#title, this.#description, this.#progress, this.#access);
      break;
      
      case 'courses empty':
      case 'formations empty':
        ret = new CardEmpty(this.#type.toLowerCase().split(' ')[0]).render();
      break;

      case 'courses placeholder':
      case 'formations placeholder':
        ret = new CardPlaceholder(this.#type.toLowerCase().split(' ')[0]).render();
      break;

      default:
        throw new Error('Não há implementação para o tipo de card definido nessa instância');
      break;
    }

    return ret;
  } 

  getType(){
    return this.#type
  }

}
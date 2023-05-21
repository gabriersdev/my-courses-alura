"use strict";

import { Cards } from "./modulos/cards.js";
import { hexToRgbA, isEmpty } from "./modulos/utilitarios.js";

(() => {
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  $(document).ready(function(){
    $('[data-bs-toggle="popover"]').popover();  
  });
  
  document.querySelectorAll('[data-recarrega-pagina]').forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload();
    })
  })
  
  function atribuirLinks(){
    const linkElementos = document.querySelectorAll('[data-link]');
    
    linkElementos.forEach(link => {
      switch(link.dataset.link.toLowerCase().trim()){
        case 'my-profile':
        link.href = 'https://cursos.alura.com.br/user/devgabrielribeiro';
        break;
        
        case 'profile-one':
        link.href = 'https://cursos.alura.com.br/emprega-one/profile/devgabrielribeiro';
        break;
        
        case 'expresso-mobilidade':
        link.href = 'https://exp.epizy.com/';
        break;
        
        case 'music-ui':
        link.href = 'https://gabrieszin.github.io/music.ui/';
        break;
        
        case 'confirmacao-cca':
        link.href = 'https://gabrieszin.github.io/confirmacao-cca/';
        break;
        
        case 'birthday-message':
        link.href = 'https://gabrieszin.github.io/birthday-message/';
        break;
        
        case 'github-dev':
        link.href = 'https://github.com/gabrieszin/';
        break;
        
        case 'github-projeto':
        link.href = 'https://github.com/gabrieszin/my-courses-alura';
        break;
        
        case 'portfolio':
        link.href = 'https://gabrieszin.github.io/portfolio/';
        break;  
        
        case 'linkedin':
        link.href = 'https://linkedin.com/in/gabrielribeirodev/';
        break;  
      }
    })
  }
  
  atribuirLinks();
  
})();

async function conexao(){
  const url = `https://www.alura.com.br/api/dashboard/d217e36b4071d6c4d6e6e97c4ced902a48332f60a59705954cc11c570724ba78`;
  return await fetch(url)
  .then((response) => 
  response.json()
  )
  .then((retorno) => 
  retorno
  )
  .catch((error) => 
  error
  )
}

conexao().then(retorno => {
  //Caso existam dados tanto para os cursos sendo realizados e as formações
  if(!isEmpty(retorno.courseProgresses) && !isEmpty(retorno.guides)){
    const dados = Array.of(retorno.courseProgresses, ...retorno.guides)
    console.log(dados)
    
  }
  else{
    //Caso não existam dados para os cursos em realização
    if(isEmpty(retorno.courseProgresses)){
      
    }
    //Caso não existam dados para as formações
    if(isEmpty(retorno.guides)){

    }
  } 
  
});

const card = new Cards('course', 'Titulo', null, {percentage: 75}, {last_access: '1665571366000'});
// console.log(card.createCard())

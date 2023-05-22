"use strict";

import { Cards } from "./modulos/cards.js";
import { isEmpty, atribuirLinks } from "./modulos/utilitarios.js";
import { base_html } from "./modulos/conteudos.js";

(() => {
  
  function renderTooltips(){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
  
  $(document).ready(function(){
    $('[data-bs-toggle="popover"]').popover();  
  });
  
  document.querySelectorAll('[data-recarrega-pagina]').forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload();
    })
  })
  
  document.querySelector('body').innerHTML += base_html;

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('[data-element="loading"]').classList.add('slide-out-top');
      document.querySelector('html').classList.remove('block-scroll');
    }, 500);
    
    const area_courses = document.querySelector('[data-area="area-courses"]');
    const area_formations = document.querySelector('[data-area="area-formations"]');
    
    area_courses.innerHTML += new Cards('courses placeholder', null).createCard()
    area_formations.innerHTML += new Cards('formations placeholder', null).createCard()
    
    const requireAPI = (element_type) => {
      async function conexao(){
        try{
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
        }catch(error){
          console.log(error);
        }
      }
      
      conexao().then(retorno => {
        area_courses.innerHTML = '';
        area_formations.innerHTML = '';
        
        //Caso existam dados para os cursos sendo realizados
        if(!isEmpty(retorno.courseProgresses)){
          const dados = Array.of(retorno.courseProgresses);
          
          dados[0].forEach(course => {
            const card = new Cards('course', course.name.trim(), null, {percentage: course.progress}, {last_access: course.lastAccessTime})
            area_courses.innerHTML += card.createCard();
          })
        }else{
          //Caso não existam dados para os cursos em realização
          area_courses.innerHTML += new Cards('courses empty', null).createCard();
        }
        
        //Caso existam dados para as formações
        if(!isEmpty(retorno.guides)){
          const dados = Array.of(retorno.guides);
          
          dados[0].forEach(formation => {
            const card = new Cards('formation', formation.name, {color: formation.color}, {finishedSteps: formation.finishedSteps, totalSteps: formation.totalSteps, finishedCourses: formation.finishedCourses}, {last_access: formation.lastAccessTime});
            area_formations.innerHTML += card.createCard();
          })
        }
        else{
          //Caso não existam dados para as formações
          area_formations.innerHTML += new Cards('formations empty', null).createCard();
        }
        
        renderTooltips();
        listernerClickRefreshQueryAPI();
      });
    }
    
    const clickRefreshQueryAPI = (evento) => {
      const element_type = evento.target.closest('[data-area]').dataset.area.split('-')[1];
      evento.target.closest('[data-area]').innerHTML = new Cards(`${element_type} placeholder`, null).createCard();
      setTimeout(() => {
        requireAPI(element_type);
      }, 1000)
    }
    
    const listernerClickRefreshQueryAPI = () => {
      document.querySelectorAll('[data-action="refresh-query-api"]').forEach(button => {
        button.addEventListener('click', (evento) => {
          clickRefreshQueryAPI(evento);
        })
      })
    }
    
    atribuirLinks();
    
    setTimeout(() => {
      requireAPI();
      listernerClickRefreshQueryAPI();
    }, 1000);
  })
  
})();
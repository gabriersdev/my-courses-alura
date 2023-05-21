"use strict";

(() => {
  hljs.highlightAll();
  
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
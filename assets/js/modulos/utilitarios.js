const isEmpty = (valor) => {
  if(typeof valor == 'string'){
    return valor == undefined || valor == null || valor.length <= 0;
  }else if(Array.isArray(valor)){
    return valor.length <= 0;
  }else if(typeof valor == 'object'){
    return Object.keys(valor).length <= 0;
  }else{
    return valor == undefined || valor == null
  }
}

const capitalize = (valor) => {
  return valor.charAt(0).toUpperCase() + valor.substr(1, valor.length);
}

const atualizarDatas = () => {
  const dataAtual = new Date();
  document.querySelectorAll("[data-ano-atual]").forEach(area => {
    area.textContent = `${dataAtual.getFullYear()}`;
  })
} 

const controleFechamentoModal = () => {
  const modais = document.querySelectorAll('.modal');
  modais.forEach(modal => {
    const btnFecha = modal.querySelector('[data-modal-fecha]');
    btnFecha.addEventListener('click', () => {
      $('#' + modal.id).modal('hide');
    })
  })
}

function sanitizarString(string){
  if(typeof string == 'string'){
    const substituir = [
      {
        original: '-',
        subst: ''
      },
      {
        original: '(',
        subst: ''
      },
      {
        original: ')',
        subst: ''
      },
      {
        original: ' ',
        subst: ''
      },
    ]
    
    substituir.forEach(substituicao => {
      string = string.replace(substituicao.original, substituicao.subst)
    })
    
    return string.trim();
  }else{
    console.log('O tipo do parâmetro passado não é uma string.');
    return null;
  }
}

const converterParaMesBRL = (numero) => {
  let mes = null;
  
  switch (numero + 1){
    case 1: mes = 'janeiro'; break;
    case 2: mes = 'fevereiro'; break;
    case 3: mes = 'março'; break;
    case 4: mes = 'abril'; break;
    case 5: mes = 'maio'; break;
    case 6: mes = 'junho'; break;
    case 7: mes = 'julho'; break;
    case 8: mes = 'agosto'; break;
    case 9: mes = 'setembro'; break;
    case 10: mes = 'outubro'; break;
    case 11: mes = 'novembro'; break;
    case 12: mes = 'dezembro'; break;
    default: mes = 'janeiro'; break;
  }
  
  return mes;
}

function hexToRgbA(hex){
  //Credit: https://stackoverflow.com/questions/21646738/
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    c= hex.substring(1).split('');
    if(c.length== 3){
      c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c= '0x'+c.join('');
    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.6)';
  }
  throw new Error('Bad Hex');
}

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
      
      case 'home-conversor':
      link.href = 'https://gabrieszin.github.io/home-page-Conversor/';
      break;
      
      case 'music-ui':
      link.href = 'https://gabrieszin.github.io/music.ui/';
      break;
      
      case 'confirmacao-cca':
      link.href = 'https://gabrieszin.github.io/cca/';
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

    link.setAttribute('rel', 'noreferrer noopener');
  })
}

export{
  isEmpty,
  capitalize,
  atualizarDatas,
  controleFechamentoModal,
  sanitizarString,
  converterParaMesBRL,
  hexToRgbA,
  atribuirLinks
}
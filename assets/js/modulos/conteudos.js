const base_html = `
<header class="header">
<div class="header-main container">
  <div class="header-main-content">
    <img class="header-main-content-photo" src="./assets/img/profile.png">
    <hgroup class="hgroup">
      <h1 class="hgroup-principal">consumindo a API da Alura</h1>
      <h2 class="hgroup-secondary">meus cursos e trilhas</h2>
    </hgroup>
  </div>
  <div class="header-main-actions">
    <a href="#" class="btn header-main-actions-link action" data-link="my-profile">meu perfil<span class="open-in-new"></span></a>
  </div>
</div>
</header>

<main class="main content">
<div class="container">
  <section class="info-group">
    <div class="info-group-header">
      <h2 class="info-group-header-title">meus cursos</h2>
      <hr class="info-group-header-line">
    </div>
    <div class="info-group-body area-courses" data-area="area-courses">
    </div>
  </section>
  
  <section class="info-group">
    <div class="info-group-header">
      <h2 class="info-group-header-title">trilhas e formações</h2>
      <hr class="info-group-header-line">
    </div>
    <div class="info-group-body area-formations" data-area="area-formations">
    </div>
  </section>
</div>
</main>

<div class="footer container"> 
<footer> 
  <div class="row"> 
    <div class="col-12 col-md"> 
      <div>
        <small class="d-block">Desenvolvido por</small> 
        <a href="" data-link="github-dev">
          <h5 class="bold">Gabriel Ribeiro</h5>
        </a>
      </div><br>
      <div>
        <small class="d-block">&copy; <span data-ano-atual=''>2023</span></small> 
        <small class="d-block mb-3-muted">Todos os direitos reservados.</small> 
      </div>
    </div> 
    <div class="col-6 col-md"> 
      <h5>Alura</h5> 
      <ul class="list-unstyled text-small"> 
        <li class="mb-1"><a class="text-decoration-none" href="#" data-link="my-profile">Meu perfil</a></li> 
        <li class="mb-1"><a class="text-decoration-none" href="#" data-link="profile-one">Perfil ONE</a></li> 
      </ul> 
    </div> 
    <div class="col-6 col-md"> 
      <h5>Outros projetos</h5>
      <ul class="list-unstyled text-small"> 
        <li class="mb-1"><a class="text-decoration-none" href="#" data-link="music-ui">music.ui</a></li> 
        <li class="mb-1"><a class="text-decoration-none" href="#" data-link="confirmacao-cca">Confirmação CCA</a></li> 
        <li class="mb-1"><a class="text-decoration-none" href="#" data-link="birthday-message">Birthday Message</a></li> 
      </ul> 
    </div> 
    <div class="col-6 col-md"> 
      <h5>Sobre</h5>
      <ul class="list-unstyled text-small"> 
        <li class="mb-1"><a class="text-decoration-none" href="#" data-link="github-dev">Desenvolvedor</a></li> 
        <li class="mb-1"><a class="text-decoration-none" href="#" data-link="github-projeto">GitHub</a></li> 
        <li class="mb-1"><a class="text-decoration-none" href="#" data-link="portfolio">Portfólio</a></li> 
        <li class="mb-1"><a class="text-decoration-none" href="#" data-link="linkedin">Linkedin</a></li> 
      </ul> 
    </div> 
  </div> 
</footer>
<br> 
</div>
`;

export{
  base_html
}

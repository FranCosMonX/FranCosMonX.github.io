artigos = document.querySelectorAll('.card');

artigos.forEach(artigo => {

  artigo.addEventListener('click', () => {
    dado = artigo.dataset.id;
    if (dado === 'impGpeditWin1011PRO') {
      window.location.replace("/pages/projetos/suporteTecnico/impGpeditWin1011PRO/index.html");
      console.log("funciona");
    }
  })
})
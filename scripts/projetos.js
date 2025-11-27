projetos = document.querySelectorAll('.card');

projetos.forEach(projeto => {

  projeto.addEventListener('click', () => {
    dado = projeto.dataset.id;
    if (dado === 'suporteTecnico') {
      window.location.replace("/pages/projetos/suporteTecnico/index.html");
      console.log("funciona");
    }
  })
})
projetos = document.querySelectorAll('.projeto');

projetos.forEach(projeto => {

    projeto.addEventListener('click', () => {
        dado = projeto.dataset.id;
        if (dado === 'impGpeditWin1011PRO') {
            window.location.replace("/pages/projetos/suporteTecnico/index.html");
        }
    })
})
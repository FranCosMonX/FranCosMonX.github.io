const header = document.getElementById('header')

const carregarHeader = () => {
  header.innerHTML = `
  <div class="menu-bar">
    <div class="user-logo">FranCosMonX</div>
    <nav>
      <div class="btn-menu-mobile">MENU</div>
      <ul class="lista-principal">
        <li><a href="#">Portifólio</a></li>
        <li><a href="/pages/projetos.html">Projetos</a></li>
        <li><a href="#">Curriculos</a></li>
        <li><a href="/pages/sobre.html">Sobre</a></li>
      </ul>
    </nav>
  </div>
  `
  const logo = document.querySelector('.user-logo')

  logo.addEventListener('click', () => {
    window.location.replace("/index.html")
  })
}

carregarHeader();
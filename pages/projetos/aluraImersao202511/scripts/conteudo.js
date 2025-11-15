cartas =document.querySelectorAll(".carta")

cartas.forEach(carta => {
  carta.addEventListener('click', (e) => {
    dado = carta.dataset.id //Identificar qual carta foi chamada
    if (dado === "calculadora")
      window.location.assign('../pages/calculadora.html')
  })
});
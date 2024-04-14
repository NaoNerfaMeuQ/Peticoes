const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})

/// Lista de gradientes
/* var gradientes = [
  "linear-gradient(to top, #D2E2FB 30%, #86A8DB)",
  "linear-gradient(to top, #FF5F6D 30%, #FFC371)",
  "linear-gradient(to top, #36D1DC 30%, #5B86E5)",
  // Adicione mais gradientes aqui
];

// Função para mudar o gradiente de fundo
function mudaGradiente() {
  var gradienteIndex = Math.floor(Math.random() * gradientes.length);
  var elemento = document.querySelector('.home');
  elemento.style.background = gradientes[gradienteIndex];
}

// Muda o gradiente de fundo a cada 5 segundos (5000 milissegundos)
setInterval(mudaGradiente, 2000);
*/

// Lista de textos para o texto
var logos = ["Resistência", "Conforto", "Explorador", "Curioso", "Selva", "O seu calçado predileto", "Tem um pouco de mato por aqui"];

// Função para mudar o texto do logo
function mudaLogo() {
  var logoIndex = Math.floor(Math.random() * logos.length);
  document.querySelector('h1').textContent = logos[logoIndex];
}
setInterval(mudaLogo, 5000);



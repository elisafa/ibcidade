const img = document.querySelectorAll('.navbar-brand img')
const fig1 = document.querySelector('.fig_1')
const fig2 = document.querySelector('.fig_2')
const nav = document.querySelector('nav')

console.log(nav.clientWidth)


function removerClass(){
  img.forEach(item => {
    item.classList.remove('aparecer')
  })
}

function remover(){
if(nav.clientWidth < 1140){
  removerClass()
  fig1.classList.add('aparecer')
}else{
  removerClass()
  fig2.classList.add('aparecer')
  // nav.style.height = '90px'
}
}
window.addEventListener('resize', remover)


const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBtn = document.getElementById('but-reiniciar');

avanca.forEach(button =>{
button.addEventListener('click',function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-'+this.getAttribute('data-proximo');

    atual.classList.remove('ativo');
    const proximoElemento= document.getElementById(proximoPasso);

    if(proximoElemento){
        proximoElemento.classList.add('ativo');
    } else {
        console.error(`Elemento com ID "${proximoPasso}"  não encontrado.`);
    }
 })
});


// reinicia o jogo ao clicar no batão de reiniciar 
if  (reiniciarBtn){
  reiniciarBtn.addEventListener('click', ()=> {
     const atual = document.querySelector('.ativo');
     atual.classList.remover('ativo');
     document.getElementById('passo-0').classList.add('ativo');

});

}
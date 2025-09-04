const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBtn = document.getElementById('but-reiniciar');

avanca.forEach(button =>{
button.addEventListener('click',function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-'+this.getAttribute('data-proximo');

    atual.classList.remove('ativo');
    const proximoElemento= document.getElementById(proximoPasso);

    if(proximoElemento{
        proximoElemento.classList.add('ativo');
    } else {
        console.error(`elemento com ID "${proximoPasso}"  não encontrado.');
    }
 });   
});


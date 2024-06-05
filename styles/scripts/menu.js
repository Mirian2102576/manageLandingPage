const menu = document.querySelector('.mobile nav');
const hamburguer = document.querySelector('#hamburguer');
const closeHamburguer = document.querySelector('#close-menu');
const backdrop = document.querySelector('#backdrop');

//código a ser executado qdo o 'hamburguer' for clicado
hamburguer.addEventListener('click', () =>{
    if(menu.getAttribute('class') == "dropOut"){  //se o menu estiver escondido (dropOut)
        hamburguer.setAttribute('src', 'images/icon-close.svg'); //altera imagem de 'hamburger' para 'x' de fechar
        menu.classList.remove("dropOut"); //remove a classe 'dropOut' para adicionar 'dropIn'
        menu.classList.add("dropIn");
        backdrop.setAttribute('style','display:flex'); // define o estilo 'backdrop' para ser visível
        
    }else{
        hamburguer.setAttribute('src', 'images/icon-hamburger.svg'); //se a imgaem 'hamburguer' estiver visível (dropIn)
        backdrop.setAttribute('style','display:none'); // define 'backdrop' para ser oculto
        menu.classList.remove("dropIn");//remove a imagem de 'hamburguer' para icone de menu
        menu.classList.add("dropOut");   
    }
})


function validarFormulario() {
    var inputEmail = document.getElementById('email');
    var mensagemErro = document.getElementById('erro-email');

    // Verifica se o campo está vazio
    if (inputEmail.value.trim() === '') {
        mensagemErro.innerHTML = 'Por favor, insira um endereço de e-mail.';
        mensagemErro.style.display = 'block'; // Mostra a mensagem de erro
        return false;
    }

    // Verifica se o campo está no formato de e-mail correto
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputEmail.value)) {
        mensagemErro.innerHTML = 'Por favor, insira um endereço de e-mail válido.';
        mensagemErro.style.display = 'block'; // Mostra a mensagem de erro
        return false;
    }

    //Limpa o conteúdo do campo
    inputEmail.value = '';

    // Limpa a mensagem de erro caso a validação tenha passado com sucesso
    mensagemErro.innerHTML = '';
    mensagemErro.style.display = 'none'; // Esconde a mensagem de erro
    return true;
}
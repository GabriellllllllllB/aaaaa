function formatarCPF(campoCPF) {
    campoCPF.value = campoCPF.value.replace(/\D/g, '');
    campoCPF.value = campoCPF.value.replace(/(\d{3})(\d)/, '$1.$2');
    campoCPF.value = campoCPF.value.replace(/(\d{3})(\d)/, '$1.$2'); 
    campoCPF.value = campoCPF.value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function handleSubmit(event) {
    event.preventDefault();

    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = 'CADASTRADO COM SUCESSO';

    setTimeout(() => {
        mensagemDiv.textContent = ''; 
        window.location.href = 'file:///C:/Users/gabri/Desktop/academia/ENTRADA.html'; 
    }, 2000);
}


        function mudouTamanho() {
        if (window.innerWidth >= 768) {
            itens.style.display = 'block'
            } else {
                itens.style.display = 'none'
            }
        }

emailjs.init("W3ufJ4RTBJsaXAkeE");

const form = document.querySelector('#form'); 

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    emailjs.sendForm('Ricardo@10', 'template_xfh6e1d', this)
        .then(() => {
            alert('Email enviado com sucesso!');
            form.reset();
        }, (err) => {
            alert('Erro ao enviar email: ' + JSON.stringify(err));
        });
});
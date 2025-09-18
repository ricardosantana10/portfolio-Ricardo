
        function mudouTamanho() {
        if (window.innerWidth >= 768) {
            itens.style.display = 'block'
            } else {
                itens.style.display = 'none'
            }
        }

emailjs.init("W3ufJ4RTBJsaXAkeE");

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_hknkd2t";
    const templateID = "template_xdov22k";
    const submitButton = document.getElementById("submit_button");
    submitButton.textContent = "Enviando...";

    emailjs.send(serviceID,templateID, formData)
        .then(() => {
            alert("Tudo certo!");
        })
        .catch((error) => {
            console.error("Erro no envio", error);
        })
        .finally(() => {
            submitButton.textContent = "Enviar mensagem"
        })
});
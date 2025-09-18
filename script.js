
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
    submitButton.disabled = true;

    emailjs.send(serviceID,templateID, formData)
        .then(() => {
            Toastify({
                text: "Email enviado com sucesso!",
                duration: 3000,
                style: {
                    background: "#28a745",
                    color: "#f4f4f4",
                }
            }).showToast();
            
            document.getElementById("form").reset();
        })
        .catch((error) => {
            Toastify({
                text: "Erro ao enviar o email",
                duration: 3000,
                style: {
                    background: "#dc3545",
                    color: "#f4f4f4",
                }
            }).showToast();
        })
        .finally(() => {
            submitButton.textContent = "Enviar mensagem",
            submitButton.disabled = false;
        })
});

        // Função para o menu mobile
        function clickMenu() {
            var menu = document.getElementById('menu');
            if (menu.style.display == 'flex') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'flex';
                menu.style.flexDirection = 'column';
                menu.style.gap = '1.5rem';
                menu.style.padding = '20px';
                menu.style.background = 'rgba(11, 15, 23, 0.95)';
                menu.style.borderRadius = '10px';
                menu.style.position = 'absolute';
                menu.style.top = '50px';
                menu.style.right = '10px';
                menu.style.zIndex = '1000';
            }
        }

        function mudouTamanho() {
            var menu = document.getElementById('menu');
            if (window.innerWidth >= 768) {
                menu.style.display = 'flex';
                menu.style.flexDirection = 'row';
                menu.style.position = 'absolute';
                menu.style.top = '20px';
                menu.style.right = '30px';
            } else {
                menu.style.display = 'none';
            }
        }

        // Adicionar rolagem suave aos links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80; // Offset para compensar header fixo se houver
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    // Fechar menu mobile após clicar
                    var menu = document.getElementById('menu');
                    if (window.innerWidth < 768) {
                        menu.style.display = 'none';
                    }
                }
            });
        });

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
                text: "Mensagem enviada com sucesso!",
                duration: 2000,
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
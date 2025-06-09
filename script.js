
function enviarMensaje() {
    const chatBox = document.getElementById('chat-box');
    const input = document.getElementById('mensaje');
    const mensaje = input.value.trim();
    if (mensaje !== "") {
        const div = document.createElement('div');
        div.className = 'mensaje';
        div.textContent = "Tú: " + mensaje;
        chatBox.appendChild(div);
        input.value = "";

        setTimeout(() => {
            const respuesta = document.createElement('div');
            respuesta.className = 'mensaje';
            respuesta.textContent = "Gracias por tu mensaje. Pronto te responderemos.";
            chatBox.appendChild(respuesta);
        }, 1000);
    }
}

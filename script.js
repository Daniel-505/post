document.getElementById('send-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value;
    
    if (messageText.trim() !== "") {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('p');
        messageElement.textContent = messageText;
        chatBox.appendChild(messageElement);
        messageInput.value = ""; // Limpiar el input
        chatBox.scrollTop = chatBox.scrollHeight; // Desplazar hacia abajo
    }
});

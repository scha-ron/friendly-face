function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var messageText = messageInput.value.trim();

    if (messageText !== '') {
        var chatMessages = document.getElementById('chat-messages');
        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat window
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}


function handleKeyPress(event) {
    // Check if the Enter key is pressed (keyCode 13)
    if (event.keyCode === 13) {
        // Prevent the default behavior of the Enter key (form submission)
        event.preventDefault();

        // Call the sendMessage function
        sendMessage();
    }
}
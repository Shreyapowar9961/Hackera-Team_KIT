// Toggle Emoji Picker visibility
document.getElementById('emoji-button').addEventListener('click', function() {
    const emojiPicker = document.getElementById('emoji-picker');
    emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
});

// Function to add an emoji to the input field
function addEmoji(emoji) {
    const inputField = document.getElementById('chat-input-field');
    inputField.value += emoji;
    document.getElementById('emoji-picker').style.display = 'none'; // Hide emoji picker after selecting an emoji
}

// Function to handle sending a new message
function sendMessage() {
    const chatMessages = document.getElementById('chat-messages');
    const inputField = document.getElementById('chat-input-field');
    const messageText = inputField.value.trim();

    if (messageText === '') return;

    // Create a new message element
    const newMessage = document.createElement('div');
    newMessage.classList.add('chat-message', 'sent', 'highlighted');
    newMessage.innerHTML = `
        <p>${messageText}</p>
        <span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <div class="reactions">
            <span class="reaction" onclick="addReaction(this)">👍</span>
            <span class="reaction" onclick="addReaction(this)">❤️</span>
            <span class="reaction" onclick="addReaction(this)">😂</span>
            <span class="reaction" onclick="addReaction(this)">😮</span>
            <span class="reaction" onclick="addReaction(this)">😢</span>
        </div>
    `;

    // Add the new message to the chat
    chatMessages.appendChild(newMessage);
    inputField.value = '';  // Clear the input field

    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle adding a reaction to a message
function addReaction(reactionElement) {
    // Toggle the highlighted state
    const message = reactionElement.closest('.chat-message');
    message.classList.toggle('highlighted');
}

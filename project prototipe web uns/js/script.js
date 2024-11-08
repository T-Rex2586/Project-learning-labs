document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('name').value;
    showPopup(userName);
});

function showPopup(userName) {
    const popupMessage = `Thank you for your feedback, ${userName}!`;
    document.getElementById('popup-modal').style.display = 'flex';
    document.getElementById('popup-modal').querySelector('p').textContent = popupMessage;
}

function closePopup() {
    document.getElementById('popup-modal').style.display = 'none';
    document.getElementById('feedback-form').reset();
}

document.addEventListener("DOMContentLoaded", function() {
     // --- Копирование email (для всех с классом copy-email) ---
    const emails = document.querySelectorAll('.copy-email');
    emails.forEach(email => {
        email.addEventListener('click', function() {
            navigator.clipboard.writeText(email.textContent)
                .then(() => {
                    alert('Email скопирован в буфер обмена!');
                })
                .catch(err => {
                    console.error('Ошибка при копировании: ', err);
                });
        });
    });

    // --- Попапы для кнопок ---
    const popupButtons = document.querySelectorAll('.open-popup');
    const popups = document.querySelectorAll('.popup-container');

    // Открытие попапа
    popupButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popupId = button.getAttribute('data-popup'); // "courses" или "contests"
            const popup = document.getElementById(popupId);
            if (popup) popup.style.display = 'flex';
        });
    });

    // Закрытие попапа
    popups.forEach(popup => {
        popup.addEventListener('click', function(event) {
            if(event.target === popup || event.target.classList.contains('close-popup')) {
                popup.style.display = 'none';
            }
        });
    });

    // --- Текущий год в футере ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
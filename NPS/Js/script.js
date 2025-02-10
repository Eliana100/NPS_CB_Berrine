document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const feedbackItems = document.querySelectorAll('.feedback-item');
    const conditionalQuestion = document.querySelector('.conditional-question');

    let lastClickedRating = 0;

    setTimeout(function() {
        document.getElementById('transition-overlay').style.display = 'none';
    }, 500); // Tempo da transição (em milissegundos)

    // Função para lidar com o clique nas estrelas
    function handleStarClick(star) {
        const rating = parseInt(star.dataset.rating);

        if (rating === lastClickedRating) {
            stars.forEach(s => s.classList.remove('filled'));
            lastClickedRating = 0;
        } else {
            stars.forEach(s => s.classList.remove('filled'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('filled');
            }
            lastClickedRating = rating;
        }
    }

    // Função para lidar com o clique nos botões de feedback
    function handleFeedbackButtonClick(button) {
        const buttons = button.closest('.feedback-item').querySelectorAll('.buttons button');
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        // Verifica se há pelo menos um botão 'negative' selecionado
        let hasNegativeFeedback = false;
        feedbackItems.forEach(item => {
            const selectedButton = item.querySelector('.buttons button.negative.selected');
            if (selectedButton) {
                hasNegativeFeedback = true;
            }
        });

        // Exibe ou oculta a pergunta condicional com base no feedback negativo
        conditionalQuestion.style.display = hasNegativeFeedback ? 'block' : 'none';
    }


    // Adiciona event listeners para as estrelas
    stars.forEach(star => {
        star.addEventListener('click', function() {
            handleStarClick(this);
        });
    });

    // Adiciona event listeners para os botões de feedback
    feedbackItems.forEach(item => {
        const buttons = item.querySelectorAll('.buttons button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                handleFeedbackButtonClick(this);
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextButton');
    const options = document.querySelectorAll('.option');

    let selectedOption = null;

    options.forEach(option => {
        option.addEventListener('click', function() {
            // Remove a classe 'selected' de todas as opções
            options.forEach(opt => opt.classList.remove('selected'));

            // Adiciona a classe 'selected' à opção clicada
            this.classList.add('selected');

            // Habilita o botão "Avançar"
            nextButton.disabled = false;

            // Armazena a opção selecionada
            selectedOption = this.dataset.option;
        });
    });

    // Redireciona para a página de feedback ao clicar em "Avançar"
    nextButton.addEventListener('click', function() {
        // Adiciona uma classe ao body para iniciar a transição
        document.body.classList.add('transitioning');

        // Aguarda a transição terminar antes de redirecionar
        setTimeout(function() {
            window.location.href = 'teste.html';
        }, 500); // Tempo da transição (em milissegundos)
    });
});
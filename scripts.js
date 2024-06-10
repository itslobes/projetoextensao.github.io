document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegue os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Exiba uma mensagem de confirmação
    alert(`Obrigado, ${name}. Sua mensagem foi enviada com sucesso!`);
});

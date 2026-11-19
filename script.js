document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o formulário de agendamento e o botão de agendamento
    const formAgendamento = document.getElementById('form-agendamento');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    // Adicionar um ouvinte de evento para o envio do formulário
    formAgendamento.addEventListener('submit', function(event) {
        event.preventDefault(); // Impedir o envio padrão do formulário

        // Capturar os valores dos campos
        const dataSelecionada = document.getElementById('data').value;
        const horaSelecionada = document.getElementById('hora').value;

        // Verificar se os campos estão preenchidos
        if (dataSelecionada && horaSelecionada) {
            // Mostrar a mensagem de sucesso
            mensagemSucesso.style.display = 'block';
            mensagemSucesso.textContent = 'Horário agendado com sucesso!';

            // Limpar os campos do formulário
            formAgendamento.reset();
        } else {
            // Caso os campos não estejam preenchidos
            mensagemSucesso.style.display = 'none';
            alert('Por favor, preencha todos os campos!');
        }
    });
});
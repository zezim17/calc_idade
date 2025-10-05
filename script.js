document.getElementById("calcular").addEventListener("click", function() {
    const dataNascimento = document.getElementById("nascimento").value;

    if (!dataNascimento) {
        document.getElementById("resultado").textContent = "Por favor, selecione uma data.";
        return;
    }

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    // Ajusta caso ainda não tenha feito aniversário este ano
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    document.getElementById("resultado").textContent = `Sua idade é ${idade} anos.`;
});

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    //impede que a página seja recarregada
    event.preventDefault();

    //captura os dados digitados pelo usuário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const nivel = document.getElementById("nivel").value;
    const objetivo = document.getElementById("objetivo").value.trim();

    //verifica se os campos estão preenchidos corretamente
    if (
        nome.length < 2 ||
        email === "" ||
        nivel === "" ||
        objetivo.length < 5
    ) {
        resultado.innerHTML = `
            <div class="mensagem-erro">
                <h3>Verifique suas respostas!</h3>
                <p>Preencha todos os campos corretamente antes de enviar.</p>
            </div>
        `;

        return;
    }

    //define uma mensagem conforme o conhecimento de Libras
    let mensagemNivel = "";

    if (nivel === "nenhum") {
        mensagemNivel = "Que tal começar aprendendo os cumprimentos e o alfabeto manual?";
    } else if (nivel === "basico") {
        mensagemNivel = "Continue praticando e amplie seu vocabulário em Libras!";
    } else if (
        nivel === "intermediario" ||
        nivel === "avancado"
    ) {
        mensagemNivel = "Compartilhe seus conhecimentos e incentive a inclusão!";
    } else {
        mensagemNivel = "Continue aprendendo sobre acessibilidade e inclusão.";
    }

    //exibe o resultado na própria página
    resultado.innerHTML = `
        <div class="mensagem-sucesso">
            <h3>Obrigado por participar, ${nome}!</h3>

            <p>
                Sua reflexão sobre a importância da Libras
                é um passo para uma sociedade mais inclusiva.
            </p>

            <p><strong>Seu e-mail:</strong> ${email}</p>

            <p><strong>Sua motivação:</strong> ${objetivo}</p>

            <p><strong>Próximo passo:</strong> ${mensagemNivel}</p>

            <p>
                Lembre-se: aprender Libras contribui para diminuir
                barreiras de comunicação, inclusive em momentos de crise.
            </p>
        </div>
    `;
});

//limpa a mensagem quando o formulário eh reiniciado
formulario.addEventListener("reset", function() {
    resultado.innerHTML = "";
});

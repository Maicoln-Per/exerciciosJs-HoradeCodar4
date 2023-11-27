const cadastrarEstudantes = () => {
    let estudantes = [];
    do {
        let nomeAluno = prompt("Digite o nome do estudante que deseja cadastrar (ou digite 'PARE' para encerrar o programa)").toUpperCase();
        if (nomeAluno === 'PARE') {
            break;
        } else {
            estudantes.push(nomeAluno);
        }
    } while (true);

    alert(`Quantidade de estudantes cadastrados: ${estudantes.length}`);
    alert(`Lista de estudantes cadastrados: \n${estudantes.join("\n")}`);
}

const verificarPlanetas = () => {
    const planetas = ["Vênus", "Terra", "Plutão", "Marte", "Jupiter", "Saturno"];
    for (let i = 0; i < planetas.length; i++) {
        planetas[i] = planetas[i].toLowerCase();
    }
    while (true) {
        let planetaUsuario = prompt("Digite o nome de um planeta ( ou digite PARE para sair do programa ): \n").toLowerCase();
        if (planetaUsuario === 'pare') {
            break;
        } else if (planetas.includes(planetaUsuario)) {
            alert(`O planeta ${planetaUsuario}, foi encontrado na lista de planetas!`);
        } else {
            alert(`O planeta ${planetaUsuario}, não foi encontrado na lista de planetas!`);
        }
    }
}

const listarCompras = () => {
    const frutas = ['Banana', 'Limão', 'Melancia', 'Uva', 'Morango', 'Caju', 'Melão', 'Maracujá', 'Pitaya', 'Jabuticaba'];
    while (frutas.length > 0) {
        if (frutas.length == 0) {
            break;
        } else {
            alert(`Lista de compras: \n${frutas.join("\n")}`);
            let nomeFruta = prompt("Digite o nome de uma fruta escolhida: \n");
            if (frutas.includes(nomeFruta)) {
                frutas.splice(frutas.indexOf(nomeFruta), 1);
                alert("Fruta retirada do estoque.");
            } else {
                alert("Fruta indisponível no nosso mercado.");
            }
        }
    }
    alert("Lista de compras finalizada.");
}
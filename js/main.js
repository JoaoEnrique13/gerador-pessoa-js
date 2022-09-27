function gerarRg(){
    rg = ['']
    numeroRg = 0
    for(i=0; i<=1; i++){
        numeroRg = Math.floor(Math.random() * 10);
        rg[i] = numeroRg
    }

    for(i=3; i<=10; i++){
        numeroRg = Math.floor(Math.random() * 10);
        rg[i] = numeroRg
        rg[3] = "."
        rg[7] = "."
    }

    rg[11] = "-"
        numeroRg = Math.floor(Math.random() * 10);
        rg[12] = numeroRg
        document.querySelector(".rg").innerHTML = rg.join("")
}

function gerarCpf(){
    cpf = ['']
    numeroCpf =0

    for(i=0; i<=8; i++){
        numeroCpf = Math.floor(Math.random() * 10);
        cpf[i] = numeroCpf
    }

    cpf[9] = "/"

    for(i=10; i<=11; i++){
        numeroCpf = Math.floor(Math.random() * 10);
        cpf[i] = numeroCpf
    }

    document.querySelector(".cpf").innerHTML = cpf.join("")
}


function showData(result){
    numeroCasa = Math.floor(Math.random() * 300);

    celular = "";
    for(i=1; i<=5; i++){
        numeroCel = Math.floor(Math.random() * 9);
        celular += numeroCel
    }
    celular += "-";
    for(i=1; i<=4; i++){
        numeroCel = Math.floor(Math.random() * 9);
        celular += numeroCel
    }
    celCompleto = "(" + result['ddd'] + ") " + celular

    console.log(result['logradouro'] + ' ' + result['uf'])
    document.querySelector(".estado").innerHTML = result['uf']
    document.querySelector(".cidade").innerHTML = result['localidade']
    document.querySelector(".bairro").innerHTML = result['bairro']
    document.querySelector(".rua").innerHTML = result['logradouro'] + ", " + numeroCasa
    document.querySelector(".celular").innerHTML = celCompleto
}

function gerarSexo(){
    sexo = ['masculino', 'feminino']
    numeroSexo = Math.floor(Math.random() * 2)
    document.querySelector(".sexo").innerHTML = sexo[numeroSexo]

    icon = document.querySelector(".img-icon")
    if(numeroSexo == 1){
        sorteio = Math.floor(Math.random() * 7)
        icon.src = "img/mulher" + sorteio + ".png"
        gerarNomeFem()
    }
    else{
        sorteio = Math.floor(Math.random() * 5)
        icon.src = "img/homem" + sorteio + ".png"
        gerarNomeMax()
    }
}

function gerarIdade(){
    data = new Date()
    ano = data.getFullYear()
    diaNascimento = Math.floor((Math.random() * 31) + 1);
    mesNascimento = Math.floor((Math.random() * 12) + 1);
    if(diaNascimento <=9){
        diaNascimento = 0 + "" + diaNascimento
    }
    if(mesNascimento <=9){
        mesNascimento = 0 + "" + mesNascimento
    }
    min = ano - 70
    anoNascimento = Math.floor(Math.random() * (min - 1970)) + 1970;
    dataNascimento = diaNascimento + "/" + mesNascimento + "/" + anoNascimento

    idade = ano - anoNascimento
    idade += " anos"
    document.querySelector(".idade").innerHTML = idade
    document.querySelector(".nascimento").innerHTML = dataNascimento
}


function gerarNomeMax(){
    primeiroNome = [
        'João',
        'Enrique',
        'Vitor',
        'Victor',
        'Adelson',
        'Franciso',
        'Pedro',
        'Higor',
        'Matheus',
        'Marcio',
        'Juan',
        'Lucas',
        'Luan',
        'Marcelo',
        'Maicon',
        'Fernando',
        'Rogerio',
        'Ralf',
        'Jeferson',
        'Marcos'
    ]

    segundoNome = [
        'Barbosa',
        'Santos',
        'Alves',
        'Figueiredo',
        'Azevedo',
        'Rodrigues',
        'Batista',
        'Bispo'
    ]

    numeroPrimeiroNome = Math.floor(Math.random() * primeiroNome.length)
    numeroSegundoNome = Math.floor(Math.random() * 7)
    nomeCompleto = primeiroNome[numeroPrimeiroNome] + " " + segundoNome[numeroSegundoNome]
    document.querySelector(".nome").innerHTML = nomeCompleto
}

function gerarEstadoCivil(){
    estadoCivil = [
        'Casado(a)',
        'Solteiro(a)',
        'Viúvo(a)',
        'Divorciado(a)'
    ]

    numeroEstado = Math.floor(Math.random() * 4)
    document.querySelector(".estadoCivil").innerHTML = estadoCivil[numeroEstado]
}

function gerarNomeFem(){
    primeiroNome = [
        'Maria',
        'Maria Clara',
        'Maria Eduarda',
        'Ana',
        'Marcela',
        'Marcia',
        'Mariane',
        'Moana',
        'Clara',
        'Eduarda',
        'Amanda',
        'Beatriz'
    ]

    segundoNome = [
        'Barbosa',
        'Santos',
        'Alves',
        'Figueiredo',
        'Azevedo',
        'Rodrigues',
        'Batista',
        'Bispo'
    ]

    numeroPrimeiroNome = Math.floor(Math.random() * primeiroNome.length)
    numeroSegundoNome = Math.floor(Math.random() * 7)
    nomeCompleto = primeiroNome[numeroPrimeiroNome] + " " + segundoNome[numeroSegundoNome]
    document.querySelector(".nome").innerHTML = nomeCompleto
}

function gerarCep(){
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    // cep = [0]
    // for(i=0; i<5; i++){
    //     numeroCep = Math.floor(Math.random() * 10)
    //     cep[i] = numeroCep
    // }

    // cep[5] = "-"

    // for(i=6; i<9; i++){
    //     numeroCep = Math.floor(Math.random() * 10)
    //     cep[i] = numeroCep
    // }

    // document.querySelector(".cep").innerHTML = cep.join("")

    cep = [
        '69900-001',//Acre
        '69900-100',//Acre
        '57020-755',//Alagoas
        '57020-010', //Alagoas
        '57020-210',//Alagoas
        '57020-630',//Alagoas
        '68900-073',//Amapa
        '27949-442',//Rio de Janeiro
        '02860-001',//São Paulo
        '01311-000',//São Paulo
        '03694-000',//São Paulo
        '08051-000',//São Paulo
        '08240-230', //São Paulo
    ]

    numeroCep = Math.floor(Math.random() * cep.length)
    novoCep = cep[numeroCep]
    document.querySelector(".cep").innerHTML = novoCep

    fetch(`https://viacep.com.br/ws/${novoCep}/json/`,options)//pega a url da api que mostra os dados pelo cep
    .then(response=> { response.json()//se der certo pegar o json da api
        .then(data => showData(data))
    })//se der certo
    .catch(e => console.log('Deu erro'))//se der errado
}

function gerarEmail(){
    nomeEmail = nomeCompleto.replace(/ /, ".").toLowerCase()
    email = nomeEmail + "@gmail.com"
    console.log(email)
    document.querySelector(".email").innerHTML = email
}

function gerado(){
    document.querySelector(".gerado").classList.add("add-gerador")
    document.querySelector(".ponta-gerador").classList.add("add-gerador")
}

function removerGerado(){
    document.querySelector(".gerado").classList.remove("add-gerador")
    document.querySelector(".ponta-gerador").classList.remove("add-gerador")
}
setInterval(removerGerado,3001)

function gerar(){
    gerarRg()
    gerarCpf()
    gerarSexo()
    gerarIdade()
    gerarEstadoCivil()
    gerarCep()
    gerado()
    gerarEmail()
}

buttongerar = document.querySelector("button")
buttongerar.addEventListener("click", function(){gerar()});

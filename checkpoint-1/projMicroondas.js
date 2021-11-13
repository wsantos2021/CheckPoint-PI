//Informe o prato desejado
const opcaoEscolhida = 1;

//Defina o tempo
const TempoNecessario = 20;

var aparecerMenu = true;



var pratos = [
    {
        id: 1,
        Title: 'Pipoca',
        tempo: 10
    },
    {
        id: 2,
        Title: 'Macarrão',
        tempo: 8
    },
    {
        id: 3,
        Title: 'Feijão',
        tempo: 15
    },
    {
        id: 4,
        Title: 'Carne',
        tempo: 12
    },
    {
        id: 5,
        Title: 'Brigadeiro',
        tempo: 8
    },
]

var existeItem = false;

function Menu() {
    if (aparecerMenu) {
        console.log("MENU")
        pratos.map(function (item, key) {
            console.log(`${item.id} - ${item.Title} - ${item.tempo} segundos`);
        })
        console.log(":")
    }

}
function SelecionarProduto(opcao, tempo) {
    let tempoProduto = 0;
    let comidaMicrondas = "";
        function Cozinhar() {
        console.log('BIIP');
        console.log('BIIP');
        console.log('BIIP');
        console.log('BIIP');
        console.log('BIIP');

        if (tempo < tempoProduto) {
            console.log('Tempo Insuficiente');
            msgExtra = "Pena que deve está frio ;-;";
        }
        //Ao colocar 3x maior que o necessário o Microondas queima.
        if (tempo >= (tempoProduto * 3)) {
            console.log('KABUM');
        }

        //Ao colocar 2x maior que o necessário ela queima.
        if (tempo >= (tempoProduto * 2) && tempo < (tempoProduto * 3)) {
            console.log(`Você queimou a ${comidaMicrondas}`);
        }

        console.log(`\nPrato pronto, bom apetite!!! ~${msgExtra}`);


    }
    pratos.map(function (item, key) {
        if (item.id === opcao) {
            existeItem = true;
            tempoProduto = item.tempo;
            comidaMicrondas = item.Title;
            console.log("\nVocê escolheu: " + item.Title)
            console.log(`\nTempo recomendado: ${item.tempo} segundos`)
            console.log(`Tempo escolhido: ${tempo} segundos\n`);
            console.log('Esquentando...\n');
            setTimeout(Cozinhar, 2000);

        }
    }
    )
    if (existeItem == false) {
        console.log('\nItem não existe! Verifique as opções a cima\n');
    }
}



function microOndas() {
    Menu()
    SelecionarProduto(opcaoEscolhida, TempoNecessario)
}


//Mostra o MENU
microOndas()

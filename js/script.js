// let values = ["goiaba", "bambu"];


// // // console.log(values[0]);

// function exibirLista(){
//     let itensLista = document.getElementById('lista')

//     itensLista.innerHTML = ""

//     for(let i=0;i<values.length;i++){
//         itensLista.innerHTML += `<li> ${values[i]} </li>`
//         // ou "<li>+ values[i]+</li>"

//     }
// }

// function add(){
//     let addvalue = document.getElementById('maisUm').value
//     values.push(addvalue)
// }

let valor = ["Procure ajuda", "Você consegue", "Tenha confiança",
    "Tempos dificeis tornam homens fortes, homens fortes levam a tempos faceis, tempos faceis tornam homens fracos, homens fracos levam a tempos dificeis",
    "A vida nao é facil", "Todo mundo erra",
    "Susan Wolf argumenta que ser feliz não é apenas sentir prazer ou satisfação pessoal, mas sim encontrar sentido na vida através da entrega ativa a projetos com valor objetivo.",
    "leia", "Tenha carisma"]

let click = 0

function msg() {
    let frases = document.getElementById('fs')

    frases.innerHTML = ""

    // length diz qual o tamho da variavel. lembrando que o primeiro conta como 0

    if (click >= valor.length) {
        click = 0
    }

    frases.innerHTML = `<p>${valor[click]}</p>`
    click++

}

function msgRandow() {
    let frases = document.getElementById('fs')

    click = Math.floor(Math.random() * valor.length)
    // ?

    frases.innerHTML = `<p>${valor[click]}</p>`

    click++
}

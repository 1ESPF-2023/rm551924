// Recuperando o botão com o getElementById

const botao = document.getElementById('btn-1');

// Recuperar um item específico com a função querySelector(Parâmetro)

// const seletor = document.querySelector('li');
// console.log(seletor.textContent)

// Recuperar uma lista de elementos com a função querySelectorAll()


const seletores = document.querySelectorAll('li');

seletores.forEach((item) => {

    if(item.textContent == "Item-5"){
        let meuItem = item;
    console.log(`Item selecionado : ${item.textContent}`)
    meuItem.textContent = "TÁ DOMINADO";
    }

})

console.log(seletores)
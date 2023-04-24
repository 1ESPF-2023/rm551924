// // Recuperando o botão com o getElementById

// const botao = document.getElementById('btn-1');

// // Recuperar um item específico com a função querySelector(Parâmetro)

// // const seletor = document.querySelector('li');
// // console.log(seletor.textContent)

// // Recuperar uma lista de elementos com a função querySelectorAll()


// const seletores = document.querySelectorAll('li');

// seletores.forEach((item) => {

//     if(item.textContent == "Item-5"){
//         let meuItem = item;
//     console.log(`Item selecionado : ${item.textContent}`)
//     meuItem.textContent = "TÁ DOMINADO";
//     }

// })

// console.log(seletores)

let tmp = "";

function mudarCor(){
    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() * 255);
    // console.log(r);

    g = Math.round(Math.random() * 255);
    // console.log(g);

    b = Math.round(Math.random() * 255);
    // console.log(b);

    r2 = Math.round(Math.random() * 255);
    // console.log(r);

    g2 = Math.round(Math.random() * 255);
    // console.log(g);

    b2 = Math.round(Math.random() * 255);
    // console.log(b);

    r3 = Math.round(Math.random() * 255);
    // console.log(r);

    g3 = Math.round(Math.random() * 255);
    // console.log(g);

    b3 = Math.round(Math.random() * 255);
    // console.log(b);

    r4 = Math.round(Math.random() * 255);
    // console.log(r);

    g4 = Math.round(Math.random() * 255);
    // console.log(g);

    b4 = Math.round(Math.random() * 255);
    // console.log(b);

    // ^^^^ uma variável pra cada banner/conteudo

    const cabecalho = document.querySelector('.cabecalho');
    cabecalho.style.backgroundColor = `rgb(${r},${g}, ${b})`;

    const banner1 = document.querySelector('.banner-1');
    banner1.style.backgroundColor = `rgb(${r2},${g2}, ${b2})`;

    const banner2 = document.querySelector('.banner-2');
    banner2.style.backgroundColor = `rgb(${r3},${g3}, ${b3})`;

    const conteudo = document.querySelector('.conteudo');
    conteudo.style.backgroundColor = `rgb(${r4},${g4}, ${b4})`;


    tmp = setTimeout(mudarCor, 1000);

}

mudarCor();
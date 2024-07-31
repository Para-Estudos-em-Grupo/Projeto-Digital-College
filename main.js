
let cardContainer = document.querySelector('.cards__produtos__alta');

// CARDS DA SEÇÃO - PRODUTOS EM ALTA
function cards () {
    
    for (let i = 0; i < 8; i++) {
        cardContainer.innerHTML += `
        <div class="card__produto">
            <div class="background__card__produto">
            ${i < 2 ? '<small class="aviso__desconto Text_X-Small_B">30% OFF</small>' : ''}
            <img src="./assets/img/Layer1aa2.png" alt="tênis">
            </div>
            <p class="Text_Tinny_B">Tênis</p>
            <p class="Text_Large-Desktop">K-Swiss V8 - Masculino</p>
            <div>
                <p class="Text_Large-Desktop">$200</p>
                <p class="Text_Large_B">$100</p>
            </div>

        </div>
        `
    }
}

cards();


let cardContainer = document.querySelector('.cards__produtos__alta');

// CARDS DA SEÇÃO - PRODUTOS EM ALTA
function cards () {
    
    for (let i = 0; i < 8; i++) {
        cardContainer.innerHTML += `
        <div class="card__produto">
            <div class="background__card__produto">
            ${i < 2 ? '<small class="aviso__desconto text_x-s_b">30% OFF</small>' : ''}
            <img src="./assets/img/Layer1aa2.png" alt="tênis">
            </div>
            <p class="text_t_b">Tênis</p>
            <p class="text_l-desktop">K-Swiss V8 - Masculino</p>
            <div>
                <p class="text_l-desktop">$200</p>
                <p class="text_l_b">$100</p>
            </div>

        </div>
        `
    }
}

cards();

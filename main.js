let games = [];
const submitBtn = document.querySelector('#add-game');

class Game {
    constructor(title, creator, console, from) {
        this.title = title;
        this.creator = creator;
        this.console = console;
        this.from = from;
    }
}
// första som händer vid rendering av sidan
function setStartGames() {

    const pokemon = new Game('Pokemon', 'Nintendo', 'Switch', 'Cecilia')
    //lägger även till nya objektet i listan över start-spel
    games.push(pokemon);
    const tlou = new Game('The Last Of Us', 'Naughty Dog', 'PS4', 'Martina')
    games.push(tlou);
    const rdr = new Game('Red Dead Redemption', 'Stargames', 'PC', 'Berat')
    games.push(rdr);
}
setStartGames();

submitBtn.addEventListener('click', () => {
    let title = document.querySelector('#title').value;
    let creator = document.querySelector('#creator').value;
    let device = document.querySelector('#console').value;
    let from = document.querySelector('#from').value;

    let newGame = new Game(title, creator, device, from)

    games.unshift(newGame)

    //lägga till nya spelet i local storage under games
    localStorage.setItem('games', JSON.stringify(games))

    renderGameToUI();
})

//nästa som körs när sidan renderas
renderGameToUI();

/* kolla vilken lista som ska ut till UI i rendering*/
function renderGameToUI() {
    //kolla om nya spel är tillagda (då kommer games i ls vara längre än startGames)
    let allGames = JSON.parse(localStorage.getItem('games'));

    if (allGames) {
        games = allGames
    }
    createGameCards();
}

function createGameCards() {
    let gamesContainer = document.querySelector('.games__container')
    gamesContainer.innerHTML = '';

    games.forEach(game => {
        let gameCardEl = document.createElement('article')
        gameCardEl.classList.add('games__container--card')
        gameCardEl.innerHTML = `
            <figure></figure>
            <section class="card__info">
                <h3 class="card__info--title">${game.title}</h3>
                <p class="card__info--creator">${game.creator}</p>
                <p class="card__info--console">${game.console}</p>
                <p class="card__info--from">${game.from}</p>
            </section>
    `;
        gameCardEl.addEventListener('click', () => {
            /* Sätter valt spel i local storage i browsern */
            /* Så vi kan komma åt den var som helst i applikationen */
            localStorage.setItem('game', JSON.stringify(game))
            window.location.href = 'games.html';
        })
        gamesContainer.appendChild(gameCardEl);
    })
}
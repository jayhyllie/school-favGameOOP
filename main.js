let games = [];
const submitBtn = document.querySelector('#add-game');

class Game {
    constructor(title,creator,console,from) {
        this.title = title;
        this.creator = creator;
        this.console = console;
        this.from = from;
    }
}

submitBtn.addEventListener('click', () => {
    console.log('spel');
})

renderGameToUI();

function renderGameToUI() {
    let gamesContainer = document.querySelector('.games__container')
    games.forEach(game => {
        console.log(game);
        gamesContainer.innerHTML += `
            <article class="games__container--card">
                <figure></figure>
                <section class="card__info">
                    <h3 class="card__info--title">${game.title}</h3>
                    <p class="card__info--creator">${game.creator}</p>
                    <p class="card__info--console">${game.console}</p>
                    <p class="card__info--from">${game.from}</p>
                </section>
            </article>
        `
    })
}
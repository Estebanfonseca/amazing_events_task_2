let cards = document.getElementById("section")


for (let i = 0; i < events.length;i++){
    let carta = document.createElement('div')
    carta.className='card rounded-4 '
    carta.innerHTML +=` <img class="p-3 rounded-5" src="${events[i].image}" alt="${events[i].name}" height="250" />
    <article class="card-body">
        <h4>${events[i].name}</h4>
        <p>${events[i].description}</p>
        <a href="#" class="btn btn-secondary">see more</a>
    </article>`
    cards.appendChild(carta)
}









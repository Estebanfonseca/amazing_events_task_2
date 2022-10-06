let fecha = Date.parse(currentDate)

const past= []

for(let pasado of events){
    if(Date.parse(pasado.date) < fecha ){
        past.push(pasado)
    }
}


let card = document.getElementById('sectionPast')

for(let i = 0;i< past.length;i++){
    let carta = document.createElement('div')
    carta.className ='card rounded-4 '
    carta.innerHTML+=` <img class="p-3 rounded-5" src="${past[i].image}" alt="${past[i].name}" height="250" />
    <article class="card-body">
        <h4>${past[i].name}</h4>
        <p>${past[i].description}</p>
        <a href="#" class="btn btn-secondary">see more</a>
    </article>`
    card.appendChild(carta)
}
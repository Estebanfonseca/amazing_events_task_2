let fecha = Date.parse(currentDate)

const upcomming= []

for(let futuro of events){
    if(Date.parse(futuro.date) > fecha ){
        upcomming.push(futuro)
    }
}


let card = document.getElementById('sectionUp')

for(let i = 0;i< upcomming.length;i++){
    let carta = document.createElement('div')
    carta.className ='card rounded-4 '
    carta.innerHTML+=` <img class="p-3 rounded-5" src="${upcomming[i].image}" alt="${upcomming[i].name}" height="250" />
    <article class="card-body">
        <h4>${upcomming[i].name}</h4>
        <p>${upcomming[i].description}</p>
        <a href="#" class="btn btn-secondary">see more</a>
    </article>`
    card.appendChild(carta)
}
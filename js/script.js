// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// console.log(teamMembers);


// selezione elementi output
const teamList = document.querySelector(".team-container");

// creazione variabile vuota
let teamCards = "";

// uso un ciclo for per selezionare tutti gli oggetti dell'array
for (let i = 0; i < teamMembers.length; ) {

}


// creazione funzione genrale che crea la card selezionando i valori degli oggetti
function generaCard(oggetto) {

  // seleziono i valori mettendoli in una costante
  const {nome, role, email, img} = teamMembers;

  // creazione variabile che contiene la card con i valori contenuti negli oggetti

  let singolaCard = `
  <div class="card mb-3" style="max-width: 540px; background-color: black; color: white;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${img}" class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${nome}</h5>
          <p class="card-text">${role}</p>
          <p class="card-text">
            <small class="text-body-primary">${email}nome</small>
          </p>
        </div>
      </div>
  </div>
  `

  return singolaCard
}

// console.log(generaCard());




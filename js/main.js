let domgenerateTicket = document.getElementById('generateTicket');
let domresetBtn = document.getElementById('resetbtn');
let domEta = document.getElementById('eta');
let domKm = document.getElementById('km');
let domName = document.getElementById('name');

let domilTicket = document.getElementById('ilTicket');

let domnomesulTicket = document.getElementById('nomesulTicket');
let domoffertasulTicket = document.getElementById('offertasulTicket');
let domcarrozzasulTicket = document.getElementById('carrozzasulTicket');
let domcodice = document.getElementById('codice');
let domcostosulTicket = document.getElementById('costosulTicket');

let prezzo = (0.21 * domKm);

domgenerateTicket.addEventListener('click',
    function () {


        const eta = domEta.value;
        const km = domKm.value;
        const name = domName.value;

        let prezzo = (0.21 * km);


        if (eta == "minorenne") {
            prezzo = prezzo * 0.8
            domoffertasulTicket.innerHTML = 'Sconto 20% minorenne'

        } else if (eta == "anziano") {
            prezzo = prezzo * 0.6
            domoffertasulTicket.innerHTML = 'Sconto 40% anziano'
        } else {
            domoffertasulTicket.innerHTML = 'Importo pieno'
        }

        domilTicket.classList.remove('display-none');

        domnomesulTicket.innerHTML = name;

        domcostosulTicket.innerHTML = `${prezzo.toFixed(2)}  €`;

        let carrozza = Math.floor(Math.random() * 20) + 1;
        domcarrozzasulTicket.innerHTML = carrozza;

        let codice = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        domcodice.innerHTML = codice;



    });

domresetBtn.addEventListener('click',

    function () {
        domilTicket.classList.add('display-none');
        domName.value = "";
        domKm.value = "";
        domEta = "maggiorenne"
    }
)
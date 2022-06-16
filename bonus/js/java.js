
// PULSANTE PER ATTIVAZIONE FINESTRA CREAZIONE
let add_task = document.querySelector('#add-task');
// let add_section = document.querySelector('#add-section');


// VARIABILI DELLA FINESTRA DI CREAZIONE
let finestra_creazione = document.getElementById('creazione');
let chiudi_finestra = document.getElementById('chiudi');
let input = document.getElementById('testo');
let crea = document.getElementById('crea');

// VERIABILI PER LA PRESA DEI SPAN ESTETICA LIKE - DISLIKE
let t = document.getElementById('t');
let f = document.getElementById('f');

// ZONA PER INSERIMENTO RIGHE NUOVE
let insert_task = document.getElementById('insert_task');

// INPUT PER CREARE NUOVO NOME ETICHETTA
let nome_etichetta = document.getElementById('etichetta_testo');


//--------------------------------------------------------------------------------------------------------

// ETICHETTE CON COLORI VARI
let b = document.getElementById('b');
let g = document.getElementById('g');
let r = document.getElementById('r');
let o = document.getElementById('o');
let v = document.getElementById('v');
let y = document.getElementById('y');
finestra_creazione.style.display = "none";

// ATTIVA FINESTRA CREAZIONE
add_task.addEventListener('click', () => {
    finestra_creazione.style.display = "block";
    console.log('funziona');
});

// CHIUDI FINESTRA CREAZIONE
chiudi_finestra.addEventListener('click', () => {
    finestra_creazione.style.display = "none";
});


//--------------------------------------------------------------------------------------------------------

// VARIABILE PER LE ETICHETTE
let etichetta;

// FUNZIONE PER TOGIERE I COLORI DAI PULSANTI NON ATTIVI
function resetE (g, r, o, v, y){
    g.style.boxShadow = '3px 3px 2px #434343';
    r.style.boxShadow = '3px 3px 2px #434343';
    o.style.boxShadow = '3px 3px 2px #434343';
    v.style.boxShadow = '3px 3px 2px #434343';
    y.style.boxShadow = '3px 3px 2px #434343';
}

// ETICHETTE: ATTIVO - DISATTIVO
b.onclick = (() => { 
    b.style.boxShadow = '3px 3px 2px yellow';
    etichetta = document.getElementById('be'); 
    console.log(etichetta);
    resetE(g,r,o,v,y);
});
g.onclick = (() => { 
    g.style.boxShadow = '3px 3px 2px yellow';
    etichetta = document.getElementById('ge'); 
    console.log(etichetta);
    resetE(b,r,o,v,y);
});
r.onclick = (() => { 
    r.style.boxShadow = '3px 3px 2px yellow';
    etichetta = document.getElementById('re'); 
    console.log(etichetta);
    resetE(b,g,o,v,y);
});
o.onclick = (() => { 
    o.style.boxShadow = '3px 3px 2px yellow';
    etichetta = document.getElementById('oe'); 
    console.log(etichetta);
    resetE(b,g,r,v,y);
});
v.onclick = (() => { 
    v.style.boxShadow = '3px 3px 2px yellow';
    etichetta = document.getElementById('ve'); 
    console.log(etichetta);
    resetE(b,g,r,o,y);
});
y.onclick = (() => { 
    y.style.boxShadow = '3px 3px 2px yellow';
    etichetta = document.getElementById('ye'); 
    console.log(etichetta);
    resetE(b,g,r,o,v);
});


//--------------------------------------------------------------------------------------------------------

// VARABILE PER PRENDERE PRENDERE UNA DELLE DUE POSSIBILITA PER LA CREAZIONE DELLA RIGA
// TRUE - FALSE = LIKE - DISLIKE
let stato_del_testo;

// RESETARE L'OMBRA SEI PULSANTI NON ATTIVI
function resetS (e){
    e.style.boxShadow = '';
}

// PULSANTE DELLA FINESTRA CREAZIONE LIKE
t.onclick = (() => { 
    t.style.boxShadow = '2px 2px 2px yellow, -2px 2px 2px yellow, 2px -2px 2px yellow, -2px -2px 2px yellow';
    stato_del_testo = document.getElementById('te'); 
    resetS(f);
});
// PULSANTE DELLA FINESTRA CREAZIONE DISLIKE
f.onclick = (() => { 
    f.style.boxShadow = '2px 2px 2px yellow, -2px 2px 2px yellow, 2px -2px 2px yellow, -2px -2px 2px yellow';
    stato_del_testo = document.getElementById('fe');
    resetS(t);
});


//--------------------------------------------------------------------------------------------------------

// CREAIAMO LA FUNZIONE PER LA CREAZIONE DEL PULSANTE PER LA CANCELAZIONE DELLA RIGA
let num_nome = 0;
function pulsante_che_cancella(){
    // VARIABILE PER UNIFICARE IL NOSTRO PULSANTE
    // ATTENZIONE UTILE PER IDENTIFICARE IL COSA CREIAMO E CANCELIAMO
    num_nome++;
    
    // CREAZIONE DEL SPAN CHE SARA INSERITO NELLA RIGA CREATA
    let cancella_post_task = document.createElement('span');
    cancella_post_task.setAttribute('class', `cancel_task`);
    cancella_post_task.setAttribute('nome', `ciao_${num_nome}`);
    
    // PRENDIAMO IL VALORE DEL ATTRIBUTO nome CREATO DA NOI
    let nome = cancella_post_task.getAttribute('nome');
    cancella_post_task.setAttribute('onclick', `cancella_padre('${nome}');`);
    cancella_post_task.innerHTML = '&Cross;';
    
    // RITORNO VALORE DELLA STRINGA CREATA PER MANDARLA IN FUNCIONE - crea_riga_nuova()
    return cancella_post_task;
}


//--------------------------------------------------------------------------------------------------------

// VARIABILE PER LA DIMENSIONE DEL CONTENUTO DELLE RIGHE
let aggiunta_num = 1;
// CANCELLO RIGA DEL ADD TASK CON IL PULSANTE X
function cancella_padre(attributo){
    
    // PERNDERE IL FIGLIO CREATO PE LA NEW TASK CON LA VARIABILE DETTA ALLA FUNZIONE
    let span = document.querySelector(`span[nome='${attributo}']`);
    
    // RIMUOVERE IL PADRE CHE IL FIGLIO A ATTIVATO
    insert_task.removeChild(span.parentNode);
    
    
    // TOGLIERE DI 1 PER LA DIMENSIONE DELLA FINESTRA DEL CONTENUTO DELLE RIGHE CREATE DA NOI
    aggiunta_num--;
    insert_task.setAttribute('style', `--p:${aggiunta_num}`);
};


//--------------------------------------------------------------------------------------------------------

// VARIABILE PER PRENDERE IL VALORE DEL ATTRIBUTO minlength DELLA INPUT nome per etichetta
let att = input.getAttribute('minlength');

// FUNZIONE PER LA CREAZIONE DELLA RIGA PER INSERIMENTO DENTRO AL NEW TASK
function crea_riga_nuova() {
    if (input.value.length >= att && etichetta != null && stato_del_testo != null) {

        // AGGIUNTA DI UN NUMERO PER LA DIMENSIONE DELLA FINESTRA CON DENTRO I FIGLI
        aggiunta_num++;
        
        pulsante_che_cancella();
        // CREARE UNA RIGA NUOVA
        let testo_nuovo = document.createElement('p');
        
        let nuovo = pulsante_che_cancella();
        
        // CLONARE DEL CODICE PER UTILIZARLO DENTRO ALLA RIGA, SENZA SPOSTARE I CAMPIONI
        let st = stato_del_testo.cloneNode(true);
        let et = etichetta.cloneNode(true);
        
        // AGGIUNTA ALLO P I VARI TAGS SPAN E CONTENUTO
        // ATTENZIONE INSERIMENTO NEL GIUSTO ORDINE
        testo_nuovo.appendChild(st);
        testo_nuovo.innerHTML += input.value;
        testo_nuovo.appendChild(et);
        testo_nuovo.appendChild(nuovo);
        
        // SE IL CONTENUTO SCRITO DA NOI E UGUALE O MAGGIORE DEL ATTRIBUTO minlength
        // MANDA SULLA RIGA QUELLO CHE O SCRITTO
        if(nome_etichetta.value.length >= nome_etichetta.getAttribute('minlength')){
            et.textContent = nome_etichetta.value;
        }
        

        // APPENDI UN FIGLIO AL NEW TASK
        insert_task.appendChild(testo_nuovo);
        
        insert_task.setAttribute('style', `--p:${aggiunta_num}`);
        
        // ALLA FINE CHIUSURA DELLA FINESTRA
        finestra_creazione.style.display = "none";
    }
}


//--------------------------------------------------------------------------------------------------------

// ATTIVA LA FUNZIONE crea_riga_nuova CON IL PULSANTE CREA
crea.addEventListener('click', () => {
    crea_riga_nuova();
    console.log('click');
});


//-------------------------------------------------------

let canc_testo = document.getElementById('canc_testo');

canc_testo.addEventListener('click', ()=>{
    input.value = '';
});
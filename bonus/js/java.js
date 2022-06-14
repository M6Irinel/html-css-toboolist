let add_task = document.querySelector('#add-task');
let add_section = document.querySelector('#add-section');

let finestra_creazione = document.getElementById('creazione');
let chiudi_finestra = document.getElementById('chiudi');

let input = document.getElementById('testo');


let crea = document.getElementById('crea');

finestra_creazione.style.display = "none";

add_task.addEventListener('click', () => {
    finestra_creazione.style.display = "block";
    console.log('funziona');
});

chiudi_finestra.addEventListener('click', () => {
    finestra_creazione.style.display = "none";
});

let att = input.getAttribute('minlength');

let b = document.getElementById('b');
let g = document.getElementById('g');
let r = document.getElementById('r');
let o = document.getElementById('o');
let v = document.getElementById('v');
let y = document.getElementById('y');

let etticheta;

// b.onclick(()=>{etticheta = 'b';});
b.onclick = (() => { 
    etticheta = document.getElementById('be'); 
    console.log(etticheta);
});
g.onclick = (() => { 
    etticheta = document.getElementById('ge'); 
    console.log(etticheta);
});
r.onclick = (() => { 
    etticheta = document.getElementById('re'); 
    console.log(etticheta);
});
o.onclick = (() => { 
    etticheta = document.getElementById('oe'); 
    console.log(etticheta);
});
v.onclick = (() => { 
    etticheta = document.getElementById('ve'); 
    console.log(etticheta);
});
y.onclick = (() => { 
    etticheta = document.getElementById('ye'); 
    console.log(etticheta);
});


let t = document.getElementById('t');
let f = document.getElementById('f');

let stato_del_testo;

t.onclick = (() => { 
    stato_del_testo = document.getElementById('te'); 
    console.log(stato_del_testo);
});
f.onclick = (() => { 
    stato_del_testo = document.getElementById('fe'); 
    console.log(stato_del_testo);
});

let insert_task = document.getElementById('insert_task');

let aggiunta_num = 1;

function creato() {
    if (input.value.length >= att && etticheta != null && stato_del_testo != null) {
        let testo_nuovo = document.createElement('p');

        
        let st = stato_del_testo.cloneNode(true);
        let et = etticheta.cloneNode(true);
        
        testo_nuovo.appendChild(st);
        testo_nuovo.innerHTML += input.value;
        testo_nuovo.appendChild(et);

        insert_task.appendChild(testo_nuovo);
        
        aggiunta_num++;
        insert_task.setAttribute('style', `--p:${aggiunta_num}`);


        finestra_creazione.style.display = "none";
    }
}

crea.addEventListener('click', () => {
    creato();
    console.log('click');
});
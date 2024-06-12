// <!-- Traccia :
    
//     Crea, seguendo gli step visti a lezione, una rubrica contenente una lista di contatti e con le seguenti funzionalita':
    
//     Mostrare o nascondere la lista dei contatti
//     Popolare la tabella con i contatti presenti nell’array di partenza
//     Layout della pagina  --> 

let btnopenlist = document.querySelector('#btnopenlist'); //ho richiamato button per aprire i contatti
let wrapper = document.querySelector('#wrapper'); //section padre dei figli article
let nameinput = document.querySelector('#nameimput'); //ho richiamato il primo input type
let numberinput = document.querySelector('#numberinput'); //ho richiamato il secondo input type
let btnaddcontacts = document.querySelector('#btnaddcontacts'); //con questo button aggiungeremo i contatti

let rubrica = {
    lista : [
        {nome : 'Ginevra' , numero : '3287645673'},
        {nome : 'Luigi' , numero : '32876455673'},
        {nome : 'Tavor' , numero : '3287645122'},
        {nome : 'Clara' , numero : '3227645673'},
        {nome : 'Mauro' , numero : '32876412373'},
    ],
    //funzione associata al btnopenlist in cui creiamo le per ogni oggetto un div con il contenuto presente nell'array
    
    showcontacts : function () {
        wrapper.innerHTML = ''; //al clik svuoto e riapro i contatti js lo fa velocemente 
        rubrica.lista.forEach((oggetti) => {
            let article = document.createElement('article');
            article.classList.add('col-12', 'col-md-3', 'text-center', 'articoli', 'mt-5', 'mb-3');
            article.innerHTML = `
            <div class="profilepic">
                    </div>
            <h3>${oggetti.nome}</h3>
            <h3>${oggetti.numero}</h3>
            <button class="btntearticle">Cancella Contatto</button>
            `  
            wrapper.appendChild(article);
            
        }) 
        //bottoni cancella card/div
        let btndeletearticle = document.querySelectorAll('.btntearticle');//ho catturato tutti i button che hanno questa classe essendo una node list posso usufruire del for each
        //sto facendo un altro for each per creare un evento per ogni button appartenente al padre article
        btndeletearticle.forEach((btn, i)=>{ //l'indice identifica l'intero article
        btn.addEventListener('click',()=>{ //al click di ogni button rapresentato dal btn
        this.lista.splice(i,1); //mi elimini dalla lista l'elemento cliccato che avrà un indice ordinato nello stesso modo in cui btn assume come valore ogni botton 
        this.showcontacts(); // dopo aver eliminato svuotiamo la funzione per poi rigenerarla aggiornata
    } )
})
    }, 
    // seconda funzione associata al secondo bottone btnaddcontacts aggiungi contatto
    addcontact : function(contactname,contactnumber){ //
        this.lista.push({nome : contactname, numero : contactnumber});
    },

}

//primo button = btnopenlist associato alla prima funzione  
let isvisible = false; //sto creando questa variabile per poter entrare nel blocco di'istruzione del if e associare più funzionalità al click del bottone
btnopenlist.addEventListener('click' , ()=>{
    if(! isvisible){ //al click se is visible == false e quindi se è false 
        rubrica.showcontacts(); //  mi mostri i contatti
        isvisible = true; //mi fai diventare is visible true e quindi entra nel else
        btnopenlist.innerHTML = 'Nascondi Contatti' //cambi il contenuto da mostra i contatti a nascondi contatti perchè appunto la lista dei contatti è aperta 
    }else{//al clic mi fai questo
        wrapper.innerHTML = ''; //cliccando di nuovo  si svuota la lista dei contatti
        isvisible = false; // ritornando di nuovo false rientra nel if 
        btnopenlist.innerHTML = 'Mostra Contatti'
    }
})

//secondo button = btnaddcontacts associato alla seconda funzione
//aggiungere un'altro && per evitare di sovrascrivere un altro contatto uguale per cui differenzieremo non per nome ma per numero utillzo findindex of 
btnaddcontacts.addEventListener('click', ()=>{
    if (nameinput.value && numberinput.value) { // se nameinput.value è != da nameinput.value = ''
    rubrica.addcontact(nameinput.value, numberinput.value) //il .value registra i dati immessi dall'utente nel placeholder di ogni tipo di input type 
    nameinput.value = ''; //svuotiamo i dati del input 1 dopo che sono stati aggiunti
    numberinput.value = '';//svuotiamo i dati del input 2 dopo che sono stati aggiunti
    rubrica.showcontacts(); // mostrami i contatti e diamo le stesse istruzioni per evitare di rompere la condizione che abbiamo asseganto al botton precedente
    isvisible = true; //mi fai diventare is visible true e quindi entra nel else
    btnopenlist.innerHTML = 'Nascondi Contatti'
    }
})
// //se volessimo evitare che stessi contatti vengono aggiunti andiamo ad utilizzare il metodo include
// rubrica.lista.includes({nome : nameinput.value , numero : numberinput.value })

//vorrei creare all'interno della funzione showcontact per ogni oggetto e all'interno di ogni article, un bottone che mi permette di eliminare article stesso al click 

// metodo 1 per eliminare meno usato  con metodo findindex abbinato allo splice
// deletecontact : function (contactlist){
    //     let index = this.lista.findIndex((contact)=> contact.name == contactlist)
    //     if (contact.name == -1) {
    //         console.log('contatto inesistente');
    //     }else{
    //     this.lista.splice(index,1); 
    // }
// rubrica.deletecontact('vincenzo');

// metodo 2 per eliminare un contatto uso il .map associato ad index e poi allo splice; uso il .map perchè ho un oggetto che contiene più parametri e se voglio eliminare solo un parametro mi serve il contact.name della lista che contiene gli oggetti 
//metodo map : creo un clone dell'array con solo nomi per avere tutti gli indici dell'array per potrli utilizzare nello splice perchè devo eliminare uno specifico nome contenuto all'interno dell'oggetto
    // deletecontact : function (contactlist){
    // let names = this.lista.map((contact, i)=>contact.name); array clone formato da solo nomi
    // let index = this.names.Indexoff(contactlist); trovo index del parametro della funzione grazie al metodo.map e cerco il nome nell'array clonato
    // this.lista.splice(index, 1);
    // }
//  vediamo se ad es in una rubrica è incluso un oggetto appartenente ad un array se è incluso faccio index e poi lo splice
// deletecontact : function (contact) {
// if (rubrica.lista.includes(contact)) {
//     let index = rubrica.lista.indexOf(contact);
//     rubrica.lista.splice(index,1);
// }
// }
    


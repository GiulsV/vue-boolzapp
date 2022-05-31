// Milestone 1
// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// nome e immagine di ogni contatto

// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina)

// Milestone 5 - opzionale
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
// permette di cancellare il messaggio selezionato


var app = new Vue({
  el: "#app",

  data: {
    userName: "Giulia Valente",

    inputMessage: "",

    openClass: "",
    searchInput: "",

    indexMessage: 0,

    indexChat: 0,

      contactsList: [
        {
          name: 'Michele',
          contactPicture: 'img/avatar2.png',
          status: true,
          allMessages: [
            {
              message: 'Hai portato a spasso il cane?',
              origin: "sent",
              hour: "21:43",
              dropdown: '',
            },
            {
              message: 'Ricordati di stendere i panni',
              origin: "sent",
              hour: "15:43",
              dropdown: '',
            },
            {
              message: 'Tutto fatto!',
              origin: "received",
              hour: "17:24",
              dropdown: '',
            }
          ]
        },
        {
         name: 'Fabio',
         contactPicture: 'img/avatar3.png',
         status: true,
         allMessages: [
           {
            message: 'Ciao come stai?',
             origin: "sent",
             hour: "12:09",
             dropdown: '',
           },
           {
            message: 'Bene grazie! Stasera ci vediamo?',
             origin: "received",
             hour: "23:09",
             dropdown: '',
           },
           {
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
             origin: "sent",
             hour: "07:56",
             dropdown: '',
           }
         ]
        },
        {
      name: 'Samuele',
      contactPicture: 'img/avatar4.png',
      status: true,
      allMessages: [
        {
          message: 'La Marianna va in campagna',
          origin: "sent",
          hour: "12:19",
          dropdown: '',
        },
        {
          message: 'Sicuro di non aver sbagliato chat?',
          origin: "received",
          hour: "14:04",
          dropdown: '',
        },
        {
          message: 'Ah scusa!',
          origin: "sent",
          hour: "18:10",
          dropdown: '',
        }
      ]
      },
        {
        name: 'Alessandro B.',
        contactPicture: 'img/avatar5.png',
        status: true,
        allMessages: [
          {
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            origin: "sent",
            hour: "12:09",
            dropdown: '',
          },
          {
            message: 'Si, ma preferirei andare al cinema',
            origin: "received",
            hour: "08:09",
            dropdown: '',
          }
        ]
        },
        {
         name: 'Alessandro L.',
         contactPicture: 'img/avatar6.png',
         status: true,
         allMessages: [
           {
            message: 'Ricordati di chiamare la nonna',
             origin: "sent",
             hour: "05:56",
             dropdown: '',
           },
           {
            message: 'Va bene, stasera la sento',
             origin: "received",
             hour: "18:12",
             dropdown: '',
           }
         ]
        },
        {
        name: 'Claudia',
        contactPicture: 'img/avatar3.png',
        status: true,
        allMessages: [
          {
            message: 'Ciao Claudia, hai novità?',
            origin: "sent",
            hour: "12:19",
            dropdown: '',
          },
          {
            message: 'Non ancora',
            origin: "received",
            hour: "14:04",
            dropdown: '',
          },
          {
            message: 'Nessuna nuova, buona nuova',
            origin: "sent",
            hour: "18:10",
            dropdown: '',
          }
        ]
      },
        {
      name: 'Federico',
      contactPicture: 'img/avatar2.png',
      status: true,
      allMessages: [
        {
          message: 'Fai gli auguri a Martina che è il suo compleanno!',
          origin: "sent",
          hour: "12:19",
          dropdown: '',
        },
        {
          message: 'Grazie per avermelo ricordato, le scrivo subito!',
          origin: "received",
          hour: "14:04",
          dropdown: '',
        }
      ]
      },
        {
      name: 'Davide',
      contactPicture: 'img/avatar4.png',
      status: true,
      allMessages: [
        {
          message: 'Ciao, andiamo a mangiare la pizza stasera?',
          origin: "sent",
          hour: "12:19",
          dropdown: '',
        },
        {
          message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
          origin: "received",
          hour: "14:04",
          dropdown: '',
        },
        {
          message: 'OK!!',
          origin: "sent",
          hour: "18:10",
          dropdown: '',
      }
      ],
      }
      ]
  },


  methods: {

    //MS - 2: Mostra chat selezionata

    openChat(index) {

       this.indexChat = index;
       this.openClass = "opened";
       this.scrollAuto()

    },

    // MS - 3: Aggiunta di messaggio e risposta dell'interlocutore

    sendMessage() {
      
      
      if (this.inputMessage == "") {
        // Se input vuoto funzione non invia nulla
      }  else {

        this.contactsList[this.indexChat].allMessages.push(
          {
            message: this.inputMessage,
            origin: "sent",
            hour: this.currentHour(),
            dropdown: false,
          }
        );
          
          this.inputMessage = "";
          this.scrollAuto()
          
          // Messaggio di risposta con 1 sec di ritardo

          setTimeout(() => this.contactsList[this.indexChat].allMessages.push ({

            message: 'Ok',
            origin: 'received',
            hour: this.currentHour(),
            dropdown: false,

          }), 1000);

          setTimeout( () => this.scrollAuto(), 1000 );
        }

        
    },

    // B - Scroll all'ultimo messaggio

    scrollAuto() {
  
      setTimeout(()=>{

        var container = document.querySelector(".chat-body");
        var scrollHeight = container.scrollHeight;
        container.scrollTop = scrollHeight;

      },50);

    },


    // MS - 4: Ricerca Utente


    searchBar() {

      this.contactsList.forEach((element) => {

        if ( element.name.toLowerCase().includes(this.searchInput.toLowerCase()) ) {

          element.status = true;

        } else {

          element.status = false;
          
        }
      });
    },

    // MS - 5: Dropdown Menu

    dropDown(index, messages) {

      let message = this.contactsList[this.indexChat].allMessages[index];
 
      if (message.dropdown == false) {
      
       message.dropdown = true;

     } else{

       message.dropdown = false;

     }
    },

    // MS - 5: funzione cancella messaggio

    deleteMessage(index) {
  
      this.contactsList[this.indexChat].allMessages.splice(index, 1);
 
      console.log(index);
      console.log(this.contactsList[this.indexChat].allMessages[index]);
 
    },


    // Funzioni Data e Orario

      currentHour() {
  
        let nowHour = new Date ();

        let hour = nowHour.getHours()
        let minute = nowHour.getMinutes()

          if (minute < 10) {
            minute = "0" + minute;
          }
  
        return `${hour}:${minute}`
      },

      currentDay() {
  
        let todayDate = new Date ();
  
         let day = todayDate.getDate();
         let month = todayDate.getMonth() + 1
         let year = todayDate.getFullYear()
  
         return `${day}/${month}/${year}`
  
      },





  },

 

})
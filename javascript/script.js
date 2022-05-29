// Milestone 1

// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse

// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// nome e immagine di ogni contatto

// Milestone 2

// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione

// ● Click sul contatto mostra la conversazione del contatto cliccato

var app = new Vue({
  el: "#app",

  data: {
    userName: "Giulia Valente",

    inputMessage: "",
    openClass: "",
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
              hour: "21:43"
            },
            {
              message: 'Ricordati di stendere i panni',
              origin: "received",
              hour: "15:43"
            },
            {
              message: 'Tutto fatto!',
              origin: "sent",
              hour: "17:24"
            }
          ]
        },
        {
         name: 'Fabio',
         contactPicture: 'img/avatar2.png',
         status: true,
         allMessages: [
           {
            message: 'Ciao come stai?',
             origin: "sent",
             hour: "12:09"
           },
           {
            message: 'Bene grazie! Stasera ci vediamo?',
             origin: "received",
             hour: "23:09"
           },
           {
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
             origin: "sent",
             hour: "07:56"
           }
         ]
        },
        {
      name: 'Samuele',
      contactPicture: 'img/avatar2.png',
      status: true,
      allMessages: [
        {
          message: 'La Marianna va in campagna',
          origin: "sent",
          hour: "12:19"
        },
        {
          message: 'Sicuro di non aver sbagliato chat?',
          origin: "received",
          hour: "14:04"
        },
        {
          message: 'Ah scusa!',
          origin: "sent",
          hour: "18:10"
        }
      ]
      },
        {
        name: 'Alessandro B.',
        contactPicture: 'img/avatar2.png',
        status: true,
        allMessages: [
          {
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            origin: "sent",
            hour: "12:09"
          },
          {
            message: 'Si, ma preferirei andare al cinema',
            origin: "received",
            hour: "08:09"
          }
        ]
        },
        {
         name: 'Alessandro L.',
         contactPicture: 'img/avatar2.png',
         status: true,
         allMessages: [
           {
            message: 'Ricordati di chiamare la nonna',
             origin: "sent",
             hour: "05:56"
           },
           {
            message: 'Va bene, stasera la sento',
             origin: "received",
             hour: "18:12"
           }
         ]
        },
        {
        name: 'Claudia',
        contactPicture: 'img/avatar2.png',
        status: true,
        allMessages: [
          {
            message: 'Ciao Claudia, hai novità?',
            origin: "sent",
            hour: "12:19"
          },
          {
            message: 'Non ancora',
            origin: "received",
            hour: "14:04"
          },
          {
            message: 'Nessuna nuova, buona nuova',
            origin: "sent",
            hour: "18:10"
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
          hour: "12:19"
        },
        {
          message: 'Grazie per avermelo ricordato, le scrivo subito!',
          origin: "received",
          hour: "14:04"
        }
      ]
      },
        {
      name: 'Davide',
      contactPicture: 'img/avatar2.png',
      status: true,
      allMessages: [
        {
          message: 'Ciao, andiamo a mangiare la pizza stasera?',
          origin: "sent",
          hour: "12:19"
        },
        {
          message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
          origin: "received",
          hour: "14:04"
        },
        {
          message: 'OK!!',
          origin: "sent",
          hour: "18:10"
      }
      ],
      }
      ]
  },


  methods: {

    // SHOW CLICKED CHAT
    openChat(index) {

       this.indexChat = index;
       this.openClass = "opened";

    },

  },

 

})
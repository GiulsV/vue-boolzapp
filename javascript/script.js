

// Milestone 1

// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse

// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// nome e immagine di ogni contatto



var app = new Vue({

    el: "#app",

    data: {

      indexChat: 0,
      
      allChats: contacts = [

        {
            name: 'Michele',
            contactMessage: 'Hai portato a spasso il cane?',
            userMessage: 'Si',
            contactPicture: 'img/avatar2.png'
        },

        {
            name: "Fabio",
            contactMessage: "Ciao come stai?",
            userMessage: 'Bene',
            contactPicture: 'img/avatar3.png'
        },

        {
            name: "Samuele",
            contactMessage: "Lo sai che ha aperto una nuova pizzeria?",
            userMessage: "Si, ma preferirei andare al cinema",
            contactPicture: 'img/avatar4.png'
        },
        {
            name: "Alessandro L.",
            contactMessage: "Ricordati di chiamare la nonna",
            userMessage: "Va bene, stasera la sento",
            contactPicture: 'img/avatar5.png'
        },
        {
            name:"Claudia",
            contactMessage: "Lo sai che ha aperto una nuova pizzeria?",
            userMessage: "Si, ma preferirei andare al cinema",
            contactPicture: 'img/avatar6.png'
        },
       ]
    },


     methods: {
       openChat(index) {
         this.indexChat = index;
       },
  
    }
  })

 
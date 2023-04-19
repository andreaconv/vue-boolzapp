const { createApp } = Vue;

const dt = luxon.DateTime;

createApp({

  data() {

    return {
      contacts: [
        {
          name: 'Michele',
          avatar: 'assets/IMG/avatar/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              time: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              time: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              time: '16:15',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: 'assets/IMG/avatar/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020',
              time: '16:30',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020',
              time: '16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020',
              time: '16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: 'assets/IMG/avatar/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020',
              time: '10:10',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020',
              time: '10:20',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020',
              time: '16:15',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: 'assets/IMG/avatar/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              time: '15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              time: '15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: 'assets/IMG/avatar/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              time: '15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              time: '15:50',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: 'assets/IMG/avatar/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              time: '15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              time: '15:50',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020',
              time: '15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: 'assets/IMG/avatar/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              time: '15:30',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              time: '15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: 'assets/IMG/avatar/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020',
              time: '15:30',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020',
              time: '15:50',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020',
              time: '15:51',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],
      counter: 0,
      inputMessage: '',
      data: null,
      ora: null,
      searchChat: "",
      messageIndex: 0,
      chevron: false,
      arrayAnswers: [
        // 'va bene',
        // 'daccordo',
        // 'perfetto',
        // 'ci sto',
        // 'benissimo',
        // 'perché?',
        // 'non ci siamo',
        // 'papà?',
        // 'nonna',
        // 'stai bene?',
        // 'non sono daccordo',
        // 'bello!',
        // 'pane tostato',
        // 'barbabietole da zucchero',
        // 'fotosintesi clorofilliana',
        // 'industrie siderurgiche',
        // 'bergamotto',
        // 'adolescenti',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat maxime est deleniti, quod doloribus ab? Voluptatibus obcaecati libero quaerat neque id consequatur consequuntur accusamus. Dolor ullam aperiam molestiae repellendus.',
      ],

    }

  },

  methods: { //FUNZIONI

    search(){

      this.contacts.forEach(contact => {

        if(contact.name.toLowerCase().includes(this.searchChat.toLowerCase())){
          contact.visible = true
        }else{
          contact.visible = false
        }

        // contact.visible = contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
        
      })

    },

    // genera l'ora e la data attuale 
    printClock() {
      this.data = dt.now().toLocaleString(dt.DATE_SHORT)
      this.ora = dt.now().toLocaleString(dt.TIME_24_SIMPLE)
    },
    //genera un numero random
    generateNumberRandom(max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    // prende una stringa e trasforma la prima lettera in maiuscolo 
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    
    addMessage() {
      
      // funzioni richiamate
      this.printClock();

      if (this.inputMessage.length === 0) {
        console.log("devi scrivere qualcosa")
      } else {
        const newMsg = {
          date: this.data,
          // date: '10/01/2020',
          time: this.ora,
          // time: '15:30',
          message: this.capitalizeFirstLetter(this.inputMessage),
          status: 'sent'
        }
        this.contacts[this.counter].messages.push(newMsg);
        this.inputMessage = '';

        // funzioni richiamate
        this.answer();

      }
    },

    // genera la risposta 

    answer() {
      setTimeout(() => {
        const risposta = {
          date: this.data,
          // date: '10/01/2020',
          time: this.ora,
          // time: '15:30',
          message: this.capitalizeFirstLetter(this.arrayAnswers[this.generateNumberRandom(this.arrayAnswers.length - 1, 0)]),
          //FIXME: la prima funzione mi trasforma la prima lettera in maiuscolo, prendo il messaggio dall'array di risposte con indice random grazie ad un'altra funzione
          // message: 'ok',
          status: 'received'
        }
        this.contacts[this.counter].messages.push(risposta);
      }, 1000);
    },

  },

  computed:{

    // search(){

    //   console.log(this.searchChat)

    //   // return

    //   this.contacts.forEach((contact) => {
        
    //     if(contact.name.includes(this.searchChat)){
    //       contact.visible = true
    //     }else{
    //       contact.visible = false
    //     }
    //   })

    // }
    
  },
  
  mounted() {
    console.log("vue funziona")
  }
  
}).mount('#app')
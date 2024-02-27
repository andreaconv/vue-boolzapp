import contacts from './db.js'
import arrayAnswers from './answers.js'

const { createApp } = Vue;

const dt = luxon.DateTime;

createApp({

  data() {

    return {

      contacts, 
      arrayAnswers,
      counter: 0,
      inputMessage: '',
      data: null,
      ora: null,
      searchChat: "",
      messageIndex: 0,
      chevron: false,
      info:false,
      randomAnswer: null,
      language: false
    }

  },

  methods: { //FUNZIONI

    //cerca l'utente nelle chat
    search(){

      this.contacts.forEach(contact => {

        if(contact.name.toLowerCase().includes(this.searchChat.toLowerCase())){
          contact.visible = true
        }else{
          contact.visible = false
        }

        // FIXME: ALTERNATIVA sempre dentro al ciclo!
        /* DESCRIZIONE: cosa fa?
         * contact.visible è true soltanto quando contact.name include la stringa inserita nel campo input, per fare un controllo più accurato si trasformano entrambi in minuscolo con .toLowerCase())
         */
        // contact.visible = contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
        
      })

    },

    // genera l'ora e la data attuale 
    printClock() {
      // this.data = dt.now().toLocaleString(dt.DATE_SHORT)
      // this.ora = dt.now().toLocaleString(dt.TIME_24_SIMPLE)
      // FIXME: ALTERNATIVA più compatta
      this.data = dt.now().toFormat("D")
      this.ora = dt.now().toFormat("t")
    },
    //genera un numero random
    generateNumberRandom(max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    //FIXME: capitalizeFirstLetter() mi trasforma la prima lettera in maiuscolo
    // non l'ho utilizzata perché ho aggiunto semplicemente "text-transform: capitalize;" al CSS del messaggio
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    
    addMessage() {
      
      // funzioni richiamata
      this.printClock();

      if (this.inputMessage.length === 0) {
        console.log("devi scrivere qualcosa")
      } else {
        const newMsg = {
          date: this.data,
          time: this.ora,
          message: this.inputMessage,
          status: 'sent'
        }
        this.contacts[this.counter].messages.push(newMsg);
        this.inputMessage = '';


        // funzioni richiamate
        this.answer();

        this.scrollContent();

      }
    },

    // genera la risposta 
    answer() {

      // funzione richiamata
      this.getApi();

      setTimeout(() => {
        const risposta = {
          date: this.data,
          time: this.ora,
          message: this.language
              ? this.randomAnswer
              : this.arrayAnswers[this.generateNumberRandom(this.arrayAnswers.length - 1, 0)],
          status: 'received'
        }
        this.contacts[this.counter].messages.push(risposta);
      
        // funzione richiamata
        this.scrollContent();
        
      }, 1000);
    },

    //Novità: richiamo una API per generare una frase random
    getApi(){
      axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
      .then(result => {
        this.randomAnswer = result.data.response;
      })
    },

    /* FIXME: questa funzione visualizzara gli ultimi messaggi quando se ne inseriscono troppi */
    scrollContent(){
      setTimeout(() => {
        const content = document.querySelector('.content');
        content.scrollTop = content.scrollHeight;
      }, 1);
    },

    //rimuovere i messaggi
    removeMsg(indice){
      this.contacts[this.counter].messages.splice(indice, 1)
      // FIXME: ALTERNATIVA con un counter "messageIndex" che mi prende l'indice del messaggio
      // this.contacts[this.counter].messages.splice(this.messageIndex, 1)
    },

    //funzione abbinata alle info da visualizzare
    // showInfo(){
    //   this.info = !this.info;
    //   console.log("informazioni")
    // }

  },
  
  mounted() {
    console.log("vue funziona")
  }
  
}).mount('#app')
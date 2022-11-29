// Descrizione:
// riprodurre la ToDoList come viste insieme questa mattina,
// ma con una struttura di array di oggetti e non un array di semplici stringhe

const {createApp} = Vue;

createApp({
    data() {
        return {
            // array tasks gia presenti in lista
            tasks: [
                {text: 'Completare il progetto', done: false}, 
                {text: 'Fare la spesa', done: true}, 
                {text: 'Fare il bucato', done: false}
            ],

            // array task da aggiungere, il valore di input deve amdare qui
            newTasks: [""],

        }
    },

    methods: {
        // far andare il value in newTasks quando user clicca button
        clickButton (){
            this.tasks.push(this.newTasks)
        }
    }
}).mount('#app')

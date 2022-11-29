// Descrizione:
// riprodurre la ToDoList come viste insieme questa mattina,
// ma con una struttura di array di oggetti e non un array di semplici stringhe

const {createApp} = Vue;

createApp({
    data() {
        return {
            error: false,
            // array tasks gia presenti in lista
            tasks: [
                {text: 'Completare il progetto', done: false}, 
                {text: 'Fare la spesa', done: true}, 
                {text: 'Fare il bucato', done: false}
            ],

            // array task da aggiungere, il valore di input deve amdare qui
            newTask: "",

        }
    },

    methods: {
        
        // far andare il value in newTasks quando user clicca button
        clickButton (){
            if(this.newTask.length <= 2 || this.newTask.length === " "){
                this.error = true;
            } else{
                this.tasks.unshift({text: this.newTask, done: false});
                this.error = false;
            }
        },

        // se clicco x vicino una task questa deve andar via
        deleteTask (index){
            this.tasks.splice(index, 1);
        }
    }
}).mount('#app')


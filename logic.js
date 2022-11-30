// Descrizione:
// riprodurre la ToDoList come viste insieme questa mattina,
// ma con una struttura di array di oggetti e non un array di semplici stringhe

const {createApp} = Vue;

createApp({
    data() {
        return {
            error: false,
            // array tasks gia presenti in lista
            tasks: [],

            // array task da aggiungere, il valore di input deve amdare qui
            newTask: "",

            // did: false,
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
            this.newTask= "";
        },

        // se clicco delete vicino a una task questa deve andar via
        deleteTask (index){
            this.tasks.splice(index, 1);
        },

        // se clicco did deve diventare not did e viceversa
        didTask (task, index){
            if(task.done === false){
                task.done = true;
                document.querySelector("span.li-text").classList.add("line-text");
            } else {
                task.done = false;
                document.querySelector("span.li-text").classList.remove("line-text");
            }
        }
    }
}).mount('#app')


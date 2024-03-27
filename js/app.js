const { createApp } = Vue

createApp({
  data() {
    return {
    todos: [],
    imputValue: '', 
    isDone: false
     }
  },
  methods: {

    pushObject(){
        if(this.imputValue !== ''){
            const todo = {
                text: this.imputValue,
                done: this.isDone
            }
            this.todos.push(todo)
            console.log(this.todos)
            this.imputValue = ''
        }
    },
    checkCondition(){
        this.isDone = !this.isDone
    }
}
}).mount('#app')

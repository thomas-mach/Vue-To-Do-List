const { createApp } = Vue

createApp({
  data() {
    return {
    todos: [],
    imputValue: '', 
    }
  },
  methods: {

    pushObject(){
        if(this.imputValue !== ''){
            const todo = {
                text: this.imputValue,
                done: false
            }
            this.todos.push(todo)
            console.log(this.todos)
            this.imputValue = ''
        }
    },
    checkCondition(x){
        x.done = !x.done
       
    }

}
}).mount('#app')

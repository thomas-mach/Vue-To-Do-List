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
            setTimeout(() => {
                this.scrollToBottom()
            }, 100)
            
        }
    },
    checkCondition(x){
        x.done = !x.done
    },
    deleteTodo(i){
        this.todos.splice(i, 1)
    },
    scrollToBottom() {
        const cardElement = document.querySelector('.card')
        cardElement.scrollTop = cardElement.scrollHeight
    }
}
}).mount('#app')

new Vue({
    el: "#app",

    data: {
        isEditing: false,
        selectedIndex: null,
        todo: "",
        todos: JSON.parse(localStorage.getItem("todos")),
        todosLength: JSON.parse(localStorage.getItem("todos")).length || 0
    },

    methods: {
        storeTodo() {
            if ((this.todo.trim()).length !== 0){
                if (this.todos) {
                    this.todos.push(this.todo)
                    this.todo = ""
                } else {
                    this.todos = []
                    this.todos.push(this.todo)
                    this.todo = ""
                }
            }

            localStorage.setItem("todos", JSON.stringify(this.todos))
            this.todosLength = (JSON.parse(localStorage.getItem("todos"))).length

            document.getElementsByTagName("input")[0].focus()
            
        },

        editTodo(todo, index) {
            // console.log(index, this.todo)
            this.isEditing = true
            this.selectedIndex = index
            this.todo = todo
        },

        updateTodo() {

            this.todos.splice(this.selectedIndex, 1, this.todo)
            this.todo = ''
            this.isEditing = false

            localStorage.setItem("todos", JSON.stringify(this.todos))
        },

        cancelUpdate() {
            this.todo = ""
            this.isEditing = false
        },

        deleteTodo(index) {
            this.selectedIndex = index
            this.todos.splice(this.selectedIndex, 1)
            localStorage.setItem("todos", JSON.stringify(this.todos))
            this.todosLength = (JSON.parse(localStorage.getItem("todos"))).length
        }
    }
})
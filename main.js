new Vue({el:"#app",data:{isEditing:!1,selectedIndex:null,todo:"",todos:JSON.parse(localStorage.getItem("todos")),todosLength:JSON.parse(localStorage.getItem("todos")).length||0},methods:{storeTodo(){0!==this.todo.trim().length&&(this.todos?(this.todos.push(this.todo),this.todo=""):(this.todos=[],this.todos.push(this.todo),this.todo="")),localStorage.setItem("todos",JSON.stringify(this.todos)),this.todosLength=JSON.parse(localStorage.getItem("todos")).length,document.getElementsByTagName("input")[0].focus()},editTodo(todo,index){this.isEditing=!0,this.selectedIndex=index,this.todo=todo},updateTodo(){this.todos.splice(this.selectedIndex,1,this.todo),this.todo="",this.isEditing=!1,localStorage.setItem("todos",JSON.stringify(this.todos))},cancelUpdate(){this.todo="",this.isEditing=!1},deleteTodo(index){this.selectedIndex=index,this.todos.splice(this.selectedIndex,1),localStorage.setItem("todos",JSON.stringify(this.todos)),this.todosLength=JSON.parse(localStorage.getItem("todos")).length}}});
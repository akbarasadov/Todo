import { Todo } from "./components/Todo.js"
import { todos } from "./utils/db.js"
import { reload } from "./utils/reload.js"




const gridContainer = document.querySelector(".grid")
const form = document.forms.namedItem("add")
const input = document.querySelector(".input")


form.onsubmit = (e) => {
    e.preventDefault()


    const todo = {
        id: crypto.randomUUID(),
        title: input.value,
        time: new Date().toLocaleTimeString()
    }
    todos.push(todo)
    console.log(todo);
    

    input.value = ""

    
    reload(todos, Todo, gridContainer)
}

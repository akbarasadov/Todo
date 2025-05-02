import { Todo } from "../components/Todo.js"
import { todos } from "./db.js"
import { reload } from "./reload.js"

export function submit(e, place) {
    e.preventDefault()

  
    let val = new FormData(e.target).get("title").trim()

    const todo = {
        id: crypto.randomUUID(),
        title: val,
        time: new Date().toLocaleTimeString([], {timeStyle: "short"})
    }

    if (val === "") {
        alert("Заполните поля")
        return
    }

    todos.push(todo)
    e.target.reset()

    reload(todos, Todo, place)
}
import { todos } from "../utils/db.js"
import { reload } from "../utils/reload.js"


export function Todo(item) {
    const div = document.createElement("div")
    const left = document.createElement("div")
    const title = document.createElement("h3")
    const time = document.createElement("span")
    const remove = document.createElement("button")

    div.classList.add("todo")
    left.classList.add("left")
    title.classList.add("title")
    time.classList.add("time")
    remove.classList.add("remove")

    title.innerHTML = item.title
    time.innerHTML = item.time

    remove.innerHTML = `
        <img src="./Group 14.svg" alt="Remove">
    `


    remove.onclick = () => {
        const index = todos.findIndex(el => el.id === item.id);
        todos.splice(index, 1);
        reload(todos, Todo, document.querySelector(".grid"));
    }


    div.append(left, remove)
    left.append(title, time)

    return div
}

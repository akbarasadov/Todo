import { todos } from "../utils/db.js"

export function Todo(item) {
    const div = document.createElement("div")
    const left = document.createElement("div")
    const title = document.createElement("h3")
    const time = document.createElement("span")
    const del = document.createElement("button")
    let dialog = document.querySelector("dialog")
    let save = document.querySelector(".save")
    let newTitle = document.querySelector(".newTitle")
    let close = document.querySelector(".close")
    let checkbox = document.querySelector(".input_checkbox")

    div.classList.add("todo")
    left.classList.add("left")
    title.classList.add("title")
    time.classList.add("time")



    title.innerHTML = item.title
    time.innerHTML = item.time

    del.innerHTML = `
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
    <use href="./public/icons/sprite.svg#close"></use>
    </svg>
    `

    div.append(left, del)
    left.append(title, time)


    del.onclick = () => {
        let delConfirm = prompt("Вы действительно хотите удалить? Напишите: " + item.title)
        if (delConfirm === item.title) {
            div.remove()
            const idx = todos.indexOf(item)
            todos.splice(idx, 1)
        }

        console.log(todos);
    }

    div.ondblclick = () => {
        dialog.showModal()
    }




    save.onclick = (e) => {
        e.preventDefault()
        if (newTitle.value.trim() === "") {

            alert("Введите новое имя.")

        } else {

            if (checkbox.checked === true) {
                dialog.close()
                item.time = new Date().toLocaleTimeString([], { timeStyle: "short" })
                item.title = newTitle.value

                time.textContent = item.time
                title.textContent = item.title
            } else {
                alert("Установите флажок для подтверждения.")
            }

        }
    }

    close.onclick = (e) => {
        e.preventDefault()
        dialog.close()
    }


    return div
}
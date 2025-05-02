import { Todo } from "./components/Todo.js"
import { todos } from "./utils/db.js"
import { submit } from "./utils/events.js"
import { reload } from "./utils/reload.js"




const gridContainer = document.querySelector(".grid")
const form = document.forms.namedItem("add")


form.onsubmit = (e) => submit(e, gridContainer)



reload(todos, Todo, gridContainer)



//  =>  Running Note:
//  =>  ! means, it will always be in the html (best practice to know that it will/should be on the page load).
//       otherwise optional chaining (?.) is OK.
//  =>  as HTMLInputElement : it is type casting as typeScript is not know input.value type

interface Todo {
  todo: string
  completed: boolean
}


const btn = document.getElementById("btn") as HTMLButtonElement
const todoInput = document.getElementById("todoId")! as HTMLInputElement
const form = document.querySelector("form")!
const list = document.getElementById("todoList")!


const todos: Todo[] = _getTodos()
todos.forEach((todo: Todo) => _appendInList(todo));

function _todoValidator(msg: string) {
  if (!msg || msg.trim() == '') {
    throw new Error("Todo is empty")
  }
  return msg.trim()
}

function _getTodos() {
  const todosJSON = localStorage.getItem("todos")
  if (!todosJSON) return []
  const todos = JSON.parse(todosJSON)
  return todos
}

function _setTodo() {
  localStorage.setItem("todos", JSON.stringify(todos))
}

function _appendInList(newTodo: Todo) {
  const span = document.createElement("span");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const lineBreak = document.createElement("br");

  checkbox.type = "checkbox";
  checkbox.checked = newTodo.completed
  checkbox.id = newTodo.todo; // Specify the 'id' attribute value to match the 'for' attribute of the label

  // Check box binding
  checkbox.addEventListener("change", () => {
    newTodo.completed = checkbox.checked
    _setTodo()
  })

  span.appendChild(checkbox); // Append the checkbox element to the span element

  label.textContent = newTodo.todo;
  label.htmlFor = newTodo.todo; // Specify the 'for' attribute value

  span.appendChild(label); // Append the label element to the span element
  span.appendChild(lineBreak); // Append the line break element to the span element
  list.append(span)
}

function _printMessageHandler(e: SubmitEvent) {
  e.preventDefault() // to prevent form's default page load behavior

  _todoValidator(todoInput.value)
  _appendInList({ todo: todoInput.value, completed: false })

  const newTodo: Todo = { todo: todoInput.value, completed: false }
  todos.push(newTodo)

  _setTodo()
  todoInput.value = ""
}

form?.addEventListener("submit", _printMessageHandler)

//  =>  Running Note:
//  =>  ! means, it will always be in the html (best practice to know that it will/should be on the page load).
//       otherwise optional chaining (?.) is OK.
//  =>  as HTMLInputElement : it is type casting as typeScript is not know input.value type


const btn = document.getElementById("btn") as HTMLButtonElement
const todoInput = document.getElementById("todoId")! as HTMLInputElement
const form = document.querySelector("form")!
const list = document.getElementById("todoList")!

function _todoValidator(msg: string) {
  if (!msg || msg.trim() == '') {
    throw new Error("Todo is empty")
  }
  return msg.trim()
}

function _appendInList(msg: string) {
  const span = document.createElement("span");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const lineBreak = document.createElement("br");

  checkbox.type = "checkbox";
  checkbox.id = msg; // Specify the 'id' attribute value to match the 'for' attribute of the label
  span.appendChild(checkbox); // Append the checkbox element to the span element

  label.textContent = msg;
  label.htmlFor = msg; // Specify the 'for' attribute value

  span.appendChild(label); // Append the label element to the span element
  span.appendChild(lineBreak); // Append the line break element to the span element
  list.append(span)
}

function _printMessageHandler(e: SubmitEvent) {
  e.preventDefault() // to prevent form's default page load behavior

  _todoValidator(todoInput.value)
  _appendInList(todoInput.value)

  todoInput.value = ""
}

form?.addEventListener("submit", _printMessageHandler)
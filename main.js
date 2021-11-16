// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

let index = 0

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  let toDo = document.getElementById ("todo-list")

  // Clear all items in list
  while (toDo.firstChild) {
    toDo.removeChild(toDo.firstChild)
  }

  // Get next ten items
  const toDoSlice = arrayOfTodos.slice(index, index + 10)

  index += 10

  if (index > arrayOfTodos.length) {
    index = 0
  }
 
  for (i = 0; i < toDoSlice.length; i++) {
      let newListElement = document.createElement ("li")
      newListElement.innerHTML = toDoSlice[i].title
      toDo.appendChild (newListElement);

}}


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

  for (i = 0; i < arrayOfTodos.length; i++) {
      let newListElement = document.createElement ("li")
      newListElement.innerHTML = arrayOfTodos[i].title
      toDo.appendChild (newListElement);
      if (arrayOfTodos[i].completed == false) {
          newListElement.classList.add("incomplete");
      } else {
          newListElement.classList.add("complete");
      }
  }
};
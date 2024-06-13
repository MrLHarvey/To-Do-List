//Add a todo

//access the button element
console.log(document.getElementById("add-todo"));

const button = document.getElementById("add-todo");
console.log(button);
//function upon click
function handleAddTodo() {
  const ul = document.querySelector("ul");
  console.log(ul);
  //what do I want to happen?
  //console.log("button is clicked!");
  //create li to go to ul
  const li = document.createElement("li");
  console.log("created list item", li);
  //access input element
  const input = document.querySelector("input");
  console.log(input.value);

  //set input text to li text
  li.textContent = input.value;
  console.log(li);
  //append li to ul(as a child element)
  ul.appendChild(li);
}

//add event listener to button
button.addEventListener("click", handleAddTodo);

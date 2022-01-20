let list = document.getElementById("items");
// console.log(list);

let addItems = () => {
  //target input fileds
  let todo_title = document.getElementById("todo-title");
  let todo_description = document.getElementById("todo-description");
  //   console.log(todo_title);
  //   console.log(todo_description);
  if (todo_title.value !== "" && todo_description.value !== "") {
    //creating li
    const li = document.createElement("li");
    //append li in list
    list.appendChild(li);
    console.log(li);
    //creating h1
    let h1 = document.createElement("h1");
    h1.innerHTML = todo_title.value;
    li.appendChild(h1);
    //   console.log(h1);

    //creating paragraph
    const p = document.createElement("p");
    p.innerHTML = todo_description.value;
    li.appendChild(p);
    //   console.log(p);

    //creating delete button in li
    const delButton = document.createElement("button");
    const textNodeDelButton = document.createTextNode("Delete");
    delButton.appendChild(textNodeDelButton);
    li.appendChild(delButton);
    delButton.setAttribute("onclick", "deleteItems(this)");

    //creating edit button in li
    let editButton = document.createElement("button");
    let textNodeEditButton = document.createTextNode("Edit");
    editButton.appendChild(textNodeEditButton);
    li.appendChild(editButton);
    editButton.setAttribute("onclick", "editFunc(this)");
  } else {
    alert("You mustenter value ");
  }
  //clear text after every input
  todo_title.value = "";
  todo_description.value = "";
};

//delete items function
let deleteItems = (e) => e.parentNode.remove();

//delet all items function
let deletAllItems = (_) => (list.innerHTML = "");

//Edit h1 and p function
let editFunc = (e) => {
  //target h1 value
  let val1 = e.parentNode.childNodes[0].innerHTML;
  let editValue1 = prompt("Do you want edit title ?: ", val1);
  e.parentNode.childNodes[0].innerHTML = editValue1;
  //target p value
  let val2 = e.parentNode.childNodes[1].innerHTML;
  let editValue2 = prompt("Do you want edit description ?: ", val2);
  e.parentNode.childNodes[1].innerHTML = editValue2;
};

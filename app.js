let list = document.getElementById("list")
let additems = _ => {
    //target input field of text
    let items = document.getElementById("todoitems")
    
    let titleValue = document.getElementById("tileValue")   
    // create li and its textnode
    let li = document.createElement("li") //element
    let litext = document.createTextNode(items.value)//test node
    li.appendChild(litext)
    list.appendChild(li)
    //end of li

    // create title input field 
    // let h1 = document.createElement("h1")
    // let  h1TextNode = document.createTextNode(titleValue.value)
    // // h1.setAttribute("onclick","")
    // li.appendChild(h1)
    

    //create of del button in li
    let delbutton = document.createElement("button")
    let delTextNode = document.createTextNode("delete")
    delbutton.appendChild(delTextNode)
    delbutton.setAttribute("class","btnclass")
    delbutton.setAttribute("onclick","deleteFunc(this)")
    li.appendChild(delbutton)
    //end of del button

    //create edit button in li
    let editBtn = document.createElement("button")
    let editTextNode = document.createTextNode("Edit")
    editBtn.appendChild(editTextNode)
    editBtn.setAttribute("onclick","editFunc(this)")
    editBtn.setAttribute("class","editbutton")
    li.appendChild(editBtn)
    //end `of edit button


    //for value clearing at input box after user enter datas
    todoitems.value = ""
    }
    //making deleteFunc
let deleteFunc = e => e.parentNode.remove()
    
    //this function delete all items in a list
let deletAll = _ => list.innerHTML = "" 
    //edit func
let editFunc = (e) => {
        let userTakenValue =
          prompt("Do You Want Update Value" , e.parentNode.firstChild.nodeValue)
        e.parentNode.firstChild.nodeValue =  userTakenValue
        }
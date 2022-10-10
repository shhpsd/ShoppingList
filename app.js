const btnAdd = document.getElementById("btnAddNew");
const output = document.querySelector(".output");
const inputAddItem = document.getElementById("inputAddItem");
let myList = ["bannas","milk","apples","eggs"];

btnAdd.addEventListener("click",add =>{
    console.log(myList);
    if(inputAddItem.value){
        myList.push(inputAddItem.value);
        build();
        inputAddItem.value = "";
    }else{
        alert("No has escrito ningun articulo");
    }
})
window.onload = build;
function build(){
    output.innerHTML ="<h2>My List</h2>";
    
    const tbl = document.createElement("table");

    for(let i = 0; i <myList.length;i++){
        const row = document.createElement("tr");
        row.ind = i;
        const cell1 = document.createElement("td");
        cell1.innerHTML = myList[i];
        row.appendChild(cell1)
        const cell2 = document.createElement("td");
        const span1 = document.createElement("span");
        span1.innerText = "Delete";
        span1.addEventListener("click", delet =>{
            let itemOut = myList.splice(i,1);
            
            build();
        })
        cell2.appendChild(span1);
        const span2 = document.createElement("span");
        span2.innerText = "Edit";
        span2.addEventListener("click", edit =>{
            row.style.backgroundColor = "#EEF2E6";
            let tempVal = row.firstElementChild;
            const newInput = document.createElement("input");
            newInput.value = tempVal.innerText;
            newInput.focus();
            tempVal.innerHTML = "";
            newInput.addEventListener("blur", efect =>{
                tempVal.innerHTML = newInput.value;
                row.style.backgroundColor = "#1C6758";
                myList[i] = newInput.value;
            })
            tempVal.appendChild(newInput);
        })
        cell2.appendChild(span2);
        row.appendChild(cell2);
        tbl.appendChild(row);
    }
    output.appendChild(tbl);   
}
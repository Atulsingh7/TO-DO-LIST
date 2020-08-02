console.log("WElCOME TO JAVASCRIPT");
showNotes();
let addTxt = document.getElementById("inp");
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {

    if (addTxt.value != 0) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];

        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        console.log(notesObj);
        addTxt.value = "";
        showNotes();
    }
})


//SHOWING NOTES


function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    let block = document.getElementById("block");
    
    if(notesObj.length==0){
        block.innerHTML = html;
    }
    else{
        notesObj.forEach(function (item, index) {
            html += `
                <div class="input-group mb-3" style="width: 70%; margin-left: 87px;">      
                <div class="input-group-prepend" style="height: 38px;">
                  <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input">
                  </div>
                </div>
                <input type="text" id="${Math.random()}" value="${item}"  class="form-control" aria-label="Text input with checkbox">
                  <button  class="btn btn-primary blue zz" type="submit" style="height: 37px;" onclick="editNode(${index},id)" >EDIT</button>
                <button class="btn btn-primary blue " type="submit" style="height: 37px;" onclick="deleteNode(${index})" >DELETE</button>
              </div>
    
                `
            block.innerHTML = html;
    
        });
    }
    


}

//DELETING NODES
function deleteNode(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    console.log(index);
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}


//EDITING NODES
function editNode(index,rand) {
console.log(rand)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let save = document.getElementById("save");
    
    let addTxt = document.getElementById("inp");
    
    console.log( rand);
    // save.value=notesObj[index];
}

//DELETE ALL NODES
function allDelete(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }

localStorage.clear();

showNotes();
}




let inputs = document.getElementById("imp");
let texT = document.querySelector(".text1");

function AddTask(){

    if (inputs.value == ""){
        alert('Please enter a task');
    }else{

        let newElem = document.createElement("ul");
        newElem.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`

        texT.appendChild(newElem);
        inputs.value = "";

        newElem.querySelector('i').addEventListener("click" , remove);

        function remove(){

            newElem.remove();
        }



    }
}
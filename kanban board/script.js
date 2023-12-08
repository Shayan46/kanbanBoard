let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removeBtn = document.querySelector(".remove-btn");


let addModal = true;
let removeFlag = false;

addBtn.addEventListener("click", function(){
    if(addModal){
        modal.style.display = "flex";
        addModal = false;
    }
    else{
        modal.style.display = "none";
        addModal = true;
    }
})

removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color = "black";
        removeFlag = false; 
        
    } 
    else{
        removeBtn.style.color = "red";
        removeFlag = true;
    }
})



textArea.addEventListener("keydown", function(e){
    let key = e.key;
    if(key == "Enter"){
        createTicket();
        textArea.value = "";
        modal.style.display = "none";
        addModal = true ;
    }
})


for (let i = 0; i < allPriorityColor.length;i++){
    allPriorityColor[i].addEventListener("click", function(){
        for (j= 0; j < allPriorityColor.length; j++){
            if(allPriorityColor[j].classList.contains("active")){
                allPriorityColor[j].classList.remove("active");
                

            }
        }
        allPriorityColor[i].classList.add("active");
    })


}

function createTicket(){
   
    let ticketCont = document.createElement('div');
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = '<div class="ticket-color-green"></div> ' +
                            '<div class="ticket-id">#hiii</div>' +
                            '<div class="ticket-area">Some task</div>' ;

    console.log(ticketCont);
    mainCont.append(ticketCont);



//delete handling

ticketCont.addEventListener("click", function(){
    if (removeFlag)
        ticketCont.remove();
})

}
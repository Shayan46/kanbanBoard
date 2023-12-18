let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removeBtn = document.querySelector(".remove-btn");


let color =("red", "blue", "green", "black");
let modalPriorityColor = "black";

//var uid = new ShortUniqueId();

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
        let task = textArea.value;
        createTicket(task);
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
        modalPriorityColor =allPriorityColor[i].classList[1];
        //console.log(modalPriorityColor);
    })


}

function createTicket(task){

   // let id = uid();
    let ticketCont = document.createElement('div');
    ticketCont.setAttribute("class","ticket-cont"); 
    ticketCont.innerHTML = `<div class="ticket-color ${modalPriorityColor}" ></div>
                            <div class="ticket-id">#$afnkjfa</div>
                            <div class="ticket-area">${task}</div>
                            <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>` ;
    console.log(ticketCont);
    mainCont.append(ticketCont);

//delete handling

ticketCont.addEventListener("click", function(){
    if (removeFlag)
        ticketCont.remove();
})


// handle  priority color change

 let ticketColor = ticketCont.querySelector(".ticket-color");

 ticketColor.addEventListener("click",function(){
    let currentColor = ticketColor.classList[i];
    let currentColorIndex = color.findIndex(function(col){
        return col == currentColor;
    });
    // for(let i=0;i<color.length;i++){
    //     if (color[i]== currentColor){
    //         currentColorIndex = i;
    //         break;
    //     }
    // }
    // ["red","blue","green","black"]
    // [0,1,2,3]
    let nextColorIndex = (currentColorIndex +1)%color.length;
    let nextColor = color[nextColorIndex] ;
    console.log("nextColor");
    ticketColor.classList.remove(currentColor);
    ticketColor.classList.add(nextColor);

 })


 //handle lock an unlock

 let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i ");
 let ticketArea =ticketCont.querySelector(".ticket-area");


 lockUnlockBtn.addEventListener("click",function(){
    console.log(lockUnlockBtn);
    if(lockUnlockBtn.classList.contains("fa-lock")){
        lockUnlockBtn.classList.remove("fa-lock");
        lockUnlockBtn.classList.add("fa-lock-open");
        ticketArea.setAttribute("contenteditable","true" );
     }
    else{(lockUnlockBtn.classList.remove("fa-lock-open"))    ;
        lockUnlockBtn.classList.add("fa-lock");
        ticketArea.setAttribute("contenteditable","false");
        }
    })
}
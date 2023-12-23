let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset"); 
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let New=document.querySelector("#new");
let turn0=true;



const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turn0==true){   //player o turn
          box.innerText="O";
          turn0=false;
      }else{
        box.innerText="X";  //player X turn
          turn0=true;
      }
      box.disabled=true;
      checkWinner();
      
    })
})



const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const printWinner=(winner)=>{
msg.innerText=`Congartulations! the Winner is${winner}`;
msgContainer.classList.remove("hide");
disablebtn();
}

const checkWinner=()=>{
    for(let pattern of winPattern ){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner",pos1);
                printWinner(pos1);
                
            }
        }
    }
}
const enabledbtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetbtn=()=>{
    turn0=true;
    enabledbtn();
    msgContainer.classList.add("hide")
}
reset.addEventListener("click",resetbtn);
New.addEventListener("click",resetbtn);

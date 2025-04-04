let boxes =document.querySelectorAll(".box");
let restBtn=document.querySelector("#bt2");
let hide=document.querySelector(".hideWinner");
let resetGame=document.querySelector("#bt2");
let newGame=document.querySelector(".hideGame");

let turn0=true;

const winNumbers=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

boxes.forEach((value)=>{
  value.addEventListener("click",()=>{
   if(turn0){
    value.innerText="X";
    turn0=false;
   }
   else{
    value.innerText="0";
    turn0=true;
   }
   value.disabled=true;
   checkWinner();
  });

});

const disabledBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const checkWinner=()=>{
  for(let pattern of winNumbers){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!=""){
      if(pos1===pos2 &&  pos2===pos3){
        document.querySelector(".winner h2").innerText = ` Winner: ${pos1} `;
        hide.classList.remove("hideWinner");
        newGame.classList.remove("hideGame")
        disabledBoxes();
      }
      }
  }
}

const reset=()=>{
  for(box of boxes){
    box.innerText="";
    box.disabled=false;
  }
    hide.classList.add("hideWinner");
    newGame.classList.add("hideGame");
  
}
resetGame.addEventListener("click",reset);
newGame.addEventListener("click",reset)


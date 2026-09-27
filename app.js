let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")
const gencompchoice = () =>{
   const options = ["rock","paper","scissors"]
   const randidx =  Math.floor(Math.random()*3);
   return options[randidx];
}

const drawgame = ()=>{
    msg.innerText = "game was draw. /play again"
    
}

const showwinner = (userwin,userchoice,compchoice)=>{
     if (userwin) {
        userscore++;
        userscorepara.innerText = userscore 
        
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`
        
        
     } else {
        compscore++;
        compscorepara.innerText = compscore

        msg.innerText = `you lose. ${userchoice} beats ${compchoice}`
       
        
     }
}



const playgame = (userchoice)=>{
    console.log("user choice = ", userchoice);
    // genrate computer choice
    const compchoice = gencompchoice();
    console.log("genratecompchoice =", compchoice);


        if (userchoice === compchoice) {
        drawgame();
    }else{
        let userwin = true;
        if (userchoice === "rock") {
            //paper, scissor
            userwin = compchoice === "paper" ? false : true;
        }else if (userchoice === "paper"){
           userwin = compchoice === "scissors" ? false : true;        
    }else{
       userwin = compchoice === "rock" ? false :true;
    }
    showwinner(userwin, userchoice,compchoice);
}
}




//     if (userchoice === compchoice) {
//         drawgame();
//     }else{
//         let userwin = true;
//         if (userchoice === "rock") {
//             //paper, scissor
//             userwin = compchoice === "paper" ? false : true;
//         }else if (userchoice === "paper"){
//            userwin = compchoice === "scissors" ? false : true;        
//     }else{
//        userwin = compchoice === "rock" ? false :true;
//     }
//     showwinner(userwin);
// }  


choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    
})
}
)

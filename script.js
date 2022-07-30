let scoreSpan=document.getElementById("score");
let buttons=document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
        let keyValue=e.target.getAttribute("key");
        let prevScore=parseInt(scoreSpan.innerHTML);
        if(keyValue==="true"){
            prevScore++;
            scoreSpan.innerHTML=prevScore;
            e.target.setAttribute("key","");
        }else if(keyValue==="false"){
            prevScore--;
            scoreSpan.innerHTML=prevScore;
        }
    })
});










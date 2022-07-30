let scoreSpan=document.getElementById("score");
let buttons=document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
        let btn=e.target;
        if(btn.getAttribute("key")==="true"){
            btn.setAttribute("key","");
            let prevScore=parseInt(scoreSpan.innerHTML);
            prevScore++;
            scoreSpan.innerHTML=prevScore;
        }
    })
});










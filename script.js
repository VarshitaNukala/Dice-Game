var numberGenerator = () => {
    var num1 = Math.random();
    var num2 = Math.random();
    num1 = Math.floor(num1 * 6)+1;
    num2 = Math.floor(num2 * 6)+1;
    console.log(num1, num2);
    changepic(num1,num2);
}


var changepic=(num1,num2)=>{
     document.getElementById('score1').src="images/dice-"+num1+".png";
     document.getElementById('score2').src="images/dice-"+num2+".png";
     if(num1>num2){
         document.getElementsByTagName("h1")[0].innerHTML="Player 1 Won!!"
     }
     else if(num2>num1){
        document.getElementsByTagName("h1")[0].innerHTML="Player 2 Won!!"
     }
     else{
        document.getElementsByTagName("h1")[0].innerHTML="It's a draw. Refresh Again."
     }
}
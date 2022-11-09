//LIKE BUTTON
var likes=document.getElementsByClassName("like")
console.log(likes)
for(let i=0; i<likes.length; i++){
    let btnlike=likes[i];
    btnlike.addEventListener("click", function(){

       if( btnlike.firstElementChild.style.color == "black") {
        btnlike.firstElementChild.style.color = "red";
    } else {
        btnlike.firstElementChild.style.color = "black";
    }
});
}



// BOUTON
var min =document.getElementsByClassName("minus-btn");

for(let i=0; i<min.length; i++){
    let btmin=min[i];
    btmin.addEventListener("click", function()
    {
    if (btmin.nextElementSibling.value >1  )  {  
     btmin.nextElementSibling.value--;
     calculfinalprix();
    


    }
    
    })
}

var plus =document.getElementsByClassName("plus-btn");
for(let i=0; i<plus.length; i++){
    let btnplus=plus[i];
    btnplus.addEventListener("click", function()
    {
     
        btnplus.previousElementSibling.value++;
        calculfinalprix();
        
    
    })
}
//delete
var  del =document.getElementsByClassName("delete");
 let prix = document.getElementsByClassName("price");
for(let i=0; i<del.length; i++){
    let btdel=del[i];
   
    btdel.addEventListener("click", function()
    {
     
        btdel.parentElement.remove();
        calculfinalprix();
       
        
    })}
    
    




//total
function calculfinalprix() {
    let prix = document.getElementsByClassName("price");
    let quant = document.getElementsByClassName("Quant");
    let finalPrice = 0;
    for (let i = 0; i < prix.length; i++) {
        finalPrice =
            finalPrice + parseInt(prix[i].innerHTML) * parseInt(quant[i].value);
    }
    console.log(finalPrice);
    let total = document.getElementById("finalPrice");
    total.value = finalPrice;
}
document.querySelector("#userDet").addEventListener("click",function(){
    var name=document.querySelector("#name").value;
    var add=document.querySelector("#add").value;
    if(name=="" || add==""){
        alert("Enter correct details");
    }
    else{

        setTimeout(
            function(){
    
            alert("Your order is accepted")
        
            }
        ,3000 );
        setTimeout(
            function(){
    
            alert("Your order is being cooked")
        
            }
        ,8000 );
        setTimeout(
            function(){
    
            alert("Your order is ready")
        
            }
        ,10000 );
        setTimeout(
            function(){
    
            alert("Your order is out for delivery")
        
            }
        ,12000 );
    }
})
var total=0;
    var cart=JSON.parse(localStorage.getItem("cartItems")) || [];
    for(let i=0; i<cart.length; i++){
        var price=cart[i].price.split(" ");
        total+=+price[1];
    }
    document.querySelector("#totalPrice").textContent="Total Cart Value : Rs "+total
    document.querySelector("#totalItems").textContent="Total Items : "+cart.length;
    display(cart);
    function display(cart){
        document.querySelector("#container").innerHTML=""
        cart.map(function(elem,index){
            var div=document.createElement("div");
            var image=document.createElement("img");
            image.src=elem.image;
            var name=document.createElement("h3");
            name.textContent=elem.name;
            var div2=document.createElement("div");
            var price=document.createElement("h3");
            price.textContent=elem.price;
            var btn=document.createElement("button");
            btn.textContent="Remove"
            btn.addEventListener("click",function(){
                cart.splice(index,1)
                localStorage.setItem("cartItems",JSON.stringify(cart));
                var total=0
                for(let i=0; i<cart.length; i++){
                        var price=cart[i].price.split(" ");
                        total+=+price[1];
                    }
                document.querySelector("#totalPrice").textContent="Total Cart Value : Rs "+total
                document.querySelector("#totalItems").textContent="Total Items : "+cart.length;
                display(cart);
            });
            div2.append(price,btn);
            console.log(cart.length);
            div.append(image,name,div2);
            document.querySelector("#container").append(div);
        })
    }

    function checkout(){
        if(cart.length==0){
            alert("Add some items to cart");
        }
        else{

            window.location.href="checkout.html";
        }
    }
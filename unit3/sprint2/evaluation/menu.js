var cart=JSON.parse(localStorage.getItem("cartItems")) || [];
    document.querySelector("#cartValue").textContent="Cart-"+cart.length;
    document.querySelector("#cartValue").addEventListener("click",function(){
        window.location.href="cart.html";
    })
    async function items(){
        let firstSearch=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
        var data=await firstSearch.json();
        // console.log(data.meals);
        data.meals.map(function(elem){
            var div=document.createElement("div");
            var image=document.createElement("img");
            image.src=elem.strMealThumb;
            var name=document.createElement("h3");
            name.textContent=elem.strMeal;
            var div2=document.createElement("div");
            var price=document.createElement("h3");
            price.textContent="Rs "+Math.floor(Math.random()*400+100);
            var btn=document.createElement("button");
            btn.textContent="Add to cart"
            btn.addEventListener("click",function(){
                var list={
                    name:name.textContent,
                    price:price.textContent,
                    image:image.src,
                }
                cart.push(list);
                localStorage.setItem("cartItems",JSON.stringify(cart));
                document.querySelector("#cartValue").textContent="Cart-"+cart.length;
            });
            div2.append(price,btn);
            console.log(cart.length);
            div.append(image,name,div2);
            document.querySelector("#container").append(div);
        })
    }

    items()
let list = document.getElementsByClassName("list");
let cartWindowBox = document.getElementById("cartWindow");
let shopWindowBox = document.getElementById("shopWindow");

let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let purple = document.getElementById("purple");

let priceRed = document.getElementById("priceRed");
let priceBlue = document.getElementById("priceBlue");
let priceGreen = document.getElementById("priceGreen");
let pricePurple = document.getElementById("pricePurple");

let total = document.getElementById("total");

for(product of list){
    product.addEventListener("dragstart", function(e){
        let selected = e.target;

        cartWindowBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        cartWindowBox.addEventListener("drop", function(e){
            cartWindowBox.append(selected);
            if(selected === red){
                total.textContent = parseInt(total.textContent || 0) + parseInt(priceRed.textContent || 0);
                selected = '';
            }else if(selected === blue){
                total.textContent = parseInt(total.textContent || 0) + parseInt(priceBlue.textContent || 0);
                selected = '';
            }else if(selected === green){
                total.textContent = parseInt(total.textContent || 0) + parseInt(priceGreen.textContent || 0);
                selected = '';
            }else if(selected === purple){
                total.textContent = parseInt(total.textContent || 0) + parseInt(pricePurple.textContent || 0);
                selected = '';
            }
        });

        shopWindowBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        shopWindowBox.addEventListener("drop", function(e){
            shopWindowBox.append(selected);
            if(selected === red){
                total.textContent = parseInt(total.textContent || 0) - parseInt(priceRed.textContent || 0);
                selected = '';
            }else if(selected === blue){
                total.textContent = parseInt(total.textContent || 0) - parseInt(priceBlue.textContent || 0);
                selected = '';
            }else if(selected === green){
                total.textContent = parseInt(total.textContent || 0) - parseInt(priceGreen.textContent || 0);
                selected = '';
            }else if(selected === purple){
                total.textContent = parseInt(total.textContent || 0) - parseInt(pricePurple.textContent || 0);
                selected = '';
            }
        });
    });
};
//all the container variables.
let list = document.getElementsByClassName("list");
let cartWindowBox = document.getElementById("cartWindow");
let shopWindowBox = document.getElementById("shopWindow");

//all the product variables.
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let purple = document.getElementById("purple");

let priceRed = document.getElementById("priceRed");
let priceBlue = document.getElementById("priceBlue");
let priceGreen = document.getElementById("priceGreen");
let pricePurple = document.getElementById("pricePurple");

//total price variable.
let total = document.getElementById("total");

for(product of list){
    product.addEventListener("dragstart", function(e){
        let selected = e.target;

        cartWindowBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        cartWindowBox.addEventListener("drop", function(e){
            cartWindowBox.append(selected);

        switch(selected){
        case red:
            total.textContent = parseInt(total.textContent || 0) + parseInt(priceRed.textContent || 0);
            selected = '';
        break;
        case blue:
            total.textContent = parseInt(total.textContent || 0) + parseInt(priceBlue.textContent || 0);
            selected = '';
        break;
        case green:
            total.textContent = parseInt(total.textContent || 0) + parseInt(priceGreen.textContent || 0);
            selected = '';
        break;
        case purple:
            total.textContent = parseInt(total.textContent || 0) + parseInt(pricePurple.textContent || 0);
            selected = '';
        break;
        };
    });
       


        shopWindowBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        shopWindowBox.addEventListener("drop", function(e){
            shopWindowBox.append(selected);

            switch(selected){
                case red:
                    total.textContent = parseInt(total.textContent || 0) - parseInt(priceRed.textContent || 0);
                    selected = '';
                break;
                case blue:
                    total.textContent = parseInt(total.textContent || 0) - parseInt(priceBlue.textContent || 0);
                    selected = '';
                break;
                case green:
                    total.textContent = parseInt(total.textContent || 0) - parseInt(priceGreen.textContent || 0);
                    selected = '';
                break;
                case purple:
                    total.textContent = parseInt(total.textContent || 0) - parseInt(pricePurple.textContent || 0);
                    selected = '';
                break;
                };
        });
    });
};
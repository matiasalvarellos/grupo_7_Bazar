window.addEventListener("load", function(){
    let buyForm = document.querySelector(".buy")
    

    buyForm.addEventListener("submit", function(e){
        if (!document.querySelector(".containerCart")){
            e.preventDefault();
        }
    })

    let contadores = document.querySelectorAll(".quantity")
    let products_names = document.querySelectorAll(".product_name")
    let unit_prices = document.querySelectorAll(".unit_price")
    let subtotals = document.querySelectorAll(".subtotal")

    contadores.forEach((contador, i)=>{
        contador.addEventListener("blur", function () {

            let contadorValue = contador.value;
            let subtotalValue = subtotals[i].innerHTML;
            let priceValue = unit_prices[i].innerHTML;
            let product_name = products_names[i].innerHTML;

            let body = {
                unit_price: priceValue,
                quantity: contadorValue,
                subtotal: subtotalValue,
                product_name
            }

            fetch("http://localhost:3001/api/cart/update", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                let total = 0;
                let subTotals = document.querySelectorAll(".subtotal")
                subTotals[i].innerHTML = data.subtotal;

                subTotals.forEach(subtotal =>{
                   total += Number(subtotal.innerHTML)
                })
                document.querySelector("#total").innerHTML = total
            })

        })
    })
    

})
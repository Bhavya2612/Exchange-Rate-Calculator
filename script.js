var currencyEl_one= document.getElementById('currency-one');
var amountEl_one= document.getElementById('amount-one');
var currencyEl_two= document.getElementById('currency-two');
var amountEl_two= document.getElementById('amount-two');
var rateE1 = document.getElementById('rate');
var swap= document.getElementById('swap');

//Fetch exchange rates and update the DOM. 
function calculate(){
    var currency_one = currencyEl_one.value;
    var currency_two = currencyEl_two.value;
    fetch(`https://api.exchangerate-api.com/v6/latest/${currency_one}`,)
    .then(res=> res.json())
    .then(data=>{
        var rate= data.rates[currency_two];
    

    rateE1.innerText = `${currency_one}=${rate} ${currency_two}`;

    amountEl_two.value = (amountEl_one.value *rate).toFixed(2);
    })


}


//event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
calculate();
swap.addEventListener('click',() =>{
    const temp = currencyEl_one;
    currencyEl_one= currencyEl_two;
    currencyEl_two = temp;
    calculate();
});
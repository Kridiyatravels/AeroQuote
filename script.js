console.log("AeroQuote is ready!");

let ticketprice= 595;
let servicecharge= 30;
let totalprice= ticketprice + servicecharge;

console.log(totalprice);

function generateQuote(){
let airlineName= document.getElementById("airline").value;
console.log(airlineName);
}

document.getElementById("generate-quotation").addEventListener("click",generateQuote);


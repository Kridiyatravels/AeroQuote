console.log("AeroQuote is ready!");

let ticketprice= 595;
let servicecharge= 30;
let totalprice= ticketprice + servicecharge;

console.log(totalprice);

function generateQuote(){
let airlineName= document.getElementById("airline").value;
let departureCity= document.getElementById("departure").value;
let destinationCity= document.getElementById("destination").value;
let travelDate= document.getElementById("travel").value;
let ticketPriceInput= document.getElementById("ticket-price").value;
let serviceChargeInput= document.getElementById("service-charge").value;
let baggageAllowance= document.getElementById("baggage").value;

console.log(airlineName);
console.log(departureCity);
console.log(destinationCity);
console.log(travelDate);
console.log(ticketPriceInput);
console.log(serviceChargeInput);
console.log(baggageAllowance);
}

document.getElementById("generate-quotation").addEventListener("click",generateQuote);


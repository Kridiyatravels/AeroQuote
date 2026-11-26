console.log("AeroQuote is ready!");

function generateQuote(){
let airlineName= document.getElementById("airline").value;
let departureCity= document.getElementById("departure").value;
let destinationCity= document.getElementById("destination").value;
let travelDate= document.getElementById("travel").value;
let ticketPriceInput= document.getElementById("ticket-price").value;
let serviceChargeInput= document.getElementById("service-charge").value;
let baggageAllowance= document.getElementById("baggage").value;
let totalPrice= Number(ticketPriceInput)+ Number(serviceChargeInput);
let quotation=`FLIGHT QUOTATION

Flight: ${airlineName}
From: ${departureCity}
To: ${destinationCity}
Travel Date: ${travelDate}
Baggage: ${baggageAllowance} kg
Fare: AED ${totalPrice}`;


console.log(quotation);
document.getElementById("quote-result").textContent=quotation;
console.log(airlineName);
console.log(departureCity);
console.log(destinationCity);
console.log(travelDate);
console.log(ticketPriceInput);
console.log(serviceChargeInput);
console.log(baggageAllowance);
console.log(totalPrice);
}

document.getElementById("generate-quotation").addEventListener("click",generateQuote);


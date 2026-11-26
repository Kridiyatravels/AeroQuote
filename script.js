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
let quotation= `FLIGHT QUOTATION

Flight: ${airlineName}
From: ${departureCity}
To: ${destinationCity}
Travel Date: ${travelDate}
Baggage: ${baggageAllowance} kg
Fare: AED ${totalPrice}`;

document.getElementById("quote-result").textContent=quotation;

}

document.getElementById("generate-quotation").addEventListener("click",generateQuote);

document.getElementById("quote-form").addEventListener("input",generateQuote);
console.log("AeroQuote is ready!");

function generateQuote(){
let airlineName= document.getElementById("airline").value;
let departureCity= document.getElementById("departure").value;
let destinationCity= document.getElementById("destination").value;
let departureDate= document.getElementById("departure-date").value;
let departureTime= document.getElementById("departure-time").value;
let arrivalDate= document.getElementById("arrival-date").value;
let arrivalTime= document.getElementById("arrival-time").value;
let ticketPriceInput= document.getElementById("ticket-price").value;
let serviceChargeInput= document.getElementById("service-charge").value;
let baggageAllowance= document.getElementById("baggage").value;
let totalPrice= Number(ticketPriceInput)+ Number(serviceChargeInput);
let quotation= `FLIGHT QUOTATION

Flight: ${airlineName}
From: ${departureCity}
To: ${destinationCity}
Departure date: ${departureDate}
Departure time: ${departureTime}
Arrival date: ${arrivalDate}
Arrival Time: ${arrivalTime}
Baggage: ${baggageAllowance} kg
Fare: AED ${totalPrice}`;

document.getElementById("quote-result").textContent=quotation;

}

document.getElementById("generate-quotation").addEventListener("click",generateQuote);

document.getElementById("quote-form").addEventListener("input",generateQuote);
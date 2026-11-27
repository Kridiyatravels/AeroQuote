console.log("AeroQuote is ready!");

function generateQuote(){
    let tripType= document.querySelector( `input[name="trip-type"]:checked`).value;
    console.log("Trip type:", tripType);
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
let departureDateTime= new Date(`${departureDate}T${departureTime}`);
let arrivalDateTime= new Date(`${arrivalDate}T${arrivalTime}`);
let durationMilliseconds= arrivalDateTime-departureDateTime;
console.log(durationMilliseconds);
let totalMinutes= durationMilliseconds/ 60000;
let durationHours= Math.floor(totalMinutes/ 60);
let durationMinutes= totalMinutes% 60;

let durationText;
if (Number.isFinite(durationMilliseconds)&& durationMilliseconds>0){
durationText= `${durationHours} Hrs ${durationMinutes} Mins`;
}else{
    durationText= "Unavailable";
}

let quotation= `FLIGHT QUOTATION

Flight: ${airlineName}
From: ${departureCity}
To: ${destinationCity}
Departure date: ${departureDate}
Departure time: ${departureTime}
Arrival date: ${arrivalDate}
Arrival Time: ${arrivalTime}
Duration: ${durationText}
Baggage: ${baggageAllowance} kg
Fare: AED ${totalPrice}`;

document.getElementById("quote-result").textContent=quotation;

}

document.getElementById("generate-quotation").addEventListener("click",generateQuote);

document.getElementById("quote-form").addEventListener("input",generateQuote);
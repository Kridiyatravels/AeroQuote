console.log("AeroQuote is ready!");

function generateQuote(){
    let tripType= document.querySelector( `input[name="trip-type"]:checked`).value;
    console.log("Trip type:", tripType);
    if (tripType==="one-way"){
        document.getElementById("return-flight").hidden=true;
    }else{
        document.getElementById("return-flight").hidden=false;
    }
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
let adults= Number(document.getElementById("adults").value);
let children= Number(document.getElementById("children").value);
let infants=Number(document.getElementById("infants").value);
if (infants > adults){
    infants= adults;
    document.getElementById("infants").value= infants;
}
let totalPassengers= adults + children + infants;
console.log("Total passengers:", totalPassengers);
let returnAirline= document.getElementById("return-airline").value;
let returnDepartureCity= document.getElementById("return-departure").value;
let returnDestinationCity= document.getElementById("return-destination").value;
let returnDepartureDate= document.getElementById("return-departure-date").value;
let returnDepartureTime= document.getElementById("return-departure-time").value;
let returnArrivalDate= document.getElementById("return-arrival-date").value;
let returnArrivalTime=document.getElementById("return-arrival-time").value;
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
let returnDepartureDateTime= new Date(`${returnDepartureDate}T${returnDepartureTime}`);
let returnArrivalDateTime= new Date(`${returnArrivalDate}T${returnArrivalTime}`);
let returnDurationMilliseconds= returnArrivalDateTime-returnDepartureDateTime;
let returnTotalMinutes= returnDurationMilliseconds/ 60000;
let returnDurationHours= Math.floor(returnTotalMinutes/ 60);
let returnDurationMinutes= returnTotalMinutes% 60;

let returnDurationText;
if (Number.isFinite(returnDurationMilliseconds)&& returnDurationMilliseconds>0){
    returnDurationText= `${returnDurationHours} hrs ${returnDurationMinutes} Mins`;
} else{
    returnDurationText= "Unavailable";
}
console.log("ReturnDurationText:", returnDurationText);
let quotation=`Flight Quotation
Flight: ${airlineName}
From: ${departureCity}
To: ${destinationCity}
Departure date: ${departureDate}
Departure time: ${departureTime}
Arrival date: ${arrivalDate}
Arrival time: ${arrivalTime}
Duration: ${durationText}`;

if (tripType==="round-trip"){
    quotation+=`
RETURN FLIGHT
Flight: ${returnAirline}
From: ${returnDepartureCity}
To: ${returnDestinationCity}
Departure date: ${returnDepartureDate}
Departure time: ${returnDepartureTime}
Arrival date: ${returnArrivalDate}
Arrival time: ${returnArrivalTime}
Duration: ${returnDurationText}`;
}
quotation +=`

Baggage: ${baggageAllowance}kg
Fare: AED ${totalPrice}`;



document.getElementById("quote-result").textContent=quotation;

}

document.getElementById("generate-quotation").addEventListener("click",generateQuote);

document.getElementById("quote-form").addEventListener("input",generateQuote);
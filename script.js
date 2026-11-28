console.log("AeroQuote is ready!");

function formatPrice(amount){
    let rounded= Math.round(Number(amount));
    return rounded.toLocaleString("en-US");
}
function generateQuote(){
    let tripType= document.querySelector( `input[name="trip-type"]:checked`).value;
    console.log("Trip type:", tripType);
    let messageFormat= document.querySelector(`input[name="fmt"]:checked`).value;
    console.log("message format:", messageFormat);
    if (tripType==="one-way"){
        document.getElementById("return-flight").hidden=true;
    }else{
        document.getElementById("return-flight").hidden=false;
    }
    let airlineName= document.getElementById("airline").value;
    let cabinClass= document.getElementById("cabin").value;
    let departureCity= document.getElementById("departure").value;
    let destinationCity= document.getElementById("destination").value;
    let departureDate= document.getElementById("departure-date").value;
    let departureTime= document.getElementById("departure-time").value;
let arrivalDate= document.getElementById("arrival-date").value;
let arrivalTime= document.getElementById("arrival-time").value;
let ticketPriceInput= document.getElementById("ticket-price").value;
let childPriceInput= document.getElementById("child-price").value;
let infantPriceInput= document.getElementById("infant-price").value;
let hideFee = document.getElementById("hide-fee").checked;
let showBags= document.getElementById("show-bags").checked;
let showBreakdown= document.getElementById("show-breakdown").checked;
let serviceChargeInput= document.getElementById("service-charge").value;
let baggageAllowance= document.getElementById("baggage").value;
let cabinBaggage= document.getElementById("cabin-baggage").value;
let quoteValidity= document.getElementById("validity").value;
let adults= Number(document.getElementById("adults").value);
let children= Number(document.getElementById("children").value);
let infants=Number(document.getElementById("infants").value);
if (infants > adults){
    infants= adults;
    document.getElementById("infants").value= infants;
}
let totalPassengers= adults + children + infants;
let passengerText= `${adults} ${adults===1? "Adult": "Adults"}`;
if (children>0){
    passengerText += `, ${children} ${children===1? "Child" :"Children"}`;
}
if (infants>0){
    passengerText += `, ${infants} ${infants ===1? "Infant": "Infants"}`;
}
document.getElementById("passenger-toggle").textContent= passengerText;
console.log("Total passengers:", totalPassengers);
document.getElementById("adults-minus").disabled= adults <= 1;
document.getElementById("adults-plus").disabled= adults >= 9;
document.getElementById("children-minus").disabled= children <= 0;
document.getElementById("children-plus").disabled= children >= 8;
document.getElementById("infants-minus").disabled= infants <= 0;
document.getElementById("infants-plus").disabled= infants >= adults;
document.getElementById("child-price-group").hidden= children === 0;
document.getElementById("infant-price-group").hidden= infants === 0;
let returnAirline= document.getElementById("return-airline").value;
let returnDepartureCity= document.getElementById("return-departure").value;
let returnDestinationCity= document.getElementById("return-destination").value;
let returnDepartureDate= document.getElementById("return-departure-date").value;
let returnDepartureTime= document.getElementById("return-departure-time").value;
let returnArrivalDate= document.getElementById("return-arrival-date").value;
let returnArrivalTime=document.getElementById("return-arrival-time").value;
let adultTotal=adults * Number(ticketPriceInput);
let childTotal= children* Number(childPriceInput);
let infantTotal= infants * Number(infantPriceInput);
let subtotal= adultTotal + childTotal + infantTotal;
let totalPrice= subtotal + Number(serviceChargeInput);
let serviceFee= Number(serviceChargeInput);
let displayAdultPrice= Number(ticketPriceInput);
let displayAdultTotal= adultTotal;
if (hideFee){
    displayAdultTotal += serviceFee;
    if (serviceFee % adults === 0){
        displayAdultPrice += serviceFee / adults;
    }
}
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

Cabin: ${cabinClass}
Passengers: ${passengerText}`;
if (showBags){
quotation +=`
Baggage: ${baggageAllowance} kg checked + ${cabinBaggage} kg cabin`;
}
if (showBreakdown){ 
if (hideFee && serviceFee % adults !== 0){
    quotation +=`
Adults (${adults}): AED ${formatPrice(displayAdultTotal)}`;
} else{
    quotation +=`
Adults (${adults} x AED ${formatPrice(displayAdultPrice)}): AED ${formatPrice(displayAdultTotal)}`;
}
if (children >0){
    quotation +=`
Children (${children} x AED ${formatPrice(childPriceInput)}): AED ${formatPrice(childTotal)}`;
}
if (infants >0){
    quotation +=`
Infants (${infants} x AED ${formatPrice(infantPriceInput)}): AED ${formatPrice(infantTotal)}`;
}
if (!hideFee){
    quotation +=`
Service fee = ${formatPrice(serviceChargeInput)}`;
}
}
quotation +=`
Fare: AED ${formatPrice(totalPrice)}

Valid ${quoteValidity}. Price is not guaranteed until the ticket is issued.`;


document.getElementById("quote-result").textContent=quotation;

}

document.getElementById("generate-quotation").addEventListener("click",generateQuote);

document.getElementById("quote-form").addEventListener("input",generateQuote);
document.getElementById("wa").addEventListener("change",generateQuote);
document.getElementById("em").addEventListener("change",generateQuote);
document.getElementById("adults-plus").addEventListener("click", function(){
    document.getElementById("adults").stepUp();
    generateQuote();
});

document.getElementById("adults-minus").addEventListener("click", function(){
    document.getElementById("adults").stepDown();
    generateQuote();
});
document.getElementById("children-plus").addEventListener("click", function(){
    document.getElementById("children").stepUp();
    generateQuote();
});
document.getElementById("children-minus").addEventListener("click",function(){
  document.getElementById("children").stepDown();
  generateQuote();  
});
document.getElementById("infants-plus").addEventListener("click", function(){
    document.getElementById("infants").stepUp();
    generateQuote();
});
document.getElementById("infants-minus").addEventListener("click", function(){
    document.getElementById("infants").stepDown();
    generateQuote();
});
document.getElementById("passenger-toggle").addEventListener("click", function(){
    let passengerDetails= document.getElementById("passenger-details");
    passengerDetails.hidden= !passengerDetails.hidden;
});
document.addEventListener("click", function(event){
    let passengerDetails= document.getElementById("passenger-details");
    let passengerToggle= document.getElementById("passenger-toggle");
    if (!passengerDetails.contains(event.target)&& !passengerToggle.contains(event.target)){
        passengerDetails.hidden= true;
    }
});
document.getElementById("passenger-done").addEventListener("click", function(){
    document.getElementById("passenger-details").hidden= true;
});
generateQuote();
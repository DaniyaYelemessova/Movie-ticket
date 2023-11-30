function TicketList(){
  this.tickets = [];
}

TicketList.prototype.addTicket = function(ticket){
  this.tickets.push(ticket)
}

TicketList.prototype.displayInfo = function(){
    const output = document.getElementById("output");
    output.textContent = "";

    this.tickets.forEach(function(ticket){
      const ticketInfo = document.createElement("p");
      ticketInfo.textContent = ticket.showInfo();
      output.appendChild(ticketInfo);
    });
};

function Ticket(movieName, timeOfDay, age){
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.age = age;
}

Ticket.prototype.showInfo = function(){
  let basePrice = 20;
  if(this.timeOfDay.toLowerCase() === "morning"){
    basePrice *= 0.9
  }

  if(this.age <= 12 || this.age >=65){
    basePrice *= 0.6
  }

  const discountedPrice = basePrice.toFixed(0);
  const info = `Movie: ${this.movieName} || Price:${discountedPrice} || Time: ${this.timeOfDay}`;
  return info;
}

function reset(){
  const form = document.querySelector("#form")
  form.reset();
}
const ticketList = new TicketList();
function handleTickets(e){
  e.preventDefault();
  const movieName = document.querySelector("input[name='movie']:checked").value;
  const time = document.querySelector("input[name='time']:checked").value;
  const age = document.querySelector("#age").value;
  const newMovie = new Ticket(movieName,time,age);
  ticketList.addTicket(newMovie);
  ticketList.displayInfo();
  reset();
}


document.addEventListener("DOMContentLoaded", function(){
  const form = document.querySelector("#form").addEventListener("submit", handleTickets)
})
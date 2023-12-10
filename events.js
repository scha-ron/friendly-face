// Javascript for handling user events
// and updating the UI

// creating some dummy data
// to show functionality

const dummyEvent = {
    eventName: "Dummy Event",
    eventDate: "2023-12-01",
    eventDescription: " A dummy event for our site"
};

// function to add an event to the event list
function addEventToList(event){
    const eventListings = document.getElementById("eventListings");

    // create a new event card
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    // generate event card content
    eventCard.innerHTML = `
    <h3>${event.eventName}</h3>
    <p>Date: ${event.eventDate}</p>
    <p>${event.eventDescription}</p> `;

    // append event card to the list
    eventListings.appendChild(eventCard);
}

// Add the dummy event to the list upon loading the page
document.addEventListener("DOMContentLoaded", function(){
    addEventToList(dummyEvent);
})
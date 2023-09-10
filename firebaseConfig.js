const url =  "https://esened-baas-default-rtdb.firebaseio.com";

const fullNameContact = document.getElementById("contact-full-name");
const emailContact = document.getElementById("contact-email");
const subjectContact = document.getElementById("contact-subject");
const messageContact = document.getElementById("contact-message");
const submitContactButton = document.getElementById("contact-submit");

const accessName = document.getElementById("access-name")
const accessEmail = document.getElementById("access-email")
const accessCountry = document.getElementById("access-country")
const accessButton = document.getElementById("access-submit")


let IpAdress;

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    IpAdress = data.ip;
  })
  .catch(error => {
    console.log('Could not get IP address:', error);
  });


submitContactButton.addEventListener('click', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    if(fullNameContact.value === "" || emailContact.value === "" || subjectContact.value === ""  || subjectContact.value === ""){
        alert("Fill all the inputs!");
        return;
    }

    // Get the current form values
    const data = {
        FullName: fullNameContact.value,
        Email: emailContact.value,
        Subject: subjectContact.value,
        Message: messageContact.value,
        CreatedDate: new Date(),
        IpAddress: IpAdress

    };


    fetch(`${url}/ContactUS/userId.json`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data));

    alert("Message sent succesfully")
});



accessButton.addEventListener('click', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    if(accessName.value === "" || accessEmail.value === "" || accessCountry.value === ""){
        alert("Fill all the inputs!");
        return;
    }

    // Get the current form values
    const data = {
        FullName: accessName.value,
        Email: accessEmail.value,
        Country: accessCountry.value,
        CreatedDate: new Date(),
        IpAddress: IpAdress
    };

    // Replace `${url}` with the actual URL
    fetch(`${url}/EarlyAccess/userId.json`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data));

    alert("Message sent successfully");
});




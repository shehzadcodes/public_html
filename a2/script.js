// Author Name: Shehzad Rashid Chowdhury
// Hamburger menu function
function hamburger() {
   const menu = document.getElementById("nav-links");

   if (menu.classList.contains("open")) {
         menu.classList.remove("open");
   } else {
         menu.classList.add("open");
   }
}
//Function called when Book Your Checkup is clicked
function bookFreeCheckup() {
      window.location.href = "contact.html?message=I would like to book a free checkup on Saturday, 5th July starting 9 a.m";
}
// In contact.html, pre-fill the message box if a message parameter is present in the URL
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');
if (message) {
      const textarea = document.querySelector('textarea[name="message"]');
      if (textarea) {
            textarea.value = message;
      }
}
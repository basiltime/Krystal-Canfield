/* Hamburger menu */
const navDropdown = document.getElementById("navDropdown");
let toggleMenu = () => {
    if (!navDropdown.classList.contains('show-menu')) {
        navDropdown.classList.add('show-menu');
    } else {
        navDropdown.classList.remove('show-menu');
    }
}
const burger = document.getElementById("burger");
burger.addEventListener("click", toggleMenu);
/* End hamburger menu */

/* Form Submit */
const form = document.getElementById('contactForm')
const name_input = document.getElementById('name');
const message_input = document.getElementById('message');
const email_input = document.getElementById('email');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    console.log('hit')
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/dfb7451573ee6e900f208ff4f6ee2c75', {
        name: name_input.value,
        message: message_input.value,
        email: email_input.value,
        _subject: "New contact from personal website",
        _next: "https://basiltime.github.io/personal_site/", // change when deployed live!
        _autoresponse: "Thank you for reaching out! I'm excited to discuss your project with you. I'll respond to your email as soon as I can."
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}
/* End Form Submit */
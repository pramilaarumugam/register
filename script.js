document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form elements
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();

    // Basic validation
    if (firstname && lastname && email && contact && address && city) {
        document.getElementById('message').textContent = 'Registration complete!';
    } else {
        document.getElementById('message').textContent = 'Please fill in all fields.';
    }
});

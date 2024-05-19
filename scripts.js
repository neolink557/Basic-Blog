function toggleComments() {
    const comments = document.getElementById('comments');
    if (comments.style.display === 'none') {
        comments.style.display = 'block';
    } else {
        comments.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // For simplicity, just display a message. In a real scenario, you'd send this to a server.
            document.getElementById('formMessage').textContent = `Thank you, ${name}! Your message has been sent.`;

            // Clear the form
            contactForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // For simplicity, just display a message. In a real scenario, you'd send this to a server.
            document.getElementById('formMessage').textContent = `Thank you, ${name}! Your message has been sent.`;

            // Clear the form
            contactForm.reset();
        });
    }
});


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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', () => {
            const p = button.previousElementSibling;
            const isExpanded = p.getAttribute('data-expanded') === 'true';

            if (isExpanded) {
                // If paragraph is expanded, collapse it
                p.setAttribute('data-expanded', 'false');
            } else {
                // If paragraph is collapsed, expand it
                p.setAttribute('data-expanded', 'true');
                const siblings = document.querySelectorAll('.post > .content > .expandable');
                siblings.forEach(sibling => {
                    if (sibling !== p) {
                        sibling.setAttribute('data-expanded', 'true');
                    }
                });
            }
        });
    });
});

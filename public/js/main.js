document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageViews = document.querySelectorAll('.page-view');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // Single-Page Navigation Functionality
    function navigateTo(hash) {
        const targetId = hash.replace('#', '') || 'home';
        
        pageViews.forEach(view => {
            if (view.id === targetId) {
                view.classList.add('active');
            } else {
                view.classList.remove('active');
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Handle hash updates and initial load
    window.addEventListener('hashchange', () => navigateTo(window.location.hash));
    navigateTo(window.location.hash);

    // Form Submission Handler (Connects to Express backend)
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formStatus.style.color = '#2563eb';
            formStatus.textContent = 'Sending message...';

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    formStatus.style.color = '#16a34a';
                    formStatus.textContent = result.message || 'Message sent successfully!';
                    contactForm.reset();
                } else {
                    formStatus.style.color = '#dc2626';
                    formStatus.textContent = result.error || 'Failed to send message.';
                }
            } catch (err) {
                formStatus.style.color = '#dc2626';
                formStatus.textContent = 'Error connecting to server.';
            }
        });
    }
});
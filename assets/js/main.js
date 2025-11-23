document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const topic = document.getElementById('topic').value.trim();
      const message = document.getElementById('message').value.trim();

      const body = `**Name:** ${name}\n**Email:** ${email}\n**Topic:** ${topic || 'General'}\n\n${message}\n\n---\nSubmitted via contact form.`;
      const title = `[Contact] ${topic || 'General'} - ${name || 'Anonymous'}`;
      const url = new URL('https://github.com/tasmagic-app/tasmagic-app.github.io/issues/new');
      url.searchParams.set('title', title);
      url.searchParams.set('body', body);
      url.searchParams.set('labels', 'contact');

      window.open(url.toString(), '_blank', 'noopener');
      alert('One more step: finalize the message in the secure portal.');
      contactForm.reset();
    });
  }
});

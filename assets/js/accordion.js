const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const faqHeader = item.querySelector('h3');
    const faqToggle = item.querySelector('.faq-toggle');

    faqHeader.addEventListener('click', () => {
        item.classList.toggle('faq-active');
    });

    faqToggle.addEventListener('click', () => {
        item.classList.toggle('faq-active');
    });
});
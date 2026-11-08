const year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;

// Screenshot lightbox: click a screenshot to view it full size.
const screenshots = document.querySelectorAll('.screenshot img');

if (screenshots.length) {
    const zoomIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
            <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
            <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
        </svg>`;

    const lightbox = document.createElement('dialog');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
        <img alt="">`;
    document.body.append(lightbox);

    const lightboxImage = lightbox.querySelector('img');
    // Any click inside the open lightbox (image, backdrop or close button) closes it.
    lightbox.addEventListener('click', () => lightbox.close());

    screenshots.forEach((img) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'zoomable';
        button.setAttribute('aria-label', `Enlarge ${img.alt || 'screenshot'}`);
        img.replaceWith(button);
        button.append(img);
        button.insertAdjacentHTML('beforeend', `<span class="zoom-badge">${zoomIcon}</span>`);

        button.addEventListener('click', () => {
            lightboxImage.src = img.currentSrc || img.src;
            lightboxImage.alt = img.alt;
            lightbox.showModal();
        });
    });
}

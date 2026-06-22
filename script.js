// Sooner Response Photography - Interactive JS

document.addEventListener('DOMContentLoaded', () => {
    // Tailwind script already loaded via CDN
    
    // Lightbox functionality
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox flex';
    lightbox.innerHTML = `
        <div class="relative max-w-5xl">
            <button onclick="closeLightbox()" class="absolute -top-12 right-0 text-white text-4xl hover:text-red-400">&times;</button>
            <img id="lightbox-img" src="" class="rounded-2xl shadow-2xl" alt="">
        </div>
    `;
    document.body.appendChild(lightbox);

    window.openLightbox = function(src) {
        document.getElementById('lightbox-img').src = src;
        lightbox.style.display = 'flex';
    };

    window.closeLightbox = function() {
        lightbox.style.display = 'none';
    };

    // Close lightbox on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
    
    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Sample photos - replace with your own URLs
const samplePhotos = [
    { url: 'https://picsum.photos/id/1015/1200/800', category: 'fire', title: 'Structure Fire' },
    { url: 'https://picsum.photos/id/106/1200/800', category: 'ems', title: 'EMS Response' },
    // Add more...
];

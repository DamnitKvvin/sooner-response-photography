// script.js - Sooner Response Photography

const media = [
    { type: "image", src: "https://i.ibb.co/G4HDhcpq/DSC-0479.jpg", thumb: "https://i.ibb.co/G4HDhcpq/DSC-0479.jpg", caption: "20' FPIU - Hartshorne Police" },
    { type: "image", src: "https://i.ibb.co/Xf8bSZXX/DSC-0455.jpg", thumb: "https://i.ibb.co/Xf8bSZXX/DSC-0455.jpg", caption: "20' FPIU - Hartshorne Police" },
    { type: "image", src: "https://i.ibb.co/HTv8q6Vs/DSC-0417.jpg", thumb: "https://i.ibb.co/HTv8q6Vs/DSC-0417.jpg", caption: "20' FPIU - Hartshorne Police" },
    { type: "image", src: "https://i.ibb.co/hFkjh1GG/DSC-0370.jpg", thumb: "https://i.ibb.co/hFkjh1GG/DSC-0370.jpg", caption: "20' FPIU - Hartshorne Police" }
];

function renderMedia() {
    const grid = document.getElementById('masonry-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    media.forEach(item => {
        const div = document.createElement('div');
        div.className = 'break-inside-avoid cursor-pointer';
        div.innerHTML = `
            <div class="relative overflow-hidden rounded-3xl bg-zinc-900">
                <img src="${item.thumb}" alt="${item.caption}" 
                     class="w-full h-auto object-cover masonry-img">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                    <p class="text-sm">${item.caption}</p>
                </div>
            </div>
        `;
        div.onclick = () => openLightbox(item);
        grid.appendChild(div);
    });
}

function openLightbox(item) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
    const captionEl = document.getElementById('lightbox-caption');
    
    if (!lightbox || !content) return;
    
    content.innerHTML = `<img src="${item.src}" alt="${item.caption}" class="max-h-[85vh] w-auto max-w-full rounded-2xl shadow-2xl">`;
    captionEl.textContent = item.caption;
    
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    renderMedia();
    
    // Lightbox close on background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    
// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.getElementById('submit-btn');
    const originalText = btn.textContent;
    
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // For now: Show success message (replace with Formspree later)
    setTimeout(() => {
        alert("Message sent! I'll get back to you soon.");
        document.getElementById('contact-form').reset();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 800);
});
    
    // Keyboard escape
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeLightbox();
    });
});

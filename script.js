// script.js - Sooner Response Photography

const media = [
    { type: "image", src: "https://i.ibb.co/G4HDhcpq/DSC-0479.jpg", thumb: "https://i.ibb.co/G4HDhcpq/DSC-0479.jpg", caption: "20' FPIU - Hartshorne Police" },
    { type: "image", src: "https://i.ibb.co/Xf8bSZXX/DSC-0455.jpg", thumb: "https://i.ibb.co/Xf8bSZXX/DSC-0455.jpg", caption: "20' FPIU - Hartshorne Police" },
    { type: "image", src: "https://i.ibb.co/HTv8q6Vs/DSC-0417.jpg", thumb: "https://i.ibb.co/HTv8q6Vs/DSC-0417.jpg", caption: "20' FPIU - Hartshorne Police" },
    { type: "image", src: "https://i.ibb.co/hFkjh1GG/DSC-0370.jpg", thumb: "https://i.ibb.co/hFkjh1GG/DSC-0370.jpg", caption: "20' FPIU - Hartshorne Police" },

    { type: "image", src: "https://i.ibb.co/V09SBPs9/DSC-0134.jpg", thumb: "https://i.ibb.co/V09SBPs9/DSC-0134.jpg", caption: "Command 1 - Hartshorne Fire Rescue" },
    { type: "image", src: "https://i.ibb.co/GfdqGZFC/DSC-0370-1.jpg", thumb: "https://i.ibb.co/GfdqGZFC/DSC-0370-1.jpg", caption: "Tanker 13 - Hartshorne Fire Rescue" },
    { type: "image", src: "https://i.ibb.co/nNHx9DTh/DSC-0046.jpg", thumb: "https://i.ibb.co/nNHx9DTh/DSC-0046.jpg", caption: "Engine 1 - Haileyville Vol. Fire" },
    { type: "image", src: "https://i.ibb.co/23pJPvdf/DSC-0048.jpg", thumb: "https://i.ibb.co/23pJPvdf/DSC-0048.jpg", caption: "Engine 1 - Haileyville Vol. Fire" },
    { type: "image", src: "https://i.ibb.co/fdnSqWXV/DSC-0060.jpg", thumb: "https://i.ibb.co/fdnSqWXV/DSC-0060.jpg", caption: "Tanker 7 - Haileyville Vol. Fire" },
    { type: "image", src: "https://i.ibb.co/4khW1Z8/DSC-0124.jpg", thumb: "https://i.ibb.co/4khW1Z8/DSC-0124.jpg", caption: "Tanker 7 - Haileyville Vol. Fire" },
    { type: "image", src: "https://i.ibb.co/PZdS0dGF/DSC-0091.jpg", thumb: "https://i.ibb.co/PZdS0dGF/DSC-0091.jpg", caption: "F350 - Haileyville Vol. Fire" },
    { type: "image", src: "https://i.ibb.co/hF78tkpm/DSC-0134-1.jpg", thumb: "https://i.ibb.co/hF78tkpm/DSC-0134-1.jpg", caption: "3500 - Haileyville Vol. Fire" },

    { type: "image", src: "https://i.ibb.co/RGwsbY3C/DSC-0158.jpg", thumb: "https://i.ibb.co/RGwsbY3C/DSC-0158.jpg", caption: "Ladder 1 - McAlester Fire" },
    { type: "image", src: "https://i.ibb.co/Q3gW2xRb/DSC-0160.jpg", thumb: "https://i.ibb.co/Q3gW2xRb/DSC-0160.jpg", caption: "Ladder 1 - McAlester Fire" },
    { type: "image", src: "https://i.ibb.co/1GQHSXXd/DSC-0198.jpg", thumb: "https://i.ibb.co/1GQHSXXd/DSC-0198.jpg", caption: "Medic 2 - McAlester Fire" },
    { type: "image", src: "https://i.ibb.co/TMCNJqJb/DSC-0186.jpg", thumb: "https://i.ibb.co/TMCNJqJb/DSC-0186.jpg", caption: "Medic 2 - McAlester Fire" }
];

function renderMedia() {
    const grid = document.getElementById('masonry-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    media.forEach(item => {
        const div = document.createElement('div');
        div.className = 'break-inside-avoid mb-6 group cursor-pointer';
        div.innerHTML = `
            <div class="relative overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl">
                <img src="${item.thumb}" 
                     alt="${item.caption}" 
                     loading="lazy"
                     decoding="async"
                     class="w-full h-auto object-cover masonry-img transition-transform duration-300 group-hover:scale-105">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                    <p class="text-sm text-white line-clamp-2">${item.caption}</p>
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
    
    content.innerHTML = `
        <img src="${item.src}" 
             alt="${item.caption}" 
             class="max-h-[85vh] w-auto max-w-full rounded-2xl shadow-2xl">
    `;
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

// ====================== FORM HANDLING ======================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function() {
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 2500);
        }
    });
}

// ====================== INITIALIZE ======================
document.addEventListener('DOMContentLoaded', () => {
    renderMedia();
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // Keyboard escape support
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeLightbox();
    });

    // Contact form
    initContactForm();
});

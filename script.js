// script.js - Sooner Response Photography
// Mixed image + video support with masonry gallery and lightbox

const media = [
    { type: "image", src: "https://ibb.co/qMGQGL3s", thumb: "https://ibb.co/qMGQGL3s", category: "fire", caption: "Night structure response - DSC 0045" },
    { type: "image", src: "https://ibb.co/W4bmZcQS", thumb: "https://ibb.co/W4bmZcQS", category: "fire", caption: "Fire scene detail - DSC 0046" },
    { type: "image", src: "https://ibb.co/1G4cKrTw", thumb: "https://ibb.co/1G4cKrTw", category: "fire", caption: "Apparatus on scene - DSC 0048" },
    { type: "image", src: "https://ibb.co/CKMtmywp", thumb: "https://ibb.co/CKMtmywp", category: "ems", caption: "EMS response - DSC 0049" },
    { type: "image", src: "https://ibb.co/fdrPNhkg", thumb: "https://ibb.co/fdrPNhkg", category: "law", caption: "Law enforcement - DSC 0050" },
    { type: "image", src: "https://ibb.co/ynr37rFd", thumb: "https://ibb.co/ynr37rFd", category: "fire", caption: "First responders - DSC 0051" },
    { type: "image", src: "https://ibb.co/SXPQqqQ2", thumb: "https://ibb.co/SXPQqqQ2", category: "ems", caption: "Paramedic on duty - DSC 0052" },
    { type: "image", src: "https://ibb.co/1GqKNJnc", thumb: "https://ibb.co/1GqKNJnc", category: "fire", caption: "Training drill - DSC 0053" },
    { type: "image", src: "https://ibb.co/xS06bVHb", thumb: "https://ibb.co/xS06bVHb", category: "law", caption: "Police operation - DSC 0054" },
    { type: "image", src: "https://ibb.co/wt5ycNS", thumb: "https://ibb.co/wt5ycNS", category: "ems", caption: "Ambulance response - DSC 0055" },
    { type: "image", src: "https://ibb.co/8gXjzBT0", thumb: "https://ibb.co/8gXjzBT0", category: "fire", caption: "Emergency scene - DSC 0056" },
    { type: "image", src: "https://ibb.co/kVB8cWtB", thumb: "https://ibb.co/kVB8cWtB", category: "law", caption: "Community safety - DSC 0057" },
    { type: "image", src: "https://ibb.co/B2zsSm8C", thumb: "https://ibb.co/B2zsSm8C", category: "fire", caption: "Heroic moment - DSC 0058" },
    { type: "image", src: "https://ibb.co/My3B8M2x", thumb: "https://ibb.co/My3B8M2x", category: "ems", caption: "First responder care - DSC 0059" },
    { type: "image", src: "https://ibb.co/2Y3Bh2jy", thumb: "https://ibb.co/2Y3Bh2jy", category: "fire", caption: "Blaze response - DSC 0060" },
    { type: "image", src: "https://ibb.co/j9XQfbyL", thumb: "https://ibb.co/j9XQfbyL", category: "ems", caption: "Scene detail" },
    { type: "image", src: "https://ibb.co/LXFTLsWk", thumb: "https://ibb.co/LXFTLsWk", category: "law", caption: "Public safety" },
    { type: "image", src: "https://ibb.co/Jj8R4yzD", thumb: "https://ibb.co/Jj8R4yzD", category: "fire", caption: "Firefighters at work" },
    { type: "image", src: "https://ibb.co/CKrS4s4M", thumb: "https://ibb.co/CKrS4s4M", category: "ems", caption: "Medical response" },
    { type: "image", src: "https://ibb.co/nMmhW11n", thumb: "https://ibb.co/nMmhW11n", category: "fire", caption: "Oklahoma fire scene" },
    { type: "image", src: "https://ibb.co/tpQ3hhkY", thumb: "https://ibb.co/tpQ3hhkY", category: "law", caption: "Law enforcement presence" },
    { type: "image", src: "https://ibb.co/DP8s4QDN", thumb: "https://ibb.co/DP8s4QDN", category: "ems", caption: "EMS in action" },
    { type: "image", src: "https://ibb.co/206J6zrB", thumb: "https://ibb.co/206J6zrB", category: "fire", caption: "Structure fire" },
    { type: "image", src: "https://ibb.co/HDLKCMK5", thumb: "https://ibb.co/HDLKCMK5", category: "fire", caption: "Night operations" },
    { type: "image", src: "https://ibb.co/S4J75QG7", thumb: "https://ibb.co/S4J75QG7", category: "ems", caption: "Responder care" },
    { type: "image", src: "https://ibb.co/dJ2HCTYd", thumb: "https://ibb.co/dJ2HCTYd", category: "law", caption: "Police activity" },
    { type: "image", src: "https://ibb.co/nMWPKvYF", thumb: "https://ibb.co/nMWPKvYF", category: "fire", caption: "Fire response" },
    { type: "image", src: "https://ibb.co/8CN97ty", thumb: "https://ibb.co/8CN97ty", category: "ems", caption: "Ambulance scene" },
    { type: "image", src: "https://ibb.co/HD4nS1zw", thumb: "https://ibb.co/HD4nS1zw", category: "fire", caption: "Emergency lighting" },
    { type: "image", src: "https://ibb.co/gFzM272s", thumb: "https://ibb.co/gFzM272s", category: "law", caption: "Community patrol" },
    { type: "image", src: "https://ibb.co/5XB3JScB", thumb: "https://ibb.co/5XB3JScB", category: "fire", caption: "Firefighters" },
    { type: "image", src: "https://ibb.co/4g0rkW41", thumb: "https://ibb.co/4g0rkW41", category: "ems", caption: "Medical aid" },
    { type: "image", src: "https://ibb.co/RGRzDMLV", thumb: "https://ibb.co/RGRzDMLV", category: "fire", caption: "Incident command" },
    { type: "image", src: "https://ibb.co/Mkb4W5zz", thumb: "https://ibb.co/Mkb4W5zz", category: "law", caption: "Officer on scene" },
    { type: "image", src: "https://ibb.co/bj6kY47N", thumb: "https://ibb.co/bj6kY47N", category: "ems", caption: "Paramedics" },
    { type: "image", src: "https://ibb.co/VYy4TRtZ", thumb: "https://ibb.co/VYy4TRtZ", category: "fire", caption: "Apparatus lineup" },
    { type: "image", src: "https://ibb.co/JWQK5Rnn", thumb: "https://ibb.co/JWQK5Rnn", category: "fire", caption: "Fire scene" },
    { type: "image", src: "https://ibb.co/0RsLwh2x", thumb: "https://ibb.co/0RsLwh2x", category: "law", caption: "Public safety moment" }
];

function renderMedia(filteredMedia = media) {
    const grid = document.getElementById('masonry-grid');
    if (!grid) return;
    grid.innerHTML = '';

    filteredMedia.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'break-inside-avoid mb-6 group cursor-pointer';
        div.innerHTML = `
            <div class="relative overflow-hidden rounded-3xl bg-zinc-900 shadow-xl">
                <img src="${item.thumb}" 
                     alt="${item.caption}" 
                     class="w-full h-auto object-cover aspect-video md:aspect-square masonry-img transition-all duration-300 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p class="text-sm font-medium text-white line-clamp-2">${item.caption}</p>
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

    content.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" 
             class="max-h-[85vh] max-w-full rounded-2xl shadow-2xl">
    `;

    captionEl.textContent = item.caption;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
}

// Category filter
function filterCategory(cat) {
    if (cat === 'all') {
        renderMedia(media);
    } else {
        const filtered = media.filter(item => item.category === cat);
        renderMedia(filtered);
    }
}

function showAllCategories() {
    renderMedia(media);
}

// Keyboard escape support
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderMedia();
    
    // Close lightbox when clicking outside the image
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
});

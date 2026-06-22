// Media data - supports both photos and videos
const media = [
    {
        type: "image",
        src: "https://picsum.photos/id/1015/800/600",
        thumb: "https://picsum.photos/id/1015/400/300",
        category: "fire",
        caption: "Structure Fire Response - Oklahoma City"
    },
    {
        type: "image",
        src: "https://picsum.photos/id/106/800/600",
        thumb: "https://picsum.photos/id/106/400/300",
        category: "ems",
        caption: "Paramedics on Scene"
    },
    {
        type: "video",
        src: "https://assets.mixkit.co/videos/preview/12345/12345-large.mp4", // placeholder video
        thumb: "https://picsum.photos/id/201/400/300",
        category: "fire",
        caption: "Night Firefighting Operation"
    },
    // Add your real media here after uploading
];

const services = [
    {
        title: "Incident Coverage",
        desc: "Professional documentation of emergency scenes, training exercises, and public safety events.",
        icon: "fas fa-fire"
    },
    {
        title: "Responder Portraits",
        desc: "Heroic individual and team portraits for awards, recruitment, or personal keepsakes.",
        icon: "fas fa-user-shield"
    },
    {
        title: "Agency Media",
        desc: "High-quality visuals for reports, social media, recruitment campaigns, and grants.",
        icon: "fas fa-camera-retro"
    }
];

// Render Masonry Gallery with mixed media
function renderGallery(filteredMedia = media) {
    const grid = document.getElementById('masonry-grid');
    grid.innerHTML = '';
    
    filteredMedia.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'break-inside-avoid mb-4 group cursor-pointer relative';
        
        if (item.type === "image") {
            div.innerHTML = `
                <img src="${item.thumb}" 
                     onclick="openLightbox('${item.src}', '${item.caption}', 'image')"
                     class="masonry-img w-full rounded-2xl shadow-xl">
                <p class="text-xs text-zinc-500 mt-3 px-1">${item.caption}</p>
            `;
        } else {
            // Video thumbnail with play icon
            div.innerHTML = `
                <div class="relative">
                    <img src="${item.thumb}" 
                         onclick="openLightbox('${item.src}', '${item.caption}', 'video')"
                         class="masonry-img w-full rounded-2xl shadow-xl">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <i class="fas fa-play-circle text-white text-6xl drop-shadow-lg"></i>
                    </div>
                </div>
                <p class="text-xs text-zinc-500 mt-3 px-1">${item.caption}</p>
            `;
        }
        grid.appendChild(div);
    });
}

// Enhanced Lightbox - supports images and videos
let currentLightboxIndex = 0;

function openLightbox(src, caption, type = 'image') {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const contentContainer = document.getElementById('lightbox-content');
    contentContainer.innerHTML = '';

    if (type === 'image') {
        contentContainer.innerHTML = `
            <img src="${src}" alt="" class="max-h-[85vh] w-auto mx-auto rounded-2xl shadow-2xl">
        `;
    } else {
        contentContainer.innerHTML = `
            <video controls autoplay loop class="max-h-[85vh] w-auto mx-auto rounded-2xl shadow-2xl">
                <source src="${src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    }
    
    document.getElementById('lightbox-caption').textContent = caption;
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'visible';
}

// Services and other functions remain the same
function renderServices() {
    const container = document.querySelector('#services .grid');
    container.innerHTML = '';
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500/50 transition-all group';
        card.innerHTML = `
            <div class="text-4xl mb-6 text-red-500"><i class="${service.icon}"></i></div>
            <h3 class="text-2xl font-semibold mb-4">${service.title}</h3>
            <p class="text-zinc-400">${service.desc}</p>
            <button onclick="bookService('${service.title}')" 
                    class="mt-8 text-sm px-6 py-3 border border-white/30 rounded-full hover:bg-white/5 transition-all">
                Inquire Now →
            </button>
        `;
        container.appendChild(card);
    });
}

function bookService(service) {
    alert(`Thank you for your interest in ${service}!\n\nPlease reach out via the contact form or social media.`);
}

// Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message received! I'll get back to you soon.");
    this.reset();
});

// Smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

function showAllCategories() {
    renderGallery(media);
}

// Initialize
window.onload = function() {
    renderGallery();
    renderServices();
    
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") closeLightbox();
    });
};

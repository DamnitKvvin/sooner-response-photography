// Sample photography data - replace URLs with your real images later
const photos = [
    {
        src: "https://picsum.photos/id/1015/800/600",
        thumb: "https://picsum.photos/id/1015/400/300",
        category: "fire",
        caption: "Structure Fire Response - Oklahoma City"
    },
    {
        src: "https://picsum.photos/id/106/800/600",
        thumb: "https://picsum.photos/id/106/400/300",
        category: "ems",
        caption: "Paramedics on Scene"
    },
    {
        src: "https://picsum.photos/id/201/800/600",
        thumb: "https://picsum.photos/id/201/400/300",
        category: "police",
        caption: "Law Enforcement Training"
    },
    {
        src: "https://picsum.photos/id/251/800/600",
        thumb: "https://picsum.photos/id/251/400/300",
        category: "fire",
        caption: "Firefighters at Night Drill"
    },
    {
        src: "https://picsum.photos/id/180/800/600",
        thumb: "https://picsum.photos/id/180/400/300",
        category: "community",
        caption: "Community First Aid Event"
    },
    {
        src: "https://picsum.photos/id/316/800/600",
        thumb: "https://picsum.photos/id/316/400/300",
        category: "ems",
        caption: "Ambulance Response"
    }
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

// Render Masonry Gallery
function renderGallery(filteredPhotos = photos) {
    const grid = document.getElementById('masonry-grid');
    grid.innerHTML = '';
    
    filteredPhotos.forEach(photo => {
        const div = document.createElement('div');
        div.className = 'break-inside-avoid mb-4 group cursor-pointer';
        div.innerHTML = `
            <img src="${photo.thumb}" 
                 onclick="openLightbox('${photo.src}', '${photo.caption}')"
                 class="masonry-img w-full rounded-2xl shadow-xl">
            <p class="text-xs text-zinc-500 mt-3 px-1">${photo.caption}</p>
        `;
        grid.appendChild(div);
    });
}

// Lightbox
let currentLightboxIndex = 0;

function openLightbox(src, caption) {
    document.getElementById('lightbox').classList.remove('hidden');
    document.getElementById('lightbox-image').src = src;
    document.getElementById('lightbox-caption').textContent = caption;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.body.style.overflow = 'visible';
}

// Services
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

// Booking Modal (simple alert for now)
function bookService(service) {
    alert(`Thank you for your interest in ${service}!\n\nPlease reach out via the contact form below or DM on Instagram.`);
}

// Form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message received! I'll get back to you as soon as possible. Thank you!");
    this.reset();
});

// Navigation smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Category filters (basic)
function showAllCategories() {
    renderGallery(photos);
}

// Initialize everything
window.onload = function() {
    renderGallery();
    renderServices();
    
    // Keyboard escape for lightbox
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            closeLightbox();
        }
    });
};

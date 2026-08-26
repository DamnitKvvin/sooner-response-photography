// Sooner Response Photography - Main Script

const media = [
  // Replace these with your real direct image links from ImgBB
  // Format: { type: "image", src: "https://i.ibb.co/xxxxx/filename.jpg", thumb: "https://i.ibb.co/xxxxx/filename.jpg", caption: "Description" },
  
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

// ========== GALLERY ==========
function renderGallery() {
  const grid = document.getElementById('masonry-grid');
  if (!grid) return;

  grid.innerHTML = '';

  media.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'masonry-item group cursor-pointer';
    div.innerHTML = `
      <div class="relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg">
        <img 
          src="${item.thumb}" 
          alt="${item.caption}" 
          loading="lazy"
          decoding="async"
          class="masonry-img w-full h-auto object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p class="text-sm text-white font-medium line-clamp-2">${item.caption}</p>
        </div>
      </div>
    `;
    div.addEventListener('click', () => openLightbox(item));
    grid.appendChild(div);
  });
}

// ========== LIGHTBOX ==========
function openLightbox(item) {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightbox-content');
  const caption = document.getElementById('lightbox-caption');

  if (!lightbox || !content) return;

  content.innerHTML = `
    <img 
      src="${item.src}" 
      alt="${item.caption}" 
      class="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
    >
  `;
  
  if (caption) caption.textContent = item.caption;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    const icon = btn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // Close menu when a link is clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
}

// ========== BACK TO TOP ==========
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== CONTACT FORM ==========
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function () {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Sending...';
      btn.disabled = true;
    }
    // Formspree handles the actual submit
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  initMobileMenu();
  initBackToTop();
  initContactForm();

  // Lightbox close handlers
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});

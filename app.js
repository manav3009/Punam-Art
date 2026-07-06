// Punam Henna Atelier - Luxury Front-end Controller

// --- 1. Portfolio Gallery Dataset (32 Premium Designs) ---
const galleryImages = [
  { id: "GL-1", category: "Bridal", title: "Royal Maharaja Cuffs", description: "Heavy luxury arm grids featuring dense botanical matrices and layered traditional patterns.", tags: ["bridal", "heavy", "mughal"], url: "work-1.jpg" },
  { id: "GL-2", category: "Bridal", title: "Lotus Lattice Glove", description: "Mandala grids flowing into delicate lotus-inspired lattices covering fingers and wrists.", tags: ["lotus", "lattice", "glove"], url: "work-2.jpg" },
  { id: "GL-3", category: "Arabic", title: "Bespoke Floral Trail", description: "Thick shaded vines with modern negative spacing highlighting leaf silhouettes.", tags: ["arabic", "trail", "floral"], url: "work-3.jpg" },
  { id: "GL-4", category: "Portrait", title: "Bride & Groom Figures", description: "Highly customized portrait work depicting the sacred wedding varmala scene on palms.", tags: ["portrait", "bride", "groom"], url: "work-8.jpg" },
  { id: "GL-5", category: "Traditional", title: "Mughal Jaal cuffs", description: "Classic dense Indian checks pattern (jaal) with fine floral terminations.", tags: ["traditional", "jaal", "heavy"], url: "work-5.jpg" },
  { id: "GL-6", category: "Minimalist", title: "Delicate Mandala Rings", description: "Minimal circular central mandalas paired with geometric ring highlights on fingers.", tags: ["minimal", "mandala", "rings"], url: "work-6.png" },
  { id: "GL-7", category: "Bridal", title: "Elephant Motif Trails", description: "Sacred elephant (haathi) motifs integrated into heavy sangeet cuff designs.", tags: ["elephant", "bridal", "traditional"], url: "work-7.png" },
  { id: "GL-8", category: "Arabic", title: "Contemporary Geometric Vines", description: "Sharp diagonal lines contrasted with soft organic leaves for modern brides.", tags: ["arabic", "modern", "vines"], url: "work-8.jpg" },
  { id: "GL-9", category: "Portrait", title: "Shehnai & Doli Sketches", description: "Custom wedding layouts detailing shehnai players and the bride's doli departure.", tags: ["portrait", "doli", "custom"], url: "work-9.jpg" },
  { id: "GL-10", category: "Traditional", title: "Classic Peacock Mandala", description: "Centered peacock motifs detailed with fine teardrop swirls and checks.", tags: ["peacock", "traditional", "mandala"], url: "work-10.jpg" },
  { id: "GL-11", category: "Minimalist", title: "Modern Chevron Bracelet", description: "A simple, elegant chevron band running around wrists resembling gold jewelry.", tags: ["minimal", "bracelet", "vines"], url: "work-11.png" },
  { id: "GL-12", category: "Bridal", title: "Elbow Length Mughal Jaal", description: "Full arm coverage with micro-check detailing and cascading lotus cuffs.", tags: ["bridal", "elbow", "mughal"], url: "work-4.jpg" },
  { id: "GL-13", category: "Arabic", title: "Bold Rose Outlines", description: "Spacious Arabic trails focusing on bold shaded roses and blank finger rings.", tags: ["rose", "arabic", "shaded"], url: "work-9.jpg" },
  { id: "GL-14", category: "Portrait", title: "Ganesh & Kalash Sketches", description: "Auspicious Lord Ganesh and Kalash figures illustrated on the center palms.", tags: ["portrait", "ganesh", "kalash"], url: "work-12.jpg" },
  { id: "GL-15", category: "Traditional", title: "Rajasthan Royal Cuffs", description: "Rich traditional detailing inspired by Rajasthani palace arches and flora.", tags: ["rajasthan", "traditional", "cuffs"], url: "work-1.jpg" },
  { id: "GL-16", category: "Minimalist", title: "Graceful Leafy Bands", description: "Delicate bands of leaves wrapping fingers with clean negative spacing.", tags: ["minimal", "bands", "leaves"], url: "work-2.jpg" },
  { id: "GL-17", category: "Bridal", title: "Varmala Ceremony Palmer", description: "Intricate central illustration of the wedding garland exchange.", tags: ["bridal", "portrait", "varmala"], url: "work-3.jpg" },
  { id: "GL-18", category: "Arabic", title: "Diagonal Paisley Vine", description: "Flowing paisley outlines filled with fine micro-hatching lines.", tags: ["arabic", "paisley", "vine"], url: "work-8.jpg" },
  { id: "GL-19", category: "Portrait", title: "Groom Portrait PALM", description: "Finely rendered sketch of the groom on the bride's hand.", tags: ["portrait", "groom", "custom"], url: "work-5.jpg" },
  { id: "GL-20", category: "Traditional", title: "Mandala Core Glove", description: "Centered concentric circles with scalloped edges and heavy tips.", tags: ["traditional", "mandala", "glove"], url: "work-6.png" },
  { id: "GL-21", category: "Minimalist", title: "Delicate Finger Tip Caps", description: "Shaded minimal caps on fingertips with delicate wrist strings.", tags: ["minimal", "tips", "bracelets"], url: "work-7.png" },
  { id: "GL-22", category: "Bridal", title: "Cascading Lotus Armlet", description: "Armband details showing layered lotuses and pearl hanging strings.", tags: ["bridal", "lotus", "armlet"], url: "work-8.jpg" },
  { id: "GL-23", category: "Arabic", title: "Modern Net & Rose Grid", description: "Contrast of bold roses and very fine diagonal checks overlay.", tags: ["arabic", "grid", "roses"], url: "work-9.jpg" },
  { id: "GL-24", category: "Portrait", title: "Bride Figure Detail", description: "Finely rendered sketch of the bride in traditional attire.", tags: ["portrait", "bride", "custom"], url: "work-10.jpg" },
  { id: "GL-25", category: "Traditional", title: "Peacock Mesh Bands", description: "Rich peacock silhouettes framed inside circular flower bands.", tags: ["peacock", "mesh", "traditional"], url: "https://blog.shaadivyah.com/wp-content/uploads/2024/09/485-2.png" },
  { id: "GL-26", category: "Minimalist", title: "Single Band Cuff", description: "One simple leafy band around the wrist simulating a bracelet.", tags: ["minimal", "cuff", "bracelet"], url: "work-1.jpg" },
  { id: "GL-27", category: "Bridal", title: "Royal Mughal Armlets", description: "Elbow-length cuffs reflecting royal durbar pillars and leaves.", tags: ["bridal", "mughal", "armlet"], url: "work-2.jpg" },
  { id: "GL-28", category: "Arabic", title: "Geometric Leafy Trail", description: "Crisp triangular check patterns detailed with micro leaves.", tags: ["arabic", "geometric", "trail"], url: "work-3.jpg" },
  { id: "GL-29", category: "Portrait", title: "Sacred Kalash Outline", description: "Auspicous kalash pot sketch on the center palm with flower chains.", tags: ["portrait", "kalash", "auspicious"], url: "work-8.jpg" },
  { id: "GL-30", category: "Traditional", title: "Rajasthani Jhumar lattice", description: "Lattice designs reflecting palace jhumar hanging lamps.", tags: ["traditional", "jhumar", "lattice"], url: "work-5.jpg" },
  { id: "GL-31", category: "Minimalist", title: "Linear Finger Ringlets", description: "Ultra-fine linear rings wrapping each finger separately.", tags: ["minimal", "finger", "ringlets"], url: "work-6.png" },
  { id: "GL-32", category: "Bridal", title: "Empress Floral Cuffs", description: "Heavy bridal sleeve cuffs depicting layered lotuses and checkers.", tags: ["bridal", "heavy", "lotus"], url: "work-7.png" }
];

// --- 2. Testimonial Reviews Dataset ---
const testimonials = [
  {
    quote: "Punam created absolute magic for my wedding. The bridal portrait details of my husband and me on my palms left everyone stunned. The stain turned into a dark mahogany shade that lasted for over two weeks! Absolute recommend.",
    name: "Priyanjali Mundada",
    details: "Bridal Client • Pune"
  },
  {
    quote: "Punam Umesh Mundada is incredibly professional and creative. She customized the design to include our pet dog's silhouette, which was very special. Her organic henna paste smells amazing and felt very soothing on my hands.",
    name: "Aditi Joshi",
    details: "Bespoke Client • Sinhgad Road"
  },
  {
    quote: "Punam and her assistants handled 40+ guests at our Sangeet night seamlessly. She is extremely fast, neat, and highly skilled. Booking her was the absolute highlight of our wedding ceremonies.",
    name: "Snehal Mehta",
    details: "Sangeet Event • Koregaon Park"
  }
];

let activeTestimonialIndex = 0;
let activeGalleryCategory = "All";
let lightboxIndex = null;
let filteredGalleryImages = [...galleryImages];

// --- 3. DOM Ready Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Dom initialization completed

  // Setup components
  initCursorSparkles();
  initMobileMenu();
  initStatsCounters();
  initBeforeAfterSlider();
  initCountdownTimer();
  initGalleryGrid();
  initTestimonials();
  initFAQAccordions();
  
  // Set initial admin status checks (url param listener)
  checkUrlParamsForAdmin();
});

// --- 4. Interactive Cursor Sparkles ---
function initCursorSparkles() {
  const container = document.getElementById("cursor-sparkle-container");
  
  window.addEventListener("mousemove", (e) => {
    // Generate sparkle trails at random intervals
    if (Math.random() > 0.85) {
      createSparkle(e.clientX, e.clientY);
    }
  });

  window.addEventListener("click", (e) => {
    // Burst of sparkles on click
    for (let i = 0; i < 8; i++) {
      createSparkle(e.clientX, e.clientY, true);
    }
  });

  function createSparkle(x, y, burst = false) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    
    // Set random offset for bursts
    const offsetX = burst ? (Math.random() - 0.5) * 50 : 0;
    const offsetY = burst ? (Math.random() - 0.5) * 50 : 0;
    
    sparkle.style.left = `${x + offsetX}px`;
    sparkle.style.top = `${y + offsetY}px`;
    
    // Random size
    const size = Math.random() * 6 + 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    container.appendChild(sparkle);
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      sparkle.remove();
    }, 850);
  }
}

// --- 5. Mobile Navbar Drawer ---
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");

  btn.addEventListener("click", () => {
    drawer.classList.toggle("hidden");
  });
}
function toggleMobileMenu() {
  document.getElementById("mobile-drawer").classList.add("hidden");
}

// --- 6. GSAP Stats Count-Up ---
function initStatsCounters() {
  // Simple check if elements exist
  const brides = document.getElementById("stat-brides");
  const experience = document.getElementById("stat-experience");
  const organic = document.getElementById("stat-organic");

  if (!brides || !experience || !organic) return;

  // Use IntersectionObserver to trigger count up when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(brides, 0, 200, 2000, "+");
        animateValue(experience, 0, 5, 1500, "+");
        animateValue(organic, 0, 100, 1500, "%");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(brides.parentElement.parentElement);
}

function animateValue(obj, start, end, duration, suffix = "") {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// --- 7. Before/After Stain Slider ---
function initBeforeAfterSlider() {
  const slider = document.getElementById("before-after-slider");
  const beforeLayer = document.getElementById("slider-before-layer");
  const handle = document.getElementById("slider-handle");
  const stretchImage = document.getElementById("before-image-stretch");

  if (!slider) return;

  // Set initial widths
  const updateImageStretchWidth = () => {
    const width = slider.getBoundingClientRect().width;
    stretchImage.style.width = `${width}px`;
  };
  updateImageStretchWidth();
  window.addEventListener("resize", updateImageStretchWidth);

  let isDragging = false;

  const moveSlider = (clientX) => {
    const rect = slider.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    // Bounds check
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    beforeLayer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  };

  // Event Listeners
  handle.addEventListener("mousedown", () => isDragging = true);
  window.addEventListener("mouseup", () => isDragging = false);
  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    moveSlider(e.clientX);
  });

  // Touch support for mobiles/tabs
  handle.addEventListener("touchstart", () => isDragging = true);
  window.addEventListener("touchend", () => isDragging = false);
  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    moveSlider(e.touches[0].clientX);
  });
}

// --- 8. Countdown Timer ---
function initCountdownTimer() {
  // Target November 1st, 2026
  const targetDate = new Date("2026-11-01T00:00:00").getTime();

  const updateTimer = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      document.getElementById("countdown-days").innerText = "0";
      document.getElementById("countdown-hours").innerText = "0";
      document.getElementById("countdown-minutes").innerText = "0";
      document.getElementById("countdown-seconds").innerText = "0";
      return;
    }

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown-days").innerText = d;
    document.getElementById("countdown-hours").innerText = h;
    document.getElementById("countdown-minutes").innerText = m;
    document.getElementById("countdown-seconds").innerText = s;
  };

  updateTimer();
  setInterval(updateTimer, 1000);
}

// --- 9. Gallery Grid & Lightbox ---
function initGalleryGrid() {
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = "";

  filteredGalleryImages = activeGalleryCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeGalleryCategory);

  filteredGalleryImages.forEach((img, idx) => {
    const card = document.createElement("div");
    card.className = "group relative aspect-[4/5] rounded-xl overflow-hidden border border-gold-luxury/10 cursor-pointer shadow-gold-sm hover:border-gold-luxury/45 hover:shadow-gold-md transition-all duration-300";
    card.onclick = () => openLightbox(idx);

    card.innerHTML = `
      <img src="${img.url}" alt="${img.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
      <div class="absolute inset-0 bg-wine-dark/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border border-gold-luxury/20 rounded-xl">
        <div class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold-gradient text-darkBlack flex items-center justify-center text-lg shadow-gold-sm scale-75 group-hover:scale-100 transition-transform duration-300">
          <i class="fa-solid fa-eye text-sm text-darkBlack"></i>
        </div>
        <span class="text-[10px] font-poppins uppercase tracking-widest text-gold-luxury mb-1">${img.category}</span>
        <h4 class="font-cinzel text-base font-bold text-blush tracking-wide mb-1">${img.title}</h4>
        <p class="font-cormorant text-xs italic text-blush/70 line-clamp-2">${img.description}</p>
      </div>
    `;

    grid.appendChild(card);
  });

  // Elements rendered
}

function filterGallery(category) {
  activeGalleryCategory = category;
  
  // Toggle filter active classes
  const buttons = document.querySelectorAll(".gallery-filter-btn");
  buttons.forEach(btn => {
    if (btn.innerText === category) {
      btn.className = "gallery-filter-btn active px-4 py-2 rounded-full font-poppins text-xs uppercase tracking-wider border transition-all duration-300 bg-gold-gradient border-transparent text-darkBlack font-semibold shadow-gold-sm";
    } else {
      btn.className = "gallery-filter-btn px-4 py-2 rounded-full font-poppins text-xs uppercase tracking-wider border transition-all duration-300 bg-wine-dark/40 border-gold-luxury/20 text-ivory/80 hover:border-gold-luxury/60";
    }
  });

  renderGallery();
}

function openLightbox(index) {
  lightboxIndex = index;
  const image = filteredGalleryImages[index];

  document.getElementById("lightbox-img").src = image.url;
  document.getElementById("lightbox-category").innerText = image.category;
  document.getElementById("lightbox-title").innerText = image.title;
  document.getElementById("lightbox-desc").innerText = image.description;
  
  // Set tags
  const tagsContainer = document.getElementById("lightbox-tags");
  tagsContainer.innerHTML = "";
  image.tags.forEach(tag => {
    const t = document.createElement("span");
    t.className = "text-[10px] font-poppins bg-wine-deep px-2 py-0.5 border border-gold-luxury/10 text-blush/60 rounded";
    t.innerText = `#${tag}`;
    tagsContainer.appendChild(t);
  });

  // Display modal
  document.getElementById("gallery-lightbox").style.display = "flex";
  document.body.classList.add("overflow-hidden");
}

function closeLightbox() {
  document.getElementById("gallery-lightbox").style.display = "none";
  document.body.classList.remove("overflow-hidden");
}

function navigateLightbox(dir) {
  let newIdx = lightboxIndex + dir;
  if (newIdx < 0) newIdx = filteredGalleryImages.length - 1;
  if (newIdx >= filteredGalleryImages.length) newIdx = 0;
  openLightbox(newIdx);
}

// --- 10. Testimonial Cycler ---
function initTestimonials() {
  setTestimonial(0);
  setInterval(() => {
    let next = activeTestimonialIndex + 1;
    if (next >= testimonials.length) next = 0;
    setTestimonial(next);
  }, 7000);
}

function setTestimonial(index) {
  activeTestimonialIndex = index;
  const item = testimonials[index];

  document.getElementById("testimonial-quote").innerText = item.quote;
  document.getElementById("testimonial-name").innerText = item.name;
  document.getElementById("testimonial-details").innerText = item.details;

  // Update dots
  const dots = document.querySelectorAll(".test-dot");
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.className = "test-dot w-6 h-2 rounded-full bg-gold-luxury transition-all duration-300";
    } else {
      dot.className = "test-dot w-2 h-2 rounded-full bg-gold-luxury/30 transition-all duration-300";
    }
  });
}

// --- 11. FAQ Drawer Accordions ---
function initFAQAccordions() {}

function toggleFAQ(idx) {
  const drawers = document.querySelectorAll(".faq-answer");
  const icons = document.querySelectorAll(".faq-icon");

  drawers.forEach((drawer, i) => {
    if (i === idx) {
      if (drawer.style.maxHeight === "0px" || !drawer.style.maxHeight) {
        drawer.style.maxHeight = `${drawer.scrollHeight}px`;
        icons[i].innerHTML = `<i class="fa-solid fa-minus"></i>`;
      } else {
        drawer.style.maxHeight = "0px";
        icons[i].innerHTML = `<i class="fa-solid fa-plus"></i>`;
      }
    } else {
      drawer.style.maxHeight = "0px";
      icons[i].innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }
  });
}

// --- 12. Booking Form Submission & WhatsApp Direct ---
function handleBookingSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById("form-name").value;
  const phone = document.getElementById("form-phone").value;
  const email = document.getElementById("form-email").value;
  const eventType = document.getElementById("form-event").value;
  const date = document.getElementById("form-date").value;
  const guests = document.getElementById("form-guests").value;
  const address = document.getElementById("form-address").value;
  const reqs = document.getElementById("form-reqs").value;

  const generatedId = "BK-" + Date.now().toString(36).toUpperCase();

  const newBooking = {
    id: generatedId,
    createdAt: new Date().toISOString(),
    status: "Pending",
    name,
    phone,
    email,
    eventType,
    occasionDate: date,
    peopleCount: guests || "1",
    address,
    requirements: reqs || "None"
  };

  // Write to client local storage registry
  try {
    const existing = localStorage.getItem("punam_bookings");
    const arr = existing ? JSON.parse(existing) : [];
    arr.push(newBooking);
    localStorage.setItem("punam_bookings", JSON.stringify(arr));
  } catch (err) {
    console.error("Local storage booking save failed:", err);
  }

  // Generate dynamic URL log link for Punam's dashboard
  const baseUrl = window.location.href.split('?')[0];
  const importParams = new URLSearchParams({
    log_booking: "true",
    id: newBooking.id,
    name: name,
    phone: phone,
    email: email || "",
    date: date,
    event: eventType,
    guests: newBooking.peopleCount,
    address: address,
    reqs: newBooking.requirements
  });
  const importLink = `${baseUrl}?${importParams.toString()}`;

  // Format WhatsApp message text
  const waMessage = 
`🌿 *New Punam Henna Atelier Booking Request* 🌿
-------------------------------------
🆔 *Booking ID:* ${newBooking.id}
👤 *Client Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email || "N/A"}
📅 *Occasion Date:* ${date}
🎉 *Occasion/Event:* ${eventType}
👥 *No. of People:* ${newBooking.peopleCount}
📍 *Address:* ${address}
✨ *Special Requirements:* ${newBooking.requirements}
-------------------------------------
🔗 *Admin Quick Log Link:*
${importLink}

Please confirm availability and booking slot details. Thank you!`;

  const waUrl = `https://wa.me/917020995603?text=${encodeURIComponent(waMessage)}`;

  // Show Success State
  document.getElementById("success-booking-id").innerText = generatedId;
  document.getElementById("success-wa-link").href = waUrl;
  document.getElementById("booking-success-state").classList.remove("hidden");

  // Confetti Blast
  triggerGoldConfetti();

  // Autoredirect
  setTimeout(() => {
    window.open(waUrl, "_blank");
  }, 4000);
}

function triggerGoldConfetti() {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#E0C097', '#F4E8D7', '#B38E5D']
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#E0C097', '#F4E8D7', '#B38E5D']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// --- 13. Integrated Admin Portal overlay ---
let currentAdminFilter = "All";
let adminBookings = [];
let selectedBooking = null;

function checkUrlParamsForAdmin() {
  const params = new URLSearchParams(window.location.search);
  
  // 1. Check for quick booking import
  if (params.get("log_booking") === "true") {
    const id = params.get("id");
    const name = params.get("name");
    const phone = params.get("phone");
    const email = params.get("email");
    const date = params.get("date");
    const event = params.get("event");
    const guests = params.get("guests");
    const address = params.get("address");
    const reqs = params.get("reqs");

    if (id && name && phone && date) {
      const newBooking = {
        id,
        createdAt: new Date().toISOString(),
        status: "Pending",
        name,
        phone,
        email: email || "",
        eventType: event,
        occasionDate: date,
        peopleCount: guests || "1",
        address: address || "",
        requirements: reqs || "None"
      };

      try {
        const existing = localStorage.getItem("punam_bookings");
        let arr = existing ? JSON.parse(existing) : [];
        
        // Only append if it doesn't already exist
        if (!arr.some(b => b.id === id)) {
          arr.push(newBooking);
          localStorage.setItem("punam_bookings", JSON.stringify(arr));
          alert(`🌿 Punam Henna Atelier:\nImported new booking registry for client "${name}" (ID: ${id}) successfully!`);
        }
      } catch (err) {
        console.error("Local storage booking import failed:", err);
      }
    }
    
    // Open Admin Hub lock screen
    openAdminPortal();
    // Clear URL parameters
    const newUrl = window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
    return;
  }

  // 2. Standard admin query check
  if (params.get("admin") === "true") {
    openAdminPortal();
    // Clear URL parameters for clean presentation
    const newUrl = window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
  }
}

function openAdminPortal() {
  document.getElementById("admin-hub-modal").style.display = "flex";
  document.body.classList.add("overflow-hidden");
}

function closeAdminPortal() {
  document.getElementById("admin-hub-modal").style.display = "none";
  document.body.classList.remove("overflow-hidden");
}

function handleAdminLogin(e) {
  e.preventDefault();
  const passcode = document.getElementById("admin-passcode").value;
  
  if (passcode === "punam@9420") {
    document.getElementById("admin-lock-screen").classList.add("hidden");
    document.getElementById("admin-dashboard-panel").classList.remove("hidden");
    loadAdminRegistry();
  } else {
    alert("Invalid Passcode. Access Denied.");
  }
}

function lockAdminPortal() {
  document.getElementById("admin-passcode").value = "";
  document.getElementById("admin-lock-screen").classList.remove("hidden");
  document.getElementById("admin-dashboard-panel").classList.add("hidden");
}

function loadAdminRegistry() {
  const data = localStorage.getItem("punam_bookings");
  if (data) {
    adminBookings = JSON.parse(data);
  } else {
    // Initial sample registry seeds
    adminBookings = [
      {
        id: "BK-SAMPLE1",
        createdAt: new Date().toISOString(),
        status: "Pending",
        name: "Sneha Deshmukh",
        phone: "+91 9876543210",
        email: "sneha@example.com",
        eventType: "Bridal Mehendi",
        occasionDate: "2026-11-20",
        peopleCount: "3",
        address: "Kothrud, Pune",
        requirements: "Royal portraits on palms and heavy lattice bands"
      },
      {
        id: "BK-SAMPLE2",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        status: "Approved",
        name: "Rohini Patwardhan",
        phone: "+91 7020995603",
        email: "rohini@example.com",
        eventType: "Engagement Mehendi",
        occasionDate: "2026-10-15",
        peopleCount: "1",
        address: "Sinhgad Road, Pune",
        requirements: "Indo-Arabic shaded vines and central mandala rings"
      }
    ];
    localStorage.setItem("punam_bookings", JSON.stringify(adminBookings));
  }

  // Sort by newest first
  adminBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
  updateAdminStats();
  renderAdminTable();
}

function updateAdminStats() {
  const total = adminBookings.length;
  const pending = adminBookings.filter(b => b.status === "Pending" || !b.status).length;
  const approved = adminBookings.filter(b => b.status === "Approved").length;
  const completed = adminBookings.filter(b => b.status === "Completed").length;

  document.getElementById("admin-stat-total").innerText = total;
  document.getElementById("admin-stat-pending").innerText = pending;
  document.getElementById("admin-stat-approved").innerText = approved;
  document.getElementById("admin-stat-completed").innerText = completed;
}

function renderAdminTable() {
  const tbody = document.getElementById("admin-table-body");
  tbody.innerHTML = "";

  const search = document.getElementById("admin-search").value.toLowerCase();
  
  const filtered = adminBookings.filter(b => {
    const matchesFilter = currentAdminFilter === "All" || b.status === currentAdminFilter;
    const matchesSearch = 
      b.name.toLowerCase().includes(search) || 
      b.phone.includes(search) || 
      b.id.toLowerCase().includes(search);
    return matchesFilter && matchesSearch;
  });

  filtered.forEach(b => {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-wine-dark/45 transition-colors cursor-pointer text-ivory/80";
    tr.onclick = () => openDetailModal(b);

    const statusBadgeColor = getStatusBadgeClass(b.status || "Pending");

    const isApproved = b.status === "Approved";
    const isCompleted = b.status === "Completed";
    const isCancelled = b.status === "Cancelled";

    const approveBtnClass = isApproved 
      ? "bg-green-500 text-white border-transparent" 
      : "text-green-500 hover:bg-green-500/10 border border-green-500/15";
      
    const completeBtnClass = isCompleted 
      ? "bg-blue-500 text-white border-transparent" 
      : "text-blue-500 hover:bg-blue-500/10 border border-blue-500/15";
      
    const cancelBtnClass = isCancelled 
      ? "bg-red-500 text-white border-transparent" 
      : "text-red-500 hover:bg-red-500/10 border border-red-500/15";

    tr.innerHTML = `
      <td class="p-3 font-mono font-bold text-gold-light">${b.id}</td>
      <td class="p-3 font-bold text-blush">${b.name}</td>
      <td class="p-3">${b.phone}</td>
      <td class="p-3">${b.occasionDate}</td>
      <td class="p-3">${b.eventType}</td>
      <td class="p-3 text-center">
        <span class="px-2.5 py-0.5 rounded-full text-[8px] uppercase tracking-wider font-semibold ${statusBadgeColor}">
          ${b.status || "Pending"}
        </span>
      </td>
      <td class="p-3 text-right" onclick="event.stopPropagation()">
        <div class="flex justify-end gap-1.5">
          <button onclick="changeBookingStatus('${b.id}', 'Approved')" class="w-6 h-6 flex items-center justify-center rounded transition-colors ${approveBtnClass}" title="Approve">✓</button>
          <button onclick="changeBookingStatus('${b.id}', 'Completed')" class="w-6 h-6 flex items-center justify-center rounded transition-colors ${completeBtnClass}" title="Complete">★</button>
          <button onclick="changeBookingStatus('${b.id}', 'Cancelled')" class="w-6 h-6 flex items-center justify-center rounded transition-colors ${cancelBtnClass}" title="Cancel">✕</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colSpan="7" class="p-10 text-center text-ivory/40 italic">No reservation records found.</td>
      </tr>
    `;
  }
}

function getStatusBadgeClass(status) {
  switch (status) {
    case "Approved": return "bg-green-500/10 text-green-500 border border-green-500/25";
    case "Completed": return "bg-blue-500/10 text-blue-500 border border-blue-500/25";
    case "Cancelled": return "bg-red-500/10 text-red-500 border border-red-500/25";
    default: return "bg-yellow-500/10 text-yellow-500 border border-yellow-500/25";
  }
}

function setAdminFilter(status) {
  currentAdminFilter = status;
  
  // Toggle filter active classes
  const filterBar = document.getElementById("admin-filter-bar");
  const buttons = filterBar.querySelectorAll("button");
  buttons.forEach(btn => {
    if (btn.innerText === status || (status === "All" && btn.innerText === "ALL")) {
      btn.className = "admin-filter-btn active px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider border transition-all bg-gold-gradient border-transparent text-darkBlack font-semibold";
    } else {
      btn.className = "admin-filter-btn px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider border transition-all bg-wine-deep/30 border-gold-luxury/10 text-ivory/60 hover:border-gold-luxury/30";
    }
  });

  renderAdminTable();
}

function filterAdminRegistry() {
  renderAdminTable();
}

function changeBookingStatus(id, newStatus) {
  adminBookings = adminBookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
  localStorage.setItem("punam_bookings", JSON.stringify(adminBookings));
  
  updateAdminStats();
  renderAdminTable();

  // Update selected if active detail modal
  if (selectedBooking && selectedBooking.id === id) {
    openDetailModal(adminBookings.find(b => b.id === id));
  }
}

function openDetailModal(booking) {
  selectedBooking = booking;

  document.getElementById("detail-ref-id").innerText = booking.id;
  document.getElementById("detail-name").innerText = booking.name;
  document.getElementById("detail-phone").innerText = booking.phone;
  document.getElementById("detail-phone").href = `tel:${booking.phone}`;
  document.getElementById("detail-email").innerText = booking.email || "N/A";
  document.getElementById("detail-guests").innerText = `${booking.peopleCount} People`;
  document.getElementById("detail-date").innerText = booking.occasionDate;
  document.getElementById("detail-type").innerText = booking.eventType;
  document.getElementById("detail-address").innerText = booking.address;
  document.getElementById("detail-reqs").innerText = booking.requirements || "None";
  
  const statusSpan = document.getElementById("detail-status");
  statusSpan.innerText = booking.status || "Pending";
  statusSpan.className = `px-2 py-0.5 rounded-full text-[8px] uppercase font-semibold ${getStatusBadgeClass(booking.status || "Pending")}`;

  // Clean phone number for WhatsApp link
  const cleanPhone = booking.phone.replace(/[^0-9]/g, "");
  
  // Create message template
  const msg = 
`🌿 *Punam Henna Atelier - Booking Approved* 🌿
-------------------------------------
Hello *${booking.name}*,

We are pleased to inform you that your booking request with Punam Henna Atelier has been *APPROVED*!

🆔 *Booking ID:* ${booking.id}
📅 *Occasion Date:* ${booking.occasionDate}
🎉 *Occasion/Event:* ${booking.eventType}
👥 *No. of People:* ${booking.peopleCount}

We have reserved your slot. Looking forward to decorating your hands! ⚜️

Thank you,
*Punam Umesh Mundada*
📞 +91 7020995603`;

  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  document.getElementById("detail-btn-notify").href = waUrl;

  // Configure detail action buttons onclick values
  document.getElementById("detail-btn-approve").onclick = () => changeBookingStatus(booking.id, "Approved");
  document.getElementById("detail-btn-complete").onclick = () => changeBookingStatus(booking.id, "Completed");

  document.getElementById("booking-detail-modal").style.display = "flex";
}

function closeDetailModal() {
  selectedBooking = null;
  document.getElementById("booking-detail-modal").style.display = "none";
}

function switchPriceTab(tab) {
  const specBtn = document.getElementById("tab-btn-specialised");
  const siderBtn = document.getElementById("tab-btn-sider");
  const specContent = document.getElementById("tab-content-specialised");
  const siderContent = document.getElementById("tab-content-sider");

  if (!specBtn || !siderBtn || !specContent || !siderContent) return;

  if (tab === "specialised") {
    // Set specialised button active classes
    specBtn.className = "px-6 py-2 rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-all border bg-gold-gradient text-darkBlack border-transparent shadow-gold-sm";
    siderBtn.className = "px-6 py-2 rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-all border border-gold-luxury/20 text-gold-luxury bg-wine-dark/40 hover:bg-wine-deep";
    specContent.classList.remove("hidden");
    siderContent.classList.add("hidden");
  } else {
    // Set sider button active classes
    siderBtn.className = "px-6 py-2 rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-all border bg-gold-gradient text-darkBlack border-transparent shadow-gold-sm";
    specBtn.className = "px-6 py-2 rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-all border border-gold-luxury/20 text-gold-luxury bg-wine-dark/40 hover:bg-wine-deep";
    specContent.classList.add("hidden");
    siderContent.classList.remove("hidden");
  }
}

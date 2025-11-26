/* ===================================
   OSAETIN & CO. - ENHANCED JAVASCRIPT
   =================================== */

// ===== DATA ARRAYS =====

const services = [
  {
    title: 'Osaetin Technologies',
    icon: 'fas fa-code',
    desc: 'Cutting-edge software solutions that transform your business. From web apps to mobile platforms, we build scalable, secure, and stunning digital products.',
    list: [
      'React / Next.js / Vue.js',
      'Mobile: React Native & Flutter',
      'Backend: Node.js / Python / Go',
      'Cloud: AWS / Azure / Supabase',
      'DevOps & CI/CD Pipelines',
      'API Development & Integration'
    ]
  },
  {
    title: 'Osaetin Media',
    icon: 'fas fa-film',
    desc: 'Professional event production that creates unforgettable experiences. From intimate gatherings to large-scale concerts, we handle every technical detail.',
    list: [
      'Concerts & Corporate Events',
      'Professional Sound Engineering',
      'Stage Lighting & LED Walls',
      'Live Streaming & Broadcasting',
      'Cinematography & Photography',
      'Full AV Equipment Rental'
    ]
  },
  {
    title: 'Osaetin Realty',
    icon: 'fas fa-city',
    desc: 'Trusted real estate services that help you find, verify, and secure your dream property. Expert guidance through every step of your investment journey.',
    list: [
      'Premium Property Listings',
      'Land Verification Services',
      'Investment Advisory',
      'Legal Documentation Support',
      'Property Management',
      'Market Analysis & Valuation'
    ]
  }
];

const portfolio = [
  {
    title: 'E-Commerce Platform',
    tag: 'Tech',
    category: 'tech',
    desc: 'Full-stack marketplace with 50K+ active users',
    gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'},
  {
    title: 'Music Festival 2024',
    tag: 'Media',
    category: 'media',
    desc: 'Sound & lighting for 10,000+ attendees',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'Luxury Estate Portal',
    tag: 'Realty',
    category: 'realty',
    desc: 'Premium property listings platform',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    title: 'SaaS Dashboard',
    tag: 'Tech',
    category: 'tech',
    desc: 'Analytics platform for enterprise clients',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    title: 'Corporate Conference',
    tag: 'Media',
    category: 'media',
    desc: 'Full AV production for Fortune 500 company',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    title: 'Residential Complex',
    tag: 'Realty',
    category: 'realty',
    desc: '120 units sold in premium location',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  },
  {
    title: 'Mobile Banking App',
    tag: 'Tech',
    category: 'tech',
    desc: 'Fintech solution with 100K+ downloads',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    title: 'Wedding Production',
    tag: 'Media',
    category: 'media',
    desc: 'Luxury wedding with full cinematic coverage',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },
  {
    title: 'Commercial Property',
    tag: 'Realty',
    category: 'realty',
    desc: 'Prime office space acquisition',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  }
];

const listings = [
  {
    title: 'Lofty Heights Estate',
    price: '₦8,500,000',
    location: 'Lekki Phase 1, Lagos',
    beds: 4,
    baths: 3,
    sqft: '2,400'
  },
  {
    title: 'Riverside Paradise',
    price: '₦12,500,000',
    location: 'Port Harcourt GRA',
    beds: 5,
    baths: 4,
    sqft: '3,200'
  },
  {
    title: 'City Corner Plaza',
    price: '₦4,200,000',
    location: 'Abuja Central',
    beds: 3,
    baths: 2,
    sqft: '1,800'
  },
  {
    title: 'Ocean View Apartments',
    price: '₦15,000,000',
    location: 'Victoria Island, Lagos',
    beds: 4,
    baths: 4,
    sqft: '2,800'
  },
  {
    title: 'Garden City Residence',
    price: '₦6,800,000',
    location: 'Enugu',
    beds: 3,
    baths: 3,
    sqft: '2,000'
  },
  {
    title: 'Executive Mansion',
    price: '₦22,000,000',
    location: 'Banana Island, Lagos',
    beds: 6,
    baths: 5,
    sqft: '4,500'
  }
];

const testimonials = [
  {
    name: 'Adebayo Johnson',
    role: 'CEO, TechStart Nigeria',
    rating: 5,
    text: 'Osaetin Technologies built our entire platform from scratch. The quality, speed, and professionalism were outstanding. Our app now serves over 50,000 users!'
  },
  {
    name: 'Sarah Williams',
    role: 'Event Coordinator',
    rating: 5,
    text: 'The media team handled our corporate conference flawlessly. The sound quality was crystal clear, lighting was spectacular, and everything ran smoothly. Highly recommended!'
  },
  {
    name: 'Chukwudi Okonkwo',
    role: 'Property Investor',
    rating: 5,
    text: 'Finding my dream property was seamless with Osaetin Realty. They verified everything, handled all documentation, and made the entire process stress-free.'
  },
  {
    name: 'Jennifer Martinez',
    role: 'Startup Founder',
    rating: 5,
    text: 'Best development team I\'ve worked with. They understood our vision perfectly and delivered a product that exceeded expectations. True professionals!'
  },
  {
    name: 'Olumide Balogun',
    role: 'Wedding Planner',
    rating: 5,
    text: 'Osaetin Media made our client\'s wedding absolutely magical. The cinematography, sound, and lighting created an unforgettable atmosphere. Pure excellence!'
  },
  {
    name: 'David Chen',
    role: 'Real Estate Developer',
    rating: 5,
    text: 'Their market analysis and property insights helped us make informed investment decisions. Professional, knowledgeable, and always available.'
  }
];

// ===== RENDER FUNCTIONS =====

// Render Services
function renderServices() {
  const container = document.getElementById('service-cards');
  container.innerHTML = '';
  
  services.forEach((service, index) => {
    const div = document.createElement('div');
    div.className = 'service-card fade-in';
    div.style.animationDelay = `${index * 0.1}s`;
    div.innerHTML = `
      <i class="${service.icon} icon"></i>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
      <ul>
        ${service.list.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    container.appendChild(div);
  });
}

// Render Portfolio with NEW DESIGN
function renderPortfolio(filter = 'all') {
  const container = document.getElementById('portfolio-items');
  container.innerHTML = '';
  
  const filtered = filter === 'all' 
    ? portfolio 
    : portfolio.filter(p => p.category === filter);
  
  // Icon mapping for different categories
  const iconMap = {
    'tech': 'fas fa-laptop-code',
    'media': 'fas fa-video',
    'realty': 'fas fa-building'
  };
  
  filtered.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'portfolio-item fade-in';
    div.style.animationDelay = `${index * 0.1}s`;
    
    const icon = iconMap[item.category] || 'fas fa-star';
    
    div.innerHTML = `
      <div class="portfolio-image" style="background: ${item.gradient};">
        <i class="${icon}"></i>
      </div>
      <div class="portfolio-content">
        <span class="tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p class="desc">${item.desc}</p>
      </div>
    `;
    container.appendChild(div);
  });
  
  // Trigger fade-in animation
  setTimeout(() => {
    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.classList.add('visible');
    });
  }, 50);
}

// Render Listings
function renderListings() {
  const container = document.getElementById('listings-container');
  container.innerHTML = '';
  
  listings.forEach((listing, index) => {
    const div = document.createElement('div');
    div.className = 'listing-card fade-in';
    div.style.animationDelay = `${index * 0.1}s`;
    div.innerHTML = `
      <div class="listing-image">
        <i class="fas fa-home" style="font-size: 4rem; color: rgba(255,255,255,0.3); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></i>
      </div>
      <div class="listing-content">
        <h3>${listing.title}</h3>
        <div class="price">${listing.price}</div>
        <div class="location">
          <i class="fas fa-map-marker-alt"></i>
          ${listing.location}
        </div>
        <div class="features">
          <div class="feature">
            <i class="fas fa-bed"></i>
            ${listing.beds} Beds
          </div>
          <div class="feature">
            <i class="fas fa-bath"></i>
            ${listing.baths} Baths
          </div>
          <div class="feature">
            <i class="fas fa-ruler-combined"></i>
            ${listing.sqft} sqft
          </div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  container.innerHTML = '';
  
  testimonials.forEach((testimonial, index) => {
    const div = document.createElement('div');
    div.className = 'testimonial-card fade-in';
    div.style.animationDelay = `${index * 0.1}s`;
    
    const initials = testimonial.name.split(' ').map(n => n[0]).join('');
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    
    div.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-avatar">${initials}</div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role}</p>
        </div>
      </div>
      <div class="testimonial-rating">${stars}</div>
      <p class="testimonial-text">"${testimonial.text}"</p>
    `;
    container.appendChild(div);
  });
}

// ===== HERO CANVAS ANIMATION =====
function initHeroAnimation() {
  const canvas = document.getElementById('hero-animation');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 150;
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 1.5;
      this.speedY = (Math.random() - 0.5) * 1.5;
      this.color = Math.random() > 0.5 ? '#ed8613' : '#3b82f6';
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    // Draw connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(237, 134, 19, ${1 - distance / 100})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // Mouse interaction
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    for (let i = 0; i < 3; i++) {
      particles.push(new Particle());
      particles[particles.length - 1].x = mouseX;
      particles[particles.length - 1].y = mouseY;
      particles[particles.length - 1].size = Math.random() * 2 + 1;
    }
    
    // Limit particles
    if (particles.length > 200) {
      particles.splice(0, particles.length - 200);
    }
  });
  
  // Resize handler
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + '+';
      }
    };
    
    // Start animation when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

// ===== PORTFOLIO FILTER =====
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter portfolio
      const filter = btn.getAttribute('data-filter');
      renderPortfolio(filter);
    });
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const faders = document.querySelectorAll('.fade-in');
  
  const appearOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== FORM HANDLING =====
function initFormHandling() {
  const bookingForm = document.getElementById('booking-form');
  
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert('🎉 Thank you for your request! We\'ll get back to you within 24 hours.');
    
    // Reset form
    bookingForm.reset();
    
    // Log data (in production, send to backend)
    console.log('Form submitted:', data);
  });
  
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('✅ Successfully subscribed to our newsletter!');
      newsletterForm.reset();
    });
  }
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Render content
  renderServices();
  renderPortfolio();
  renderListings();
  renderTestimonials();
  
  // Initialize features
  initHeroAnimation();
  animateCounters();
  initPortfolioFilter();
  initScrollAnimations();
  initNavbarScroll();
  initSmoothScroll();
  initFormHandling();
  initMobileMenu();
  
  console.log('🚀 Osaetin & Co. website loaded successfully!');
});
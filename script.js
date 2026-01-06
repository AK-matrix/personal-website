// =========================================
// INIT & CORE
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Systems
    initSmoothScroll();
    initGalaxySystem(); // New Colorful System

    // 2. Content Rendering
    renderBio();
    renderExtras();
    renderProjectGallery();
    renderExperience(); // Detailed Timeline
    renderProjectsPage();

    // 3. Interactions
    initCommandPalette();
    initArtPanel(); // CSS Art

    setTimeout(initAnimations, 100);
});

// =========================================
// SYSTEMS
// =========================================

function initSmoothScroll() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
}

// Side Panel Art Logic (Simple Rotation / Pulse)
function initArtPanel() {
    // Relying mostly on CSS animations for performance
}

function initGalaxySystem() {
    const canvas = document.getElementById('void-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // Config: Colorful, vibrant, depth
    const particleCount = 60;
    const mouseDist = 150;
    const colors = ['#ff0055', '#00ccff', '#9933ff', '#ffd700', '#ffffff'];

    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('resize', resize);
    resize();

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: Math.random() * 0.5 + 0.5
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Background tint handled by CSS gradient

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];

            // Move
            p.x += p.vx;
            p.y += p.vy;

            // Wrap
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            // Mouse Interaction
            if (mouse.x != null) {
                let dx = mouse.x - p.x;
                let dy = mouse.y - p.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouseDist) {
                    const angle = Math.atan2(dy, dx);
                    p.vx -= Math.cos(angle) * 0.05;
                    p.vy -= Math.sin(angle) * 0.05;
                }
            }

            // Draw Star (Glow)
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// =========================================
// RENDERING
// =========================================

function renderBio() {
    const bioText = document.getElementById('bio-text');
    if (bioText) bioText.innerText = siteData.bio;
}

function renderExtras() {
    // Render Achievements THEN Interests
    const container = document.getElementById('extras-container');
    if (!container) return;

    const achievementsHtml = `
        <div class="extras-item">
            <h4>Achievements</h4>
            <ul>
                ${siteData.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>
        </div>
    `;

    const interestsHtml = `
        <div class="extras-item">
            <h4>Interests</h4>
            <ul>
                ${siteData.interests.map(i => `<li>${i}</li>`).join('')}
            </ul>
        </div>
    `;

    container.innerHTML = `
        <div class="extras-grid">
            ${achievementsHtml}
            ${interestsHtml}
        </div>
    `;
}

function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    // Add Timeline Line
    const line = '<div class="timeline-line"></div>';

    // Check if siteData.experience exists to avoid crashes
    const experienceData = siteData.experience || [];

    const items = experienceData.map(exp => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-company">${exp.company}</span>
            <span class="timeline-period">${exp.period}</span>
            <p class="timeline-desc">${exp.description}</p>
        </div>
    `).join('');

    container.innerHTML = line + items;
}

function renderProjectGallery() {
    const container = document.getElementById('project-gallery');
    if (!container) return; // Prevent crash if element missing

    // Check if siteData.projects exists
    const projectsData = siteData.projects || [];

    container.innerHTML = projectsData.map((p, index) => `
        <div class="gallery-item" onclick="window.location.href='projects.html#${p.id}'">
            <div class="gallery-info">
                <h3>${p.title}</h3>
                <p>${p.summary}</p>
            </div>
            <div class="gallery-tags">
                <span class="mono-label" style="margin-bottom:0;">${p.stack}</span>
            </div>
        </div>
    `).join('');
}

function renderProjectsPage() {
    const container = document.getElementById('projects-list-detailed');
    if (!container) return;

    const projectsData = siteData.projects || [];

    container.innerHTML = projectsData.map(p => `
        <article class="project-detailed" id="${p.id}">
             <span class="mono-label">PROJECT // ${p.id.toUpperCase()}</span>
            <h2>${p.title}</h2>
            
            <div class="project-meta-grid">
                <div class="project-meta">
                     <div style="margin-bottom: 2rem;">
                        <span class="mono-label">Stack</span>
                        <p style="color:var(--text-secondary);">${p.stack}</p>
                    </div>
                </div>
                <div class="project-content">
                    <p style="white-space: pre-line; color: var(--text-secondary); font-size: 1.1rem; line-height: 1.8;">
                        ${p.caseStudy}
                    </p>
                </div>
            </div>
        </article>
    `).join('');
}

// =========================================
// ANIMATIONS
// =========================================

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-name', { y: 100, opacity: 0, duration: 2, ease: 'power4.out' });
    gsap.from('.hero-sub', { opacity: 0, y: 30, duration: 1.5, delay: 0.5 });

    // Reveal Sections
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1
        });
    });
}

// =========================================
// COMMAND PALETTE
// =========================================

function initCommandPalette() {
    const trigger = document.getElementById('menu-trigger');
    const overlay = document.getElementById('cmd-overlay');
    const input = document.getElementById('cmd-input');
    const results = document.getElementById('cmd-results');

    if (!trigger || !overlay) return;

    // Optional safe check
    const social = siteData.social || {};

    const commands = [
        { name: 'Home', action: () => window.location.href = 'index.html' },
        { name: 'Projects', action: () => window.location.href = 'projects.html' },
        { name: 'Github', action: () => window.open(social.github, '_blank') },
        { name: 'Email', action: () => window.location.href = `mailto:${social.email}` }
    ];

    function open() {
        overlay.classList.add('active');
        input.value = '';
        renderResults('');
        input.focus();
    }

    function close() {
        overlay.classList.remove('active');
    }

    trigger.addEventListener('click', open);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    input.addEventListener('input', (e) => { renderResults(e.target.value.toLowerCase()); });

    function renderResults(query) {
        const matches = commands.filter(c => c.name.toLowerCase().includes(query));
        results.innerHTML = matches.map((cmd, idx) => `
            <div class="cmd-item"><span>${cmd.name}</span></div>
        `).join('');
        results.querySelectorAll('.cmd-item').forEach((el, idx) => {
            el.addEventListener('click', () => { matches[idx].action(); close(); });
        });
    }
}

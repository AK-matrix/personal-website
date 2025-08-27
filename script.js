// Site data configuration
const siteData = {
    name: "Arnav Kamath",
    bio: "CS undergrad at NUS. Lately been playing with AI & interested in cycling. I solve problems.",
    typingPhrases: [
        "I solve problems.",
        "Algorithms.",
        "Machine Learning.",
        "Parallel Computing.",
        "LLMs + Medtech."
    ],
    social: {
        github: "https://github.com/AK-matrix",
        linkedin: "https://linkedin.com/in/arnav-kamath-011913266",
        email: "arnavkamath2802@gmail.com"
    },
    aboutEaster: "Fav mods so far: CS2040S, MA1522, IS2238.",
    skills: [
        "Python", "Java", "TypeScript", "JavaScript", "React", 
        "Flask", "OR-Tools", "NLP", "SQL", "AWS", "CI/CD"
    ],
    projects: [
        {
            id: "modulus-ai",
            title: "ModulusAI",
            description: "AI-powered NUS planner with constraint solving, bid-aware scheduling, and NLP sentiment analysis.",
            stack: "React + Flask + OR-Tools",
            tags: ["React", "Flask", "OR-Tools", "NLP", "AI"],
            thumbnail: "📊",
            caseStudy: "Built an intelligent course planning system that optimizes NUS module selection based on student preferences, prerequisites, and bidding strategies.",
            github: "#"
        },
        {
            id: "rc-drone",
            title: "RC Drone",
            description: "Grant-funded drone build with Arduino flight controller and extensive component research.",
            stack: "Arduino + Electronics + Flight Control",
            tags: ["Arduino", "Electronics", "Flight Control", "Hardware"],
            thumbnail: "🚁",
            caseStudy: "Designed and built a custom RC drone from scratch, including flight controller programming, component selection, and field testing.",
            github: "#"
        },
        {
            id: "mutual-fund",
            title: "Personal Mutual Fund",
            description: "Data-driven stock selection with S$2k corpus and exploratory analytics dashboard.",
            stack: "Python + Data Analysis + Financial Modeling",
            tags: ["Python", "Data Analysis", "Finance", "Dashboard"],
            thumbnail: "📈",
            caseStudy: "Developed a personal investment strategy using data analysis and financial modeling.",
            github: "#"
        },
        {
            id: "weather-nowcasting",
            title: "Weather Nowcasting",
            description: "GFS and radar analysis system for early weather alerts and forecasting.",
            stack: "Python + Meteorology + Data Processing",
            tags: ["Python", "Meteorology", "Data Processing", "Alerts"],
            thumbnail: "🌦️",
            caseStudy: "Built a weather prediction system using GFS data and radar analysis.",
            github: "#"
        },
        {
            id: "llm-medtech",
            title: "LLM + Medtech Experiments",
            description: "LoRA finetuning on open models with SHAP/LIME explainability for medical applications.",
            stack: "Python + ML + LoRA + Explainability",
            tags: ["Python", "Machine Learning", "LoRA", "Explainability", "Medtech"],
            thumbnail: "🧠",
            caseStudy: "Research project exploring large language models in medical technology.",
            github: "#"
        }
    ],
    experience: [
        {
            title: "Software Engineering Intern",
            company: "KPMG",
            period: "Jun–Aug 2025",
            description: "Built analytics pipelines and enterprise dashboards; explored ML integrations."
        },
        {
            title: "Head of Tech",
            company: "Developer's Group @ NUS Computing",
            period: "Jul 2025–present",
            description: "Building their website and conducting hackathon workshops."
        },
        {
            title: "Teaching Assistant",
            company: "CS1101S",
            period: "Aug–Dec 2025",
            description: "Recursion, functional patterns, and some 3D runes fun."
        }
    ]
};

// Initialize the site
function init() {
    console.log('Initializing website...');
    
    setTheme(localStorage.getItem('theme') || 'dark');
    console.log('Theme set');
    
    initTypingEffect();
    console.log('Typing effect initialized');
    
    initParallaxBackground();
    console.log('Parallax background initialized');
    
    renderSkills();
    renderProjects();
    renderExperience();
    console.log('Content rendered');
    
    initEventListeners();
    console.log('Event listeners initialized');
    
    initAlgorithmSketchpad();
    console.log('Algorithm sketchpad initialized');
    
    console.log('Website initialization complete!');
}

// Theme management
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀︎' : '🌙';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Typing effect
function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = siteData.typingPhrases[phraseIndex];
        
        if (isDeleting) {
            if (charIndex > 0) {
                charIndex--;
                typingText.textContent = currentPhrase.substring(0, charIndex);
                setTimeout(type, 50);
            } else {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % siteData.typingPhrases.length;
                setTimeout(type, 1000);
            }
        } else {
            if (charIndex < currentPhrase.length) {
                charIndex++;
                typingText.textContent = currentPhrase.substring(0, charIndex);
                setTimeout(type, 100);
            } else {
                isDeleting = true;
                setTimeout(type, 2000);
            }
        }
    }
    
    type();
}

// Parallax background
function initParallaxBackground() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const parallaxBg = document.getElementById('parallax-bg');
    if (!parallaxBg) return;
    
    // Create moving dots
    for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(78, 161, 255, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s linear infinite;
        `;
        parallaxBg.appendChild(dot);
    }
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px) translateX(0px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Render functions
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) {
        console.error('Skills grid not found');
        return;
    }
    
    console.log('Rendering skills:', siteData.skills.length);
    skillsGrid.innerHTML = '';
    
    siteData.skills.forEach(skill => {
        const chip = document.createElement('div');
        chip.className = 'skill-chip';
        chip.textContent = skill;
        chip.addEventListener('click', () => filterProjectsBySkill(skill));
        skillsGrid.appendChild(chip);
    });
    
    console.log('Skills rendered successfully');
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) {
        console.error('Projects grid not found');
        return;
    }
    
    console.log('Rendering projects:', siteData.projects.length);
    projectsGrid.innerHTML = '';
    
    siteData.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-thumbnail">${project.thumbnail}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-actions">
                <button class="btn btn-primary" onclick="showProjectModal('${project.id}')">Case Study</button>
                <a href="${project.github}" class="btn btn-secondary">GitHub</a>
            </div>
        `;
        projectsGrid.appendChild(card);
        console.log(`Added project ${index + 1}:`, project.title);
    });
    
    console.log('Projects rendered successfully');
}

function renderExperience() {
    const experienceTimeline = document.getElementById('experience-timeline');
    if (!experienceTimeline) {
        console.error('Experience timeline not found');
        return;
    }
    
    console.log('Rendering experience:', siteData.experience.length);
    experienceTimeline.innerHTML = '';
    
    siteData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-date">${exp.period}</div>
            <h3 class="title">${exp.title}</h3>
            <div class="timeline-company">${exp.company}</div>
            <p class="timeline-description">${exp.description}</p>
        `;
        experienceTimeline.appendChild(item);
    });
    
    console.log('Experience rendered successfully');
}

// Project modal
function showProjectModal(projectId) {
    const project = siteData.projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalFooter = document.getElementById('modal-footer');
    
    modalTitle.textContent = project.title;
    modalBody.innerHTML = `
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Stack:</strong> ${project.stack}</p>
        <p><strong>Case Study:</strong> ${project.caseStudy}</p>
    `;
    modalFooter.innerHTML = `
        <a href="${project.github}" class="btn btn-primary">View on GitHub</a>
        <button class="btn btn-secondary" onclick="hideProjectModal()">Close</button>
    `;
    
    modal.classList.add('show');
}

function hideProjectModal() {
    document.getElementById('project-modal').classList.remove('show');
}

// Utility functions
function filterProjectsBySkill(skill) {
    const chips = document.querySelectorAll('.skill-chip');
    chips.forEach(chip => {
        if (chip.textContent === skill) {
            chip.classList.toggle('active');
        } else {
            chip.classList.remove('active');
        }
    });
    
    const activeSkills = Array.from(document.querySelectorAll('.skill-chip.active'))
        .map(chip => chip.textContent);
    
    const filteredProjects = activeSkills.length === 0 ? 
        siteData.projects : 
        siteData.projects.filter(project => 
            project.tags.some(tag => activeSkills.includes(tag))
        );
    
    renderFilteredProjects(filteredProjects);
}

function renderFilteredProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-thumbnail">${project.thumbnail}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-actions">
                <button class="btn btn-primary" onclick="showProjectModal('${project.id}')">Case Study</button>
                <a href="${project.github}" class="btn btn-secondary">GitHub</a>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// Event listeners
function initEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Modal close
    document.getElementById('modal-close').addEventListener('click', hideProjectModal);
    document.getElementById('modal-overlay').addEventListener('click', hideProjectModal);
    
    // Command palette
    document.getElementById('command-trigger').addEventListener('click', showCommandPalette);
    document.getElementById('command-close').addEventListener('click', hideCommandPalette);
    document.getElementById('command-palette-overlay').addEventListener('click', hideCommandPalette);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            showCommandPalette();
        }
        
        if (e.key === 'Escape') {
            hideCommandPalette();
            hideProjectModal();
        }
    });
}

// Command palette
function showCommandPalette() {
    document.getElementById('command-palette').classList.add('show');
    document.getElementById('command-input').focus();
    renderCommands();
}

function hideCommandPalette() {
    document.getElementById('command-palette').classList.remove('show');
    document.getElementById('command-input').value = '';
}

function renderCommands() {
    const commands = [
        { title: 'About', action: () => scrollToSection('about') },
        { title: 'Projects', action: () => scrollToSection('projects') },
        { title: 'Experience', action: () => scrollToSection('experience') },
        { title: 'Contact', action: () => scrollToSection('contact') },
        { title: 'GitHub', action: () => window.open(siteData.social.github, '_blank') },
        { title: 'LinkedIn', action: () => window.open(siteData.social.linkedin, '_blank') },
        { title: 'Email', action: () => window.open(`mailto:${siteData.social.email}`, '_blank') }
    ];
    
    const results = document.getElementById('command-results');
    results.innerHTML = '';
    
    commands.forEach(cmd => {
        const item = document.createElement('div');
        item.className = 'command-item';
        item.innerHTML = `
            <div class="command-item-text">
                <div class="command-item-title">${cmd.title}</div>
            </div>
        `;
        item.addEventListener('click', () => {
            cmd.action();
            hideCommandPalette();
        });
        results.appendChild(item);
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Algorithm Sketchpad
function initAlgorithmSketchpad() {
    const canvas = document.getElementById('sketchpad-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let bubbleArray = [];
    let bfsGrid = [];
    let currentAlgorithm = 'bubble';
    let animationId = null;
    
    function initBubbleSort() {
        bubbleArray = Array.from({length: 20}, () => Math.floor(Math.random() * 200) + 20);
        drawBubbleArray();
    }
    
    function initBFS() {
        const gridSize = 15; // Smaller grid for better visibility
        bfsGrid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
        
        // Add random obstacles in a more organized pattern
        for (let i = 0; i < 30; i++) {
            const x = Math.floor(Math.random() * gridSize);
            const y = Math.floor(Math.random() * gridSize);
            if (x !== 0 || y !== 0) { // Don't block start
                bfsGrid[y][x] = 1; // Obstacle
            }
        }
        
        // Set start and end points
        bfsGrid[0][0] = 2; // Start
        bfsGrid[gridSize-1][gridSize-1] = 3; // End
        
        drawBFSGrid();
    }
    
    function drawBubbleArray() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#4ea1ff';
        
        const barWidth = canvas.width / bubbleArray.length;
        bubbleArray.forEach((value, index) => {
            const barHeight = (value / 220) * canvas.height;
            const x = index * barWidth;
            const y = canvas.height - barHeight;
            
            ctx.fillRect(x, y, barWidth - 1, barHeight);
        });
    }
    
    function drawBFSGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const cellSize = canvas.width / bfsGrid.length;
        
        bfsGrid.forEach((row, y) => {
            row.forEach((cell, x) => {
                const cellX = x * cellSize;
                const cellY = y * cellSize;
                
                switch (cell) {
                    case 0: // Empty
                        ctx.fillStyle = '#252a32';
                        break;
                    case 1: // Obstacle
                        ctx.fillStyle = '#6b7280';
                        break;
                    case 2: // Start
                        ctx.fillStyle = '#10b981';
                        break;
                    case 3: // End
                        ctx.fillStyle = '#ef4444';
                        break;
                    case 4: // Visited
                        ctx.fillStyle = '#3b82f6';
                        break;
                    case 5: // Path
                        ctx.fillStyle = '#f59e0b';
                        break;
                }
                
                ctx.fillRect(cellX, cellY, cellSize, cellSize);
                ctx.strokeStyle = '#374151';
                ctx.strokeRect(cellX, cellY, cellSize, cellSize);
            });
        });
    }
    
    function bubbleSortStep() {
        let swapped = false;
        for (let i = 0; i < bubbleArray.length - 1; i++) {
            if (bubbleArray[i] > bubbleArray[i + 1]) {
                [bubbleArray[i], bubbleArray[i + 1]] = [bubbleArray[i + 1], bubbleArray[i]];
                swapped = true;
                break;
            }
        }
        
        drawBubbleArray();
        return swapped;
    }
    
    function bfsStep() {
        // Simple BFS visualization step - just mark a few cells as visited
        let cellsVisited = 0;
        const maxCellsPerStep = 3;
        
        for (let y = 0; y < bfsGrid.length && cellsVisited < maxCellsPerStep; y++) {
            for (let x = 0; x < bfsGrid[y].length && cellsVisited < maxCellsPerStep; x++) {
                if (bfsGrid[y][x] === 0) {
                    bfsGrid[y][x] = 4; // Mark as visited
                    cellsVisited++;
                }
            }
        }
        
        drawBFSGrid();
    }
    
    function playAnimation() {
        if (window.sketchpadPlaying) return;
        
        window.sketchpadPlaying = true;
        document.getElementById('sketchpad-play').textContent = 'Pause';
        
        function animate() {
            if (!window.sketchpadPlaying) return;
            
            if (currentAlgorithm === 'bubble') {
                if (!bubbleSortStep()) {
                    window.sketchpadPlaying = false;
                    document.getElementById('sketchpad-play').textContent = 'Play';
                    return;
                }
            } else {
                bfsStep();
            }
            
            animationId = setTimeout(animate, 200);
        }
        
        animate();
    }
    
    function pauseAnimation() {
        window.sketchpadPlaying = false;
        document.getElementById('sketchpad-play').textContent = 'Play';
        if (animationId) {
            clearTimeout(animationId);
        }
    }
    
    function stepAnimation() {
        if (currentAlgorithm === 'bubble') {
            bubbleSortStep();
        } else {
            bfsStep();
        }
    }
    
    function resetAnimation() {
        pauseAnimation();
        if (currentAlgorithm === 'bubble') {
            initBubbleSort();
        } else {
            initBFS();
        }
    }
    
    function toggleAlgorithm() {
        pauseAnimation();
        currentAlgorithm = currentAlgorithm === 'bubble' ? 'bfs' : 'bubble';
        document.getElementById('sketchpad-toggle').textContent = currentAlgorithm === 'bubble' ? 'Switch to BFS' : 'Switch to Bubble Sort';
        document.getElementById('sketchpad-info').innerHTML = `<p>${currentAlgorithm === 'bubble' ? 'Bubble Sort' : 'BFS Pathfinding'}: Click Play to start</p>`;
        
        if (currentAlgorithm === 'bubble') {
            initBubbleSort();
        } else {
            initBFS();
        }
    }
    
    // Event listeners
    document.getElementById('sketchpad-play').addEventListener('click', () => {
        if (window.sketchpadPlaying) {
            pauseAnimation();
        } else {
            playAnimation();
        }
    });
    
    document.getElementById('sketchpad-step').addEventListener('click', stepAnimation);
    document.getElementById('sketchpad-reset').addEventListener('click', resetAnimation);
    document.getElementById('sketchpad-toggle').addEventListener('click', toggleAlgorithm);
    
    // Initialize
    initBubbleSort();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

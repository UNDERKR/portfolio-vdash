// ============================================
// IMPORTS
// ============================================
import { TRIGGER_DETAILS, LOG_MESSAGES, USER_INFO, TERMINAL_COMMANDS } from './data.js';

// ============================================
// CONFIGURATION & ÉTAT GLOBAL
// ============================================

const AppState = {
    currentView: 'dashboard',
    logsIntervalId: null,
    cpuIntervalId: null,
    ramIntervalId: null,
    logsPaused: false,
    cpuChart: null,
    ramChart: null,
    servicesChart: null,
    terminalHistory: [],
    terminalHistoryIndex: -1
};

// ============================================
// HORLOGE LIVE
// ============================================

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clockEl = document.getElementById('liveClock');
    if (clockEl) {
        clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// ============================================
// ROUTAGE SPA (Single Page Application)
// ============================================

function navigateToView(viewName) {
    // Si même vue, ne rien faire
    if (AppState.currentView === viewName) return;

    const currentViewEl = document.querySelector(`.view[data-view="${AppState.currentView}"]`);
    const nextViewEl = document.querySelector(`.view[data-view="${viewName}"]`);

    if (!nextViewEl) return;

    // Animation de sortie avec GSAP
    gsap.to(currentViewEl, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
            currentViewEl.classList.remove('active');

            // Afficher la nouvelle vue
            nextViewEl.classList.add('active');
            gsap.fromTo(nextViewEl,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4 }
            );

            // Animer les widgets en stagger si c'est le dashboard
            if (viewName === 'dashboard') {
                animateDashboardWidgets();
            }

            // Animer les cartes de service en stagger
            if (viewName === 'services') {
                animateServiceCards();
            }

            // Animer la timeline de parcours
            if (viewName === 'parcours') {
                animateTimelineEvents();
            }

            // Animer les cartes d'intérêts
            if (viewName === 'interets') {
                animateInterestCards();
            }

            // Si navigation vers logs, s'assurer que les logs sont actifs
            if (viewName === 'logs') {
                scrollLogsToBottom();
            }
        }
    });

    // Mettre à jour l'état et la navigation
    AppState.currentView = viewName;
    updateActiveNavItem(viewName);
}

function updateActiveNavItem(viewName) {
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.dataset.view === viewName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function animateDashboardWidgets() {
    console.log('[Animation] Démarrage des animations du dashboard...');
    // Animer tous les widgets avec un effet de profondeur
    const widgets = document.querySelectorAll('.widget');
    console.log(`[Animation] Widgets trouvés: ${widgets.length}`);
    gsap.fromTo(widgets,
        {
            opacity: 0,
            y: 40,
            scale: 0.95,
            rotateX: 10
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out'
        }
    );

    // Animer les titres des widgets séparément
    gsap.fromTo('.widget-header h3',
        {
            opacity: 0,
            x: -20
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.3,
            ease: 'power2.out'
        }
    );

    // Animer les badges avec un effet de pop
    gsap.fromTo('.status-badge, .metric-badge',
        {
            scale: 0,
            rotation: -180
        },
        {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            stagger: 0.08,
            delay: 0.5,
            ease: 'back.out(2)'
        }
    );

    // Animer les barres de progression du widget centres d'intérêts
    const previewBars = document.querySelectorAll('.preview-fill');
    previewBars.forEach((bar, index) => {
        const targetWidth = bar.style.width; // Récupérer la largeur cible (95%, 90%, 88%)
        bar.style.width = '0%'; // Commencer à 0%

        gsap.to(bar, {
            width: targetWidth,
            duration: 1.5,
            delay: 0.8 + (index * 0.15), // Décalage pour effet en cascade
            ease: 'power3.out',
            onUpdate: function() {
                // Effet de pulsation pendant le remplissage
                const progress = this.progress();
                bar.style.boxShadow = `0 0 ${8 + progress * 12}px rgba(0, 255, 136, ${0.4 + progress * 0.3})`;
            }
        });
    });
}

function animateServiceCards() {
    console.log('[Animation] Démarrage des animations des cartes services...');
    const cards = document.querySelectorAll('.service-card');
    gsap.fromTo(cards,
        { opacity: 0, scale: 0.9 },
        {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'back.out(1.2)'
        }
    );

    // Animer les barres de progression de maîtrise
    const progressBars = document.querySelectorAll('.service-card .progress-fill');
    progressBars.forEach((bar, index) => {
        const targetWidth = bar.style.width; // Récupérer la largeur cible (90%, 95%, etc.)
        bar.style.width = '0%'; // Commencer à 0%

        gsap.to(bar, {
            width: targetWidth,
            duration: 1.5,
            delay: 0.5 + (index * 0.1), // Décalage pour effet en cascade
            ease: 'power3.out',
            onUpdate: function() {
                // Effet de pulsation pendant le remplissage
                const progress = this.progress();
                bar.style.boxShadow = `0 0 ${10 + progress * 15}px rgba(0, 255, 136, ${0.5 + progress * 0.3})`;
            }
        });
    });
}

function animateTimelineEvents() {
    const events = document.querySelectorAll('.timeline-event');
    const timelineEnd = document.querySelector('.timeline-end');

    gsap.fromTo(events,
        { opacity: 0, x: -30 },
        {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
        }
    );

    if (timelineEnd) {
        gsap.fromTo(timelineEnd,
            { opacity: 0, y: 20 },
            {
                opacity: 0.6,
                y: 0,
                duration: 0.5,
                delay: events.length * 0.15 + 0.2
            }
        );
    }
}

function animateInterestCards() {
    const cards = document.querySelectorAll('.interest-card');

    gsap.fromTo(cards,
        { opacity: 0, y: 30, scale: 0.95 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: 'power2.out'
        }
    );

    // Animer les barres de progression
    const statBars = document.querySelectorAll('.stat-fill');
    statBars.forEach((bar, index) => {
        const width = bar.style.width;
        gsap.fromTo(bar,
            { width: '0%' },
            {
                width: width,
                duration: 1.2,
                delay: 0.3 + (index * 0.12),
                ease: 'power3.out'
            }
        );
    });
}

// ============================================
// CHART.JS - GRAPHIQUES
// ============================================

function initCPUChart() {
    const ctx = document.getElementById('cpuChart');
    if (!ctx) return;

    // Détruire l'ancienne instance si elle existe (évite les fuites mémoire)
    if (AppState.cpuChart) {
        AppState.cpuChart.destroy();
    }

    // Données initiales (20 points)
    const initialData = Array.from({ length: 20 }, () => Math.floor(Math.random() * 40) + 30);

    AppState.cpuChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 20 }, (_, i) => ''),
            datasets: [{
                label: 'CPU %',
                data: initialData,
                borderColor: 'rgba(0, 255, 136, 1)',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 750
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 12, 16, 0.9)',
                    titleColor: '#00ff88',
                    bodyColor: '#e5e7eb',
                    borderColor: '#00ff88',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                },
                y: {
                    display: true,
                    min: 0,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: 'JetBrains Mono',
                            size: 10
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

function initRAMChart() {
    const ctx = document.getElementById('ramChart');
    if (!ctx) return;

    // Détruire l'ancienne instance si elle existe (évite les fuites mémoire)
    if (AppState.ramChart) {
        AppState.ramChart.destroy();
    }

    // Données initiales (20 points) - RAM entre 50% et 80%
    const initialData = Array.from({ length: 20 }, () => Math.floor(Math.random() * 30) + 50);

    AppState.ramChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 20 }, (_, i) => ''),
            datasets: [{
                label: 'RAM %',
                data: initialData,
                borderColor: 'rgba(0, 212, 255, 1)',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 750
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 12, 16, 0.9)',
                    titleColor: '#00d4ff',
                    bodyColor: '#e5e7eb',
                    borderColor: '#00d4ff',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                },
                y: {
                    display: true,
                    min: 0,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: 'JetBrains Mono',
                            size: 10
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

function initServicesChart() {
    const ctx = document.getElementById('servicesChart');
    if (!ctx) return;

    // Détruire l'ancienne instance si elle existe (évite les fuites mémoire)
    if (AppState.servicesChart) {
        AppState.servicesChart.destroy();
    }

    AppState.servicesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Réseaux', 'Systèmes', 'Cloud & DevOps', 'Monitoring', 'Sécurité', 'BDD'],
            datasets: [{
                data: [22, 25, 20, 15, 12, 6],
                backgroundColor: [
                    'rgba(0, 255, 136, 0.8)',
                    'rgba(0, 212, 255, 0.8)',
                    'rgba(157, 78, 221, 0.8)',
                    'rgba(255, 149, 0, 0.8)',
                    'rgba(255, 51, 102, 0.8)',
                    'rgba(255, 215, 0, 0.8)'
                ],
                borderColor: '#12151c',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#e5e7eb',
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(10, 12, 16, 0.9)',
                    titleColor: '#00ff88',
                    bodyColor: '#e5e7eb',
                    borderColor: '#00ff88',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// ============================================
// SIMULATION LIVE - CPU & RAM CHARTS
// ============================================

function startCPUSimulation() {
    AppState.cpuIntervalId = setInterval(() => {
        if (AppState.cpuChart) {
            const chart = AppState.cpuChart;
            const newValue = Math.floor(Math.random() * 40) + 30; // 30-70%

            // Ajouter nouvelle valeur
            chart.data.datasets[0].data.push(newValue);
            chart.data.labels.push('');

            // Supprimer la plus ancienne
            if (chart.data.datasets[0].data.length > 20) {
                chart.data.datasets[0].data.shift();
                chart.data.labels.shift();
            }

            chart.update('none'); // Update sans animation pour plus de fluidité
        }
    }, 3000); // Toutes les 3 secondes (réduit les saccades)
}

function startRAMSimulation() {
    AppState.ramIntervalId = setInterval(() => {
        if (AppState.ramChart) {
            const chart = AppState.ramChart;
            const newValue = Math.floor(Math.random() * 30) + 50; // 50-80%

            // Ajouter nouvelle valeur
            chart.data.datasets[0].data.push(newValue);
            chart.data.labels.push('');

            // Supprimer la plus ancienne
            if (chart.data.datasets[0].data.length > 20) {
                chart.data.datasets[0].data.shift();
                chart.data.labels.shift();
            }

            chart.update('none'); // Update sans animation pour plus de fluidité
        }
    }, 3000); // Toutes les 3 secondes (réduit les saccades)
}

// ============================================
// SIMULATION LIVE - LOGS
// ============================================

function addLogLine() {
    if (AppState.logsPaused) return;

    const logsContainer = document.getElementById('logsContainer');
    if (!logsContainer) return;

    // Choisir un message aléatoire
    const logMsg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];

    // Créer la ligne
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    const logLine = document.createElement('div');
    logLine.className = `log-line ${logMsg.type}`;
    logLine.textContent = `[${logMsg.type.toUpperCase()}] ${timestamp} :: ${logMsg.msg}`;

    // Ajouter la ligne
    logsContainer.appendChild(logLine);

    // Limiter à 100 lignes
    while (logsContainer.children.length > 100) {
        logsContainer.removeChild(logsContainer.firstChild);
    }

    // Scroll automatique
    scrollLogsToBottom();
}

function scrollLogsToBottom() {
    const logsContainer = document.getElementById('logsContainer');
    if (logsContainer) {
        logsContainer.scrollTop = logsContainer.scrollHeight;
    }
}

function startLogsSimulation() {
    AppState.logsIntervalId = setInterval(addLogLine, 5000); // Toutes les 5 secondes (réduit les saccades)
}

function toggleLogsPause() {
    AppState.logsPaused = !AppState.logsPaused;
    const pauseBtn = document.getElementById('pauseLogsBtn');
    const pauseIcon = document.getElementById('pauseIcon');

    if (AppState.logsPaused) {
        pauseBtn.innerHTML = '<span id="pauseIcon">▶</span> RESUME';
    } else {
        pauseBtn.innerHTML = '<span id="pauseIcon">❚❚</span> PAUSE';
    }
}

// ============================================
// TERMINAL INTERACTIF
// ============================================

function executeTerminalCommand(command) {
    const logsContainer = document.getElementById('logsContainer');
    if (!logsContainer) return;

    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    // Ajouter la commande à l'historique
    AppState.terminalHistory.push(trimmedCommand);
    AppState.terminalHistoryIndex = AppState.terminalHistory.length;

    // Afficher la commande entrée
    const commandLine = document.createElement('div');
    commandLine.className = 'log-line command';
    commandLine.textContent = `root@portfolio:~$ ${trimmedCommand}`;
    logsContainer.appendChild(commandLine);

    // Parser la commande (séparer la commande et les arguments)
    const parts = trimmedCommand.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Exécuter la commande
    if (cmd === 'clear') {
        // Effacer le terminal
        logsContainer.innerHTML = '';
        const welcomeLine = document.createElement('div');
        welcomeLine.className = 'log-line success';
        welcomeLine.textContent = '[SUCCESS] Terminal cleared. Tapez \'help\' pour voir les commandes disponibles.';
        logsContainer.appendChild(welcomeLine);
    } else if (cmd === 'echo' && args.length > 0) {
        // Commande echo
        const outputLine = document.createElement('div');
        outputLine.className = 'log-line info';
        outputLine.textContent = args.join(' ');
        logsContainer.appendChild(outputLine);
    } else if (cmd === 'sudo' && args[0] === 'rm' && args[1] === '-rf' && args[2] === '/') {
        // Easter egg :)
        const errorLine = document.createElement('div');
        errorLine.className = 'log-line error';
        errorLine.textContent = 'PERMISSION DENIED: Nice try hacker! 😎';
        logsContainer.appendChild(errorLine);
    } else if (TERMINAL_COMMANDS[cmd]) {
        // Commande reconnue
        const cmdConfig = TERMINAL_COMMANDS[cmd];
        const output = cmdConfig.execute();

        // Afficher chaque ligne de sortie
        output.forEach(line => {
            const outputLine = document.createElement('div');
            outputLine.className = 'log-line success';
            outputLine.textContent = line;
            logsContainer.appendChild(outputLine);
        });
    } else {
        // Commande non reconnue
        const errorLine = document.createElement('div');
        errorLine.className = 'log-line error';
        errorLine.textContent = `command not found: ${cmd}. Tapez 'help' pour voir les commandes disponibles.`;
        logsContainer.appendChild(errorLine);
    }

    // Limiter à 200 lignes
    while (logsContainer.children.length > 200) {
        logsContainer.removeChild(logsContainer.firstChild);
    }

    // Scroll automatique
    scrollLogsToBottom();
}

function handleTerminalInput(e) {
    if (e.key === 'Enter') {
        const input = e.target;
        const command = input.value;
        executeTerminalCommand(command);
        input.value = '';
    } else if (e.key === 'ArrowUp') {
        // Historique précédent
        e.preventDefault();
        if (AppState.terminalHistoryIndex > 0) {
            AppState.terminalHistoryIndex--;
            e.target.value = AppState.terminalHistory[AppState.terminalHistoryIndex];
        }
    } else if (e.key === 'ArrowDown') {
        // Historique suivant
        e.preventDefault();
        if (AppState.terminalHistoryIndex < AppState.terminalHistory.length - 1) {
            AppState.terminalHistoryIndex++;
            e.target.value = AppState.terminalHistory[AppState.terminalHistoryIndex];
        } else {
            AppState.terminalHistoryIndex = AppState.terminalHistory.length;
            e.target.value = '';
        }
    }
}

// ============================================
// FILTRES EXPERIENCES
// ============================================

function filterTriggers(filterType) {
    const rows = document.querySelectorAll('.trigger-row');

    rows.forEach(row => {
        const expType = row.dataset.type;

        if (filterType === 'all') {
            row.style.display = '';
        } else if (filterType === 'stage' && expType === 'stage') {
            row.style.display = '';
        } else if (filterType === 'alternance' && (expType === 'alternance' || expType === 'alternance')) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    // Mettre à jour les boutons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ============================================
// DRAWER (TIROIR) POUR DÉTAILS TRIGGERS
// ============================================

function openDrawer(triggerId) {
    const drawer = document.getElementById('triggerDrawer');
    const drawerBody = document.getElementById('drawerBody');
    const drawerTitle = document.getElementById('drawerTitle');

    const details = TRIGGER_DETAILS[triggerId];
    if (!details) return;

    // Remplir le titre de manière sécurisée
    drawerTitle.textContent = details.title;

    // Vider le contenu précédent
    drawerBody.innerHTML = '';

    // Section 1: Informations Générales
    const section1 = createDrawerSection('INFORMATIONS GÉNÉRALES');

    section1.appendChild(createInfoRow('Type:', () => {
        const badge = document.createElement('span');
        badge.className = `exp-type-badge ${details.experienceType.toLowerCase()}`;
        badge.textContent = details.experienceType.toUpperCase();
        return badge;
    }));

    section1.appendChild(createInfoRow('Rôle:', () => {
        const value = document.createElement('span');
        value.className = 'info-value';
        const strong = document.createElement('strong');
        strong.textContent = details.role;
        value.appendChild(strong);
        return value;
    }));

    section1.appendChild(createInfoRow('Date:', details.date, 'mono'));
    section1.appendChild(createInfoRow('Lieu:', details.location));
    section1.appendChild(createInfoRow('Secteur:', details.sector));
    section1.appendChild(createInfoRow('Équipe:', details.team));

    if (details.client) {
        section1.appendChild(createInfoRow('Client:', details.client));
    }

    section1.appendChild(createInfoRow('Statut:', () => {
        const badge = document.createElement('span');
        badge.className = `status-badge ${details.status === 'RESOLVED' ? 'green' : 'orange'}`;
        badge.textContent = details.status === 'RESOLVED' ? 'TERMINÉ' : 'EN COURS';
        return badge;
    }));

    drawerBody.appendChild(section1);

    // Section 2: Contexte & Enjeux
    const section2 = createDrawerSection('CONTEXTE & ENJEUX');
    const problemP = document.createElement('p');
    problemP.textContent = details.problem;
    section2.appendChild(problemP);
    drawerBody.appendChild(section2);

    // Section 3: Missions & Réalisations
    const section3 = createDrawerSection('MISSIONS & RÉALISATIONS');
    const solutionsList = document.createElement('ul');
    // Séparer les missions par point-virgule et créer une liste
    const missions = details.solution.split(';').map(m => m.trim()).filter(m => m.length > 0);
    missions.forEach(mission => {
        const li = document.createElement('li');
        // Capitaliser la première lettre
        const capitalizedMission = mission.charAt(0).toUpperCase() + mission.slice(1);
        li.textContent = capitalizedMission;
        solutionsList.appendChild(li);
    });
    section3.appendChild(solutionsList);
    drawerBody.appendChild(section3);

    // Section 4: Technologies Utilisées
    const section4 = createDrawerSection('TECHNOLOGIES UTILISÉES');
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'service-tags';
    details.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        tagsContainer.appendChild(tag);
    });
    section4.appendChild(tagsContainer);
    drawerBody.appendChild(section4);

    // Section 5: Résultats & Impact
    const section5 = createDrawerSection('RÉSULTATS & IMPACT');
    const resultsList = document.createElement('ul');
    details.results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });
    section5.appendChild(resultsList);
    drawerBody.appendChild(section5);

    // Section 6: Liens (si disponibles)
    if (details.github || details.live) {
        const section6 = document.createElement('div');
        section6.className = 'drawer-section';

        if (details.github) {
            const githubLink = createDrawerLink('⧉', 'Voir sur GitHub', details.github);
            section6.appendChild(githubLink);
        }

        if (details.live) {
            const liveLink = createDrawerLink('⧉', 'Voir le projet live', details.live);
            section6.appendChild(liveLink);
        }

        drawerBody.appendChild(section6);
    }

    // Ouvrir avec animation GSAP
    drawer.classList.add('active');

    gsap.fromTo('.drawer-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
    );

    gsap.fromTo('.drawer-content',
        { x: '100%' },
        {
            x: '0%',
            duration: 0.4,
            ease: 'power3.out'
        }
    );

    // Animer le contenu en stagger
    gsap.fromTo('.drawer-section',
        { opacity: 0, x: 20 },
        {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            delay: 0.2
        }
    );
}

// Fonctions utilitaires pour créer des éléments de manière sécurisée
function createDrawerSection(title) {
    const section = document.createElement('div');
    section.className = 'drawer-section';
    const h3 = document.createElement('h3');
    h3.textContent = title;
    section.appendChild(h3);
    return section;
}

function createInfoRow(label, value, valueClass = '') {
    const row = document.createElement('div');
    row.className = 'info-row';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'info-label';
    labelSpan.textContent = label;
    row.appendChild(labelSpan);

    if (typeof value === 'function') {
        row.appendChild(value());
    } else {
        const valueSpan = document.createElement('span');
        valueSpan.className = `info-value ${valueClass}`;
        valueSpan.textContent = value;
        row.appendChild(valueSpan);
    }

    return row;
}

function createDrawerLink(icon, text, href) {
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'drawer-link';

    const iconSpan = document.createElement('span');
    iconSpan.className = 'link-icon';
    iconSpan.textContent = icon;
    link.appendChild(iconSpan);

    link.appendChild(document.createTextNode(' ' + text));

    return link;
}

function closeDrawer() {
    const drawer = document.getElementById('triggerDrawer');

    gsap.to('.drawer-overlay', {
        opacity: 0,
        duration: 0.3
    });

    gsap.to('.drawer-content', {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
            drawer.classList.remove('active');
        }
    });
}

// ============================================
// BURGER MENU (MOBILE)
// ============================================

function toggleBurgerMenu() {
    const sidebar = document.querySelector('.sidebar');
    const burgerBtn = document.getElementById('burgerBtn');
    const overlay = document.getElementById('sidebarOverlay');

    sidebar.classList.toggle('mobile-open');
    burgerBtn.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeBurgerMenu() {
    const sidebar = document.querySelector('.sidebar');
    const burgerBtn = document.getElementById('burgerBtn');
    const overlay = document.getElementById('sidebarOverlay');

    sidebar.classList.remove('mobile-open');
    burgerBtn.classList.remove('active');
    overlay.classList.remove('active');
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Burger Menu
    const burgerBtn = document.getElementById('burgerBtn');
    if (burgerBtn) {
        burgerBtn.addEventListener('click', toggleBurgerMenu);
    }

    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeBurgerMenu);
    }

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const viewName = item.dataset.view;
            navigateToView(viewName);
            // Fermer le menu burger sur mobile après navigation
            if (window.innerWidth <= 768) {
                closeBurgerMenu();
            }
        });
    });

    // Filtres triggers
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filterType = btn.dataset.filter;
            filterTriggers(filterType);
        });
    });

    // Lignes triggers (ouvrir drawer)
    document.querySelectorAll('.trigger-row').forEach(row => {
        // Click event
        row.addEventListener('click', () => {
            const triggerId = row.dataset.trigger;
            openDrawer(triggerId);
        });

        // Keyboard navigation (Enter & Space)
        row.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Empêcher le scroll sur Space
                const triggerId = row.dataset.trigger;
                openDrawer(triggerId);
            }
        });
    });

    // Fermer drawer
    const closeBtn = document.getElementById('closeDrawer');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeDrawer);
    }

    const drawerOverlay = document.querySelector('.drawer-overlay');
    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeDrawer);
    }

    // Bouton pause logs
    const pauseLogsBtn = document.getElementById('pauseLogsBtn');
    if (pauseLogsBtn) {
        pauseLogsBtn.addEventListener('click', toggleLogsPause);
    }

    // Terminal interactif
    const terminalInput = document.getElementById('terminalInput');
    if (terminalInput) {
        terminalInput.addEventListener('keydown', handleTerminalInput);
    }
}

// ============================================
// INITIALISATION
// ============================================

function init() {
    console.log('[NMS-Portfolio] Initialisation...');

    // Vérifier que GSAP est chargé
    if (typeof gsap === 'undefined') {
        console.error('[Animation] GSAP n\'est pas chargé!');
    } else {
        console.log('[Animation] GSAP disponible ✓');
    }

    // Horloge
    updateClock();
    setInterval(updateClock, 1000);

    // Charts
    initCPUChart();
    initRAMChart();
    initServicesChart();

    // Note: Le globe 3D sera initialisé lorsque l'utilisateur navigue vers la vue Logs
    // pour s'assurer que le container a les bonnes dimensions

    // Simulations live
    startCPUSimulation();
    startRAMSimulation();
    startLogsSimulation();

    // Event listeners
    setupEventListeners();

    // Animations d'entrée
    animateHeaderElements();
    animateSidebarElements();

    // Animation initiale du dashboard
    setTimeout(() => {
        animateDashboardWidgets();
    }, 400);

    console.log('[NMS-Portfolio] Système opérationnel ✓');
}

// Animations d'entrée pour le header
function animateHeaderElements() {
    console.log('[Animation] Démarrage des animations du header...');
    gsap.fromTo('.header-title',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
    );

    gsap.fromTo('.global-status',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.4, ease: 'back.out(1.5)' }
    );

    gsap.fromTo('.live-clock',
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.6, ease: 'power2.out' }
    );
}

// Animations d'entrée pour la sidebar
function animateSidebarElements() {
    console.log('[Animation] Démarrage des animations de la sidebar...');
    gsap.fromTo('.nav-item',
        { opacity: 0, x: -20 },
        {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            delay: 0.3,
            ease: 'power2.out'
        }
    );

    gsap.fromTo('.sidebar-footer',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.8, ease: 'power2.out' }
    );
}

// ============================================
// EXPOSITION DES FONCTIONS GLOBALES
// ============================================

// Exposer navigateToView pour les boutons onclick dans le HTML
window.navigateToView = navigateToView;

// ============================================
// GESTION D'ERREURS GLOBALE
// ============================================

// Gestion des erreurs non capturées
window.addEventListener('error', (event) => {
    console.error('[ERROR] Erreur non capturée:', event.error);
    // Optionnel : afficher un message à l'utilisateur
    // showErrorMessage('Une erreur est survenue. Veuillez recharger la page.');
});

// Gestion des promesses rejetées non capturées
window.addEventListener('unhandledrejection', (event) => {
    console.error('[ERROR] Promise rejetée non gérée:', event.reason);
});

// ============================================
// DÉMARRAGE
// ============================================

// Attendre que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            init();
        } catch (error) {
            console.error('[ERROR] Erreur lors de l\'initialisation:', error);
            // Fallback : afficher au moins le contenu de base
            document.body.classList.add('error-state');
        }
    });
} else {
    try {
        init();
    } catch (error) {
        console.error('[ERROR] Erreur lors de l\'initialisation:', error);
        document.body.classList.add('error-state');
    }
}

// ============================================
// CLEANUP (optionnel)
// ============================================

window.addEventListener('beforeunload', () => {
    if (AppState.logsIntervalId) {
        clearInterval(AppState.logsIntervalId);
    }
    if (AppState.cpuIntervalId) {
        clearInterval(AppState.cpuIntervalId);
    }
    if (AppState.ramIntervalId) {
        clearInterval(AppState.ramIntervalId);
    }
});

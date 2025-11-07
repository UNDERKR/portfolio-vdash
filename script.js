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
    servicesChart: null
};

// Données des projets pour le drawer
const TRIGGER_DETAILS = {
    1: {
        title: "Administrateur Système et Réseau - Modernisation et sécurisation de l'infrastructure",
        experienceType: "Alternance",
        role: "Administrateur Système et Réseau",
        location: "Saas Partner - La Possession",
        // duration: "Alternance",
        sector: "Infrastructure Saas",
        team: "Équipe de 3 personnes",
        client: null,
        problem: "Les déploiements manuels étaient lents, source d'erreurs et nécessitaient l'intervention d'un administrateur pour chaque mise en production. L'absence de tests automatisés augmentait les risques.",
        solution: "Mise en place d'un pipeline CI/CD complet avec GitLab CI et Ansible. Automatisation des tests unitaires, d'intégration et de déploiement. Mise en place de rollback automatique en cas d'échec.",
        technologies: ["Windows Server", "Windows", "VPN", "Team Viewer", "Synology", "Hyper-V", "RDS", "AD-DS"],
        results: [
            "Réduction du temps de déploiement de 2h à 10 minutes",
            "Diminution de 85% des incidents liés aux déploiements",
            "Augmentation de la fréquence de déploiement (hebdomadaire → quotidien)",
            "Amélioration de la qualité du code grâce aux tests automatisés"
        ],
        date: "Septembre 2024 - Aujourd'hui",
        status: "EN COURS",
        severity: "HIGH",
        github: "https://github.com/votre-username/cicd-pipeline",
        live: null
    },
    2: {
        title: "Stagiaire Administrateur Système et Réseau - Mise en place d'un serveur de développement",
        experienceType: "Stage",
        role: "Stagiaire Administrateur Systèmes & Réseaux",
        location: "Office de l'eau Réunion - La Plaine Saint-Paul",
        // duration: "1 mois",
        sector: "SaaS / Cloud Computing",
        team: "Collaboration avec 2 SRE et 1 architecte cloud",
        client: null,
        problem: "L'infrastructure traditionnelle (VMs) ne permettait pas de scaling efficace. Les coûts étaient élevés et la gestion complexe. Absence de haute disponibilité.",
        solution: "Migration complète vers Kubernetes avec déploiement multi-zone. Mise en place d'auto-scaling horizontal et vertical, load balancing intelligent, et gestion des secrets avec Vault.",
        technologies: ["Debian", "Symfony", "Docker", "PostgreSQL", "PostGIS", "Geoserver", "PHP", "Git"],
        results: [
            "Réduction des coûts d'infrastructure de 40%",
            "Haute disponibilité : 99.95% d'uptime",
            "Auto-scaling : réponse aux pics de charge en <2 minutes",
            "Déploiements zero-downtime"
        ],
        date: "Juillet 2024",
        status: "RESOLVED",
        severity: "HIGH",
        github: "https://github.com/votre-username/k8s-infra",
        live: null
    },
    3: {
        title: "Consultant Infrastructure - Monitoring Centralisé",
        experienceType: "Stage",
        role: "Consultant Infrastructure",
        location: "Vindemia Services - Le Port",
        // duration: "3 mois",
        sector: "Services Numériques / ESN",
        team: "Solo (avec support ponctuel équipe infra)",
        client: "Groupe BanquePlus (secteur bancaire)",
        problem: "Absence de visibilité sur l'état de l'infrastructure. Détection tardive des incidents. Pas de métriques historiques pour l'optimisation.",
        solution: "Déploiement d'une stack de monitoring complète avec Prometheus pour les métriques, Grafana pour la visualisation, et AlertManager pour les alertes. Intégration avec PagerDuty pour l'escalade.",
        technologies: ["Clonezilla", "StageNow   ", "AlertManager", "ELK Stack", "PagerDuty", "Node Exporter"],
        results: [
            "Visibilité temps réel sur 100% de l'infrastructure",
            "Réduction du MTTR (Mean Time To Repair) de 70%",
            "15+ dashboards personnalisés pour différentes équipes",
            "Alerting intelligent avec 95% de réduction des faux positifs"
        ],
        date: "Mai 2024",
        status: "RESOLVED",
        severity: "MEDIUM",
        github: "https://github.com/votre-username/monitoring-stack",
        live: null
    },
    4: {
        title: "Consultant Cybersécurité - pfSense & VPN",
        experienceType: "Stage",
        role: "Consultant Cybersécurité",
        location: "Zot Informatik - Saint-Leu",
        // duration: "2 mois",
        sector: "Cybersécurité / Conseil",
        team: "Binôme avec 1 expert sécurité réseau",
        client: "IndustrieTech SA (secteur industriel)",
        problem: "La sécurité réseau était insuffisante avec des règles de firewall mal organisées. Pas de VPN sécurisé entre les différents sites de l'entreprise.",
        solution: "Déploiement de pfSense en haute disponibilité (CARP). Configuration de VPN IPsec site-to-site, segmentation réseau avec VLANs, IDS/IPS avec Suricata, et analyse du trafic avec pfBlockerNG.",
        technologies: ["pfSense", "IPsec VPN", "OpenVPN", "Suricata", "pfBlockerNG", "VLAN"],
        results: [
            "Sécurisation de 5 sites distants avec VPN chiffré",
            "Blocage de 10000+ menaces par mois grâce à l'IDS",
            "Segmentation réseau complète (DMZ, LAN, WAN)",
            "Haute disponibilité avec failover automatique <30s"
        ],
        date: "Mars 2024",
        status: "RESOLVED",
        severity: "HIGH",
        github: null,
        live: null
    },
    5: {
        title: "Portfolio Developer - Dashboard NMS/NOC",
        experienceType: "Stage",
        role: "Portfolio Developer",
        location: "SOS Technique Informatique - Saline les hauts",
        // duration: "En cours (1 mois actif)",
        sector: "Développement Web / Portfolio",
        team: "Solo",
        client: null,
        problem: "Les portfolios traditionnels sont statiques et peu engageants. Ils ne reflètent pas les compétences techniques ni la créativité de l'administrateur.",
        solution: "Création d'un portfolio sous forme de dashboard NOC (Network Operations Center) immersif avec simulations de données en temps réel, animations avancées et storytelling.",
        technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Chart.js", "GSAP", "Responsive Design"],
        results: [
            "Expérience utilisateur immersive et mémorable",
            "Démonstration concrète des compétences techniques",
            "Différenciation par rapport aux portfolios classiques",
            "Projet en cours de développement"
        ],
        date: "Novembre 2025",
        status: "IN PROGRESS",
        severity: "LOW",
        github: "https://github.com/votre-username/portfolio-noc",
        live: "./index.html"
    },
    6: {
        title: "Stagiaire Admin Sys/Réseau - Refonte Infrastructure",
        experienceType: "Stage",
        role: "Stagiaire Administrateur Systèmes & Réseaux",
        location: "Infobam OI - Savannah",
        // duration: "6 mois (Janvier - Juin 2023)",
        sector: "Services Cloud / Data Management",
        team: "Équipe Infrastructure de 4 personnes + 1 tuteur",
        client: null,
        problem: "L'infrastructure réseau de l'entreprise était vieillissante avec un équipement Cisco obsolète, des configurations non documentées et des performances dégradées. Besoin de modernisation complète.",
        solution: "Audit complet de l'infrastructure existante, documentation détaillée, conception d'une nouvelle architecture réseau avec des switchs Cisco Catalyst moderne, implémentation de VLANs pour la segmentation, et mise en place d'outils de monitoring (Zabbix).",
        technologies: ["UMRA", "Windows", "Audit de sécurité", "Gestion de parc", "Zabbix", "pfSense", "Documentation réseau", "Wireshark"],
        results: [
            "Assistance technique (matériel, logiciels, connectivité)",
            "Administration Active Directory (UMRA)",
            "Maintenance équipements",
            "Audit de sécurité réseau",
            "Support utilisateur"
        ],
        date: "Janvier - Juin 2023",
        status: "RESOLVED",
        severity: "MEDIUM",
        github: null,
        live: null
    },
    // 7: {
    //     title: "Stagiaire Sécurité Réseau - Audit & Hardening",
    //     experienceType: "Stage",
    //     role: "Stagiaire Sécurité Réseau",
    //     location: "NetSecure Systems - Lyon",
    //     duration: "4 mois (Avril - Juillet 2022)",
    //     sector: "Cybersécurité / Audit",
    //     team: "Binôme avec 1 pentester senior",
    //     client: "Clients PME (secteur industriel et tertiaire)",
    //     problem: "Les clients PME manquaient de visibilité sur leur niveau de sécurité réseau et système. Beaucoup de serveurs présentaient des vulnérabilités critiques dues à des configurations par défaut non sécurisées.",
    //     solution: "Réalisation d'audits de sécurité pour 8 clients PME : scan de vulnérabilités avec Nessus, analyse des configurations, hardening des serveurs Linux et Windows selon les bonnes pratiques (CIS Benchmarks), mise en place de pare-feu et de politiques de sécurité.",
    //     technologies: ["Nessus", "OpenVAS", "Nmap", "Metasploit", "Linux Hardening", "Windows Hardening", "iptables", "SELinux", "CIS Benchmarks"],
    //     results: [
    //         "8 audits de sécurité complets réalisés",
    //         "150+ vulnérabilités critiques corrigées",
    //         "Rédaction de 8 rapports d'audit détaillés",
    //         "Hardening de 35+ serveurs (Linux et Windows)",
    //         "Formation des équipes IT clients aux bonnes pratiques de sécurité"
    //     ],
    //     date: "Avril - Juillet 2022",
    //     status: "RESOLVED",
    //     severity: "HIGH",
    //     github: null,
    //     live: null
    // },
    8: {
        title: "Stagiaire Sécurité Réseau - Audit & Hardening",
        experienceType: "Stage",
        role: "Stagiaire Sécurité Réseau",
        location: "WattElek - Piton Saint-Leu",
        duration: "4 mois (Avril - Juillet 2022)",
        sector: "Cybersécurité / Audit",
        team: "Binôme avec 1 pentester senior",
        client: "Clients PME (secteur industriel et tertiaire)",
        problem: "Les clients PME manquaient de visibilité sur leur niveau de sécurité réseau et système. Beaucoup de serveurs présentaient des vulnérabilités critiques dues à des configurations par défaut non sécurisées.",
        solution: "Réalisation d'audits de sécurité pour 8 clients PME : scan de vulnérabilités avec Nessus, analyse des configurations, hardening des serveurs Linux et Windows selon les bonnes pratiques (CIS Benchmarks), mise en place de pare-feu et de politiques de sécurité.",
        technologies: ["Nessus", "OpenVAS", "Nmap", "Metasploit", "Linux Hardening", "Windows Hardening", "iptables", "SELinux", "CIS Benchmarks"],
        results: [
            "8 audits de sécurité complets réalisés",
            "150+ vulnérabilités critiques corrigées",
            "Rédaction de 8 rapports d'audit détaillés",
            "Hardening de 35+ serveurs (Linux et Windows)",
            "Formation des équipes IT clients aux bonnes pratiques de sécurité"
        ],
        date: "Avril - Juillet 2022",
        status: "RESOLVED",
        severity: "HIGH",
        github: null,
        live: null
    },
};

// Messages de logs variés
const LOG_MESSAGES = [
    { type: 'info', msg: 'service_reseau check status: OK' },
    { type: 'info', msg: 'service_systeme check status: OK' },
    { type: 'info', msg: 'service_cloud check status: OK' },
    { type: 'info', msg: 'service_monitoring check status: OK' },
    { type: 'info', msg: 'database_backup: completed successfully' },
    { type: 'success', msg: 'health_check: all systems operational' },
    { type: 'info', msg: 'cpu_usage: 42% (normal)' },
    { type: 'info', msg: 'memory_usage: 67% (normal)' },
    { type: 'info', msg: 'disk_usage: /dev/sda1 78% (OK)' },
    { type: 'warning', msg: 'new_opportunity detected in buffer...' },
    { type: 'info', msg: 'user_activity: page view registered' },
    { type: 'info', msg: 'ssl_certificate: valid until 2026-12-31' },
    { type: 'success', msg: 'security_scan: no vulnerabilities found' },
    { type: 'info', msg: 'network_latency: 12ms (excellent)' },
    { type: 'info', msg: 'api_response_time: 145ms (optimal)' }
];

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
            maintainAspectRatio: true,
            aspectRatio: 2,
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
            maintainAspectRatio: true,
            aspectRatio: 2,
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
    }, 1000); // Toutes les 1 seconde
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
    }, 1000); // Toutes les 1 seconde
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
    const terminal = document.querySelector('.terminal-container');
    if (terminal) {
        terminal.scrollTop = terminal.scrollHeight;
    }
}

function startLogsSimulation() {
    AppState.logsIntervalId = setInterval(addLogLine, 2500); // Toutes les 2.5 secondes
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

    // Remplir le contenu
    drawerTitle.textContent = details.title;

    let techTagsHTML = details.technologies.map(tech =>
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    let resultsHTML = details.results.map(result =>
        `<li>${result}</li>`
    ).join('');

    let linksHTML = '';
    if (details.github) {
        linksHTML += `<a href="${details.github}" target="_blank" class="drawer-link">
            <span class="link-icon">⧉</span> Voir sur GitHub
        </a>`;
    }
    if (details.live) {
        linksHTML += `<a href="${details.live}" target="_blank" class="drawer-link">
            <span class="link-icon">⧉</span> Voir le projet live
        </a>`;
    }

    drawerBody.innerHTML = `
        <div class="drawer-section">
            <h3>INFORMATIONS GÉNÉRALES</h3>
            <div class="info-row">
                <span class="info-label">Type:</span>
                <span class="exp-type-badge ${details.experienceType.toLowerCase()}">${details.experienceType.toUpperCase()}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Rôle:</span>
                <span class="info-value"><strong>${details.role}</strong></span>
            </div>
            <div class="info-row">
                <span class="info-label">Date:</span>
                <span class="info-value mono">${details.date}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Lieu:</span>
                <span class="info-value">${details.location}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Secteur:</span>
                <span class="info-value">${details.sector}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Équipe:</span>
                <span class="info-value">${details.team}</span>
            </div>
            ${details.client ? `
            <div class="info-row">
                <span class="info-label">Client:</span>
                <span class="info-value">${details.client}</span>
            </div>
            ` : ''}
            <div class="info-row">
                <span class="info-label">Statut:</span>
                <span class="status-badge ${details.status === 'RESOLVED' ? 'green' : 'orange'}">
                    ${details.status === 'RESOLVED' ? 'TERMINÉ' : 'EN COURS'}
                </span>
            </div>
        </div>

        <div class="drawer-section">
            <h3>PROBLÈME IDENTIFIÉ</h3>
            <p>${details.problem}</p>
        </div>

        <div class="drawer-section">
            <h3>SOLUTION IMPLÉMENTÉE (RCA)</h3>
            <p>${details.solution}</p>
        </div>

        <div class="drawer-section">
            <h3>TECHNOLOGIES UTILISÉES</h3>
            <div class="service-tags">
                ${techTagsHTML}
            </div>
        </div>

        <div class="drawer-section">
            <h3>RÉSULTATS & IMPACT</h3>
            <ul>
                ${resultsHTML}
            </ul>
        </div>

        ${linksHTML ? `<div class="drawer-section">${linksHTML}</div>` : ''}
    `;

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
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const viewName = item.dataset.view;
            navigateToView(viewName);
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
        row.addEventListener('click', () => {
            const triggerId = row.dataset.trigger;
            openDrawer(triggerId);
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
// DÉMARRAGE
// ============================================

// Attendre que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
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

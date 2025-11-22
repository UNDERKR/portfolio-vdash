// ============================================
// DONNÉES DU PORTFOLIO - CONFIGURATION
// ============================================

// Données des projets pour le drawer
export const TRIGGER_DETAILS = {
    1: {
        title: "Administrateur Systèmes et Réseaux - Administration complète de l'infrastructure IT",
        experienceType: "Alternance",
        role: "Administrateur Systèmes et Réseaux",
        location: "Saas Partner - La Possession",
        // duration: "Alternance",
        sector: "Infrastructure SaaS / Services Cloud",
        team: "Équipe Infrastructure de 3 personnes",
        client: null,
        problem: "Nécessité d'assurer une administration complète et performante des infrastructures IT : serveurs, hyperviseurs, réseaux Wi-Fi, NAS, Active Directory et pare-feu. Besoin de supervision continue, sécurisation des données et support technique efficace.",
        solution: "Administration complète des serveurs et hyperviseurs, gestion des réseaux Wi-Fi, NAS, Active Directory, pare-feu ; installation et maintenance de logiciels ; support aux utilisateurs ; supervision et sécurisation des infrastructures ; gestion de sauvegardes et assistance technique à distance.",
        technologies: ["Windows Server", "Windows 10/11", "Active Directory", "Pare-feu", "NAS Synology", "Hyper-V", "VPN", "TeamViewer", "Wi-Fi", "Scripts d'automatisation"],
        results: [
            "Administration complète des serveurs et hyperviseurs",
            "Gestion efficace des réseaux Wi-Fi et NAS",
            "Supervision et sécurisation continue des infrastructures",
            "Support utilisateurs et assistance technique à distance",
            "Gestion des sauvegardes et maintenance logicielle"
        ],
        date: "Octobre 2024 - Aujourd'hui",
        status: "EN COURS",
        severity: "HIGH",
        github: null,
        live: null
    },
    2: {
        title: "Stagiaire Développeur Systèmes - Mise en place d'un serveur de développement",
        experienceType: "Stage",
        role: "Stagiaire Développeur Systèmes",
        location: "Office de l'eau Réunion - La Plaine Saint-Paul",
        // duration: "2 mois",
        sector: "Secteur Public / Gestion de l'Eau",
        team: "Équipe de développement et infrastructure",
        client: null,
        problem: "Nécessité de mettre en place un serveur de développement complet et fonctionnel pour déployer une application web géospatiale. Besoin d'intégrer des technologies modernes (Docker, PostGIS) pour gérer des données cartographiques.",
        solution: "Installation et configuration d'un serveur Debian avec stack complète : Apache2, PHP, PostgreSQL avec extension PostGIS pour la gestion de données géographiques, Symfony pour le framework applicatif, Docker pour la conteneurisation et Git pour le versioning.",
        technologies: ["Debian", "Apache2", "PHP", "PostgreSQL", "PostGIS", "GeoServer", "Symfony", "Docker", "Git"],
        results: [
            "Serveur de développement opérationnel et performant",
            "Mise en œuvre réussie de PostGIS pour données géospatiales",
            "Configuration complète de la stack LAMP + Docker",
            "Assistance aux utilisateurs et support technique",
            "Documentation technique de l'installation"
        ],
        date: "Janvier - Février 2024",
        status: "RESOLVED",
        severity: "HIGH",
        github: null,
        live: null
    },
    3: {
        title: "Stagiaire Support IT - Administration Active Directory et Support Technique",
        experienceType: "Stage",
        role: "Stagiaire Support IT",
        location: "Infobam OI - Saint-Paul",
        // duration: "2 mois",
        sector: "Services Cloud / Data Management",
        team: "Équipe Infrastructure et Support",
        client: null,
        problem: "Nécessité d'assurer l'administration des comptes utilisateurs via Active Directory et UMRA, d'accompagner les migrations de postes informatiques et de réaliser des audits de sécurité réseau pour garantir la sécurité et l'efficacité de l'infrastructure IT.",
        solution: "Administration des comptes utilisateurs via Active Directory et UMRA ; assistance technique complète aux utilisateurs ; migration et préparation des postes informatiques ; audits de sécurité réseau pour identifier les vulnérabilités ; gestion du parc informatique.",
        technologies: ["Active Directory", "UMRA", "Windows", "Audit de sécurité", "Gestion de parc", "Support technique", "Migration de postes", "Documentation"],
        results: [
            "Administration efficace des comptes utilisateurs (AD/UMRA)",
            "Assistance technique et migration de postes réussies",
            "Audits de sécurité réseau avec recommandations",
            "Maintenance du parc informatique",
            "Support utilisateur de qualité"
        ],
        date: "Juin - Juillet 2023",
        status: "RESOLVED",
        severity: "MEDIUM",
        github: null,
        live: null
    },
    4: {
        title: "Stagiaire Électricité - Installations électriques du bâtiment et domotique",
        experienceType: "Stage",
        role: "Stagiaire Électricité",
        location: "WattElek - Piton Saint-Leu",
        duration: "Mars 2022",
        sector: "Électricité / Bâtiment / Domotique",
        team: "Équipe technique de 2 personnes",
        client: null,
        problem: "Nécessité d'intervenir sur des installations électriques du bâtiment et de domotique. Besoin de compétences en câblage et pose d'appareillages pour les chantiers du bâtiment.",
        solution: "Dépannage et maintenance de systèmes électriques ; réalisation d'installations électriques du bâtiment et domotique ; pose d'appareillages ; tirage de câbles ; câblage de ports RJ45.",
        technologies: ["Installations électriques", "Domotique", "Câblage RJ45", "Appareillages", "Tirage de câbles", "Électricité bâtiment"],
        results: [
            "Installations électriques et domotique réalisées",
            "Pose d'appareillages électriques",
            "Tirage de câbles et câblage de ports RJ45",
            "Dépannage de systèmes électriques",
            "Maintenance préventive des installations"
        ],
        date: "Mars 2022",
        status: "RESOLVED",
        severity: "MEDIUM",
        github: null,
        live: null
    },
    5: {
        title: "Stagiaire IT & Maintenance - Configuration réseau et support technique",
        experienceType: "Stage",
        role: "Consultant Infrastructure",
        location: "Vindemia Services - Le Port",
        duration: "Avril & Septembre 2021",
        sector: "Logistique / Services Numériques",
        team: "Équipe IT et Support",
        client: null,
        problem: "Besoin de déployer et configurer rapidement de nouveaux postes de travail et terminaux mobiles Zebra pour les équipes logistiques. Nécessité de cloner des disques et de configurer des équipements réseaux pour maintenir l'efficacité opérationnelle.",
        solution: "Clonage de disques pour déploiement rapide ; configuration d'équipements réseaux (switchs, routeurs) ; paramétrage et déploiement de terminaux Zebra (TC20, TC52) ; support utilisateurs ; maintenance préventive et corrective ; préparation et configuration de postes de travail.",
        technologies: ["Clonezilla", "Équipements réseau", "Terminaux Zebra (TC20, TC52)", "StageNow", "Windows", "Support technique", "Configuration matérielle"],
        results: [
            "Déploiement réussi de multiples postes via clonage",
            "Configuration des terminaux Zebra pour les équipes logistiques",
            "Support utilisateurs efficace et réactif",
            "Maintenance préventive du parc informatique",
            "Configuration d'équipements réseaux opérationnels"
        ],
        date: "Avril & Septembre 2021",
        status: "RESOLVED",
        severity: "MEDIUM",
        github: null,
        live: null
    },
    6: {
        title: "Stagiaire Électricité - Découverte du métier électricien",
        experienceType: "Stage",
        role: "Stagiaire Électricité",
        location: "WattElek - Piton Saint-Leu",
        duration: "Décembre 2020",
        sector: "Électricité / Bâtiment",
        team: "Équipe technique de 2 personnes",
        client: null,
        problem: "Stage de découverte du métier d'électricien dans le secteur du bâtiment. Nécessité d'acquérir les bases des installations électriques et d'observer les chantiers en cours.",
        solution: "Observation et assistance sur chantiers ; découverte des installations électriques résidentielles ; apprentissage des normes de sécurité ; assistance au tirage de câbles ; découverte des appareillages électriques basiques.",
        technologies: ["Installations électriques", "Normes électriques", "Sécurité chantier", "Câblage basique", "Appareillages"],
        results: [
            "Découverte du métier d'électricien",
            "Apprentissage des normes de sécurité électrique",
            "Observation d'installations résidentielles",
            "Assistance sur chantiers",
            "Bases des installations électriques acquises"
        ],
        date: "Décembre 2020",
        status: "RESOLVED",
        severity: "LOW",
        github: null,
        live: null
    },
    7: {
        title: "Stagiaire Support Technique - Maintenance et dépannage",
        experienceType: "Stage",
        role: "Stagiaire Support Technique",
        location: "Zot Informatik - Saint-Leu",
        duration: "Décembre 2019",
        sector: "Services Informatiques / Maintenance",
        team: "Équipe support de 3 techniciens",
        client: null,
        problem: "Nécessité d'assurer un diagnostic rapide et efficace des pannes matérielles et logicielles, d'installer et maintenir des systèmes d'exploitation, et de dépanner les postes informatiques pour garantir la continuité de service.",
        solution: "Diagnostic matériel et logiciel approfondi ; installation et configuration de systèmes d'exploitation (Windows, Linux) ; maintenance et dépannage de postes informatiques ; assistance utilisateurs ; résolution d'incidents techniques.",
        technologies: ["Windows", "Linux", "Diagnostic matériel", "Installation OS", "Dépannage", "Maintenance PC", "Support technique"],
        results: [
            "Diagnostic et résolution rapide des pannes",
            "Installation et configuration de systèmes d'exploitation",
            "Maintenance efficace du parc informatique",
            "Dépannage réussi de multiples postes",
            "Satisfaction client"
        ],
        date: "Décembre 2019",
        status: "RESOLVED",
        severity: "MEDIUM",
        github: null,
        live: null
    },
    8: {
        title: "Stagiaire S.A.V IT - Assistance et maintenance",
        experienceType: "Stage",
        role: "Stagiaire S.A.V IT",
        location: "SOS Technique Informatique - Saint-Gilles-les-hauts",
        duration: "Mars 2018",
        sector: "Services Informatiques / SAV",
        team: "Équipe SAV de 2 techniciens",
        client: null,
        problem: "Nécessité d'assurer un service après-vente de qualité pour les clients avec assistance technique, maintenance matérielle et logicielle, installation de systèmes et périphériques, tout en garantissant une résolution rapide des problèmes.",
        solution: "Assistance et maintenance matérielle et logicielle ; installation de Windows et de périphériques (imprimantes, scanners, etc.) ; diagnostic et réparation de pannes ; support après-vente ; conseil client.",
        technologies: ["Windows", "Installation OS", "Périphériques", "Maintenance matérielle", "Diagnostic", "Support technique", "SAV"],
        results: [
            "Assistance technique et SAV de qualité",
            "Installation de systèmes et périphériques réussie",
            "Maintenance matérielle et logicielle efficace",
            "Résolution rapide des incidents",
            "Satisfaction et fidélisation des clients"
        ],
        date: "Mars 2018",
        status: "RESOLVED",
        severity: "LOW",
        github: null,
        live: null
    }
};

// Messages de logs variés
export const LOG_MESSAGES = [
    // Services status
    { type: 'info', msg: 'service_reseau check status: OK' },
    { type: 'info', msg: 'service_systeme check status: OK' },
    { type: 'info', msg: 'service_cloud check status: OK' },
    { type: 'info', msg: 'service_monitoring check status: OK' },
    { type: 'success', msg: 'health_check: all systems operational' },
    { type: 'success', msg: 'nginx: service running [PID: 1842]' },
    { type: 'success', msg: 'postgresql: database cluster up' },
    { type: 'info', msg: 'redis: cache service active' },
    { type: 'info', msg: 'docker: 12 containers running' },

    // System resources
    { type: 'info', msg: 'cpu_usage: 42% (normal)' },
    { type: 'info', msg: 'memory_usage: 67% (normal)' },
    { type: 'info', msg: 'disk_usage: /dev/sda1 78% (OK)' },
    { type: 'info', msg: 'load_average: 1.23, 1.45, 1.67' },
    { type: 'info', msg: 'swap_usage: 12% (optimal)' },
    { type: 'info', msg: 'inode_usage: /dev/sda1 34% (healthy)' },
    { type: 'success', msg: 'temperature: CPU 45°C (optimal)' },

    // Network activity
    { type: 'info', msg: 'network_latency: 12ms (excellent)' },
    { type: 'info', msg: 'bandwidth: ↓ 1.2Mbps ↑ 0.8Mbps' },
    { type: 'success', msg: 'firewall: 0 blocked attempts in last hour' },
    { type: 'info', msg: 'dns_query: resolved in 8ms' },
    { type: 'info', msg: 'tcp_connections: 234 active, 12 waiting' },
    { type: 'success', msg: 'vpn_tunnel: connected, latency 45ms' },
    { type: 'info', msg: 'packet_loss: 0.02% (excellent)' },

    // Backups & Storage
    { type: 'info', msg: 'database_backup: completed successfully' },
    { type: 'success', msg: 'incremental_backup: 2.4GB transferred' },
    { type: 'info', msg: 'snapshot_created: vm-prod-web-01' },
    { type: 'success', msg: 'backup_verification: integrity check OK' },
    { type: 'info', msg: 'backup_retention: cleaned 7 old snapshots' },

    // Security
    { type: 'success', msg: 'security_scan: no vulnerabilities found' },
    { type: 'info', msg: 'ssl_certificate: valid until 2026-12-31' },
    { type: 'success', msg: 'fail2ban: 3 IPs banned last hour' },
    { type: 'info', msg: 'auth_log: 142 successful logins today' },
    { type: 'warning', msg: 'bruteforce_attempt: 5 failed SSH logins from 185.x.x.x' },
    { type: 'success', msg: 'tls_handshake: TLS 1.3 negotiated' },
    { type: 'info', msg: 'selinux: enforcing mode active' },
    { type: 'success', msg: 'clamav: virus definitions updated' },

    // Applications & API
    { type: 'info', msg: 'api_response_time: 145ms (optimal)' },
    { type: 'success', msg: 'api_endpoint: /users 200 OK [78ms]' },
    { type: 'info', msg: 'cache_hit_rate: 94.2% (excellent)' },
    { type: 'info', msg: 'queue_processing: 23 jobs pending' },
    { type: 'success', msg: 'cron_job: daily_reports completed' },
    { type: 'info', msg: 'worker_pool: 8/12 workers active' },

    // Database operations
    { type: 'info', msg: 'db_query: SELECT executed in 23ms' },
    { type: 'success', msg: 'db_replication: lag 0.3s (healthy)' },
    { type: 'info', msg: 'db_connections: 45/100 pool usage' },
    { type: 'success', msg: 'vacuum_analyze: completed on 8 tables' },

    // Monitoring & Alerts
    { type: 'info', msg: 'prometheus: scraping 24 targets' },
    { type: 'success', msg: 'grafana_dashboard: 156 metrics updated' },
    { type: 'info', msg: 'alert_manager: 0 active alerts' },
    { type: 'info', msg: 'metric_export: 2450 datapoints/min' },

    // User activity
    { type: 'info', msg: 'user_activity: page view registered' },
    { type: 'info', msg: 'session_count: 23 active users' },
    { type: 'info', msg: 'request_rate: 145 req/min (normal)' },
    { type: 'success', msg: 'user_login: admin@domain.com authenticated' },

    // Deployment & CI/CD
    { type: 'success', msg: 'deployment: v2.4.1 rolled out successfully' },
    { type: 'info', msg: 'docker_pull: nginx:latest updated' },
    { type: 'success', msg: 'kubernetes: all pods healthy' },
    { type: 'info', msg: 'git_sync: repository updated (commit: a3b7f2)' },

    // System events
    { type: 'warning', msg: 'new_opportunity detected in buffer...' },
    { type: 'info', msg: 'logrotate: rotated 12 log files' },
    { type: 'success', msg: 'package_update: 5 security updates installed' },
    { type: 'info', msg: 'systemd: 148 units loaded, 145 active' },
    { type: 'info', msg: 'kernel: version 5.15.0-84-generic' },

    // Cloud services
    { type: 'info', msg: 's3_sync: 45 objects uploaded' },
    { type: 'success', msg: 'cloudfront: cache cleared successfully' },
    { type: 'info', msg: 'ec2_instance: i-0x3f4a9 running in eu-west-1' },
    { type: 'info', msg: 'lambda_function: processed 234 events' },

    // Email & notifications
    { type: 'success', msg: 'mail_queue: 12 messages delivered' },
    { type: 'info', msg: 'smtp_relay: connection established' },
    { type: 'info', msg: 'notification_sent: weekly_report dispatched' },

    // Performance metrics
    { type: 'info', msg: 'ttfb: 180ms (time to first byte)' },
    { type: 'success', msg: 'page_load: 1.2s (within target)' },
    { type: 'info', msg: 'cdn_cache: 89% hit rate' }
];

// Informations de l'utilisateur pour le terminal interactif
export const USER_INFO = {
    name: "Félis VIRAMA",
    role: "Administrateur Systèmes et Réseaux",
    email: "felis.virama@undercore.re",
    linkedin: "https://re.linkedin.com/in/félis-virama-319714226",
    github: "https://github.com/votre-username",
    location: "La Réunion",
    bio: "Administrateur Systèmes et Réseaux passionné, doté d'une solide expertise technique et d'un fort esprit d'initiative. Curieux et rigoureux, j'associe précision, persévérance et sens du détail au service d'infrastructures informatiques performantes et sécurisées. Ma passion pour la photographie et les nouvelles technologies nourrit ma créativité et ma capacité d'adaptation.",
    formations: [
        "Maîtrise Administrateur des systèmes et réseaux — Expernet Campus Informatique (2024 – Aujourd'hui)",
        "BTS SIO Option SISR — Lycée Marguerite Jauzelon (2022 – 2024)",
        "BAC PRO SN Option RISC — Lycée Paule Pignot De Fresne Rivière (2019 – 2022)"
    ],
    passions: [
        "Photographie",
        "Vidéo et montage (CapCut, DaVinci Resolve)",
        "Drones",
        "Nature",
        "Exploration des nouvelles technologies"
    ],
    langues: {
        "Français": "Courant",
        "Anglais": "Intermédiaire"
    }
};

// Commandes du terminal interactif
export const TERMINAL_COMMANDS = {
    help: {
        description: "Affiche la liste des commandes disponibles",
        execute: () => {
            return [
                "=== COMMANDES DISPONIBLES ===",
                "",
                "INFORMATIONS:",
                "  help           - Affiche cette aide",
                "  whoami         - Informations utilisateur",
                "  contact        - Coordonnées de contact",
                "  skills         - Compétences techniques",
                "  formation      - Parcours de formation",
                "  passions       - Centres d'intérêt",
                "  langues        - Langues parlées",
                "  stats          - Statistiques du portfolio",
                "",
                "NAVIGATION:",
                "  ls             - Liste les expériences",
                "  projects       - Liste des projets/technologies",
                "  goto <section> - Navigue vers une section",
                "  search <mot>   - Recherche dans les expériences",
                "",
                "SYSTÈME:",
                "  neofetch       - Infos système (style)",
                "  date           - Date et heure",
                "  uptime         - Temps de disponibilité",
                "  about          - À propos du portfolio",
                "  cv             - Télécharger le CV",
                "  clear          - Efface le terminal",
                "  echo <msg>     - Affiche un message",
                "",
                "EASTER EGG:",
                "  sudo rm -rf /  - Ne tentez même pas ;)",
                "",
                "Tapez le nom d'une commande pour l'exécuter."
            ];
        }
    },
    whoami: {
        description: "Affiche les informations de l'utilisateur",
        execute: () => {
            return [
                `Utilisateur: ${USER_INFO.name}`,
                `Rôle: ${USER_INFO.role}`,
                `Localisation: ${USER_INFO.location}`,
                `Bio: ${USER_INFO.bio}`
            ];
        }
    },
    contact: {
        description: "Affiche les informations de contact",
        execute: () => {
            return [
                "Informations de contact:",
                `  Email: ${USER_INFO.email}`,
                `  LinkedIn: ${USER_INFO.linkedin}`,
                `  GitHub: ${USER_INFO.github}`
            ];
        }
    },
    skills: {
        description: "Liste les compétences techniques",
        execute: () => {
            return [
                "=== COMPÉTENCES TECHNIQUES ===",
                "",
                "Systèmes:",
                "  • Windows Server (10, 11)",
                "  • Linux (Debian, Ubuntu, Kali)",
                "",
                "Réseaux & Sécurité:",
                "  • Configuration réseaux, Active Directory",
                "  • Pare-feu (Stormshield, Palo Alto, Sophos)",
                "  • Protocoles SSH, équipements Cisco, HP, Aruba, TP-LINK",
                "",
                "Bases de données:",
                "  • MariaDB, PostgreSQL, Hyperfile SQL",
                "",
                "Virtualisation & DevOps:",
                "  • VMware, VirtualBox",
                "  • Apache2, PHP, Docker, Git, Symfony, PostGIS, GeoServer",
                "",
                "Supervision & Automatisation:",
                "  • Scripts d'automatisation",
                "  • Audits de sécurité",
                "  • Gestion et restauration de sauvegardes",
                "",
                "Support & Maintenance:",
                "  • Gestion d'incidents",
                "  • Maintenance PC, portables, imprimantes",
                "  • Support utilisateurs"
            ];
        }
    },
    neofetch: {
        description: "Affiche les informations système (style)",
        execute: () => {
            return [
                "╔═══════════════════════════════════════════╗",
                "║  FÉLIS VIRAMA - SYSTEM INFORMATION        ║",
                "╠═══════════════════════════════════════════╣",
                "║  OS: Admin-SysOps v5.0 LTS                ║",
                "║  Kernel: Infrastructure-Expert 2024       ║",
                "║  Uptime: 5+ years                         ║",
                "║  Shell: /bin/expertise                    ║",
                "║  CPU: Multi-threading Expert              ║",
                "║  Memory: Unlimited Learning Capacity      ║",
                "║  Skills: 99.9% Availability               ║",
                "╚═══════════════════════════════════════════╝"
            ];
        }
    },
    ls: {
        description: "Liste les expériences professionnelles",
        execute: () => {
            return [
                "Expériences professionnelles disponibles:",
                "  [1] saas-partner-admin-systemes/         (Oct 2024 - Aujourd'hui)",
                "  [2] office-eau-dev-systemes/            (Jan-Fev 2024)",
                "  [3] infobam-support-it/                 (Juin-Juil 2023)",
                "  [4] wattelek-electricite/               (Mars 2022)",
                "  [5] vindemia-it-maintenance/            (Avr & Sept 2021)",
                "  [6] wattelek-electricite-2/             (Dec 2020)",
                "  [7] zot-informatik-support/             (Dec 2019)",
                "  [8] sos-technique-sav/                  (Mars 2018)",
                "",
                "Cliquez sur une expérience dans le tableau pour voir les détails complets"
            ];
        }
    },
    date: {
        description: "Affiche la date et l'heure actuelles",
        execute: () => {
            const now = new Date();
            return [now.toLocaleString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })];
        }
    },
    uptime: {
        description: "Affiche le temps de disponibilité",
        execute: () => {
            return [
                "System uptime: 7 years",
                "Service availability: 99.9%",
                "Last maintenance: Never needed ;)",
                "Performance: Optimal"
            ];
        }
    },
    formation: {
        description: "Affiche le parcours de formation",
        execute: () => {
            return [
                "=== PARCOURS DE FORMATION ===",
                "",
                ...USER_INFO.formations.map(f => `  • ${f}`)
            ];
        }
    },
    passions: {
        description: "Affiche les centres d'intérêt",
        execute: () => {
            return [
                "=== PASSIONS & CENTRES D'INTÉRÊT ===",
                "",
                ...USER_INFO.passions.map(p => `  • ${p}`)
            ];
        }
    },
    langues: {
        description: "Affiche les langues parlées",
        execute: () => {
            return [
                "=== LANGUES ===",
                "",
                ...Object.entries(USER_INFO.langues).map(([lang, niveau]) => `  • ${lang}: ${niveau}`)
            ];
        }
    },
    cv: {
        description: "Télécharge le CV (si disponible)",
        execute: () => {
            return [
                "Téléchargement du CV...",
                "→ Fichier: cv.pdf",
                "→ Statut: Disponible dans la section Contact",
                "",
                "Pour télécharger, utilisez le bouton dans la section Contact."
            ];
        }
    },
    projects: {
        description: "Liste les projets et technologies",
        execute: () => {
            return [
                "=== PROJETS & TECHNOLOGIES ===",
                "",
                "Principales technologies utilisées:",
                "  • Infrastructure: Windows Server, Linux, Active Directory",
                "  • Virtualisation: Hyper-V, VMware, VirtualBox",
                "  • Réseaux: Pare-feu, VPN, SSH, Équipements Cisco/HP",
                "  • DevOps: Docker, Git, Apache2, Symfony",
                "  • Bases de données: PostgreSQL, MariaDB, PostGIS",
                "  • Support: Gestion incidents, Maintenance, Scripts",
                "",
                "Utilisez 'ls' pour voir toutes les expériences professionnelles."
            ];
        }
    },
    stats: {
        description: "Affiche les statistiques du portfolio",
        execute: () => {
            return [
                "=== STATISTIQUES ===",
                "",
                "  Années d'expérience: 7 ans",
                "  Années de formation: 6 ans",
                "  Expériences professionnelles: 8",
                "  Technologies maîtrisées: 30+",
                "  Langues: 2 (FR, EN)",
                "  Disponibilité: 99.9%",
                "",
                "Status: Alternant actuellement chez Saas Partner"
            ];
        }
    },
    goto: {
        description: "Navigue vers une section (dashboard, experiences, parcours, interets, contact)",
        execute: (args) => {
            const section = args[0]?.toLowerCase();
            const validSections = ['dashboard', 'experiences', 'parcours', 'interets', 'contact'];

            if (!section) {
                return [
                    "Usage: goto <section>",
                    "",
                    "Sections disponibles:",
                    "  • dashboard    - Tableau de bord principal",
                    "  • experiences  - Expériences professionnelles",
                    "  • parcours     - Parcours de formation",
                    "  • interets     - Centres d'intérêt",
                    "  • contact      - Informations de contact",
                    "",
                    "Exemple: goto experiences"
                ];
            }

            if (!validSections.includes(section)) {
                return [
                    `Erreur: Section '${section}' non trouvée.`,
                    "",
                    "Sections valides: " + validSections.join(', ')
                ];
            }

            return [`Navigation vers ${section}...`, "Cliquez sur l'icône dans la sidebar pour naviguer."];
        }
    },
    search: {
        description: "Recherche dans les expériences (ex: search docker)",
        execute: (args) => {
            const query = args.join(' ').toLowerCase();

            if (!query) {
                return [
                    "Usage: search <mot-clé>",
                    "",
                    "Exemple: search docker",
                    "         search windows",
                    "         search active directory"
                ];
            }

            return [
                `Recherche de '${query}' dans les expériences...`,
                "",
                "Résultats trouvés dans:",
                "  • Saas Partner - Windows Server, Active Directory",
                "  • Office de l'eau - Docker, PostgreSQL, PostGIS",
                "  • Infobam OI - Active Directory, Windows",
                "",
                "Pour plus de détails, visitez la section 'Expériences'."
            ];
        }
    },
    about: {
        description: "À propos de ce portfolio",
        execute: () => {
            return [
                "=== À PROPOS ===",
                "",
                "Portfolio NOC-Style Dashboard",
                "Version: 1.0.0",
                "Dernière mise à jour: Novembre 2025",
                "",
                "Technologies utilisées:",
                "  • HTML5, CSS3, JavaScript ES6",
                "  • GSAP (animations)",
                "  • Chart.js (graphiques)",
                "",
                "Design: Style Network Operations Center (NOC)",
                "Thème: Cyberpunk / Terminal",
                "",
                "Développé avec passion par Félis VIRAMA"
            ];
        }
    }
};

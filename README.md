# 🖥️ Portfolio NMS/NOC - Network Operations Center

Un portfolio d'Administrateur Systèmes et Réseaux conçu comme un véritable dashboard de monitoring NOC (Network Operations Center) avec simulations de données en temps réel, animations avancées et expérience immersive.

![Version](https://img.shields.io/badge/version-2.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 Concept

Ce portfolio ne ressemble pas à un dashboard de monitoring — **il se comporte comme tel**. L'utilisateur a l'impression de se connecter à un NOC en direct avec :

- ✨ **Simulations "Live"** : Graphiques qui se mettent à jour, statuts qui changent, flux de logs en temps réel
- 🎨 **Animations CSS/JS Avancées** : Transitions fluides, micro-interactions, effets visuels (pulsations, scintillements)
- 📖 **Storytelling** : L'utilisateur monitore l'hôte `[VOTRE_NOM]-PROD-SRV` où les compétences sont des "Services" et les projets sont des "Triggers" (incidents résolus)

## 🚀 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Animations keyframes, Grid/Flexbox, variables CSS, effet scanlines
- **JavaScript ES6+** : Logique SPA, simulations live, routage
- **Chart.js** : Graphiques interactifs (Line, Donut)
- **GSAP** : Animations complexes (transitions de vues, stagger)

## 📁 Structure du Projet

```
PORTFOLIO-MONITORING/
├── index.html          # Structure HTML complète
├── style.css           # Thème NOC sombre + animations
├── script.js           # Logique interactive + simulations
└── README.md           # Ce fichier
```

## 🎨 Fonctionnalités

### 🏠 Vue Dashboard
- Widget statut de l'hôte (bio personnalisable)
- Graphique de charge CPU en temps réel (Chart.js)
- Tableau des triggers récents (projets)
- Graphique de répartition des services (Donut Chart)

### ⚠️ Vue Triggers (Projets)
- Liste complète des projets sous forme de "triggers résolus"
- Filtres : Tous / En Cours / Résolus
- Tiroir (Drawer) animé avec GSAP pour afficher les détails complets
- Clic sur une ligne pour ouvrir le drawer avec RCA détaillé

### ⚙️ Vue Services (Compétences)
- Grille de cartes de services (Réseaux, Systèmes, Cloud, etc.)
- Barres de progression de maîtrise
- Tags de technologies par service
- Animation stagger au chargement

### ◷ Vue Parcours (Formation)
- Timeline verticale interactive avec ligne de connexion
- Affichage chronologique des formations et certifications
- Badges de statut (EN COURS / COMPLÉTÉ)
- Statistiques en header (Total années, Certifications)
- Indicateurs pulsants pour les formations en cours
- Animation en cascade des événements (GSAP)
- Tags de technologies par formation
- Icônes différenciées (🎓 École / 🏢 Certification)
- Effet hover avec translation et glow

### 📜 Vue Logs
- Simulation d'un terminal avec `tail -f`
- Ajout automatique de nouvelles lignes de log
- Scroll automatique
- Bouton Pause/Resume
- Effets de couleur selon le type de log

### 📞 Vue Contact (Escalade)
- 3 niveaux d'escalade (Info, Warning, Critical)
- Email, LinkedIn, CV.PDF
- Section GitHub pour les repositories
- Indicateurs pulsants par niveau

## ⚙️ Personnalisation

### 1. Informations Personnelles

Dans `index.html`, remplacez les placeholders suivants :

```html
<!-- Ligne 56 : Titre du header -->
<h1 class="header-title">NMS-Portfolio :: <span class="highlight">VOTRE_NOM</span></h1>

<!-- Ligne 98 : Nom de l'hôte -->
<span class="info-value mono">VOTRE_NOM-PROD-SRV</span>

<!-- Ligne 106 : Uptime (années d'expérience) -->
<span class="info-value mono">5+ années</span>

<!-- Lignes 110-113 : Bio -->
<p class="info-value">
    Votre bio personnalisée ici (2-3 lignes)...
</p>
```

### 2. Vue Contact

Dans `index.html`, mettez à jour vos liens de contact :

```html
<!-- Ligne 421 : Email -->
<a href="mailto:votre.email@exemple.com" class="contact-link">

<!-- Ligne 440 : LinkedIn -->
<a href="https://linkedin.com/in/votre-profil" target="_blank" class="contact-link">

<!-- Ligne 459 : CV PDF -->
<a href="./cv.pdf" download class="contact-link critical">

<!-- Ligne 478 : GitHub -->
<a href="https://github.com/votre-username" target="_blank" class="contact-link">
```

### 3. Projets (Triggers)

Dans `script.js`, modifiez l'objet `TRIGGER_DETAILS` (lignes 16-139) :

```javascript
const TRIGGER_DETAILS = {
    1: {
        title: "Votre Projet 1",
        problem: "Description du problème...",
        solution: "Description de la solution...",
        technologies: ["Tech1", "Tech2", "Tech3"],
        results: [
            "Résultat 1",
            "Résultat 2"
        ],
        date: "Mois Année",
        status: "RESOLVED", // ou "IN PROGRESS"
        severity: "HIGH", // HIGH, MEDIUM, LOW
        github: "https://github.com/user/repo",
        live: "https://demo.com" // ou null
    }
    // ... ajoutez autant de projets que nécessaire
};
```

N'oubliez pas de mettre à jour le tableau dans `index.html` (lignes 272-298) avec vos projets.

### 4. Compétences (Services)

Dans `index.html`, personnalisez les cartes de services (lignes 309-427) :

```html
<div class="service-card">
    <div class="service-header">
        <h3>SERVICE: VOTRE_DOMAINE</h3>
        <span class="status-indicator pulse-green"></span>
    </div>
    <div class="service-status">
        <span class="status-badge green">OK</span>
    </div>
    <div class="service-metrics">
        <span class="metric-label">Maîtrise</span>
        <div class="progress-bar">
            <div class="progress-fill" style="width: 90%"></div>
        </div>
        <span class="metric-value">90%</span>
    </div>
    <div class="service-tags">
        <span class="tech-tag">Technologie 1</span>
        <span class="tech-tag">Technologie 2</span>
        <!-- ... -->
    </div>
</div>
```

### 5. Parcours (Timeline de Formation)

Dans `index.html`, personnalisez la timeline de votre parcours (lignes 408-565) :

```html
<!-- Exemple d'événement timeline -->
<div class="timeline-event">
    <div class="timeline-marker">
        <span class="marker-dot pulse-green"></span> <!-- pulse-blue pour complété -->
        <div class="marker-line"></div>
    </div>
    <div class="timeline-content">
        <div class="timeline-badge current">EN COURS</div> <!-- ou "completed">COMPLÉTÉ -->
        <div class="timeline-date mono">2024 - Présent</div>
        <h3 class="timeline-title">Nom de la Formation</h3>
        <p class="timeline-institution">
            <span class="institution-icon">🎓</span> <!-- 🎓 École / 🏢 Certification -->
            Nom de l'École/Organisation
        </p>
        <p class="timeline-description">
            Description de la formation, compétences acquises, projets réalisés...
        </p>
        <div class="timeline-tags">
            <span class="tech-tag">Tech 1</span>
            <span class="tech-tag">Tech 2</span>
        </div>
    </div>
</div>
```

**Statistiques du header** (lignes 412-421) :
```html
<span class="stat-value mono">10+</span> <!-- Total années -->
<span class="stat-value mono">5</span>   <!-- Nombre certifications -->
```

### 6. Graphique de Répartition (Donut Chart)

Dans `script.js`, ligne 232, ajustez les pourcentages des services :

```javascript
data: {
    labels: ['Réseaux', 'Systèmes', 'Cloud & DevOps', 'Monitoring', 'Sécurité', 'BDD'],
    datasets: [{
        data: [22, 25, 20, 15, 12, 6], // Ajustez ces valeurs (total = 100)
        // ...
    }]
}
```

### 7. Couleurs et Thème

Dans `style.css`, modifiez les variables CSS (lignes 4-27) :

```css
:root {
    --accent-green: #00ff88;     /* Couleur principale */
    --accent-blue: #00d4ff;      /* Couleur secondaire */
    --accent-orange: #ff9500;    /* Warnings */
    --accent-red: #ff3366;       /* Critiques */
    /* ... */
}
```

### 8. Messages de Logs

Dans `script.js`, ligne 143, personnalisez les messages de logs :

```javascript
const LOG_MESSAGES = [
    { type: 'info', msg: 'votre message personnalisé' },
    { type: 'success', msg: 'opération réussie' },
    { type: 'warning', msg: 'attention requise' },
    // ...
];
```

## 🌐 Déploiement

### Déploiement Local

1. Téléchargez les 3 fichiers (HTML, CSS, JS)
2. Ouvrez `index.html` dans votre navigateur
3. Aucun serveur requis !

### Déploiement en Ligne

#### GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/portfolio-noc.git
git push -u origin main
```

Activez GitHub Pages dans Settings > Pages > Source: `main` branch

#### Netlify / Vercel

1. Créez un compte gratuit
2. Glissez-déposez le dossier complet
3. Votre portfolio est en ligne !

## 🎯 Astuces

### Ajuster la Vitesse des Simulations

Dans `script.js` :

```javascript
// Ligne 211 : Vitesse du graphique CPU (en ms)
}, 2000); // 2 secondes

// Ligne 234 : Vitesse des logs (en ms)
AppState.logsIntervalId = setInterval(addLogLine, 2500); // 2.5 secondes
```

### Désactiver l'Effet Scanlines

Dans `style.css`, ligne 91, changez l'opacité :

```css
.scanlines {
    /* ... */
    opacity: 0; /* ou 0.03 pour l'activer */
}
```

### Modifier le Nombre de Points du Graphique CPU

Dans `script.js`, ligne 191, changez la longueur :

```javascript
const initialData = Array.from({ length: 20 }, () => ...); // 20 points
```

## 📱 Responsive Design

Le portfolio est entièrement responsive :
- **Desktop** : Layout complet avec sidebar
- **Tablet** : Sidebar réduite, layout adapté
- **Mobile** : Sidebar en mode icônes, grilles en colonne unique

## 🐛 Dépannage

### Les graphiques ne s'affichent pas
- Vérifiez que le CDN Chart.js est bien chargé (console du navigateur)
- Assurez-vous que JavaScript est activé

### Les animations ne fonctionnent pas
- Vérifiez que le CDN GSAP est bien chargé
- Testez dans un navigateur moderne (Chrome, Firefox, Edge)

### Les logs ne défilent pas
- Cliquez sur "PAUSE" puis "RESUME"
- Rechargez la page

## 📄 Licence

MIT License - Vous êtes libre d'utiliser, modifier et distribuer ce portfolio.

## 🙏 Crédits

- **Chart.js** : https://www.chartjs.org/
- **GSAP** : https://greensock.com/gsap/
- **Fonts** : Google Fonts (Inter, JetBrains Mono)

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Fait avec ❤️ pour les Admins Sys/Réseaux qui veulent un portfolio qui a du style !**

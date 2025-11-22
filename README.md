# 🖥️ Portfolio Félis VIRAMA - NOC/NMS Dashboard

[![Version](https://img.shields.io/badge/version-2.0-green)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Status](https://img.shields.io/badge/status-operational-brightgreen)](https://github.com)

Portfolio d'Administrateur Systèmes et Réseaux conçu comme un **véritable dashboard de monitoring NOC** (Network Operations Center) avec simulations de données en temps réel, animations avancées et expérience immersive.

![Portfolio Preview](./preview.png)

## 🎯 Vue d'ensemble

Ce portfolio ne se contente pas de **ressembler** à un dashboard de monitoring — il **se comporte comme tel**. L'utilisateur a l'impression de se connecter à un centre d'opérations réseau (NOC) en direct pour monitorer l'hôte `FÉLIS-VIRAMA-PROD-SRV`.

### Concept clé

- **Expériences professionnelles** = Triggers (incidents résolus)
- **Compétences techniques** = Services supervisés (avec statuts en temps réel)
- **Formations** = Timeline du parcours
- **Logs système** = Terminal interactif en temps réel

---

## ✨ Fonctionnalités principales

### 🎨 Design & Animations

- **Thème NOC authentique** : Interface sombre inspirée des vrais centres de supervision
- **Effet scanlines** : Filtre CRT pour une ambiance rétro-futuriste
- **Animations GSAP** : Transitions fluides entre les vues, effets stagger
- **Indicateurs pulsants** : Statuts visuels colorés (vert/orange/rouge/bleu)
- **Micro-interactions** : Hover effects, glow, transformations CSS

### 📊 Simulations Live

- **Graphiques temps réel** : CPU et RAM usage animés avec Chart.js
- **Flux de logs continu** : Terminal avec messages générés automatiquement
- **Horloge live** : Affichage de l'heure en temps réel dans le header
- **Données dynamiques** : Métriques qui évoluent pour simuler un vrai monitoring

### 📱 Interface Responsive

- **Desktop** : Layout complet avec sidebar fixe
- **Tablet** : Grilles adaptatives, sidebar réduite
- **Mobile** : Menu burger, navigation overlay, layout vertical

### ⌨️ Terminal Interactif

- Commandes disponibles dans la section Logs
- Auto-scroll et coloration syntaxique
- Contrôles Pause/Resume pour le flux

---

## 🚀 Technologies utilisées

| Catégorie | Technologies |
|-----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ |
| **Charts** | Chart.js 4.4.0 |
| **Animations** | GSAP 3.12.4 |
| **Fonts** | Google Fonts (Inter, JetBrains Mono) |
| **Architecture** | SPA (Single Page Application) avec routing |

---

## 📁 Structure du projet

```
VDASH/
├── index.html              # Structure HTML principale
├── style.css               # Styles (thème NOC, animations, responsive)
├── script.js               # Logique SPA, routing, simulations live
├── data.js                 # Données des expériences et détails (TRIGGER_DETAILS)
├── README.md               # Ce fichier
├── QUICKSTART.md           # Guide de démarrage rapide
├── MODIFICATIONS_AUDIT.md  # Journal des modifications
└── FICHIERS_MANQUANTS.md   # Checklist des fichiers à ajouter
```

---

## 🎨 Sections du Portfolio

### 📊 Dashboard (Vue Principale)

**Widgets disponibles :**

1. **Statut Hôte** - Informations sur l'administrateur
   - Nom de l'hôte : `FÉLIS-VIRAMA-PROD-SRV`
   - Uptime : 7 ans d'expérience
   - Description et bio professionnelle

2. **Graphiques Live**
   - CPU Usage (graphique linéaire animé)
   - RAM Usage (graphique linéaire animé)

3. **Expériences Récentes**
   - Aperçu des 3 dernières expériences
   - Lien vers la vue complète

4. **Répartition Services**
   - Graphique Donut des 7 domaines de compétences
   - Pourcentages de maîtrise par domaine

5. **Centres d'Intérêts** (TOP 3)
   - Technologies & Innovation (95%)
   - Apprentissage Continu (90%)
   - Homelab & Domotique (88%)

---

### ⚠️ Expériences Professionnelles (Triggers)

**8 expériences complètes** affichées sous forme de "triggers" :

| Type | Entreprise | Poste | Période |
|------|-----------|-------|---------|
| **Alternance** | Saas Partner | Administrateur Système et Réseau | Oct 2024 - Aujourd'hui |
| **Stage** | Office de l'eau Réunion | Stagiaire Développeur Systèmes | Jan - Fév 2024 |
| **Stage** | Infobam OI | Stagiaire Admin Sys & Réseau | Juin - Juil 2023 |
| **Stage** | WattElek | Stagiaire Admin Sys & Réseau | Mars 2022 |
| **Stage** | Vindemia Services | Consultant Infrastructure | Avr & Sept 2021 |
| **Stage** | WattElek | Stagiaire Admin Sys & Réseau | Déc 2020 |
| **Stage** | Zot Informatik | Consultant Cybersécurité | Déc 2019 |
| **Stage** | SOS Technique Informatique | Portfolio Developer | Mars 2018 |

**Fonctionnalités :**
- **Filtres dynamiques** : Tous / Stages / Alternances
- **Drawer animé** : Clic sur une ligne pour afficher détails complets (GSAP)
- **Détails affichés** : Contexte, problème, solution, technologies, résultats
- Badges colorés par type et statut

---

### ⚙️ Services (Compétences)

**7 domaines de compétences** présentés comme des "services supervisés" :

| Service | Maîtrise | Technologies principales |
|---------|----------|-------------------------|
| **Réseaux** | 90% | Cisco, pfSense, BGP, OSPF, VPN, VLAN, Wireshark |
| **Systèmes** | 95% | Linux, Debian, RHEL, Windows Server, Bash, PowerShell |
| **Cloud & DevOps** | 85% | AWS, Azure, Docker, Kubernetes, Ansible, Terraform, GitLab CI |
| **Monitoring** | 88% | Prometheus, Grafana, ELK Stack, Nagios, Zabbix, Datadog |
| **Sécurité** | 80% | Firewall, IDS/IPS, SSL/TLS, VPN, Fail2ban, Hardening |
| **Bases de Données** | 82% | MySQL, PostgreSQL, MongoDB, Redis, Backup/Recovery |
| **IA** | 75% | Machine Learning, Python, TensorFlow, LLM, AI Ops |

**Affichage :**
- Cartes avec indicateurs pulsants (statut OK)
- Barres de progression animées
- Tags de technologies cliquables
- Animation stagger au chargement

---

### ◷ Parcours (Formation)

**Timeline verticale interactive** avec 3 formations principales :

#### 1. **En cours** - Maîtrise Admin Sys & Réseau
- **Établissement** : Expernet Campus Informatique
- **Période** : 2024 - Présent
- **Focus** : Certification AWS Solutions Architect - Professional
- **Technologies** : AWS, Cloud Architecture, Infrastructure

#### 2. **Complété** - BTS SIO (SISR)
- **Établissement** : Lycée Marguerite Jauzelon
- **Période** : 2022 - 2024
- **Focus** : Solutions d'Infrastructure Systèmes et Réseaux
- **Technologies** : Kubernetes, Docker, Orchestration

#### 3. **Complété** - BAC PRO SN (RISC)
- **Établissement** : Lycée Paule Pignolet de Fresne Rivière
- **Période** : 2019 - 2022
- **Focus** : Réseaux Informatique et Systèmes Communicants
- **Technologies** : Linux, Réseaux, Virtualisation, Sécurité

**Statistiques :**
- 6 années de formation
- 7 ans d'expérience professionnelle

---

### ★ Centres d'Intérêts

**6 catégories de passions** avec descriptions détaillées :

1. **Technologies & Innovation** (95%)
   - Veille technologique active
   - Participation à des conférences et meetups tech
   - Cloud Computing, DevOps, IA & ML, Blockchain

2. **Contribution Open Source** (85%)
   - Projets GitHub, automation, documentation, scripts

3. **Cybersécurité & Ethical Hacking** (80%)
   - Plateformes CTF (HackTheBox, TryHackMe)
   - Pentesting et techniques défensives

4. **Photographie & Vidéo** (85%)
   - Photographie, montage vidéo, drones
   - DaVinci Resolve

5. **Homelab & Domotique** (88%)
   - Serveurs, virtualisation, NAS, IoT
   - Proxmox, Home Assistant

6. **Apprentissage Continu** (90%)
   - Plateformes e-learning (Udemy, Coursera)
   - Préparation certifications professionnelles

---

### 📜 Logs

**Terminal interactif** avec :
- Prompt système : `root@portfolio:~$`
- Commande affichée : `tail -f /var/log/portfolio.log`
- Flux de logs en temps réel (colorés par type)
- Types de logs : INFO, SUCCESS, WARNING, ERROR
- Contrôles : Bouton Pause/Resume
- Auto-scroll automatique

---

### 📞 Contact (Escalade)

**3 niveaux d'escalade** inspirés des procédures NOC :

| Niveau | Type | Canal | Action |
|--------|------|-------|--------|
| **1** | INFO | Email | felis.virama@undercore.re |
| **2** | WARNING | LinkedIn | [Profil LinkedIn](https://re.linkedin.com/in/félis-virama-319714226) |
| **3** | CRITICAL | CV PDF | Télécharger le rapport complet |

Chaque niveau dispose d'un indicateur pulsant coloré (bleu/orange/rouge).

---

## ⚙️ Installation & Déploiement

### Installation locale

```bash
# Cloner le projet
git clone https://github.com/votre-username/portfolio-vdash.git
cd portfolio-vdash

# Ouvrir directement dans le navigateur
# Aucun serveur requis - projet 100% statique
open index.html
```

### Déploiement GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit - Portfolio NOC Dashboard"
git branch -M main
git remote add origin https://github.com/username/portfolio-vdash.git
git push -u origin main
```

Activez GitHub Pages :
1. Settings → Pages
2. Source : `main` branch
3. Votre portfolio est en ligne !

### Déploiement Netlify/Vercel

**Option 1 : Drag & Drop**
1. Créez un compte gratuit
2. Glissez-déposez le dossier complet
3. Déployé en quelques secondes !

**Option 2 : Git Integration**
1. Connectez votre repo GitHub
2. Configuration automatique détectée
3. Déploiement continu activé

---

## 🎨 Personnalisation

### 1. Informations personnelles

**Dans [index.html](index.html) :**

```html
<!-- Ligne 100 : Header -->
<h1 class="header-title">NMS-Portfolio :: <span class="highlight">Félis VIRAMA</span></h1>

<!-- Ligne 132 : Nom d'hôte -->
<span class="info-value mono">FÉLIS-VIRAMA-PROD-SRV</span>

<!-- Ligne 143 : Expérience -->
<span class="info-value mono">7 ans d'expérience</span>

<!-- Lignes 147-151 : Bio -->
<p class="info-value">
    Administrateur Systèmes et Réseaux passionné par l'infrastructure,
    l'automatisation et les technologies de monitoring...
</p>
```

### 2. Expériences professionnelles

**Dans [data.js](data.js) :** Modifiez l'objet `TRIGGER_DETAILS`

```javascript
export const TRIGGER_DETAILS = {
    1: {
        title: "Votre expérience",
        experienceType: "Alternance", // ou "Stage"
        role: "Votre poste",
        location: "Entreprise - Ville",
        sector: "Secteur d'activité",
        team: "Taille de l'équipe",
        problem: "Contexte et défis...",
        solution: "Solutions mises en place...",
        technologies: ["Tech1", "Tech2", "Tech3"],
        results: [
            "Résultat 1",
            "Résultat 2"
        ],
        date: "Mois Année - Mois Année",
        status: "EN COURS", // ou "TERMINÉ"
        severity: "HIGH", // HIGH, MEDIUM, LOW
        github: null,
        live: null
    }
    // ... ajoutez autant d'expériences que nécessaire
};
```

**Dans [index.html](index.html) :** Mettez à jour le tableau (lignes 310-366)

### 3. Compétences (Services)

**Dans [index.html](index.html) :** Personnalisez les cartes (lignes 377-561)

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
        <span class="tech-tag">Tech 1</span>
        <span class="tech-tag">Tech 2</span>
    </div>
</div>
```

### 4. Parcours (Formations)

**Dans [index.html](index.html) :** Personnalisez la timeline (lignes 565-666)

```html
<div class="timeline-event">
    <div class="timeline-marker">
        <span class="marker-dot pulse-green"></span>
        <div class="marker-line"></div>
    </div>
    <div class="timeline-content">
        <div class="timeline-badge current">EN COURS</div>
        <div class="timeline-date mono">2024 - Présent</div>
        <h3 class="timeline-title">Votre Formation</h3>
        <p class="timeline-institution">
            <span class="institution-icon">🏢</span>
            Nom de l'établissement
        </p>
        <p class="timeline-description">
            Description de la formation...
        </p>
        <div class="timeline-tags">
            <span class="tech-tag">Tech 1</span>
        </div>
    </div>
</div>
```

### 5. Contact

**Dans [index.html](index.html) :**

```html
<!-- Ligne 883 : Email -->
<a href="mailto:votre.email@exemple.com" class="contact-link">

<!-- Ligne 906 : LinkedIn -->
<a href="https://linkedin.com/in/votre-profil" target="_blank" class="contact-link">

<!-- Ligne 929 : CV PDF -->
<a href="./cv.pdf" download class="contact-link critical">
```

### 6. Thème & Couleurs

**Dans [style.css](style.css) :** Modifiez les variables CSS

```css
:root {
    --accent-green: #00ff88;      /* Succès / OK */
    --accent-blue: #00d4ff;       /* Info */
    --accent-orange: #ff9500;     /* Warnings */
    --accent-red: #ff3366;        /* Critiques */
    --bg-dark: #0a0e27;           /* Fond principal */
    --bg-card: #131829;           /* Fond des cartes */
}
```

### 7. Vitesse des simulations

**Dans [script.js](script.js) :**

```javascript
// Graphiques CPU/RAM
}, 2000); // Mise à jour toutes les 2 secondes

// Flux de logs
}, 2500); // Nouveau log toutes les 2.5 secondes
```

### 8. Effet Scanlines

**Dans [style.css](style.css) :**

```css
.scanlines {
    opacity: 0.03; /* Modifier de 0 (désactivé) à 0.1 (visible) */
}
```

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| **Desktop** | > 1024px | Sidebar fixe, grilles multi-colonnes |
| **Tablet** | 768px - 1024px | Sidebar réduite, grilles 2 colonnes |
| **Mobile** | < 768px | Menu burger, layout vertical |

---

## 🐛 Dépannage

### Les graphiques ne s'affichent pas
- Vérifiez que Chart.js est chargé (console navigateur)
- Vérifiez que JavaScript est activé
- Testez dans Chrome/Firefox/Edge (navigateurs modernes)

### Les animations ne fonctionnent pas
- Vérifiez le chargement de GSAP (CDN)
- Désactivez les extensions de blocage de scripts

### Les logs ne défilent pas
- Cliquez sur Pause puis Resume
- Rechargez la page (F5)

### Le drawer ne s'ouvre pas
- Assurez-vous que `data.js` est bien importé
- Vérifiez la console pour erreurs JavaScript

---

## 📊 Performance

- **Lighthouse Score** : 95+ (Performance, Accessibility, Best Practices)
- **Taille totale** : < 500 KB (sans images)
- **Temps de chargement** : < 1s (réseau 4G)
- **Compatible** : Chrome, Firefox, Safari, Edge (versions récentes)

---

## 🔒 Sécurité

- Code 100% statique (pas de backend)
- Aucune donnée sensible exposée
- Hébergement sécurisé (GitHub Pages, Netlify, Vercel)
- HTTPS forcé en production

---

## 📄 Licence

**MIT License**

Vous êtes libre de :
- Utiliser ce portfolio pour votre usage personnel ou commercial
- Modifier le code selon vos besoins
- Distribuer votre version modifiée

Conditions :
- Conservez la mention de licence originale
- Aucune garantie fournie

---

## 🙏 Crédits

| Ressource | URL |
|-----------|-----|
| **Chart.js** | https://www.chartjs.org/ |
| **GSAP** | https://greensock.com/gsap/ |
| **Google Fonts** | https://fonts.google.com/ |
| **Inspiration** | NOC/SOC Dashboards professionnels |

---

## 📧 Contact & Support

- **Email** : felis.virama@undercore.re
- **LinkedIn** : [Félis VIRAMA](https://re.linkedin.com/in/félis-virama-319714226)
- **Issues** : Ouvrez une issue sur GitHub pour toute question ou suggestion

---

## 📝 Changelog

### Version 2.0 (Actuelle)
- Refonte complète du design NOC
- Ajout de la section Centres d'Intérêts
- Intégration de data.js pour les expériences
- Terminal interactif dans la section Logs
- Animations GSAP avancées
- Responsive design optimisé

### Version 1.0
- Lancement initial du portfolio

---

**Fait avec ❤️ pour les Admins Sys/Réseaux qui veulent un portfolio avec du style !**

> *"Ce portfolio ne monitore pas juste votre carrière — il la met en scène."*

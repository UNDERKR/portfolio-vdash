# 🚀 Guide de Démarrage Rapide

## Étape 1 : Ouvrir le Portfolio

```bash
# Naviguez vers le dossier
cd PORTFOLIO-MONITORING

# Ouvrez index.html dans votre navigateur
# Option 1 : Double-cliquez sur index.html
# Option 2 : Utilisez un serveur local (recommandé pour le développement)
python3 -m http.server 8000
# Puis ouvrez : http://localhost:8000
```

## Étape 2 : Personnalisation Rapide (10 minutes)

### ✏️ Changez votre nom

**Fichier : `index.html`**

Trouvez et remplacez `VOTRE_NOM` (2 occurrences) :
- Ligne 56 : Header
- Ligne 98 : Nom de l'hôte

```html
<!-- AVANT -->
<span class="highlight">VOTRE_NOM</span>

<!-- APRÈS -->
<span class="highlight">Jean Dupont</span>
```

### ✏️ Modifiez votre bio

**Fichier : `index.html`, lignes 110-115**

```html
<p class="info-value">
    Votre description personnalisée ici.
    Administrateur passionné par l'infrastructure cloud et l'automatisation.
</p>
```

### ✏️ Ajoutez vos contacts

**Fichier : `index.html`**

1. **Email** (ligne 421) :
```html
<a href="mailto:votre.email@domaine.com" class="contact-link">
```

2. **LinkedIn** (ligne 440) :
```html
<a href="https://linkedin.com/in/votre-profil" target="_blank" class="contact-link">
```

3. **GitHub** (ligne 478) :
```html
<a href="https://github.com/votre-username" target="_blank" class="contact-link">
```

### ✏️ Personnalisez vos projets

**Fichier : `script.js`, lignes 16-139**

Modifiez l'objet `TRIGGER_DETAILS` avec vos propres projets :

```javascript
const TRIGGER_DETAILS = {
    1: {
        title: "Mon Premier Projet",
        problem: "Problème identifié...",
        solution: "Solution apportée...",
        technologies: ["Docker", "Kubernetes", "Python"],
        results: [
            "Résultat 1 : Gain de 50% de performance",
            "Résultat 2 : Réduction des coûts de 30%"
        ],
        date: "Janvier 2025",
        status: "RESOLVED",
        severity: "HIGH",
        github: "https://github.com/vous/projet",
        live: null
    }
};
```

## Étape 3 : Testez Toutes les Fonctionnalités

### ✅ Checklist de Test

- [ ] La page s'ouvre sans erreur
- [ ] L'horloge en haut à droite s'actualise
- [ ] La navigation entre les vues fonctionne
- [ ] Le graphique CPU se met à jour automatiquement
- [ ] Les logs défilent automatiquement
- [ ] Le bouton PAUSE/RESUME des logs fonctionne
- [ ] Cliquer sur un trigger ouvre le drawer (tiroir)
- [ ] Le drawer se ferme correctement
- [ ] Les filtres dans la vue Triggers fonctionnent
- [ ] Toutes les animations sont fluides
- [ ] Le design est responsive (testez sur mobile/tablette)

## Étape 4 : Déploiement

### Option A : GitHub Pages (Recommandé)

```bash
# 1. Créez un repo GitHub
# 2. Poussez votre code
git add .
git commit -m "Mon portfolio NMS/NOC"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main

# 3. Activez GitHub Pages
# Settings > Pages > Source: main branch > Save
# Votre site sera disponible à : https://username.github.io/portfolio
```

### Option B : Netlify (Le plus simple)

1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte gratuit
3. Glissez-déposez votre dossier `PORTFOLIO-MONITORING`
4. C'est en ligne ! 🎉

## 🔧 Dépannage Rapide

### Problème : Les graphiques ne s'affichent pas

**Solution :**
- Ouvrez la console du navigateur (F12)
- Vérifiez qu'il n'y a pas d'erreur de chargement des CDN
- Vérifiez votre connexion Internet

### Problème : Les animations ne fonctionnent pas

**Solution :**
- Vérifiez que GSAP se charge correctement (console)
- Testez dans un navigateur moderne (Chrome, Firefox, Edge)

### Problème : Le drawer ne s'ouvre pas

**Solution :**
- Assurez-vous que l'ID du trigger dans `index.html` correspond à la clé dans `TRIGGER_DETAILS`
- Vérifiez la console pour les erreurs JavaScript

## 📚 Ressources

- [README complet](README.md) : Guide détaillé de personnalisation
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [GSAP Documentation](https://greensock.com/docs/)

## 🎨 Personnalisation Avancée

Une fois les bases configurées, explorez :

1. **Changer les couleurs** : Modifiez les variables CSS dans `style.css` (lignes 4-27)
2. **Ajouter des services** : Dupliquez une carte de service dans `index.html`
3. **Personnaliser les logs** : Ajoutez vos messages dans `script.js` (ligne 143)
4. **Modifier les vitesses** : Ajustez les intervalles des simulations

## 💡 Pro Tips

1. **Utilisez des vraies données** : Au lieu de données simulées, connectez vos APIs réelles
2. **Ajoutez des projets** : Plus vous avez de projets détaillés, plus c'est impressionnant
3. **Partagez sur LinkedIn** : Ce portfolio attire l'attention !
4. **Ajoutez Google Analytics** : Suivez qui visite votre portfolio

---

**Besoin d'aide ?** Consultez le [README complet](README.md) ou ouvrez une issue sur GitHub.

**Prêt à impressionner ?** 🚀 Personnalisez et déployez votre portfolio maintenant !

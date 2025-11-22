# 📋 FICHIERS MANQUANTS - À AJOUTER

## 🔴 Fichiers critiques à créer avant mise en production

### 1. **preview.png** (Image de prévisualisation pour réseaux sociaux)
- **Chemin** : `./preview.png` (racine du projet)
- **Dimensions recommandées** : 1200x630 pixels
- **Format** : PNG ou JPG
- **Utilisation** : Open Graph, Twitter Card, LinkedIn
- **Contenu suggéré** :
  - Capture d'écran du dashboard NOC
  - Logo ou nom "Félis VIRAMA"
  - Titre "Administrateur Systèmes & Réseaux"

**Outils recommandés** :
- Canva (mentionné dans le CV)
- Photoshop / GIMP
- Figma

---

### 2. **cv.pdf** (CV téléchargeable)
- **Chemin** : `./cv.pdf` (racine du projet)
- **Format** : PDF
- **Utilisation** : Bouton de téléchargement dans section Contact
- **Lien actuel** : ligne 923 de index.html

**Option alternative** :
Si vous ne souhaitez pas rendre le CV téléchargeable, retirer ce code dans `index.html` (lignes 920-928) :

```html
<div class="contact-method">
    <span class="method-label">CV.PDF</span>
    <a href="./cv.pdf" download class="contact-link critical">
        <span class="link-icon">⬇</span>
        Télécharger le rapport complet
    </a>
</div>
```

---

## 🔧 URLs À PERSONNALISER

### Dans `index.html` :

**Lignes à modifier** :
- Ligne 13 : `og:url` → Remplacer `https://votre-domaine.com/` par votre vraie URL
- Ligne 16 : `og:image` → Remplacer `https://votre-domaine.com/preview.png` par votre URL + preview.png
- Ligne 22 : `twitter:url` → Remplacer `https://votre-domaine.com/`
- Ligne 25 : `twitter:image` → Remplacer `https://votre-domaine.com/preview.png`

### Dans `data.js` :

**Ligne 313** :
```javascript
github: "https://github.com/votre-username"
```
→ Remplacer `votre-username` par votre vrai compte GitHub

---

## ✅ CHECKLIST DE MISE EN PRODUCTION

- [ ] Créer `preview.png` (1200x630px)
- [ ] Ajouter `cv.pdf` OU retirer le bouton
- [ ] Remplacer `votre-domaine.com` dans index.html (4 occurrences)
- [ ] Remplacer `votre-username` dans data.js
- [ ] Tester le partage sur réseaux sociaux
- [ ] Vérifier que l'image preview s'affiche correctement

---

## 💡 NOTES

- Une fois ces fichiers créés, le site sera prêt pour la production
- L'audit complet est disponible dans le rapport d'audit
- Un backup du site a été créé : `backup-20251121-133606-portfolio-monitoring/`

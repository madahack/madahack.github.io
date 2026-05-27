# MADAHACK — Site officiel

Landing page **one-page** de [MADAHACK](https://madahack.org), initiative
malgache dédiée à la cybersécurité.

> HACK · DEFEND · SECURE — Cybersécurité made in Madagascar 🇲🇬

---

## ✨ Stack

- **HTML5** sémantique, accessible (WCAG AA)
- **CSS3 pur** (variables, Flexbox, Grid, mobile-first)
- **JavaScript vanilla** (Intersection Observer, smooth scroll, mailto)
- **Aucune dépendance** npm — zéro build, juste des fichiers statiques
- Déployé via **GitHub Pages** sur `madahack.org`

---

## 📁 Structure

```
madahack.github.io/
├── index.html              # page unique
├── assets/
│   ├── css/style.css       # styles complets (variables CSS)
│   ├── js/main.js          # menu, scroll-reveal, formulaire mailto
│   └── img/
│       ├── logo.svg        # wordmark MADAHACK
│       └── favicon.svg     # M stylisé bicolore
├── CNAME                   # madahack.org
├── robots.txt
└── README.md
```

---

## 🚀 Développement local

Pas de build, pas de dépendances. Un simple serveur HTTP suffit :

```bash
# Python (le plus simple)
python3 -m http.server 8000

# ou avec Node si vous préférez
npx serve .
```

Puis ouvrir [http://localhost:8000](http://localhost:8000).

---

## 🌍 Déploiement

Le site est déployé automatiquement via **GitHub Pages** dès qu'on
pousse sur `main` :

```bash
git add .
git commit -m "feat: <ce que vous changez>"
git push
```

Le domaine `madahack.org` est configuré via le fichier `CNAME` et un
enregistrement DNS chez le registrar.

---

## 📬 Migrer le formulaire vers Formspree

Le formulaire actuel ouvre simplement le client mail de l'utilisateur
via `mailto:` (suffisant pour démarrer, mais friction côté UX).

Pour passer à un vrai envoi serverless avec [Formspree](https://formspree.io)
(gratuit jusqu'à 50 mails/mois) :

1. Créer un compte sur formspree.io et un nouveau formulaire.
2. Dans `index.html`, remplacer l'ouverture du `<form>` :

   ```html
   <form class="contact-form reveal" id="contact-form"
         action="https://formspree.io/f/VOTRE_ID" method="POST">
   ```

3. Dans `assets/js/main.js`, supprimer le bloc `form.addEventListener('submit', …)`
   pour laisser le navigateur soumettre le formulaire nativement.

---

## 🗺️ TODO

- [ ] Logo réel (wordmark définitif, signé par un designer)
- [ ] Photos / visuels des événements passés
- [ ] Image Open Graph (`/assets/img/og-image.png`, 1200×630)
- [ ] Calendrier dynamique des événements (CTF, meetups…)
- [ ] Page / section « Équipe »
- [ ] Blog technique (writeups CTF, articles)
- [ ] ID Formspree branché (cf. section ci-dessus)
- [ ] Sitemap XML
- [ ] Liens sociaux réels (LinkedIn, GitHub, Discord)

---

## 📜 Licence

Le contenu est © MADAHACK. Le code de la landing est libre de
réutilisation — inspirez-vous-en !

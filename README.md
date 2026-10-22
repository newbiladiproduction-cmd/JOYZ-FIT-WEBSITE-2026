# Site officiel JOYZ FIT : mode d'emploi

## Contenu du dossier
- `index.html` : la page (rarement à modifier)
- `css/style.css` : couleurs et mise en page (noir `#000`, or `#d4af37`)
- `js/config.js` : **le seul fichier à modifier** (bio, liens, clips, concerts, coordonnées)
- `images/` : vos photos. `presse/` : vos fichiers pour la presse

## Remplacer les éléments
- **Photo officielle (accueil)** : `images/joyz-fit-hero.jpg` (grande photo horizontale)
- **Portrait (biographie)** : `images/joyz-fit-portrait.jpg`
- **Pochettes** : placez-les dans `images/` et indiquez le nom dans `config.js`
- **Presse** : déposez `biographie.pdf`, `photos.zip`, `logo.zip`, `dossier-presse.pdf` dans `presse/`
- **Biographie, e-mail, téléphone** : `config.js`, entre les guillemets
- **Musique, plateformes, réseaux** : dans `config.js`, retirez les `//` devant l'exemple et remplacez par vos liens
- **Clip YouTube** : `youtubeId` = les lettres après `v=` dans le lien
- **Concerts** : ajoutez une ligne (format date `2026-12-31`). Les dates passées disparaissent seules.
- Logo : le nom en or sert de logo. Pour une image, remplacez le texte dans `index.html` (balise `class="logo"`) par `<img src="images/logo.png" alt="JOYZ FIT" height="32">`.

## Activer le formulaire (gratuit)
1. Créez un compte gratuit sur formspree.io, puis un formulaire avec votre e-mail.
2. Copiez le lien (`https://formspree.io/f/xxxx`) dans `formulaire:` de `config.js`.
Sans cela, le bouton ouvre le logiciel e-mail du visiteur (il faut avoir renseigné `email`). Formspree a une offre gratuite limitée en nombre de messages.

## Publier gratuitement : GitHub Pages
1. Créez un compte sur github.com.
2. Cliquez sur **+ > New repository**, nom : `joyz-fit`, **Public**, puis Create.
3. Cliquez **uploading an existing file**, glissez **tout le contenu** du dossier (pas le dossier lui-même), puis **Commit changes**.
4. **Settings > Pages**, Source : **Deploy from a branch**, branche **main**, dossier **/(root)**, Save.
5. Après 1 à 2 minutes, le site est à `https://VOTRE-PSEUDO.github.io/joyz-fit/`.

Alternative : Cloudflare Pages (pages.cloudflare.com) > Upload assets > glissez le dossier.
Pour modifier plus tard : ouvrez le fichier sur GitHub, icône crayon, modifiez, Commit.

## Nom de domaine personnalisé
1. Achetez un domaine (payant, environ 10 à 15 € par an, chez Namecheap, OVH, etc.).
2. GitHub : **Settings > Pages > Custom domain**, saisissez `www.votredomaine.com`, Save.
3. Chez le vendeur, DNS : un enregistrement **CNAME** `www` vers `VOTRE-PSEUDO.github.io`. Pour le domaine nu, quatre enregistrements **A** : 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
4. Attendez la propagation puis cochez **Enforce HTTPS**.

## Avant de publier
Ajoutez dans `<head>` de `index.html`, si vous le souhaitez, l'adresse définitive du site pour le SEO. Les emplacements vides affichent « à compléter » : renseignez-les ou ils resteront visibles.

# PJS3 - Refonte du site de l'Île de Bréhat

## Project archived since we got the final score of the homework. Please contact us using our github e-mail if needed.

Note finale obtenue : 16/20

Commentaires de notation : 
* Rendu de site devrait être plus complet
* Le rapport de rendu manque en détail

Pistes d'amélioration : 
* Plus de temps aurait dû être passé à rédiger les articles visibles sur le menu latéral plutôt que les articles de blog.
* Le rapport final ne contenait presque que des liens et manquait également de qualité. Tout regrouper sur une page aurait été plus judicieux.

## Dossiers

Comprendre la structure des dossiers dans le framework Nuxt.JS

### `pages`

J'ai tendance à comparer Nuxt.JS comme le PHP de NodeJS.

On drop un composant .vue dans ce dossier, et une route est crée automatiquement pour celui-ci. Bref, contient toutes les pages du site.

### `components`

Une page contient des composants, comparer une page comme un truc qui contient plein de widgets (header, contenu, carte, etc.). Eh bah ces widgets sont ici.

Plus d'infos dans la [documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Permet de définir un layout par défaut. C'est ici qu'est contenu la navbar et le footer

Plus d'infos dans la [documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `content`

Contient chaque article de blog. un article = un fichier markdown et non un fichier vue.

Plus d'infos sur la [doc de Nuxt/Content](https://content.nuxtjs.org/)

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

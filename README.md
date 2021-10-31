# PJS3 - Refonte du site de l'Île de Bréhat


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

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

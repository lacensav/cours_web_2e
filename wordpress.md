# Le CMS WordPress

C’est le programme que nous installons sur un serveur. Il gère tous les contenus, l’ensemble du blog. C’est la matrice…

## Le thème

C’est le design, l’habillage du site. C’est ce qui est garant de l’unité du blog. On l’appelle également « Template ».

## Les plug-ins

* Ce sont des petits programmes qui viennent s’ajouter au CMS WordPress pour compléter ses fonctionnalités ;
* Ils permettent de rendre votre blog plus riche ;

Attention, plus il y a de plug-ins et plus vous risquez d’alourdir votre blog et de ralentir son temps de téléchargement (pas conseillé !) ;

Attention également aux plug-ins qui ont des failles de sécurités ou des bugs;

Vérifiez toujours la compatibilité de votre plug-in avec la version de votre CMS WordPress…

Consultez les commentaires pour savoir s’il existe des risques quelconques à l’installation de ce programme.

## Les documents multimédias

Ce sont tous les fichiers que vous téléchargez (images, PDF, vidéos, enregistrements audio…).

## Les widgets

Ce sont des éléments qui s’affichent sur le blog selon des positions bien définies (colonne de gauche, de droite, dans l’entête/header, dans le pied de page/footer) ;

Ils permettent d’ajouter des contenus, d’améliorer la navigation (articles les plus lus, catégories…) ou des fonctionnalités intéressantes (Facebook Likebox, Boutons de partages…).

## Les pages

> Attention, les pages ne sont pas des articles;

Les pages reprennent la philosophie d’un site classique. Elles permettent de créer des « pages » dans le menu principal afin d’apporter du contenu spécifique (Qui sommes-nous, page de contact…).

## Les articles / posts

Les articles sont pour la plupart du temps présenté par ordre chronologique (de plus récent au plus ancien) depuis la page d’accueil du site.
Ils peuvent être regroupés par catégorie ou par tag (mot-clé).

# Le squelette

![squelette-wp](media/squelette-wp_2cihe6qvr.png)

## Le Header (En-tête)

Zone d’insertions du logo, de la bannière principale du blog, du menu principal et d’autres fonctionnalités telles que des boutons de partages ou la zone de du moteur de recherche interne (Searchbox).

## La Sidebar

Zone de chargement des widgets;
Peut-être à droite ou à gauche (il arrive également qu’il y en ait en footer et en dessous du header !).

## Le Footer (pied de page)

Clôture le blog;
Permets d’afficher le menu bas avec les mentions légales, les conditions de vente, le plan du site…
Permets d’afficher quelques widgets.

## Zone appelée « LOOP »

> https://developer.wordpress.org/reference/classes/wp_query/

### L’Index

Il affiche tout ou partie des articles (liste de posts) en page d’accueil.

### Les Archives

Affichée par mots-clés (tags), catégories, dates ou par auteur.

### Les pages

Affiche les titres des pages, leurs contenus, les commentaires et autres tags.

### Le Single ou Post

Affiche que le titre, le contenu, les catégories et tags d’un post.
Les commentaires

Affiche l’avatar (photo, représentation graphique de la personne qui a laissé le commentaire), les commentaires et les pingbacks quand il y en a un (permet de tenir au courant le propriétaire d’un site/contenu à mentionnant son site ou un lien de son site).

La fonction de recherche (moteur de recherche sémantique interne)
Affiche une liste des résultats de recherches

# Ma page d’accueil

* Créer un template home
* Afficher les 3 derniers post de 3 catégories différente (multiple loops)
* Afficher les images à la une pour chacun d’eux

## Selectionner des posts d’une certaine catégorie

Définir la requête

```php
<?php
  $the_query = new WP_Query( array(
    'category_name' => 'design',
    'posts_per_page' => 3,
  ));
?>
```

Créer la boucle

```php
<?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>

    Ici viendra le contenu de chaque article

<?php endwhile; ?>
```

Dans la boucle, récupérer les données que l’on veut afficher

```php
<a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
<?php the_post_thumbnail(array( 200, 99999 )); ?>
<p><?php the_excerpt(__('(more…)')); ?></p>
```

Remettre la requête à zéro

```php
<?php wp_reset_postdata(); ?>
```

Tout ensemble

```php
<div class="travaux">
  <?php
    $the_query = new WP_Query( array(
      'category_name' => 'design',
      'posts_per_page' => 3,
   ));
  ?>
  <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>

      <a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
      <p><?php the_excerpt('…'); ?></p>

  <?php endwhile; ?>
  <?php wp_reset_postdata(); ?>
</div>
```

## Afficher l’image à la une pour chaque post

A l’intérieur d’une boucle, lorsque «`the_post()`» est définis, à une multitudes de fonction pour récupérer du contenu de ce post. Pour certaine, il faudra les activer dans un fichier que l’on nomme `functions.php`

Le fichier `functions.php` étant déjà un fichier php, il faut pas de nouveau ajouter les balises `<?php ?>`.

```php
add_theme_support( 'post-thumbnails' );
```

Ensuite, sur votre page html, pour afficher le l’image

```php
<?php the_post_thumbnail('thumbnail'); ?>
```

Pour une taille personnalisée

```php
<?php the_post_thumbnail(array( 200, 99999 )); ?>
```

> Sources:
> https://developer.wordpress.org/reference/functions/the_post_thumbnail/ > http://wordpress.bbxdesign.com/anatomie-dun-theme > http://www.my-guroo.com/2014/08/anatomie-theme-wordpress-template-blog/

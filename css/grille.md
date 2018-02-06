# La grille css:

## Quelques examples

* http://unsemantic.com/
* http://flexboxgrid.com/
* https://getbootstrap.com/

# Le système Bootstrap

## Qu’est un framework?

Un framework ensemble de styles prédéfinis que l’on peut réutiliser partout pour construire notre site plus rapidement garder une cohérence graphique.

Pour pouvoir utiliser ce style, une documentation nous fournit des exemples de structures HTML à utiliser pour chaque style.

## Utiliser la grille de bootstrap

Nous allons utiliser la grille de bootstrap car même si nous n’utilisons que la grille aujourd’huie cela vous permettra d’ajouter des modules au fur et à mesure si vous décidez de continuer a apprendre.

### Téléchargement

Commencez par télécharger la grille en vous rendant sur le [site de bootstrap](https://getbootstrap.com/)

![](../assets/images/bootstrap/bootstrap-grid-01.jpg)

### Extraction

Ensuite dezippez le dossier téléchargé et allez regarder dans le dossier css.

![](../assets/images/bootstrap/bootstrap-grid-02.jpg)

### Installation

Extrayez le fichier bootstrap-grid.css et allez le mettre dans le dossier de votre site.

![](../assets/images/bootstrap/bootstrap-grid-03.jpg)

Ensuite faites un lien dans la partie `<head>` de votre page html vers cette nouvelle feuille de styles.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Mon site</title>
  <link rel="stylesheet" href="bootstrap-grid.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-6">hello</div>
      <div class="col-6">hello</div>
    </div>
  </div>
</body>
</html>
```

## Exemple de modèle de mise en page

Il est toujours possible de faire son layout soi-même, sans utiliser de grille. Voici un exemple.

https://www.quackit.com/html/templates/layout_templates.cfm

<p data-height="265" data-theme-id="0" data-slug-hash="GyOQXN" data-default-tab="result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="3 column layout" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/GyOQXN/">3 column layout</a> by Rorsvort (<a href="https://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

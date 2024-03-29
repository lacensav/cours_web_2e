---
id: html-03
title: "Cours 3 : Glitch & usabilité"
---

<div class="video">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRRUFglx5wc05fSbpdqC7plpACnNed5xrS5NO4qRINYjf247fWusCSoXM1lKjuij8Q60jLK85dA0m9g/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

## Usabilité
<div class="video">
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSu_1ycqmgyX7K64LesERNqPcz7JLa1TCoawxtzDGbvBaPsgIszw7N3ySxoRZtFZav6SRDYtuGfZrnC/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

- Daltonism tester [https://michelf.ca/projects/sim-daltonism/](https://michelf.ca/projects/sim-daltonism/)

- Contenu d’abord [http://justinjackson.ca/words_fr.html](http://justinjackson.ca/words_fr.html)

## Alternatives au logiciels propriétaires

- [https://alternativeto.net/](https://alternativeto.net/)
- [https://framasoft.org/fr/](https://framasoft.org/fr/)

## Le glitch

<div class="video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/gr0yiOyvas4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### L’art du glitch Png

https://ucnv.github.io/pnglitch

### GlitchR

https://twitter.com/glitchr_

### Jodi

http://wwwwwwwww.jodi.org/100cc/hqx/i900.html

### Glitch safari

http://glitchsafari.tumblr.com/

<div class="video">
  <iframe src="https://player.vimeo.com/video/29283329?color=ffffff&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<p><a href="https://vimeo.com/29283329">Digital Decay: Meditation/Disintegration</a> from <a href="https://vimeo.com/universe">Claire L. Evans</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

![Cécile Babiole — Copie Non Conforme](https://www.makery.info/wp-content/uploads/2014/11/je-ne-dois-pas-copier-cecile-babiole.jpg)

<div class="video">
  <iframe src="https://player.vimeo.com/video/25975122?color=ffffff&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<p><a href="https://vimeo.com/25975122">Pixels a light and sound installation by Cecile Babiole</a> from <a href="https://vimeo.com/user1794563">cecilebabiole</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

### Outils

http://lunicode.com/creepify

http://glitche.com/

https://www.airtightinteractive.com/demos/js/imageglitcher/

https://airtightinteractive.com/demos/js/ruttetra/

https://photomosh.com/

## Art génératif

### Neural art

Neural art - http://prostheticknowledge.tumblr.com/post/127784921171/a-neural-algorithm-of-artistic-style-academic

![](https://66.media.tumblr.com/c97488474946388147298a950b40825c/tumblr_nu6cevAHvt1qav3uso1_540.gifv)

[http://prostheticknowledge.tumblr.com/post/128361922131/picasso-x-porn-neural-net-art-styling-has-taken-a](http://prostheticknowledge.tumblr.com/post/128361922131/picasso-x-porn-neural-net-art-styling-has-taken-a)

**Google dream**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/SCE-QeDfXtA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Deep art**

[http://deepart.io/](http://deepart.io/)

**ART 42**
[https://art42.net](https://art42.net)

**This work does not exist**

[https://thisartworkdoesnotexist.com](https://thisartworkdoesnotexist.com)

### Copy right ?

### Outil

- [https://generativeartistry.com/tutorials/](https://generativeartistry.com/tutorials/)
- [https://p5js.org/](https://p5js.org/)

## Html

### Les images pour le web

#### Bonnes pratiques meta data

Non conseillé (texte alternatif manquant)

```html
<img src="chiot.jpg" />
```

Non conseillé (bourrage de mots clés)

```html
<img
  src="chiot.jpg"
  alt="chiot chiots petit chien petits chiens retriever labrador berger allemand setter chien de chasse jack russell terrier nourriture pour chien nourriture pas chère nourriture pour chiot"
/>
```

Préférable

```html
<img src="chiot.jpg" alt="chiot" />
```

Vivement conseillé

```html
<img src="chiot.jpg" alt="Chiot dalmatien en train de jouer à la balle" />
```

[Article complet sur les bonnes pratiques relatives aux images Google](https://support.google.com/webmasters/answer/114016?hl=fr)

#### Sauver une image pour le web sur Photoshop

<iframe width="560" height="315" src="https://www.youtube.com/embed/z-yKNb51N_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Sauver une image pour le web sur Affinity photo

<iframe width="560" height="315" src="https://www.youtube.com/embed/pCVtT9gsqzE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Les Liens

#### Absolus

```html
<a href="https://lacambre.be">La cambre</a>
```

#### Relatif

```html
<a href="../work/design.html">Design portfolio</a>
```

Plus de documentation officielle [Ici](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a)

### Page d’acceuil

```
images
index.html
portfolio
--- design.html
--- scenography.html
--- animations.html
blog
--- post-02-02-2020.hml
--- post-01-02-2020.hml
```

#### Pourquoi ma page d’accueil doit-elle s’appeller «index.html» ?

Quand un navigateur tente d’accéder à un site via une [Url](https://fr.wikipedia.org/wiki/Uniform_Resource_Locator), demande à accéder à un fichier se trouvant sur un serveur (celui où le site est hébergé).
Mais si l’url est `http://monsite.com/`, cela correspond juste au dossier «pulbic_html» comme vous pouvez l’avoir sur Hostinger.
Pour savoir quoi afficher, il faudrait spécifier un fichier comme `http://monsite.com/a-propos.html`.
Si l’on ne lui dit rien, le serveur va automatiquement (par convention) chercher à l’intérieur du dossier un fichier qui s’appelle `index.html`.

```txt
<!-- L’adresse voulue -->

http://monsite.com/

<!-- Le fichier demandé -->

|public_html/
  |-- index.html
```

```txt
<!-- L’adresse voulue -->

http://monsite.com/travaux/archive.html

<!-- Le fichier demandé -->

|public_html/
  |travaux/
  |-- archive.html
```

```txt
<!-- L’adresse voulue -->

http://monsite.com/expositions/

<!-- Le fichier demandé -->

|public_html/
  |expositions/
  |-- index.html
```

<script src="https://player.vimeo.com/api/player.js"></script>
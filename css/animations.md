# Animation personnalisée en css

* http://css3.bradshawenterprises.com/animations/
* https://webdesign.tutsplus.com/tutorials/a-beginners-introduction-to-css-animation--cms-21068

## Les « keyframes »

**Explication**

**Example**

```css
@keyframes pincemi {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

Ou écris autrement

```css
@keyframes pincemi {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

En version raccourcie

```css
@keyframes pincemi {
  to {
    opacity: 0;
  }
}
```

## L’animation

Cette propriété est utilisée pour appeler une série de keyframes à l’intérieur d’une déclaration css.

**Elle peut prendre ces propriétés:**

* `animation-name`: @keyframes name (remember we chose tutsFade).
* `animation-duration`: the timeframe length, the total duration of the animation from start to the end.
* `animation-timing-function`: sets the animation speed ( linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier ).
* `animation-delay`: the delay before our animation will start.
* `animation-iteration-count`: how many times it will iterate through animation.
* `animation-direction`: gives you the ability to change the loop direction, from start to end ,or from end to start, or both.
* `animation-fill-mode`: specifies which styles will be applied to the element when our animation is finished ( none | forwards | backwards | both )

**Example**

```css
.hepla {
  animation-name: pincemi;
  animation-duration: 4s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
}
```

ou en version raccourcie

```css
.hepla {
  animation: pincemi 4s 1s infinite linear alternate;
}
```

Ce code va créer une animation infinie de 4s, avec 1s de retard et de direction opposée.

### Les préfixes

Afin que ce code fonctionne dans tous les navigateurs, nous avons besoin d’ajouter des préfixes:

* Chrome & Safari: `-webkit-`
* Firefox: `-moz-`
* Opera: `-o-`
* Internet Explorer: `-ms-`

Voice ce que donne notre propriété animation avec les préfixes:

```css
.element {
  -webkit-animation: pincemi 4s 1s infinite linear alternate;
  -moz-animation: pincemi 4s 1s infinite linear alternate;
  -ms-animation: pincemi 4s 1s infinite linear alternate;
  -o-animation: pincemi 4s 1s infinite linear alternate;
  animation: pincemi 4s 1s infinite linear alternate;
}
```

Voici ce que donne notre déclaration animation avec les préfixes:

```css
@-webkit-keyframes pincemi {
  /* vos styles */
}
@-moz-keyframes pincemi {
  /* vos styles */
}
@-ms-keyframes pincemi {
  /* vos styles */
}
@-o-keyframes pincemi {
  /* vos styles */
}
@keyframes pincemi {
  /* vos styles */
}
```

### Animations multiples

```css
.hepla {
  animation: pincemi 4s 1s infinite linear alternate, pincemoi 4s 1s infinite
      linear alternate;
}

@keyframes pincemi {
  to {
    opacity: 0;
  }
}

@keyframes pincemoi {
  to {
    transform: rotate(180deg);
  }
}
```

### D’un carré a un cercle

<p data-height="300" data-theme-id="0" data-slug-hash="OmNxMj" data-default-tab="css,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="From square to triangle" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/OmNxMj/">From square to triangle</a> by Rorsvort (<a href="http://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Appliquer des courbe d’accélération avec cubic-bézier

> https://matthewlein.com/ceaser/

Ajoutez le code entre `infinite` et `alternate`

```css
div {
  width: 200px;
  height: 200px;
  background-color: coral;
  animation: pincemi 2s 1s infinite cubic-bezier(1, 0.015, 0.295, 1.225) alternate;
}
```

### Code final

```css
div {
  width: 200px;
  height: 200px;
  background-color: coral;
  animation: pincemi 2s 1s infinite cubic-bezier(1, 0.015, 0.295, 1.225) alternate;
}

@keyframes pincemi {
  0% {
    border-radius: 0 0 0 0;
    background: coral;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 50% 0 0 0;
    background: darksalmon;
    transform: rotate(45deg);
  }
  50% {
    border-radius: 50% 50% 0 0;
    background: indianred;
    transform: rotate(90deg);
  }
  75% {
    border-radius: 50% 50% 50% 0;
    background: lightcoral;
    transform: rotate(135deg);
  }
  100% {
    border-radius: 50%;
    background: darksalmon;
    transform: rotate(180deg);
  }
}
```

## Example d’animation

### Fond animé

* http://www.gradient-animator.com/ (couleur, gradients)
* http://davidwalsh.name/background-animation-css (image)

### Kinégramme

http://thinkzone.wlonk.com/Kinegram/Kinegram.htm

<p data-height="300" data-theme-id="0" data-slug-hash="EPYpPW" data-default-tab="css,result" data-user="jimoong" data-embed-version="2" data-pen-title="Kinegram" class="codepen">See the Pen <a href="https://codepen.io/jimoong/pen/EPYpPW/">Kinegram</a> by Jiwoong Lee (<a href="http://codepen.io/jimoong">@jimoong</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

# La grille css:

## Les plus connus

* http://unsemantic.com/
* http://flexboxgrid.com/
* https://getbootstrap.com/

## Le système Bootstrap

> Introduire ce qu’est un framework.
> Pourquoi est-ce utile ?

### Utiliser seulement la grille

### Alternatives pour la mise en page

* http://www.intensivstation.ch/templates/

# Comment hacker du javascript ?

> Connaître assez de javascript pour être dangeureux
> C’est quoi ? Ou le trouve-t-on ? Essayer dans l’inspecteur

## Quel jour fait-il ?

Rendez-vous sur la page de l’artiste [Davide Balula](http://davide.balula.free.fr/) et inspecter le code source.

On y trouve une fonction javascript qui affiche le jour d’aujourdhui.

```js
<script>
  // La fonction execute ses instruction quand elle est appelée plus bas avec tomorrowIs()
  function tomorrowIs() {

    // représente une variable (boîte) dans laquelle sont stoquée la liste des jours de la semaine
    var weekDays = [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY"
    ];

    // le numéro du de la semaine
    var today = new Date().getDay();

    // va rechercher dans la variable weekDays le jour qui correspond à l’index que l’on a stoqué dans la variable today.
    document.write(weekDays[today]);
  }
</script>
```

Pour afficher le résultat de cette fonction sur notre paqe html, il nous faut l’appeller.

```html
<p>
  Aujourd’hui, c’est
  <script>
    tomorrowIs();
  </script>
</p>
```

<p data-height="265" data-theme-id="0" data-slug-hash="NjNwpZ" data-default-tab="html,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="Today is" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/NjNwpZ/">Today is</a> by Rorsvort (<a href="http://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

**Exercice:** Remplacer les jours de la semaine par des vers de poésies (à défaut, quelques unes du http://www.pipotron.free.fr)

## Les cent mille milliards de poèmes (Raymond Queneau)

Nous pouvons reprendre le même code et changer la méthode de sélection en applicant un nombre aléatoire:

```js
<script>
  // La fonction execute ses instruction quand elle est appelée plus bas avec tomorrowIs()
  function randomPoems() {

    // représente une variable (boîte) dans laquelle sont stoquée la liste des jours de la semaine
    var poems = [
      "En ce qui concerne la restriction que nous constatons, il serait bon de favoriser la globalité des ouvertures possibles, avec beaucoup de recul.",
      "Compte tenu de la baisse de confiance observée, on ne peut se passer d'examiner l'ensemble des améliorations réalisables, depuis longtemps.",
      "En ce qui concerne la dualité de la situation que nous constatons, il est nécessaire de considérer la totalité des options opportunes, pour longtemps.",
      "Nonobstant cette inflexion intrinsèque, il ne faut pas s'interdire de caractériser systématiquement les actions de bon sens, de toute urgence.",
      "Malgré la situation de ces derniers temps, je suggère fortement d'uniformiser l'ensemble des modalités opportunes, parce que les mêmes causes produisent les mêmes effets.",
      "Quelle que soit complexité de ces derniers temps, il est préférable d'inventorier les principales modalités optimales, même si nous devons en tirer des conséquences.",
      "Où que nous mène l'austérité intrinsèque, il est nécessaire de façonner les relations des améliorations envisageables, à l'avenir."
    ];

    // le numéro du de la semaine
    var random = Math.floor(Math.random() * poems.length);

    // va rechercher dans la variable weekDays le jour qui correspond à l’index que l’on a stoqué dans la variable today.
    document.write(poems[random]);
  }
</script>
```

Nous avons donc maintenant un générateur de poéme aléatoire mais cela ne reste qu’une phrase à la fois.
Pour avoir plusieurs générateurs sur la même page, il nous suffira de dupliquer le code situé dans les script tag et de changer le nom des foncions

**Un example à 2 fonctions de 2 vers ressemblera à ceci:**

```js
<script>
  function randomPoems1() {
    var poems = [
      "En ce qui concerne la restriction que nous constatons, il serait bon de favoriser la globalité des ouvertures possibles, avec beaucoup de recul.",
      "Compte tenu de la baisse de confiance observée, on ne peut se passer d'examiner l'ensemble des améliorations réalisables, depuis longtemps."
    ];

    var random = Math.floor(Math.random() * poems.length);

    document.write(poems[random]);
  }

  function randomPoems2() {
    var poems = [
      "Nonobstant cette inflexion intrinsèque, il ne faut pas s'interdire de caractériser systématiquement les actions de bon sens, de toute urgence.",
      "Malgré la situation de ces derniers temps, je suggère fortement d'uniformiser l'ensemble des modalités opportunes, parce que les mêmes causes produisent les mêmes effets."
    ];

    var random = Math.floor(Math.random() * poems.length);

    document.write(poems[random]);
  }
</script>

<p>
<script>
  randomPoems1();
</script>
</p>
<p>
<script>
  randomPoems2();
</script>
</p>
```

<p data-height="265" data-theme-id="0" data-slug-hash="dWMZdK" data-default-tab="html,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="Random poems 2" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/dWMZdK/">Random poems 2</a> by Rorsvort (<a href="http://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## À vous de jouer !

Bonus http://revolver-on-mintcream.com/

##

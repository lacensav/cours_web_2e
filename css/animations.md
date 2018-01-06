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

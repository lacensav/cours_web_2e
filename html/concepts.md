# Concepts essentiels

<!-- toc -->

## Balises «block» vs «inline»

Par default le texte s’affiche en ligne => il faut des balises pour structurer la page. Example :

<p data-height="265" data-theme-id="0" data-slug-hash="jYwdbp" data-default-tab="html,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="Hello world" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/jYwdbp/">Hello world</a> by Rorsvort (<a href="https://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Il existe deux catégories importantes d’éléments en HTML que vous devez connaître : les éléments de **niveau bloc (block)** et les éléments **en ligne (inline)**.

### Les éléments de niveau de bloc

Ils sont souvent des **éléments structurels** de la page et représentent des **paragraphes, des listes, des menus de navigation, des pieds de page, etc.** Un élément de niveau bloc ne peut pas être imbriqué dans un élément inline, mais il peut être imbriqué dans un autre élément de niveau bloc. [^2]

<p data-height="265" data-theme-id="0" data-slug-hash="EobEoP" data-default-tab="html,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="Block tags" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/EobEoP/">Block tags</a> by Rorsvort (<a href="https://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### Les éléments en ligne

Ce sont eux qui sont contenus dans des éléments de niveau bloc. Ils entourent seulement des petites parties du contenu du document, pas des paragraphes entiers ni des regroupements de contenu. Un élément en ligne ne fait pas apparaître une nouvelle ligne dans le document. Il apparaît généralement dans un paragraphe de texte, par exemple un élément (hyperlien) `<a>` ou des éléments d’accentuation tels que `<em>` ou `<strong>`.

<p data-height="265" data-theme-id="0" data-slug-hash="XVzEEb" data-default-tab="html,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="Inline tags" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/XVzEEb/">Inline tags</a> by Rorsvort (<a href="https://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## Les adresses «absolues» vs «relatives» vs «ancres»

Lorsque l’on doit faire un lien dans une page HTML, il existe différentes manières de pointer vers un élément.

### Les adresses absolues

Le chemin d’une adresse absolue ne change pas est-il toujours valable quel que soit l’endroit où on se trouve.
Vous pouvez comparer cela l’adresse que vous posez sur une enveloppe où que vous soyez dans le monde elle arrivera toujours au même endroit.

<p data-height="268" data-theme-id="0" data-slug-hash="MrLEmm" data-default-tab="html,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="MrLEmm" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/MrLEmm/">MrLEmm</a> by Rorsvort (<a href="https://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Le chemin de cette image permet à cette image d’être utilisée sur n’importe quelle page de votre site sans en changer l’adresse.

### Les adresses relatives

Le chemin d’une adresse relative ne fonctionne que par rapport à l’endroit où vous vous trouvez.
Si je vous explique le trajet entre chambre et le salon, les instructions pour y arriver seront fausses si vous changer d’endroit d’origine

Considérons l’arborescence de fichier la suivante, si dans mon fichier `example.html` dans mon `dossier1`, j’ai un lien que je veux faire pointer vers `lacambre.html` dans mon `dossier2`, comment faire?

```
- dossier1
  |-- example.html

- dossier2
  |-- lacambre.html
```

Pour ce faire il nous faut:

* Sortir du `dossier1`
* Renter dans le `dossier2`
* Référencer le fichier auquel on voudrait parvenir c’est à dire `lacambre.html`

**Pour sortir d’un dossier, on utilise** `../`

**Pour rentrer dans un dossier, on utilise le nom du dossier** `dossier2` par exemple.

Construisons l’addresse de notre lien sur `example.html` pas à pas:

**Sortir du `dossier1`**

```
..
```

** Renter dans le `dossier2` **

```
../dossier2
```

** Référencer le fichier auquel on voudrait parvenir c’est à dire `lacambre.html`**

```
../dossier2/lacambre.html
```

** Le lien final**

```
<a href="../dossier2/lacambre.html">La Cambre</a>
```

### Les ancres

{%em%}Les encres sont des pointeurs vers un élément de la page HTML.{%endem%}
Lorsque vous cliquez sur un lien qui comporte une ancre, le navigateur va automatiquement scroller jusqu'à l’endroit où se trouve l’élément en question.

Un exemple courant où les ancres sont très utiles: [Une navigation avec des ancres](../html/how-to.html#une-navigation-avec-des-ancres)

Pour en savoir plus sur la création de lien, rendez-vous sur:
[https://developer.mozilla.org/fr/Apprendre/Comprendre_les_URL](https://developer.mozilla.org/fr/Apprendre/Comprendre_les_URL)

## Pourquoi ma page d’accueil doit-elle s’appeller «index.html» ?

Quand un navigateur tente d’accéder à un site via une [Url](https://fr.wikipedia.org/wiki/Uniform_Resource_Locator), demande à accéder à un fichier se trouvant sur un serveur (celui où le site est hébergé).
Mais si l’url est `http://monsite.com/`, cela correspond juste au dossier «pulbic_html» comme vous pouvez l’avoir sur Hostinger.
Pour savoir quoi afficher, il faudrait spécifier un fichier comme `http://monsite.com/a-propos.html`.
Si l’on ne lui dit rien, le serveur va automatiquement (par convention) chercher à l’intérieur du dossier un fichier qui s’appelle `index.html`.

```html
<!-- L’adresse voulue -->

http://monsite.com/

<!-- Le fichier demandé -->

|public_html/
  |-- index.html
```

```html
<!-- L’adresse voulue -->

http://monsite.com/travaux/archive.html

<!-- Le fichier demandé -->

|public_html/
  |travaux/
    |-- archive.html
```

```html
<!-- L’adresse voulue -->

http://monsite.com/expositions/

<!-- Le fichier demandé -->

|public_html/
  |expositions/
    |-- index.html
```

[^1]

<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---

[^1]: http://patorjk.com/software/taag/#p=testall&f=Isometric1&t=Type%20Something%20
[^2]: https://developer.mozilla.org/fr/Apprendre/HTML/Introduction_%C3%A0_HTML/Getting_started

```

```

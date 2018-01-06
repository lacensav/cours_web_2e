# Concepts essentiels

<!-- toc -->

## Balises «block» vs «inline»

Par default le texte s’affiche en ligne => il faut des balises pour structurer la page. Example :

<p data-height="265" data-theme-id="0" data-slug-hash="jYwdbp" data-default-tab="html,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="Hello world" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/jYwdbp/">Hello world</a> by Rorsvort (<a href="https://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Il existe deux catégories importantes d'éléments en HTML que vous devez connaître : les éléments de **niveau bloc (block)** et les éléments **en ligne (inline)**.

### Les éléments de niveau de bloc

Ils sont souvent des **éléments structurels** de la page et représentent des **paragraphes, des listes, des menus de navigation, des pieds de page, etc.** Un élément de niveau bloc ne peut pas être imbriqué dans un élément inline, mais il peut être imbriqué dans un autre élément de niveau bloc. [^2]

<p data-height="265" data-theme-id="0" data-slug-hash="EobEoP" data-default-tab="html,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="Block tags" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/EobEoP/">Block tags</a> by Rorsvort (<a href="https://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### Les éléments en ligne

Ce sont eux qui sont contenus dans des éléments de niveau bloc. Ils entourent seulement des petites parties du contenu du document, pas des paragraphes entiers ni des regroupements de contenu. Un élément en ligne ne fait pas apparaître une nouvelle ligne dans le document. Il apparaît généralement dans un paragraphe de texte, par exemple un élément (hyperlien) `<a>` ou des éléments d'accentuation tels que `<em>` ou `<strong>`.

<p data-height="265" data-theme-id="0" data-slug-hash="XVzEEb" data-default-tab="html,result" data-user="borisrorsvort" data-embed-version="2" data-pen-title="Inline tags" class="codepen">See the Pen <a href="https://codepen.io/borisrorsvort/pen/XVzEEb/">Inline tags</a> by Rorsvort (<a href="https://codepen.io/borisrorsvort">@borisrorsvort</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## Les adresses «absolues» vs «relatives» vs «ancres»

https://developer.mozilla.org/fr/Apprendre/Comprendre_les_URL

## L’html sémantique

## Pourquoi ma page d’accueil doit-elle s’appeller «index.html» ?

Ascii art en jouant avec des caractères

```
███████╗███╗   ██╗███████╗ █████╗ ██╗   ██╗
██╔════╝████╗  ██║██╔════╝██╔══██╗██║   ██║
█████╗  ██╔██╗ ██║███████╗███████║██║   ██║
██╔══╝  ██║╚██╗██║╚════██║██╔══██║╚██╗ ██╔╝
███████╗██║ ╚████║███████║██║  ██║ ╚████╔╝
╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝  ╚═══╝  
```

[^1]

<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---

[^1]: http://patorjk.com/software/taag/#p=testall&f=Isometric1&t=Type%20Something%20
[^2]: https://developer.mozilla.org/fr/Apprendre/HTML/Introduction_%C3%A0_HTML/Getting_started

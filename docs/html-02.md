---
id: html-02
title: Cours 2
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQEPKDfLH-KUyFEDd-VezbJ4OD3JWPXaIweXe9yEnMe3RusVYx-QGiqYMNlCiFI3yjeicFeHHYRgxFx/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Le darknet

### TOR

<div class="video">
  <iframe tor height="315" src="https://www.youtube-nocookie.com/embed/Mnrn3y-Qbyk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Voir la page du projet Tor](https://www.torproject.org/fr/)

## Art et mémoire

### Le théâtre de la mémoire

> «Pour Saint-Augustin, la mémoire participe à la vie de l’esprit. C’est elle qui instaure de la durée, de la profondeur de champ, qui permet de donner sens aux expériences.
> Ainsi la mémoire est une « chambre intérieure vaste et illimitée » où sont conservées nos actions passées, les images de ce que nous avons vu et perçu mais aussi ce que nous avons appris des arts libéraux ainsi que les affections de l’esprit : joie, tristesse, désir et peur» [^1]

![Theatre de la mémoire ](https://www.researchgate.net/profile/Antoine_Gros3/publication/331075349/figure/fig1/AS:726264478433283@1550166353952/Representation-du-Theatre-de-la-Memoire-Anonyme.png)

**Est-il possible de mémoriser toute connaissance humaine au moyen d’un nombre fini d’images ?**

Tel était en tout cas le pari audacieux que l’humaniste Giulio Camillo (1480-1544),
considéré comme l’un des personnages les plus célèbres de son temps, tenta de tenir en bâtissant son «théâtre de la mémoire ».

Comme décrit dans «L’art de la mémoire» [^3], la mémoire artificielle se construit en créant à partir de choses dont on veut souvenir, des images mémorables (absurde, sex, symboles).

Ce processus ressemble fort à ce que l’on connait dans la création artistique.

L’artiste étant celui qui crée des images mémorables.

> « Une œuvre n’est pas quelque chose de beau à regarder, sa valeur c’est d'être une école de pensée. L’important est l’image mentale qu’elle imprime. » [^2]

Mais dans ce processus il y a forcément abstraction, ne serait que lors de la symbolization.

On comprend mieux pourquoi la perte liée à l’abstraction est un élément essentiel de la création artistique.

### Memoire, histoire et internet.

Une dimension importante de la science se trouve dans l’intérềt de l’histoire à se souvenir de celui qui a inventer quelque chose.

L’histoire n’est qu’une fraction de ce que l’on a bien voulu retenir.

Cette dimension ressemble fort à ce qui est en jeux également en art où l’on s’atèle à produire des images/histoire mémorable.

C’est un combat incessant entre les artistes pour connaître ceux qui seront retenu de l’histoire.

Il y a tellement de données en sciences qu’il devient difficile d’en faire de nouvelles histoires.

Peut-être est-ce un des rôles de l’art. Et symboliquement du netart.

### L’internet et le livre

> Le web s’envole et les écris restent

Le web est éphémère mais rare sont les personnes qui s’en rendent compte.
Malgré que cela faisait partie des idées des créateurs du web, le web n’a pas de backup, pas de version, et le les sites changent ou disparaissent.
En fait la réalité est que chacun est responsable de faire son historique du web.
Il y a donc toute une série de savoir qui disparaissent avec le temps et qui sont perdus à jamais.
Heureusement qu’il nous reste les livres et [The Web archives](https://archive.org/web/?&ui3=1)!

[The Web archives](https://archive.org/web/?&ui3=1) nous permet de, par exemple, voir comment le site d’Apple était en 1997 - [https://web.archive.org/web/19970715124703/http://www.apple.com/a](https://web.archive.org/web/19970715124703/http://www.apple.com/a)

Ou de revoir des fameux virus DOS rendus maintenant inoffensif au [Malware museum](https://archive.org/details/malwaremuseum)

Ce côté éphémère à des implications non négligeable en ce sens qu’elle change notre rapport la Vérité et à la responsabilité des paroles.
Quand quelqu’un écrit un livre, il doit bien assumer ce qu’il écrit, à moins de brûler tous les exemplaires du livre.

Pour le web c’est plus compliqué, on peut parfois vite aller effacer et changer du contenus comme si de rien n’était.

On pourrait presque dire que l’internet n’a de mémoire que la somme des traces que ses utilisateurs en ont gardé. La mémoire du web serait-elle une œuvre d’art?

---

[^1]: [La Trinité Intérieure : mémoire, intelligence et volonté chez Augustin](https://fr.wikipedia.org/wiki/Augustin_d%27Hippone)
[^2]: https://fr.wikipedia.org/wiki/Claes_Oldenburg#cite_note-ReferenceA-3
[^3]: L’art de la mémoire, Frances A. Yates, Gallimard 1987

## Html

### Tableaux

<table>
  <tr>
    <th>Entête 1</th>
    <th>Entête 2</th>
    <th>Entête 3</th>
    <th>Entête 4</th>
  </tr>
  <tr>
    <td>Cellule 1</td>
    <td>Cellule 2</td>
    <td>Cellule 3</td>
    <td>Cellule 4</td>
  </tr>
</table>

```
<table>
  <tr>
    <th>Cellule 1</th>
    <th>Cellule 2</th>
    <th>Cellule 3</th>
    <th>Cellule 4</th>
  </tr>
  <tr>
    <td>Cellule 1</td>
    <td>Cellule 2</td>
    <td>Cellule 3</td>
    <td>Cellule 4</td>
  </tr>
</table>
```

### Images

<img src="https://media.giphy.com/media/Um3ljJl8jrnHy/giphy.gif"/>

```
<img src="https://media.giphy.com/media/Um3ljJl8jrnHy/giphy.gif"/>
```

> Une image peut pointer vers un fichier à l’aide d’un chemin **relatif** ou **absolus**.

#### Les adresses absolues

Le chemin d’une adresse absolue ne change pas est-il toujours valable quel que soit l’endroit où on se trouve.
Vous pouvez comparer cela à l’adresse que vous posez sur une enveloppe où que vous soyez dans le monde elle arrivera toujours au même endroit.

<p class="codepen" data-height="265" data-theme-id="default" data-default-tab="html,result" data-user="borisrorsvort" data-slug-hash="MrLEmm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Chemin absolus">
  <span>See the Pen <a href="https://codepen.io/borisrorsvort/pen/MrLEmm">
  Chemin absolus</a> by Rorsvort (<a href="https://codepen.io/borisrorsvort">@borisrorsvort</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Le chemin de cette image permet à cette image d’être utilisée sur **n’importe quelle page** de votre site sans en changer l’adresse.

#### Les adresses relatives

Le chemin d’une adresse relative ne fonctionne que par rapport à l’endroit où vous vous trouvez.
Si je vous explique le trajet entre chambre et le salon, les instructions pour y arriver seront fausses si vous changer d’endroit d’origine

Considérons l’arborescence de fichiers suivante,

```
- exos
  |-- exercices-1.html

- images
  |-- logo.png

index.html
```

Si dans mon fichier `index.html`, je veux placer l’image se trouvant dans le dossier images, comment dois-je procéder?

Pour ce faire il nous faut ajouter une balise image dans le fichier `index.html`. Son attribut `src` sera un chemin qui

- entre dans le dossier `images`,
- fait référence au fichier qu’on voudrait afficher, c’est à dire `logo.png`

> Pour sortir d’un dossier, on utilise `../`

> Pour rentrer dans un dossier, on utilise le nom du dossier. `images` par exemple.

Construisons maintenant l’addresse vers notre image sur `index.html` pas à pas:

Entrer dans le dossier `images`

```
images
```

Référencer le fichier qu’on voudrait afficher, c’est à dire `logo.png`

```
images/logo.png
```

La balise finale

```
<img src="images/logo.png"/>
```

Si je veux maintenant afficher la même image dans le fichier `exos/exercice-1.html`.
Il me faut donc pour afficher cette image:

- sortir du dossier `exos`
- renter dans le dossier `images`
- référencer le fichier `logo.png`

Ce qui nous donne:

`..` pour sortir de `exos`

`../images` pour entrer dans `images`

`../images/logo.png` pour référencer le fichier logo.png

La balise finale pour afficher le logo sur la page `exercice-1.html` sera donc:

```
<img src="../images/logo.png"/>
```

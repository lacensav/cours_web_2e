---
id: html-02
title: Cours 2
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQEPKDfLH-KUyFEDd-VezbJ4OD3JWPXaIweXe9yEnMe3RusVYx-QGiqYMNlCiFI3yjeicFeHHYRgxFx/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

# Le darknet

## TOR

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Mnrn3y-Qbyk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
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
* entre dans le dossier `images`,
* fait référence au fichier qu’on voudrait afficher, c’est à dire `logo.png`

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



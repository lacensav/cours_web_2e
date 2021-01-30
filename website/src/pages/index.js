import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

export default () => {
  return (
    <Layout>
      <div class="hero shadow--lw">
        <div class="container">
          <h1 id="project_title">WEB CASO 2B - Boris Rorsvort</h1>
          <p>
            Mêlant technique, culture et création artistique, ce cours vous
            donnera les savoirs et pratiques pour créer un portfolio. Il vous
            permettra de aussi situer votre pratique artistique par rapport au
            web d’aujourd’hui et d’expérimenter le net.art
          </p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col col--12">
            <div className="feature feature--left">
              <img
                className="feature__media"
                src={useBaseUrl("img/undraw_youtube_tutorial.svg")}
              />
              <h2>Culture</h2>
              Le Web a bien changé depuis l’époque des Skyblog et de Myspace,
              qui correspondent à ma génération. D’autre part, comme l’art n’est
              pas immunisé contre son contexte de production, il est important,
              comme consommateur et créateur, d’en comprendre les codes et les
              tendances.
            </div>

            <div className="feature feature--right">
              <img
                className="feature__media"
                src={useBaseUrl("img/undraw_code_review.svg")}
              />
              <h2>Code</h2>
              Grâce à l’étude du HTML, des outils d’édition du code, des bases
              des css et de WordPress, l’étudiant sera capable, en fin de
              cursus, de créer son propre site portfolio et de le mettre en
              ligne.
            </div>

            <div className="feature feature--left">
              <img
                className="feature__media"
                src={useBaseUrl("img/undraw_note_list.svg")}
              />
              <h2>Art</h2>
              Comme La Cambre place la création artistique au centre de son
              enseignement, il est important que les travaux donnés permettent à
              cette créativité de s’exprimer, même dans sa plus simple
              expression. L’étudiant sera donc amené à réfléchir la façon dont
              sa pratique artistique se confronte au Web, mais également à
              explorer les potentiels artistiques de ce médium en tant que tel.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

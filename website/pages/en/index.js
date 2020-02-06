/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock contents={props.children} layout={props.layout} />
      </Container>
    );

    const Code = () => (
      <Block id="code">
        {[
          {
            content:
              "Grâce à l’étude du HTML, des outils d’édition du code, des bases des css et de WordPress, l’étudiant sera capable, en fin de cursus, de créer son propre site portfolio et de le mettre en ligne.",
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: "left",
            title: "Code",
          },
        ]}
      </Block>
    );

    const Art = () => (
      <Block>
        {[
          {
            content:
              "Comme La Cambre place la création artistique au centre de son enseignement, il est important que les travaux donnés permettent à cette créativité de s’exprimer, même dans sa plus simple expression. L’étudiant sera donc amené à réfléchir la façon dont sa pratique artistique se confronte au Web, mais également à explorer les potentiels artistiques de ce médium en tant que tel.",
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: "right",
            title: "Art",
          },
        ]}
      </Block>
    );

    const Culture = () => (
      <Block background="light">
        {[
          {
            content:
              "Le Web a bien changé depuis l’époque des Skyblog et de Myspace, qui correspondent à ma génération. D’autre part, comme l’art n’est pas immunisé contre son contexte de production, il est important, comme consommateur et créateur, d’en comprendre les codes et les tendances.",
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: "right",
            title: "Culture",
          },
        ]}
      </Block>
    );

    return (
      <div>
        <div className="homeContainer">
          <div className="homeWrapper">
            <div className="wrapper">
              <h1 id="project_title">WEB CASO 2B - Boris Rorsvort</h1>
              <p id="project_tagline">
                Mêlant technique, culture et création artistique, ce cours vous
                donnera les savoirs et pratiques pour créer un portfolio. Il
                vous permettra de aussi situer votre pratique artistique par
                rapport au web d’aujourd’hui et d’expérimenter le net.art
              </p>
            </div>
          </div>
        </div>
        <Container>
          {
            //   <GridBlock
            //   padding={["bottom", "top"]}
            //   layout="threeColumn"
            //   contents={[
            //     {
            //       title: "Frequently Asked Questions",
            //       content: "Questions gathered from the community",
            //     },
            //     {
            //       title: "More",
            //       content: "Lots of documentation is on this site",
            //     },
            //     {
            //       title: "More",
            //       content: "Lots of documentation is on this site",
            //     },
            //   ]}
            // />
          }
        </Container>
        <div className="mainContainer">
          <Culture />
          <Code />
          <Art />
        </div>
      </div>
    );
  }
}

module.exports = Index;

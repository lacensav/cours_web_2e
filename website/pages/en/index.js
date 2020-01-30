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
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Code = () => (
      <Block id="code">
        {[
          {
            content:
              "To make your landing page more attractive, use illustrations! Check out " +
              "[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. " +
              "The illustrations you see on this page are from unDraw.",
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
            content: "This is another Art of how this project is useful",
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
              "Each new Docusaurus project has **randomly-generated** theme colors.",
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
                Something short and leading about the collection below—its
                contents, the creator, etc.
              </p>
              <p>
                <a href="#" class="button button-primary my-2">
                  Main call to action
                </a>
                <a href="#" class="button button-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </div>
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

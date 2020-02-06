/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Leçon</h5>
            <a href={this.docUrl("intro.html", this.props.language)}>
              Plan des cours
            </a>
            <a href={this.docUrl("html-01.html", this.props.language)}>
              Ma première page html
            </a>
            <a href={this.docUrl("css-01.html", this.props.language)}>
              Les feuilles de style
            </a>
          </div>
          {
            // <div>
            //   <h5>Community</h5>
            //   <a href={this.pageUrl('users.html', this.props.language)}>
            //     User Showcase
            //   </a>
            //   <a
            //     href="https://stackoverflow.com/questions/tagged/"
            //     target="_blank"
            //     rel="noreferrer noopener">
            //     Stack Overflow
            //   </a>
            //   <a href="https://discordapp.com/">Project Chat</a>
            //   <a
            //     href="https://twitter.com/"
            //     target="_blank"
            //     rel="noreferrer noopener">
            //     Twitter
            //   </a>
            // </div>
          }
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/lacensav/cours_web_2e">GitHub</a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;

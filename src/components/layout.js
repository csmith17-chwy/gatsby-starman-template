import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import "@fontsource/exo"
import "@fontsource/oswald"
import "@fontsource/lato"

const themeVariables = {
  marsOrange: "#FD2E04",
  spaceBlue: "#110241",
  auroraGreen: "#03FA86",
  earthBlue: "#061A3B",
  cosmicPurple: "#6103FA",
  solarYellow: "#FDF591",
  neptuneBlue: "#0360DF",
  coloradoGreen: "#538869",
  aspenIvory: "#DFE4B9",
  mercuryBronze: "#95958B",
  venusGold: "#CBB62F",
  jupiterRed: "#F16653",
  saturnYellow: "#DFD804",
  uranusBlue: "#3CF6FF",
  plutoPink: "#FEE3DE",
  novaMagenta: "#FA02EF",
  white: "#fff",
  black: "#000",
}

const themeLight = {
  font: themeVariables.spaceBlue,
  title: themeVariables.marsOrange,
  header: themeVariables.neptuneBlue,
  nav: themeVariables.neptuneBlue,
  background: themeVariables.white,
  highlight: themeVariables.uranusBlue,
  hr: "hsla(0, 0%, 0%, 0.2)",
  inlineCode: themeVariables.mercuryBronze,
  inlineCodeText: themeVariables.black,
}

const themeDark = {
  font: themeVariables.white,
  title: themeVariables.neptuneBlue,
  header: themeVariables.marsOrange,
  nav: themeVariables.marsOrange,
  background: themeVariables.earthBlue,
  highlight: themeVariables.jupiterRed,
  hr: "hsla(0, 0%, 100%, 0.2);",
  inlineCode: themeVariables.mercuryBronze,
  inlineCodeText: themeVariables.black,
}

const GlobalStyle = createGlobalStyle`
	html {
		line-height: 1.15; /* 1 */
		-webkit-text-size-adjust: 100%; /* 2 */
	}

	body {
		color: ${props => props.theme.font};
		background-color: ${props => props.theme.background};
	}

	main {
		display: block;
	}

	h1 {
		color: ${props => props.theme.title};
		font-family: "Exo";
		font-size: 2em;
		margin: 0.67em 0;
	}

	h2,
	h3,
	h4,
	h5 {
		color: ${props => props.theme.header};
		font-family: "Oswald";
	}

	p,
	a,
	div,
	span {
		color: ${props => props.theme.font};
		font-family: "Lato";
	}

	hr {
		box-sizing: content-box; /* 1 */
		height: 0; /* 1 */
		overflow: visible; /* 2 */
		color: ${props => props.theme.hr};
	}

	pre {
		font-family: monospace, monospace; /* 1 */
		font-size: 1em; /* 2 */
	}

	a {
		background-color: transparent;
		color: ${props => props.theme.nav};
		text-decoration: none;
	}

	abbr[title] {
		border-bottom: none; /* 1 */
		text-decoration: underline; /* 2 */
		text-decoration: underline dotted; /* 2 */
	}

	b,
	strong {
		font-weight: bolder;
	}

	code,
	kbd,
	samp {
		font-family: monospace, monospace; /* 1 */
		font-size: 1em; /* 2 */
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	img {
		border-style: none;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit; /* 1 */
		font-size: 100%; /* 1 */
		line-height: 1.15; /* 1 */
		margin: 0; /* 2 */
	}

	button,
	input { /* 1 */
		overflow: visible;
	}

	button,
	select { /* 1 */
		text-transform: none;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		-webkit-appearance: button;
	}

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	button:-moz-focusring,
	[type="button"]:-moz-focusring,
	[type="reset"]:-moz-focusring,
	[type="submit"]:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}

	legend {
		box-sizing: border-box; /* 1 */
		color: inherit; /* 2 */
		display: table; /* 1 */
		max-width: 100%; /* 1 */
		padding: 0; /* 3 */
		white-space: normal; /* 1 */
	}

	progress {
		vertical-align: baseline;
	}

	textarea {
		overflow: auto;
	}

	[type="checkbox"],
	[type="radio"] {
		box-sizing: border-box; /* 1 */
		padding: 0; /* 2 */
	}

	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	[type="search"] {
		-webkit-appearance: textfield; /* 1 */
		outline-offset: -2px; /* 2 */
	}

	[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button; /* 1 */
		font: inherit; /* 2 */
	}

	details {
		display: block;
	}

	summary {
		display: list-item;
	}

	template {
		display: none;
	}

	[hidden] {
		display: none;
	}

	pre[class*='language-'] {
		overflow: auto;
		padding: 1.3125rem;
	}

	pre[class*='language-']::-moz-selection {
		/* Firefox */
		background: hsl(207, 4%, 16%);
	}

	pre[class*='language-']::selection {
		/* Safari */
		background: hsl(207, 4%, 16%);
	}

	/* Text Selection colour */
	pre[class*='language-']::-moz-selection,
	pre[class*='language-'] ::-moz-selection {
		text-shadow: none;
		background: hsla(0, 0%, 100%, 0.15);
	}

	pre[class*='language-']::selection,
	pre[class*='language-'] ::selection {
		text-shadow: none;
		background: hsla(0, 0%, 100%, 0.15);
	}

	/* Inline code */
	:not(pre) > code[class*='language-'] {
		border-radius: 0.3em;
		background: ${props => props.theme.inlineCode};
		color: ${props => props.theme.inlineCodeText};
		padding: 0.15em 0.2em 0.05em;
		white-space: normal;
	}

	.token.attr-name {
		color: rgb(173, 219, 103);
		font-style: italic;
	}

	.token.comment {
		color: rgb(128, 147, 147);
	}

	.token.string,
	.token.url {
		color: rgb(173, 219, 103);
	}

	.token.variable {
		color: rgb(214, 222, 235);
	}

	.token.number {
		color: rgb(247, 140, 108);
	}

	.token.builtin,
	.token.char,
	.token.constant,
	.token.function {
		color: rgb(130, 170, 255);
	}

	.token.punctuation {
		color: rgb(199, 146, 234);
	}

	.token.selector,
	.token.doctype {
		color: rgb(199, 146, 234);
		font-style: 'italic';
	}

	.token.class-name {
		color: rgb(255, 203, 139);
	}

	.token.tag,
	.token.operator,
	.token.keyword {
		color: #ffa7c4;
	}

	.token.boolean {
		color: rgb(255, 88, 116);
	}

	.token.property {
		color: rgb(128, 203, 196);
	}

	.token.namespace {
		color: rgb(178, 204, 214);
	}

	pre[data-line] {
		padding: 1em 0 1em 3em;
		position: relative;
	}

	.gatsby-highlight-code-line {
		background-color: hsla(207, 95%, 15%, 1);
		display: block;
		margin-right: -1.3125rem;
		margin-left: -1.3125rem;
		padding-right: 1em;
		padding-left: 1.25em;
		border-left: 0.25em solid ${props => props.theme.highlight};
	}

	.gatsby-highlight {
		margin-bottom: 1.75rem;
		margin-left: -1.3125rem;
		margin-right: -1.3125rem;
		border-radius: 10px;
		background: ${props => props.theme.background};
		-webkit-overflow-scrolling: touch;
		overflow: auto;
	}

	@media (max-width: 672px) {
		.gatsby-highlight {
			border-radius: 0;
		}
	}

	.gatsby-highlight pre[class*='language-'] {
		float: left;
		min-width: 100%;
	}
`

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <GlobalStyle theme={themeDark} />
      <Link to={`/`}>
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <Link to={`/about/`}>About</Link>
      {children}
    </>
  )
}

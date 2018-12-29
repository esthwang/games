import Document, { Head, Main, NextScript } from 'next/document';
import Head from 'next/head';
import React from 'react';
import { GlobalStyle, Theme } from '../styles';
import { ThemeProvider } from 'styled-components';


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cloud.typography.com/7250934/7415012/css/fonts.css"
          />
        </Head>

        <ThemeProvider theme={Theme}>
          <body>
            <Main />
            <NextScript />
          </body>
        </ThemeProvider>

        <GlobalStyle />
      </html>
    );
  }
}
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { GlobalStyle } from '../styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

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

        <body>
          <Main />
          <GlobalStyle />
          <NextScript />
        </body>
      </html>
    );
  }
}
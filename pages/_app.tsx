import App from 'next/app';
import NextSeo from 'next-seo';
import React from 'react';
import SEO from '../next-seo.config';
import { Theme } from '../styles';
import { ThemeProvider } from 'styled-components';


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        <NextSeo config={SEO} />
      </>
    );
  }
}
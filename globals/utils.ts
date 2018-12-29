import ReactGA from 'react-ga';

function recordPageview(path: string) {
  ReactGA.initialize('UA-68438846-1');
  ReactGA.pageview(path);
}

export {recordPageview};
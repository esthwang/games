module.exports.exportPathMap = async function (defaultPathMap) {
  // Need to define all possible paths for dynamic pages
  const cwFiles = await require('./data.json');
  const pairs = cwFiles.map((_, i) => {
    return [`/crossword/${i}`, { page: '/crossword', query: { id: `${i}` } }];
  });
  pairs.push(['/', { page: '/' }]);
  const paths = Object.assign(...pairs.map(d => ({[d[0]]: d[1]})));

  return paths;
}

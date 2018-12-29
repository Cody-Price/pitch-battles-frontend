const postGameAnalysis = results => {
  let allTimes;

  if (results.times.length === 4) {
    allTimes = results.times.reduce((sum, time) => {
      return (sum += time);
    }, 0);
    results.times.push(allTimes);
  } else {
    allTimes = results.times;
  }

  let allPerfects = {
    one: false,
    two: false,
    three: false,
    four: false,
    all: false
  };

  const perfectKeys = Object.keys(results.perfectScores);

  perfectKeys.forEach(level => {
    allPerfects[level] = results.perfectScores[level];
  });

  if (
    allPerfects.one &&
    allPerfects.two &&
    allPerfects.three &&
    allPerfects.four
  ) {
    allPerfects.all = true;
  }

  return { times: results.times, perfectScores: allPerfects };
};

const gameAnalysis = {
  postGameAnalysis
};

export default gameAnalysis;

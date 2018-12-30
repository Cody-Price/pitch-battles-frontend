const postGameAnalysis = results => {
  let finalTimes = {
    one: null,
    two: null,
    three: null,
    four: null,
    all: null
  };

  const timeKeys = Object.keys(finalTimes);

  if (results.times.length === 4) {
    const allTimes = results.times.reduce((sum, time) => {
      return (sum += time);
    }, 0);
    finalTimes.all = allTimes;
  }

  results.times.forEach((time, index) => {
    finalTimes[timeKeys[index]] = time;
  });

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

  return { times: finalTimes, perfectScores: allPerfects };
};

const gameAnalysis = {
  postGameAnalysis
};

export default gameAnalysis;

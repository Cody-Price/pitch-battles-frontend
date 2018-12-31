export const postGameAnalysis = results => {
  const times = finalTimes(results.times);

  const perfectScores = prepScores(results.perfectScores);

  return { times, perfectScores };
};

const finalTimes = times => {
  let preppedTimes = {
    one: null,
    two: null,
    three: null,
    four: null,
    all: null
  };

  const timeKeys = Object.keys(preppedTimes);

  if (times.length === 4) {
    const allTimes = times.reduce((sum, time) => {
      return (sum += time);
    }, 0);
    preppedTimes.all = allTimes;
  }

  times.forEach((time, index) => {
    preppedTimes[timeKeys[index]] = time;
  });

  return preppedTimes;
};

const prepScores = scores => {
  let allPerfects = {
    one: false,
    two: false,
    three: false,
    four: false,
    all: false
  };

  const perfectKeys = Object.keys(scores);

  perfectKeys.forEach(level => {
    allPerfects[level] = scores[level];
  });

  if (
    allPerfects.one &&
    allPerfects.two &&
    allPerfects.three &&
    allPerfects.four
  ) {
    allPerfects.all = true;
  }

  return allPerfects;
};

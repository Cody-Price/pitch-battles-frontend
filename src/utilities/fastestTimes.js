export const fastestTimes = user => {
  const { attributes } = user;

  let fastestTimesArray = [
    {
      name: "level one",
      klass: "level_one",
      time: attributes.level_one_fastest_time / 1000 || "none"
    },
    {
      name: "level two",
      klass: "level_two",
      time: attributes.level_two_fastest_time / 1000 || "none"
    },
    {
      name: "level three",
      klass: "level_three",
      time: attributes.level_three_fastest_time / 1000 || "none"
    },
    {
      name: "level four",
      klass: "level_four",
      time: attributes.level_four_fastest_time / 1000 || "none"
    }
  ];

  console.log(user.attributes.games.data);

  const gamesToCheck = user.attributes.games.data.filter(game => {
    return game.attributes.total_duration !== null;
  });

  console.log(gamesToCheck);

  gamesToCheck.sort((a, b) => {
    return a.attributes.total_duration - b.attributes.total_duration;
  });

  const fastestGame = gamesToCheck[0];

  console.log(fastestGame);

  if (fastestGame) {
    if (fastestGame.attributes.total_duration / 1000 === 0) {
      fastestTimesArray.push({
        name: "total time",
        klass: "total_time",
        time: "none"
      });
    } else {
      fastestTimesArray.push({
        name: "total time",
        klass: "total_time",
        time: fastestGame.attributes.total_duration / 1000
      });
    }
  } else {
    fastestTimesArray.push({
      name: "total time",
      klass: "total_time",
      time: "none"
    });
  }

  return fastestTimesArray;
};

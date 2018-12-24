const mockUser = {
  first_name: "Chet",
  last_name: "Manly",
  avatar: 9,
  role: 0,
  email: "cmanly@gmail.com",
  games_played: 95,
  class: "6th-grade band",
  fastest_times: [
    { level_one: 11.01 },
    { level_two: 15.24 },
    { level_three: 24.64 },
    { level_four: 30.17 },
    { all: 83.16 }
  ],
  badges: [
    { level_one: true },
    { level_one_perfect: true },
    { level_two: true },
    { level_two_perfect: true },
    { level_three: true },
    { level_three_perfect: false },
    { level_four: true },
    { level_four_perfect: false },
    { all_perfect: false },
    { five_games: true },
    { ten_games: true },
    { twenty_games: true },
    { fifty_games: true },
    { one_hundred_games: true },
    { two_hundred_games: false },
    { five_hundred_games: false },
    { one_thousand_games: false }
  ]
};

export default mockUser;

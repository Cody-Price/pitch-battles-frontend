const mockUser = {
  id: "1",
  type: "user",
  attributes: {
    email: "simpsonkevinjohn@gmail.com",
    first_name: "Chet",
    last_name: "Manly",
    avatar: 7,
    level_one_fastest_time: 11233,
    level_two_fastest_time: 16612,
    level_three_fastest_time: 22819,
    level_four_fastest_time: 31625,
    total_games_played: 8,
    games: {
      data: [
        {
          id: "1",
          type: "game",
          attributes: {
            total_duration: 1000,
            level_one_duration: 9002,
            level_two_duration: 1000,
            level_three_duration: 1000,
            level_four_duration: 1000,
            level_one_perfect: true,
            level_two_perfect: false,
            level_three_perfect: false,
            level_four_perfect: false,
            all_perfect: false
          }
        }
      ]
    },
    badges: {
      data: [
        {
          id: "1",
          type: "badge",
          attributes: {
            name: "play 5 games",
            description: "Play five games."
          }
        }
      ]
    },
    class: {
      data: {
        attributes: {
          name: "5th Grade Band"
        }
      }
    }
  }
};

export default mockUser;

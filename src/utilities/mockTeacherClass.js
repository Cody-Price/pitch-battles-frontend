export const mockTeacherClass = {
  data: {
    id: "5",
    type: "teacher_dashboard",
    attributes: {
      name: "6th Grade Orchestra",
      class_key: "K5s5qCQfHTYYldIhDcmGQg",
      teacher: {
        data: {
          id: "6",
          type: "bare_user",
          attributes: {
            email: "relasine@gmail.com",
            first_name: "Kevin",
            last_name: "Simpson",
            avatar: 1,
            role: "teacher",
            level_one_fastest_time: 0,
            level_two_fastest_time: 0,
            level_three_fastest_time: 0,
            level_four_fastest_time: 0,
            total_games_played: 0
          }
        }
      },
      students: {
        data: [
          {
            id: "3",
            type: "user",
            attributes: {
              email: "dmeskis@gmail.com",
              first_name: "Dylan",
              last_name: "Meskis",
              avatar: 11,
              role: "student",
              level_one_fastest_time: 13402,
              level_two_fastest_time: 24216,
              level_three_fastest_time: 1234134,
              level_four_fastest_time: 0,
              total_games_played: 8,
              games: {
                data: [
                  {
                    id: "11",
                    type: "game",
                    attributes: {
                      total_duration: 33333,
                      level_one_duration: 11111,
                      level_two_duration: 22222,
                      level_three_duration: null,
                      level_four_duration: null,
                      level_one_perfect: true,
                      level_two_perfect: true,
                      level_three_perfect: true,
                      level_four_perfect: true,
                      all_perfect: true
                    }
                  },
                  {
                    id: "12",
                    type: "game",
                    attributes: {
                      total_duration: 33333,
                      level_one_duration: 11111,
                      level_two_duration: 22222,
                      level_three_duration: null,
                      level_four_duration: null,
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
                  },
                  {
                    id: "2",
                    type: "badge",
                    attributes: {
                      name: "level one: completed",
                      description: "Complete level one."
                    }
                  }
                ]
              },
              class: {
                data: {
                  id: "5",
                  type: "klass",
                  attributes: {
                    name: "6th Grade Orchestra",
                    class_key: "K5s5qCQfHTYYldIhDcmGQg"
                  }
                }
              }
            }
          }
        ]
      },
      level_one_fastest_time: {
        score: 9401,
        user: {
          data: [
            {
              id: "1",
              type: "bare_user",
              attributes: {
                email: "simpsonkevinjohn@gmail.com",
                first_name: "Chet",
                last_name: "Manly",
                avatar: 11,
                role: "student",
                level_one_fastest_time: 9401,
                level_two_fastest_time: 15412,
                level_three_fastest_time: 21217,
                level_four_fastest_time: 27623,
                total_games_played: 24
              }
            }
          ]
        }
      },
      level_two_fastest_time: {
        score: 15412,
        user: {
          data: [
            {
              id: "1",
              type: "bare_user",
              attributes: {
                email: "simpsonkevinjohn@gmail.com",
                first_name: "Chet",
                last_name: "Manly",
                avatar: 11,
                role: "student",
                level_one_fastest_time: 9401,
                level_two_fastest_time: 15412,
                level_three_fastest_time: 21217,
                level_four_fastest_time: 27623,
                total_games_played: 24
              }
            }
          ]
        }
      },
      level_three_fastest_time: {
        score: 21217,
        user: {
          data: [
            {
              id: "1",
              type: "bare_user",
              attributes: {
                email: "simpsonkevinjohn@gmail.com",
                first_name: "Chet",
                last_name: "Manly",
                avatar: 11,
                role: "student",
                level_one_fastest_time: 9401,
                level_two_fastest_time: 15412,
                level_three_fastest_time: 21217,
                level_four_fastest_time: 27623,
                total_games_played: 24
              }
            }
          ]
        }
      },
      level_four_fastest_time: {
        score: 27623,
        user: {
          data: [
            {
              id: "1",
              type: "bare_user",
              attributes: {
                email: "simpsonkevinjohn@gmail.com",
                first_name: "Chet",
                last_name: "Manly",
                avatar: 11,
                role: "student",
                level_one_fastest_time: 9401,
                level_two_fastest_time: 15412,
                level_three_fastest_time: 21217,
                level_four_fastest_time: 27623,
                total_games_played: 24
              }
            }
          ]
        }
      },
      overall_fastest_time: {
        score: 33333,
        user: {
          data: [
            {
              id: "3",
              type: "bare_user",
              attributes: {
                email: "dmeskis@gmail.com",
                first_name: "Dylan",
                last_name: "Meskis",
                avatar: 11,
                role: "student",
                level_one_fastest_time: 13402,
                level_two_fastest_time: 24216,
                level_three_fastest_time: 1234134,
                level_four_fastest_time: 0,
                total_games_played: 8
              }
            }
          ]
        }
      },
      most_games: {
        games_played: 24,
        user: {
          data: [
            {
              id: "1",
              type: "bare_user",
              attributes: {
                email: "simpsonkevinjohn@gmail.com",
                first_name: "Chet",
                last_name: "Manly",
                avatar: 11,
                role: "student",
                level_one_fastest_time: 9401,
                level_two_fastest_time: 15412,
                level_three_fastest_time: 21217,
                level_four_fastest_time: 27623,
                total_games_played: 24
              }
            }
          ]
        }
      },
      most_badges: {
        badges: 12,
        user: {
          data: [
            {
              id: "1",
              type: "bare_user",
              attributes: {
                email: "simpsonkevinjohn@gmail.com",
                first_name: "Chet",
                last_name: "Manly",
                avatar: 11,
                role: "student",
                level_one_fastest_time: 9401,
                level_two_fastest_time: 15412,
                level_three_fastest_time: 21217,
                level_four_fastest_time: 27623,
                total_games_played: 24
              }
            }
          ]
        }
      }
    }
  }
};

export const teacherBadgeHelper = badges => {
  const perfectBadges = badges.filter(badge => {
    return (
      badge.attributes.name === "level one: perfect" ||
      badge.attributes.name === "level two: perfect" ||
      badge.attributes.name === "level three: perfect" ||
      badge.attributes.name === "level four: perfect"
    );
  });

  let returningBadges = [
    {
      name: "level one: perfect",
      display: "level one",
      earned: "false"
    },
    {
      name: "level two: perfect",
      display: "level two",
      earned: "false"
    },
    {
      name: "level three: perfect",
      display: "level three",
      earned: "false"
    },
    {
      name: "level four: perfect",
      display: "level four",
      earned: "false"
    }
  ];

  returningBadges.forEach(badge => {
    perfectBadges.forEach(pBadge => {
      if (badge.name === pBadge.attributes.name) {
        badge.earned = true;
      }
    });
  });

  return returningBadges;
};

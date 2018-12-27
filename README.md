# Pitch Battles

#### Introduction

Pitch Battles is a desktop web application built in [React](https://github.com/facebook/create-react-app) that is designed as a training tool for musicians to practice and learn reading pitches on the staff. The Pitch Battles experience is entirely gamified using 90s-era 16-bit art assets, account tracking with personal performance evaluation and achievements, global leaderboards, and class-based comparison and tracking tools for music teachers to see how their students are doing. This repo is for the front end of the Pitch Battles application.

It is currently in-development with the most recent alpha build hosted on Heroku.

#### Developers

- Kevin Simpson - lead design and game logic
- Haley Jacobs - front-end logic, test, and API consumption
- [Dylan Meskis - back-end database and API servicing](https://github.com/dmeskis/pitch_battles_be)

#### Project origin

Kevin Simpson was a music teacher for a substantial portion of his adult life before switching careers to software development, and would often encounter students who struggled with reading pitches on the page. There have been online tools to help with this, but many had dated interfaces, lacked any kind of flair, and just weren't any fun to work with. Enter [Pitch Battles](https://relasine.github.io/pitch-battles-poc/), which began as a simple proof of concept built in React.

This project would later be pitched as a part of the [cross-pollination project](http://frontend.turing.io/projects/capstone.html) at the [Turing School of Software and Design](https://turing.io/) for Mod 4 students, effectively the capstone of the intensive seven-month program that Turing offers. Pitch Battles was offered up during the brain-storming process and ultimately chosen by the projects three contributors as their selection to build.

#### UI/UX

This application has two separate and unique user interfaces depending on the the user type. Music students or 'learners' use a colorful fantasy design replete with animated characters and avatars, vast backgrounds, and extrapolated fights between their chosen avatar and the beasts they encounter. This design aesthetic is consistent throughout the entire learner user experience from the login page, to onboarding, dashboards, user account settings, and the game itself.

The 'teacher' interface, however uses a decidedly more modern design utilizing "flat-ish' principles for a more appropriately professional experience.

#### Front End Tech Stack

- JavaScript ES7 - game logic, API consumption (async/await), front-end account management
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - All animation for Pitch Battles was done exclusively in CSS3 using keyframes with animation states managed via React state.
- [React](https://github.com/facebook/create-react-app) - user interface
- [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) - used extensively in the editing of learner-facing art assets
- [Time Fantasy by Jason Perry](http://www.timefantasy.net/) - 16-bit art assets collection
- [Jest](https://jestjs.io/)/[Enzyme](https://airbnb.io/enzyme/) - unit testing
- [TravisCI](http://travis-ci.org) - continuous integration
- [Heroku](www.heroku.com) - hosting platfrom

<div align='center'>
  <img width="350" alt="pitch battles logo" src="https://user-images.githubusercontent.com/29719272/50570169-b9073680-0d3b-11e9-8ae0-0274365f65a6.png">
</div>

#### Introduction

Pitch Battles is a desktop web application built in [React](https://github.com/facebook/create-react-app) that is designed as a training tool for musicians to practice and learn reading pitches on the staff. The Pitch Battles experience is entirely gamified using 90s-era 16-bit art assets, account tracking with personal performance evaluation and achievements, global leaderboards, and class-based comparison and tracking tools for music teachers to see how their students are doing. This repo is for the front end of the Pitch Battles application.

It is currently in-development with the most recent alpha build hosted on Heroku.

#### Developers

<div align='center'>
  <img src='https://user-images.githubusercontent.com/29719272/50570158-0cc55000-0d3b-11e9-91e3-bc33ab61d933.png'  alt='pitch-battles-team' />
</div>

- [Kevin Simpson](https://github.com/relasine) - lead design, lead development, game logic, test, art asset development, API consumption
- [Haley Jacobs](https://github.com/hljacobs5) - front-end logic, test, and API consumption, teacher-facing front-end
- [Dylan Meskis - back-end database and API servicing](https://github.com/dmeskis/pitch_battles_be)

#### Project origin

Kevin Simpson is a former music teacher and would often encounter students who struggled with reading pitches on the page. There have been online tools to help with this, but many had dated interfaces, lacked any kind of flair, and just weren't any fun to work with. Enter [Pitch Battles](https://relasine.github.io/pitch-battles-poc/), which began as a simple proof of concept built in React.

This project would later be pitched as a part of the [cross-pollination project](http://frontend.turing.io/projects/capstone.html) at the [Turing School of Software and Design](https://turing.io/) for Mod 4 students, effectively the capstone of the intensive seven-month program that Turing offers. Pitch Battles was offered up during the brain-storming process and ultimately chosen by the project's three contributors as their selection to build.

#### UI/UX

This application has two separate and unique user interfaces depending on the the user type. Music students or 'learners' use a colorful fantasy design replete with animated characters and avatars, vast backgrounds, and extrapolated fights between their chosen avatar and the beasts they encounter. This design aesthetic is consistent throughout the entire learner user experience from the login page, to onboarding, dashboards, user account settings, and the game itself.

<div style='align-center'>
  <img src='https://user-images.githubusercontent.com/29719272/50570223-45b2f400-0d3e-11e9-95b9-c80bd2934607.png' alt='pitch-battles screenshot' />
</div>

The 'teacher' interface, however uses a decidedly more modern design utilizing "flat-ish' principles for a more appropriately professional experience, as its primary concern was dealing with the display, analysis, and maniuplation of student performance data. For this user-type, the interface is less a game and more a tool.

#### Front End Tech Stack

- JavaScript ES7 - game logic, API consumption (async/await), front-end account management
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - All animation for Pitch Battles was done exclusively in CSS3 using keyframes with animation states managed via React state.
- [React](https://github.com/facebook/create-react-app) - user interface
- [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) - used extensively in the editing of learner-facing art assets
- [Time Fantasy by Jason Perry](http://www.timefantasy.net/) - 16-bit art assets collection
- [Jest](https://jestjs.io/)/[Enzyme](https://airbnb.io/enzyme/) - unit testing
- [TravisCI](http://travis-ci.org) - continuous integration
- [Heroku](www.heroku.com) - hosting platfrom
- [React Timeout](https://www.npmjs.com/package/react-timeout) - for managing setTimeout logic and unmounted components

#### Art Asset Development

As mentioned above, many of our art assets originate from a collection created by Jason Perry, aka ['finalbossblues'](https://patreon.com/finalbossblues), a digital artist specializing in 1990s-era pixel art reminiscent of video games like Chrono Trigger, Secret of Mana, and Final Fantasy.

<div style='align:center'>
  <img src='https://user-images.githubusercontent.com/29719272/50570205-fb7d4300-0d3c-11e9-820b-61166e5fbf04.png' alt='photoshop'/>
</div>

As gauche as it may seem to include Photoshop as a part of our tech stack, we probably spent as much time developing, editing, and creating the art assets we used for Pitch Battles using Photoshop as we spent writing code, which was, needless-to-say, rather substantial. All backgrounds were pieced together from tile sets that indivually took hours to create and test inside the game engine, and a few avatar sheets were edited to fit requirements. This was made all the more challenging by the fact that Photoshop was new technology to our front end team.

<div align='center'>
  <img width="350" alt="pitch battles logo" src="https://user-images.githubusercontent.com/29719272/50570169-b9073680-0d3b-11e9-8ae0-0274365f65a6.png">
</div>

#### Introduction

Pitch Battles is a desktop web application built in [React](https://github.com/facebook/create-react-app) that is designed as a training tool for musicians to practice and learn reading pitches on the staff. The Pitch Battles experience is entirely gamified using 90s-era 16-bit art assets, account tracking with personal performance evaluation and achievements, global leaderboards, and class-based comparison and tracking tools for music teachers to see how their students are doing. This repo is for the front end of the Pitch Battles application.

It is currently in-development with the most recent alpha build hosted on Heroku.

#### Developers

<div align='center'>
  <img src='https://user-images.githubusercontent.com/29719272/50695756-d6b5f380-0ffa-11e9-952f-efe70b2f8001.png'  alt='pitch-battles-team' />
</div>

- [Kevin Simpson](https://github.com/relasine) - lead design, lead front-end development, game logic, test, art asset development, API consumption
- [Haley Jacobs](https://github.com/hljacobs5) - front-end logic, test, and API consumption, teacher-facing front-end, art asset development
- [Dylan Meskis - back-end database, API servicing, game data analysis, schema design, firefighter](https://github.com/dmeskis/pitch_battles_be)

#### Project origin

Kevin Simpson is a former music teacher and would often encounter students who struggled with reading pitches on the page. There have been online tools to help with this, but many had dated interfaces, lacked any kind of flair, and just weren't any fun to work with. Enter [Pitch Battles](https://relasine.github.io/pitch-battles-poc/), which began as a simple proof of concept built in React.

This project would later be pitched as a part of the [cross-pollination project](http://frontend.turing.io/projects/capstone.html) at the [Turing School of Software and Design](https://turing.io/) for Mod 4 students, effectively the capstone of the intensive seven-month program that Turing offers. Pitch Battles was offered up during the brain-storming process and ultimately chosen by the project's three contributors as their selection to build.

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

#### UI/UX

This application has two separate and unique user interfaces depending on the the user type. Music students or 'learners' use a colorful fantasy design replete with animated characters and avatars, vast backgrounds, and extrapolated fights between their chosen avatar and the beasts they encounter. This design aesthetic is consistent throughout the entire learner user experience from the login page, to onboarding, dashboards, user account settings, and the game itself.

<div style='align-center'>
  <img src='https://user-images.githubusercontent.com/29719272/50570223-45b2f400-0d3e-11e9-95b9-c80bd2934607.png' alt='pitch-battles screenshot' />
</div>

The 'teacher' interface, however uses a slightly more modern design, incorporating some of the student-facing themes and assets with a simple clean design.

<div style='align-center'>
<img src=https://user-images.githubusercontent.com/29719272/50670097-6b323e80-0f86-11e9-9b4f-cf10d7b0fb44.png alt='pitch-battles teacher ui'/>
</div>

#### Art Asset Development

As mentioned above, many of our art assets originate from a collection created by Jason Perry, aka ['finalbossblues'](https://patreon.com/finalbossblues), a digital artist specializing in 1990s-era pixel art reminiscent of video games like Chrono Trigger, Secret of Mana, and Final Fantasy.

<div align='center'>
  <img src='https://user-images.githubusercontent.com/29719272/50570205-fb7d4300-0d3c-11e9-820b-61166e5fbf04.png' alt='photoshop'/>
</div>

As gauche as it may seem to include Photoshop as a part of our tech stack, we probably spent as much time developing, editing, and creating the art assets we used for Pitch Battles using Photoshop as we spent writing code, which was, needless-to-say, rather substantial. All backgrounds were pieced together from tile sets that indivually took hours to create and test inside the game engine, and a few avatar sheets were edited to fit requirements. This was made all the more challenging by the fact that Photoshop was new technology to our front end team.

#### Game Play

Pitch Battles, at its core, is a flash card application. Players choose the instrument that they play and a curated selection of pitches is generated for them to name specific to the instrument that they play. Bass and alto clef instruments are naturally presented with a staff using the appropriate clef. The first level consists of the first five pitches that a musician will typically learn on their instrument per many of the industry standard method books ([Essential Elements](https://www.essentialelementsinteractive.com/), [Standard of Excellence](https://www.brucepearsonmusic.com/method/enhanced/)).

<div align='center'>
  <img src='https://user-images.githubusercontent.com/29719272/50574583-4d0ee780-0da8-11e9-9d75-e46787f7231a.png' alt='pitch battles game screenshot' style="width:500px;" />
</div>

Name the pitch correctly (either by clicking on the pitch name or entering it on the keyboard), and the avatar will strike the beast. It loses a heart, and the player is one step closer to victory. Reduce the beast to zero hearts and you have beaten the level and may continue to the next. The game consists of four levels, each with increasing levels of difficulty through more added pitches, which are again specific to typical arc of learned pitches on an instrument.

#### Player Account Tracking

Each level is timed so that students can track how long it takes for them to beat a level. These times are all stored remotely on our back-end database, which are then accessible to users with teacher-level accounts. Times are additionally rendered to the student's account page, class page, and global leaderboards.

Players additionally earn achievements by meeting certain milestones, like playing 100 games or completing levels with a perfect score. The top ten of these achievements are displayed on the student dashboard. Details on each achievement can be seen by hovering over the cooresponding badge.

<div align='center'>
  <img width="600" alt="screen shot 2019-01-01 at 9 37 41 am" src="https://user-images.githubusercontent.com/29719272/50574608-e938ee80-0da8-11e9-869b-bcf20ac9a423.png">
</div>

#### Pitch Battles Teacher Portal

Our teacher-facing-side of the application has also been built as React Native app. [You can find the repo here.](https://github.com/relasine/pitch-battles-teacher-portal)
